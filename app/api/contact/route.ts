// -----server side for contact form name/email/phoneNumber/message
// -------node mailer

// import { NextResponse } from "next/server";
// import { mailOptions, transporter } from "../../config/nodemailer"; // Adjust path if necessary

// export async function POST(req: Request) {
//   console.log("Contact form request received:", req.method);
//   try {
//     const body = await req.json();
//     const { name, email, message, number } = body;

//     // Validate required fields
//     if (!name || !email || !message || !number) {
//       return NextResponse.json({ message: "Bad Request" }, { status: 400 });
//     }

//     // Construct email content
//     const emailContent = `
//       <h2>New Contact Form Submission</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong> ${message}</p>
//       <p><strong>phoneNumber:</strong> ${number}</p>
//     `;

//     await transporter.sendMail({
//       ...mailOptions,
//       replyTo: email,
//       subject: `Contact Request from ${name}`,
//       html: emailContent,
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

// --------------sync with microsoft teams --------------

import { NextResponse } from "next/server";
import axios from "axios"; // Import Axios for HTTP requests

// Microsoft Teams Incoming Webhook URL
const teamsWebhookUrl =
  "https://accreteconcierge.webhook.office.com/webhookb2/dc115fe0-c3ef-4104-84af-504aea33517a@92392de1-06f9-4790-a12f-0dd7b23e987f/IncomingWebhook/9804b100250848ddb6e95d3e7ddf5ca7/e32b4f46-f6f6-4a19-85c8-f6fa6e0e5b97/V235d0efvE833Pe5RlqB6Te97gXmSqRdXgqxB6kI9-sK81";

export async function POST(req: Request) {
  console.log("Contact form request received:", req.method);

  try {
    const body = await req.json();
    const { name, email, message, number, state } = body;

    // Validate required fields
    if (!name || !email || !message || !number || !state) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    // Construct the Teams message content
    const teamsMessage = {
      "@type": "MessageCard",
      "@context": "http://schema.org/extensions",
      summary: "New Contact Form Submission",
      themeColor: "0078D7", // Blue color for the notification card
      title: "New Contact Request",
      sections: [
        {
          activityTitle: `Contact Request from ${name}`,
          activitySubtitle: `Email: ${email} | Phone: ${number}`,
          facts: [{ name: "Message", value: message }],
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
