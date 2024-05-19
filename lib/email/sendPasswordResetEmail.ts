import PasswordResetContent from "@/components/email-templates/password-reset-content";
import sendEmail from "@/lib/email/sendEmail";

const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.WEBSITE_URL}/auth/new-password?token=${token}`;
  const html = await PasswordResetContent(resetLink, email);
  await sendEmail({
    email: [email],
    subject: `איפוס סיסמה: GenerationsRecipes`,
    html: html,
  });
};
export default sendPasswordResetEmail;
