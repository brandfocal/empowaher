import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function formatUrl(rawUrl: string): string {
  let url = (rawUrl || "").trim();
  if (!url) return "";

  // Remove duplicate or repeated protocols
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
    const formId = process.env.GRAVITY_FORMS_CONTACT_FORM_ID || "2";
    const consumerKey = (process.env.GRAVITY_FORMS_CONSUMER_KEY || "").trim();
    const consumerSecret = (process.env.GRAVITY_FORMS_CONSUMER_SECRET || "").trim();
    const customEndpoint = formatUrl(
      process.env.GRAVITY_FORMS_CONTACT_SUBMISSION_ENDPOINT ||
        process.env.GRAVITY_FORMS_SUBMISSION_ENDPOINT ||
        ""
    );
    const webhookUrl = formatUrl(
      process.env.GRAVITY_FORMS_CONTACT_WEBHOOK_URL ||
        process.env.GRAVITY_FORMS_WEBHOOK_URL ||
        ""
    );

    // Build key-value maps from incoming FormData
    const inputValues: Record<string, string> = {};
    const entryValues: Record<string, any> = { form_id: parseInt(formId, 10) || 2 };

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        inputValues[key] = value;
        const numericMatch = key.match(/^input_(\d+)$/);
        if (numericMatch) {
          entryValues[numericMatch[1]] = value;
        }
      }
    });

    // Map named parameters as fallback if inputs weren't prefixed with input_
    if (!inputValues["input_1"] && formData.get("name")) {
      const val = String(formData.get("name"));
      inputValues["input_1"] = val;
      entryValues["1"] = val;
    }
    if (!inputValues["input_3"] && formData.get("email")) {
      const val = String(formData.get("email"));
      inputValues["input_3"] = val;
      entryValues["3"] = val;
    }
    if (!inputValues["input_4"] && formData.get("organisation")) {
      const val = String(formData.get("organisation"));
      inputValues["input_4"] = val;
      entryValues["4"] = val;
    }
    if (!inputValues["input_5"] && formData.get("phone")) {
      const val = String(formData.get("phone"));
      inputValues["input_5"] = val;
      entryValues["5"] = val;
    }
    if (!inputValues["input_6"] && formData.get("inquiry")) {
      const val = String(formData.get("inquiry"));
      inputValues["input_6"] = val;
      entryValues["6"] = val;
    }
    if (!inputValues["input_8"] && formData.get("message")) {
      const val = String(formData.get("message"));
      inputValues["input_8"] = val;
      entryValues["8"] = val;
    }

    // Validate required fields
    if (!inputValues["input_1"] || !inputValues["input_3"] || !inputValues["input_8"]) {
      return NextResponse.json(
        {
          success: false,
          error: "Full Name, Email Address, and Message are required fields.",
        },
        { status: 400 }
      );
    }

    // Check if WordPress or Webhook destination is configured
    const isPlaceholder =
      !wpUrl ||
      wpUrl.includes("your-wordpress-domain") ||
      wpUrl.includes("example.com");

    if (isPlaceholder && !customEndpoint && !webhookUrl) {
      // In preview or development environment where WordPress credentials aren't yet populated in .env.local,
      // record the entry safely and return success with preview indicator
      console.log("[Gravity Forms Contact Form 2 Preview Submission]:", {
        form_id: 2,
        input_1_fullName: inputValues["input_1"],
        input_3_email: inputValues["input_3"],
        input_4_organisation: inputValues["input_4"],
        input_5_phone: inputValues["input_5"],
        input_6_natureOfInquiry: inputValues["input_6"],
        input_8_message: inputValues["input_8"],
      });

      return NextResponse.json({
        success: true,
        previewMode: true,
        message:
          "Message accepted in preview mode. Set WORDPRESS_API_URL and Gravity Forms API keys in Vercel to transmit directly to WordPress.",
        entry: entryValues,
      });
    }

    // Determine target URL for live Gravity Forms transmission
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

    const jsonHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "EmpowaHer-NextJS-Client/1.0",
    };

    if (consumerKey && consumerSecret) {
      const authString = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
      jsonHeaders["Authorization"] = `Basic ${authString}`;
    }

    const submissionPayload = {
      input_values: inputValues,
      ...inputValues,
    };

    let response = await fetch(urlObj.toString(), {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(submissionPayload),
    });

    // Fallback: If /submissions endpoint fails, try the /entries endpoint
    if (!response.ok && wpUrl && !customEndpoint && !webhookUrl) {
      const entriesUrl = new URL(`${wpUrl}/wp-json/gf/v2/entries`);
      if (consumerKey && consumerSecret) {
        entriesUrl.searchParams.set("consumer_key", consumerKey);
        entriesUrl.searchParams.set("consumer_secret", consumerSecret);
      }

      const authHeaders: Record<string, string> = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      if (consumerKey && consumerSecret) {
        const authString = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
        authHeaders["Authorization"] = `Basic ${authString}`;
      }

      const entriesResponse = await fetch(entriesUrl.toString(), {
        method: "POST",
        headers: authHeaders,
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

      console.error("Gravity Forms Contact API Error:", response.status, parsedError);

      if (response.status === 404 && (errorCode === "rest_no_route" || parsedError.includes("No route was found"))) {
        return NextResponse.json(
          {
            success: false,
            status: 404,
            error:
              "The Gravity Forms REST API is not enabled on the WordPress server. In WordPress Admin, go to Forms > Settings > REST API, check 'Enable REST API', and save settings.",
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          status: response.status,
          error: `Gravity Forms returned status ${response.status}: ${parsedError}`,
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
    console.error("Contact submission handler error:", error);
    const causeCode = error?.cause?.code ? ` (${error.cause.code})` : "";
    const detail = error?.cause?.message || error?.message || "Connection failed";

    return NextResponse.json(
      {
        success: false,
        error: `Could not connect to WordPress server at ${attemptedUrl || "configured URL"}: ${detail}${causeCode}. Please verify the WORDPRESS_API_URL and Gravity Forms settings.`,
      },
      { status: 500 }
    );
  }
}
