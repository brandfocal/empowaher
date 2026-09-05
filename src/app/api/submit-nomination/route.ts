import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function formatUrl(rawUrl: string): string {
  let url = (rawUrl || "").trim();
  if (!url) return "";

  // Remove any duplicate or repeated protocols (e.g. https://https:// or http://https://)
  url = url.replace(/^(https?:\/\/)+/gi, "");
  url = url.replace(/^(https?:\/)+/gi, "");
  url = url.replace(/^(https?:)+/gi, "");
  url = url.replace(/\/+$/, "");

  if (!url) return "";
  return `https://${url}`;
}

export async function POST(req: NextRequest) {
  let attemptedUrl = "";
  try {
    const formData = await req.formData();
    const rawWpUrl = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL || "";
    const wpUrl = formatUrl(rawWpUrl);
    const formId = process.env.GRAVITY_FORMS_FORM_ID || process.env.NEXT_PUBLIC_GRAVITY_FORMS_FORM_ID || "1";
    const consumerKey = (process.env.GRAVITY_FORMS_CONSUMER_KEY || "").trim();
    const consumerSecret = (process.env.GRAVITY_FORMS_CONSUMER_SECRET || "").trim();
    const customEndpoint = formatUrl(process.env.GRAVITY_FORMS_SUBMISSION_ENDPOINT || "");
    const webhookUrl = formatUrl(process.env.GRAVITY_FORMS_WEBHOOK_URL || "");

    // Build key-value maps
    const inputValues: Record<string, string> = {};
    const entryValues: Record<string, any> = { form_id: parseInt(formId, 10) || 1 };

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        inputValues[key] = value;
        const numericMatch = key.match(/^input_(\d+)$/);
        if (numericMatch) {
          entryValues[numericMatch[1]] = value;
        }
      }
    });

    // Handle CV / Profile document upload (Field ID: 19)
    const cvFile = formData.get("input_19");
    if (cvFile && typeof cvFile === "object" && "arrayBuffer" in cvFile) {
      const file = cvFile as File;
      if (file.size > 0) {
        const rawFileName = file.name || "nominee-cv.pdf";
        const sanitizedFileName = rawFileName.replace(/[^a-zA-Z0-9._-]/g, "_");
        let uploadedUrl = "";

        if (wpUrl && consumerKey && consumerSecret) {
          try {
            const authString = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
            const fileBuffer = Buffer.from(await file.arrayBuffer());

            const mediaRes = await fetch(`${wpUrl}/wp-json/wp/v2/media`, {
              method: "POST",
              headers: {
                "Content-Disposition": `attachment; filename="${sanitizedFileName}"`,
                "Content-Type": file.type || "application/pdf",
                Authorization: `Basic ${authString}`,
              },
              body: fileBuffer,
            });

            if (mediaRes.ok) {
              const mediaData = await mediaRes.json();
              uploadedUrl = mediaData.source_url || mediaData.guid?.rendered || "";
            } else {
              console.warn("WordPress media upload returned status:", mediaRes.status);
            }
          } catch (mediaErr) {
            console.warn("Could not upload to WordPress media library:", mediaErr);
          }
        }

        const finalFileValue = uploadedUrl || sanitizedFileName;
        inputValues["input_19"] = finalFileValue;
        entryValues["19"] = finalFileValue;
      }
    }

    // Validate that a real WordPress or Webhook destination is configured
    const isPlaceholder =
      !wpUrl ||
      wpUrl.includes("your-wordpress-domain") ||
      wpUrl.includes("example.com");

    if (isPlaceholder && !customEndpoint && !webhookUrl) {
      return NextResponse.json(
        {
          success: false,
          error:
            "WordPress URL is not configured yet. Please add WORDPRESS_API_URL (e.g. https://empowaworx.co.za) and Gravity Forms API keys (GRAVITY_FORMS_CONSUMER_KEY & GRAVITY_FORMS_CONSUMER_SECRET) in Vercel Environment Variables or .env.local.",
        },
        { status: 400 }
      );
    }

    // Determine target URL
    let targetUrl = customEndpoint;
    if (!targetUrl && webhookUrl) {
      targetUrl = webhookUrl;
    } else if (!targetUrl && wpUrl) {
      targetUrl = `${wpUrl}/wp-json/gf/v2/forms/${formId}/submissions`;
    }
    attemptedUrl = targetUrl;

    const urlObj = new URL(targetUrl);
    if (consumerKey && consumerSecret && !urlObj.searchParams.has("consumer_key")) {
      urlObj.searchParams.set("consumer_key", consumerKey);
      urlObj.searchParams.set("consumer_secret", consumerSecret);
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "EmpowaHer-NextJS-Client/1.0",
    };

    if (consumerKey && consumerSecret) {
      const authString = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
      headers["Authorization"] = `Basic ${authString}`;
    }

    const submissionPayload = {
      input_values: inputValues,
      ...inputValues,
    };

    let response = await fetch(urlObj.toString(), {
      method: "POST",
      headers,
      body: JSON.stringify(submissionPayload),
    });

    // Fallback: If /submissions endpoint is 404 or fails, try the /entries endpoint
    if (!response.ok && wpUrl && !customEndpoint && !webhookUrl) {
      const entriesUrl = new URL(`${wpUrl}/wp-json/gf/v2/entries`);
      if (consumerKey && consumerSecret) {
        entriesUrl.searchParams.set("consumer_key", consumerKey);
        entriesUrl.searchParams.set("consumer_secret", consumerSecret);
      }

      const entriesResponse = await fetch(entriesUrl.toString(), {
        method: "POST",
        headers,
        body: JSON.stringify(entryValues),
      });

      if (entriesResponse.ok) {
        const data = await entriesResponse.json();
        return NextResponse.json({
          success: true,
          method: "entries",
          data,
        });
      }
    }

    if (!response.ok) {
      const errorText = await response.text();
      let parsedError = errorText;
      let errorCode = "";
      try {
        const jsonError = JSON.parse(errorText);
        parsedError = jsonError?.message || jsonError?.error || errorText;
        errorCode = jsonError?.code || "";
      } catch {
        // use raw errorText
      }

      console.error("Gravity Forms API Error:", response.status, parsedError);

      if (response.status === 404 && (errorCode === "rest_no_route" || parsedError.includes("No route was found"))) {
        return NextResponse.json(
          {
            success: false,
            status: 404,
            error:
              "The Gravity Forms REST API is not enabled on cms.empowaher.co.za. In WordPress Admin, go to Forms > Settings > REST API, check 'Enable REST API', and click 'Save Settings'. Also ensure API keys are generated under that section.",
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          status: response.status,
          error: `Gravity Forms (${urlObj.origin}) returned status ${response.status}: ${parsedError}`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Submission handler error:", error);
    const causeCode = error?.cause?.code ? ` (${error.cause.code})` : "";
    const detail = error?.cause?.message || error?.message || "Connection failed";

    return NextResponse.json(
      {
        success: false,
        error: `Could not connect to WordPress server at ${attemptedUrl || "configured URL"}: ${detail}${causeCode}. Please verify the WORDPRESS_API_URL and Gravity Forms REST API settings.`,
      },
      { status: 500 }
    );
  }
}
