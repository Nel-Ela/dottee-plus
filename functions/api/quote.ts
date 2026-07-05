interface Env {
  MAILCHANNELS_API_KEY: string;
  TO_EMAIL?: string;
  FROM_EMAIL?: string;
}

const MAX_ATTACHMENT_BYTES = 6 * 1024 * 1024; // 6MB raw; base64 adds ~33%, stays under most provider caps

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function fileToBase64(file: File) {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (!env.MAILCHANNELS_API_KEY) {
    return jsonResponse({ ok: false, error: "Email sending is not configured yet." }, 500);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: "Could not read form submission." }, 400);
  }

  const company = String(form.get("company") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const quantity = String(form.get("quantity") ?? "").trim();
  const timeline = String(form.get("timeline") ?? "").trim();
  const logo = form.get("logo");

  if (!company || !email || !quantity || !timeline) {
    return jsonResponse({ ok: false, error: "Missing required fields." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ ok: false, error: "Enter a valid email address." }, 400);
  }

  const attachments: { type: string; filename: string; content: string }[] = [];
  if (logo instanceof File && logo.size > 0) {
    if (logo.size > MAX_ATTACHMENT_BYTES) {
      return jsonResponse(
        { ok: false, error: "Logo file is too large to email (max 6MB). Please share it over WhatsApp instead." },
        400,
      );
    }
    attachments.push({
      type: logo.type || "application/octet-stream",
      filename: logo.name || "logo",
      content: await fileToBase64(logo),
    });
  }

  const toEmail = env.TO_EMAIL || "hello@dotteeplus.com";
  const fromEmail = env.FROM_EMAIL || "quotes@dotteeplus.com";

  const lines = [
    `New custom quote request from ${company}`,
    "",
    `Company: ${company}`,
    `Email: ${email}`,
    phone ? `Phone/WhatsApp: ${phone}` : null,
    `Quantity: ${quantity}`,
    `Timeline: ${timeline}`,
    `Logo attached: ${attachments.length > 0 ? "yes" : "no"}`,
  ].filter((line): line is string => line !== null);

  const payload = {
    personalizations: [{ to: [{ email: toEmail, name: "Dottee Plus" }] }],
    from: { email: fromEmail, name: "Dottee Plus Website" },
    reply_to: { email, name: company },
    subject: `Quote request: ${company} (${quantity})`,
    content: [{ type: "text/plain", value: lines.join("\n") }],
    ...(attachments.length > 0 ? { attachments } : {}),
  };

  const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": env.MAILCHANNELS_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  if (!mailResponse.ok) {
    const detail = await mailResponse.text().catch(() => "");
    return jsonResponse({ ok: false, error: "Could not send the quote request email.", detail }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}
