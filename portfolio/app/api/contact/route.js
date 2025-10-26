import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    // Configure your mail transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." });
  }
}
