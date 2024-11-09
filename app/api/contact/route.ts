import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../../config/nodemailer"; // Adjust path if necessary

export async function POST(req: Request) {
  console.log("Contact form request received:", req.method);
  try {
    const body = await req.json();
    const { name, email, message, number } = body;

    // Validate required fields
    if (!name || !email || !message || !number) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    // Construct email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>phoneNumber:</strong> ${number}</p>
    `;

    await transporter.sendMail({
      ...mailOptions,
      replyTo: email,
      subject: `Contact Request from ${name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
