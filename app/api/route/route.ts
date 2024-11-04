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

    // Construct a summary of form details for email
    const selectedServicesList = selectedServices.join(", ");
    const emailContent = `
       <h2>New Demo Request Submitted</h2>
       <p><strong>Purpose:</strong> ${purpose}</p>
       <p><strong>Job Title:</strong> ${jobTitle}</p>
       <p><strong>First Name:</strong> ${firstName}</p>
       <p><strong>Last Name:</strong> ${lastName}</p>
       <p><strong>Practice or Company Name:</strong> ${practiceName}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone Number:</strong> ${phoneNumber}</p>
       <p><strong>State:</strong> ${state}</p>
       <p><strong>Selected Services:</strong> ${selectedServicesList}</p>
     `;

    await transporter.sendMail({
      ...mailOptions,
      replyTo: email,
      subject: `Request from ${firstName} ${lastName}`,
      text: `Demo Request Details:\n
      - Purpose: ${purpose}
      - Job Title: ${jobTitle}
      - First Name: ${firstName}
      - Last Name: ${lastName}
      - Practice or Company Name: ${practiceName}
      - Email: ${email}
      - Phone Number: ${phoneNumber}
      - State: ${state}
      - Selected Services: ${selectedServicesList}`,
      html: emailContent, // Use the formatted HTML email content
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
