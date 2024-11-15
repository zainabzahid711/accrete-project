// serverside

// app/api/route/route.ts
// --------------------SYNC WITH NODE MAILER GMAIL-----------------------------

// import { NextResponse } from "next/server";
// import { mailOptions, transporter } from "../../config/nodemailer";

// export async function POST(req: Request) {
//   console.log("Request received:", req.method);
//   try {
//     const body = await req.json();
//     const {
//       jobTitle,
//       purpose,
//       state,
//       firstName,
//       lastName,
//       practiceName,
//       email,
//       selectedServices,
//       phoneNumber,
//     } = body;

//     if (
//       !jobTitle ||
//       !purpose ||
//       !state ||
//       !firstName ||
//       !lastName ||
//       !practiceName ||
//       !email ||
//       !selectedServices ||
//       !phoneNumber
//     ) {
//       return NextResponse.json({ message: "Bad Request" }, { status: 400 });
//     }

//     // Construct a summary of form details for email
//     const selectedServicesList = selectedServices.join(", ");
//     const emailContent = `
//        <h2>New Demo Request Submitted</h2>
//        <p><strong>Purpose:</strong> ${purpose}</p>
//        <p><strong>Job Title:</strong> ${jobTitle}</p>
//        <p><strong>First Name:</strong> ${firstName}</p>
//        <p><strong>Last Name:</strong> ${lastName}</p>
//        <p><strong>Practice or Company Name:</strong> ${practiceName}</p>
//        <p><strong>Email:</strong> ${email}</p>
//        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
//        <p><strong>State:</strong> ${state}</p>
//        <p><strong>Selected Services:</strong> ${selectedServicesList}</p>
//      `;

//     await transporter.sendMail({
//       ...mailOptions,
//       replyTo: email,
//       subject: `Request from ${firstName} ${lastName}`,
//       text: `Demo Request Details:\n
//       - Purpose: ${purpose}
//       - Job Title: ${jobTitle}
//       - First Name: ${firstName}
//       - Last Name: ${lastName}
//       - Practice or Company Name: ${practiceName}
//       - Email: ${email}
//       - Phone Number: ${phoneNumber}
//       - State: ${state}
//       - Selected Services: ${selectedServicesList}`,
//       html: emailContent, // Use the formatted HTML email content
//     });

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     console.error("Error sending mail:", error);
//     return NextResponse.json(
//       { message: "Error sending email" },
//       { status: 500 }
//     );
//   }
// }

// // // export async function GET() {
// // //   return NextResponse.json(
// // //     { message: "GET method not allowed" },
// // //     { status: 405 }
// // //   );
// // // }

// -------------------SYNC WITH MICROSOFT TEAMS----------------------------
// MS teams channel link
// https://accreteconcierge.webhook.office.com/webhookb2/dc115fe0-c3ef-4104-84af-504aea33517a@92392de1-06f9-4790-a12f-0dd7b23e987f/IncomingWebhook/9804b100250848ddb6e95d3e7ddf5ca7/e32b4f46-f6f6-4a19-85c8-f6fa6e0e5b97/V235d0efvE833Pe5RlqB6Te97gXmSqRdXgqxB6kI9-sK81

import { NextResponse } from "next/server";
import axios from "axios";

// Microsoft Teams Webhook URL
const teamsWebhookUrl =
  "https://accreteconcierge.webhook.office.com/webhookb2/dc115fe0-c3ef-4104-84af-504aea33517a@92392de1-06f9-4790-a12f-0dd7b23e987f/IncomingWebhook/9804b100250848ddb6e95d3e7ddf5ca7/e32b4f46-f6f6-4a19-85c8-f6fa6e0e5b97/V235d0efvE833Pe5RlqB6Te97gXmSqRdXgqxB6kI9-sK81";

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

    // Construct a summary of form details for Teams message
    const selectedServicesList = selectedServices.join(", ");
    const teamsMessage = {
      "@type": "MessageCard",
      "@context": "http://schema.org/extensions",
      summary: "New Demo Request Submitted",
      themeColor: "0078D7",
      title: "New Demo Request",
      sections: [
        {
          activityTitle: `New Demo Request from ${firstName} ${lastName}`,
          activitySubtitle: `Email: ${email} | Phone: ${phoneNumber}`,
          facts: [
            { name: "Purpose", value: purpose },
            { name: "Job Title", value: jobTitle },
            { name: "Practice/Company", value: practiceName },
            { name: "State", value: state },
            { name: "Selected Services", value: selectedServicesList },
          ],
          text: "See full details below.",
        },
      ],
    };

    // Send the message to Microsoft Teams
    await axios.post(teamsWebhookUrl, teamsMessage);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending to Teams:", error);
    return NextResponse.json(
      { message: "Error sending to Teams" },
      { status: 500 }
    );
  }
}
