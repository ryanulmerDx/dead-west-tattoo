import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Dwkma7Pz_GnQBDvM8u4aRhXBNjsDrW8oy");

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Dead West Studio <noreply@deadwesttattoo.com>",
      to: "thedeadwestco@gmail.com",
      replyTo: email,
      subject: `New Contact: ${subject}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}

---
Reply directly to this email to respond to ${name}.
      `.trim(),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
