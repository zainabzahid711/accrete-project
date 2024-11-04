// serverside

// app/api/route/route.ts

import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../../config/nodemailer";

export async function POST(req: Request) {
  console.log("Request received:", req.method);
  try {
    const body = await req.json();
    const {
      jobTitle,
      purpose,
      state,
      firstName,
      lastName,
      practiceName,
      email,
      selectedServices,
      phoneNumber,
    } = body;

    if (
      !jobTitle ||
      !purpose ||
      !state ||
      !firstName ||
      !lastName ||
      !practiceName ||
      !email ||
      !selectedServices ||
      !phoneNumber
    ) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: `Request from ${firstName} ${lastName}`,
      text: `Job Title: ${jobTitle}, etc`,
      html: `<h1>Details</h1><p>${purpose}</p>`,
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

// // export async function GET() {
// //   return NextResponse.json(
// //     { message: "GET method not allowed" },
// //     { status: 405 }
// //   );
// // }
