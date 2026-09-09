import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Prevent Node.js TLS rejection issues with custom/corporate hosting SSLs
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const DEFAULT_GF_API_URL = "https://cms.empowaher.co.za/wp-json/gf/v2";

function formatGfApiUrl(rawUrl: string): string {
  let url = (rawUrl || "").trim();
  if (!url) return DEFAULT_GF_API_URL;

  // Remove duplicate or repeated protocols
  url = url.replace(/^(https?:\/\/)+/gi, "");
  url = url.replace(/^(https?:\/)+/gi, "");
  url = url.replace(/^(https?:)+/gi, "");
  url = url.replace(/\/+$/, "");

  if (!url) return DEFAULT_GF_API_URL;
  let fullUrl = `https://${url}`;

  // If the user provided the base WordPress domain, append the Gravity Forms v2 API path
  if (!fullUrl.includes("/wp-json/gf/v2")) {
    fullUrl = `${fullUrl}/wp-json/gf/v2`;
  }

  return fullUrl;
}

export async function POST(req: NextRequest) {
  let attemptedUrl = "";
  try {
    // Resolve WordPress Gravity Forms API endpoint
    // Standard variables matching team documentation (GF_API_URL, WP_API_URL, WORDPRESS_API_URL)
    const rawApiUrl = (
      process.env.GF_API_URL ||
      process.env.WP_API_URL ||
      process.env.WORDPRESS_API_URL ||
      process.env.NEXT_PUBLIC_WORDPRESS_URL ||
      DEFAULT_GF_API_URL
    ).trim();

    const gfApiUrl = formatGfApiUrl(rawApiUrl);

    // Optional Consumer Key & Secret resolution
    const consumerKey = (
      process.env.GF_CONSUMER_KEY ||
      process.env.GRAVITY_FORMS_CONSUMER_KEY ||
      process.env.WP_CONSUMER_KEY ||
      process.env.WP_GF_CONSUMER_KEY ||
      ""
    ).trim();

    const consumerSecret = (
      process.env.GF_CONSUMER_SECRET ||
      process.env.GRAVITY_FORMS_CONSUMER_SECRET ||
      process.env.WP_CONSUMER_SECRET ||
      process.env.WP_GF_CONSUMER_SECRET ||
      ""
    ).trim();

    // Contact form ID (default: 2 as specified)
    const formId = (
      process.env.GF_CONTACT_FORM_ID ||
      process.env.GRAVITY_FORMS_CONTACT_FORM_ID ||
      process.env.GF_FORM_ID ||
      "2"
    ).trim();

    // Optional direct submission endpoint or webhook overrides
    const customEndpoint = (
      process.env.GRAVITY_FORMS_CONTACT_SUBMISSION_ENDPOINT ||
      process.env.GRAVITY_FORMS_SUBMISSION_ENDPOINT ||
      ""
    ).trim();

    const webhookUrl = (
      process.env.GRAVITY_FORMS_CONTACT_WEBHOOK_URL ||
      process.env.GRAVITY_FORMS_WEBHOOK_URL ||
      ""
    ).trim();

    // Parse incoming data (supports both JSON and multipart/form-data)
    const inputValues: Record<string, string> = {};
    const entryValues: Record<string, any> = { form_id: parseInt(formId, 10) || 2 };

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const json = await req.json();
      const rawData = json.formData || json.input_values || json;
      for (const [key, value] of Object.entries(rawData)) {
        if (typeof value === "string") {
          inputValues[key] = value;
          const numericMatch = key.match(/^input_(\d+)$/);
          if (numericMatch) {
            entryValues[numericMatch[1]] = value;
          }
        }
      }
    } else {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        if (typeof value === "string") {
          inputValues[key] = value;
          const numericMatch = key.match(/^input_(\d+)$/);
          if (numericMatch) {
            entryValues[numericMatch[1]] = value;
          }
        }
      });
    }

    // Semantic fallback mapping if fields weren't prefixed with input_
    if (!inputValues["input_1"] && inputValues["name"]) {
      inputValues["input_1"] = inputValues["name"];
      entryValues["1"] = inputValues["name"];
    }
    if (!inputValues["input_3"] && inputValues["email"]) {
      inputValues["input_3"] = inputValues["email"];
      entryValues["3"] = inputValues["email"];
    }
    if (!inputValues["input_4"] && inputValues["organisation"]) {
      inputValues["input_4"] = inputValues["organisation"];
      entryValues["4"] = inputValues["organisation"];
    }
    if (!inputValues["input_5"] && inputValues["phone"]) {
      inputValues["input_5"] = inputValues["phone"];
      entryValues["5"] = inputValues["phone"];
    }
    if (!inputValues["input_6"] && inputValues["inquiry"]) {
      inputValues["input_6"] = inputValues["inquiry"];
      entryValues["6"] = inputValues["inquiry"];
    }
    if (!inputValues["input_8"] && inputValues["message"]) {
      inputValues["input_8"] = inputValues["message"];
      entryValues["8"] = inputValues["message"];
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

    // Determine target URL for live Gravity Forms submission
    let targetUrl = customEndpoint;
    if (!targetUrl && webhookUrl) {
      targetUrl = webhookUrl;
    } else if (!targetUrl && gfApiUrl) {
      if (consumerKey && consumerSecret) {
        const separator = gfApiUrl.includes("?") ? "&" : "?";
        targetUrl = `${gfApiUrl}/forms/${formId}/submissions${separator}consumer_key=${encodeURIComponent(
          consumerKey
        )}&consumer_secret=${encodeURIComponent(consumerSecret)}`;
      } else {
        targetUrl = `${gfApiUrl}/forms/${formId}/submissions`;
      }
    }
    attemptedUrl = targetUrl;

    const authHeader =
      consumerKey && consumerSecret
        ? `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")}`
        : "";

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "EmpowaHer-Vercel-Client/1.0",
    };

    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    // Payload for Gravity Forms /submissions endpoint
    const submissionPayload = {
      input_values: inputValues,
      ...inputValues,
    };

    let response = await fetch(targetUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(submissionPayload),
    });

    // Fallback: If /submissions returns 404 or fails and keys are provided, try /entries endpoint
    if (!response.ok && gfApiUrl && consumerKey && consumerSecret && !customEndpoint && !webhookUrl) {
      const entriesSeparator = gfApiUrl.includes("?") ? "&" : "?";
      const entriesUrl = `${gfApiUrl}/entries${entriesSeparator}consumer_key=${encodeURIComponent(
        consumerKey
      )}&consumer_secret=${encodeURIComponent(consumerSecret)}`;

      const entriesResponse = await fetch(entriesUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(entryValues),
      });

      if (entriesResponse.ok) {
        const data = await entriesResponse.json();
        return NextResponse.json({
          success: true,
          method: "entries",
          entry_id: data.id || data.entry_id,
          data,
        });
      }
    }

    const responseText = await response.text();
    let responseData: any = {};
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { message: responseText };
    }

    if (!response.ok || responseData.is_valid === false) {
      console.error("Gravity Forms Contact API Error:", response.status, responseData);

      let errorMsg =
        responseData.message || `Gravity Forms returned HTTP status ${response.status}`;

      if (
        responseData.validation_messages &&
        typeof responseData.validation_messages === "object"
      ) {
        const valErrors = Object.entries(responseData.validation_messages)
          .map(([id, msg]) => `Field ${id}: ${msg}`)
          .join("; ");
        errorMsg = `Validation failed: ${valErrors}`;
      } else if (
        response.status === 404 &&
        (responseData.code === "rest_no_route" ||
          String(responseData.message).includes("No route was found"))
      ) {
        errorMsg =
          "Gravity Forms REST API is not enabled on the WordPress server. In WordPress Admin, go to Forms > Settings > REST API, enable the API, and create Read/Write API keys.";
      }

      return NextResponse.json(
        {
          success: false,
          status: response.status,
          error: errorMsg,
          details: responseData,
        },
        { status: response.status >= 400 ? response.status : 400 }
      );
    }

    return NextResponse.json({
      success: true,
      entry_id: responseData.entry_id,
      confirmation_message: responseData.confirmation_message,
      data: responseData,
    });
  } catch (error: any) {
    console.error("Contact submission handler error:", error);
    const causeCode = error?.cause?.code ? ` (${error.cause.code})` : "";
    const detail = error?.cause?.message || error?.message || "Connection failed";

    return NextResponse.json(
      {
        success: false,
        error: `Could not connect to WordPress server at ${attemptedUrl || "configured URL"}: ${detail}${causeCode}. Please verify your GF_API_URL and Gravity Forms credentials.`,
      },
      { status: 500 }
    );
  }
}
