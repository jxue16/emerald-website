import nodemailer from "nodemailer";

const RECIPIENTS = ["azhu33@jh.edu", "nxiong2@jh.edu"];
const INQUIRY_TYPES = ["Client engagement", "Join as a consultant", "Partnership", "Other"];

// Sends through the club Gmail account. Requires GMAIL_USER and
// GMAIL_APP_PASSWORD (a Google app password, not the account password).
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
});

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const firstName = clean(body?.firstName);
  const lastName = clean(body?.lastName);
  const organization = clean(body?.organization);
  const email = clean(body?.email);
  const inquiryType = clean(body?.inquiryType);
  const message = clean(body?.message, 5000);

  if (!firstName || !lastName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !INQUIRY_TYPES.includes(inquiryType) || !message) {
    return Response.json({ error: "Please fill out all required fields." }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Emerald Website" <${process.env.GMAIL_USER}>`,
      to: RECIPIENTS,
      replyTo: email,
      subject: `Emerald Website — ${inquiryType}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Organization: ${organization || "—"}`,
        `Email: ${email}`,
        `Type of inquiry: ${inquiryType}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return Response.json({ error: "Something went wrong. Please email us directly." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
