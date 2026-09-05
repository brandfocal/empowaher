import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const wpUrl = (process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL || "").replace(/\/+$/, "");
    const formId = process.env.GRAVITY_FORMS_FORM_ID || process.env.NEXT_PUBLIC_GRAVITY_FORMS_FORM_ID || "1";
    const consumerKey = process.env.GRAVITY_FORMS_CONSUMER_KEY || "";
    const consumerSecret = process.env.GRAVITY_FORMS_CONSUMER_SECRET || "";
    const customEndpoint = process.env.GRAVITY_FORMS_SUBMISSION_ENDPOINT || "";
    const webhookUrl = process.env.GRAVITY_FORMS_WEBHOOK_URL || "";

    // Build key-value map from incoming FormData
    const inputValues: Record<string, string> = {};
    const entryValues: Record<string, any> = { form_id: parseInt(formId, 10) || 1 };

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        inputValues[key] = value;
        // Also map "input_X" -> "X" for /entries endpoint
        const numericMatch = key.match(/^input_(\d+)$/);
        if (numericMatch) {
          entryValues[numericMatch[1]] = value;
        }
      }
    });

    // Check if WordPress or Webhook target is defined
    if (!wpUrl && !customEndpoint && !webhookUrl) {
      return NextResponse.json(
        {
          success: false,
          error:
            "WordPress / Gravity Forms environment variables are not configured in Vercel or .env.local. Please set WORDPRESS_API_URL or GRAVITY_FORMS_SUBMISSION_ENDPOINT.",
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

    // Add query param authentication backup if keys exist
    const urlObj = new URL(targetUrl);
    if (consumerKey && consumerSecret && !urlObj.searchParams.has("consumer_key")) {
      urlObj.searchParams.set("consumer_key", consumerKey);
      urlObj.searchParams.set("consumer_secret", consumerSecret);
    }

    // Prepare Basic Auth header
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (consumerKey && consumerSecret) {
      const authString = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
      headers["Authorization"] = `Basic ${authString}`;
    }

    // Primary attempt: Submissions API endpoint payload
    const submissionPayload = {
      input_values: inputValues,
      ...inputValues,
    };

    let response = await fetch(urlObj.toString(), {
      method: "POST",
      headers,
      body: JSON.stringify(submissionPayload),
    });

    // If /submissions returns 404 or fails, try the /entries endpoint
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
      console.error("Gravity Forms API Error:", response.status, errorText);
      return NextResponse.json(
        {
          success: false,
          status: response.status,
          error: `Gravity Forms API returned status ${response.status}: ${errorText}`,
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
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal server error submitting nomination.",
      },
      { status: 500 }
    );
  }
}
