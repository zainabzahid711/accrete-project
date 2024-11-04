//   // Define email options
//   const mailOptions = {
//     from: process.env.NEXT_PUBLIC_EMAIL_USER,
//     to: "zynabzahid877@gmail.com", // company mail
//     subject: `Request from ${firstName} ${lastName}`,
//     text: `
//       Job Title: ${jobTitle}
//       Purpose: ${purpose}
//       State: ${state}
//       Practice Name: ${practiceName}
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Email: ${email}
//       Phone Number: ${phoneNumber}
//       Selected Services: ${selectedServices.join(", ")}
//     `,
//   };

import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
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
    } = req.body;

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
      return res.status(400).json({ message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Request from ${firstName} ${lastName}`,
        text: `Job Title: ${jobTitle}, etc`,
        html: `<h1> Details </h1> <p>${purpose}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: (error as Error).message });
    }
  }

  console.log(`recieved unsupported: ${req.method}`);

  res.setHeader("allow", ["POST"]);
  return res.status(405).json({ message: "Method not allowed" });
}

// export default handler;
