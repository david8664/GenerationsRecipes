import sendEmail from "@/lib/email/sendEmail";
import verificationEmailContent from "@/components/email-templates/verification-email-content";

const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.WEBSITE_URL}/auth/new-verification?token=${token}`;

  const html = await verificationEmailContent({
    verificationLink: confirmLink,
    email,
  });
  await sendEmail({
    email: [email],
    subject: `השלמת ההרשמה שלך: אימות כתובת הדוא"ל שלך`,
    html: html,
  });
};
export default sendVerificationEmail;
