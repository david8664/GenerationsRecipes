import nodemailer from "nodemailer";

interface EmailProps {
  email: string[];
  subject: string;
  html?: string;
  text?: string;
}

// Load and validate environment variables
const EMAIL_COMPANY = process.env.EMAIL_COMPANY;
const APP_PASSWORD = process.env.APP_PASSWORD;

if (!EMAIL_COMPANY || !APP_PASSWORD) {
  throw new Error("Email service credentials are not set.");
}

export const sendEmail = async ({
  email,
  subject,
  html,
  text,
}: EmailProps): Promise<string> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_COMPANY,
      pass: APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: EMAIL_COMPANY,
    to: email.join(","),
    subject: subject,
    html: html, // HTML content
    text: text, // Plain text content
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(new Error("Failed to send email."));
      } else {
        resolve(`Email sent to - ${info.response}`);
      }
    });
  });
};
