// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request: Request) {
//   try {
//     console.log("early in the try");
//     const body = await request.json();
//     const { name, email, message, phone } = body;
//     console.log({ name, email, message, phone });

//     // Validate the input
//     if (!name || !email || !message || !phone) {
//       return NextResponse.json(
//         { error: "Name, email, and message are required" },
//         { status: 400 }
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       service: "Gmail", // or use another email service (SMTP)
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email to company
//     const companyMailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.COMPANY_EMAIL, // Company email address
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     // Email to user
//     const userMailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email, // User's email address
//       subject: "We Received Your Message",
//       text: `Dear ${name},\n\nThank you for contacting us! We have received your message and will get back to you as soon as possible.\n\nBest regards,\nADA YFFD MIDDLE BELT COMPANY LTD`,
//     };

//     return NextResponse.json(
//       { message: "Emails sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log("i entered the error side");
//     console.error("Error processing contact form:", error);
//     return NextResponse.json(
//       { error: "Failed to process contact form" },
//       { status: 500 }
//     );
//   }
// }
