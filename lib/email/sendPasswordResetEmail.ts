import { PasswordResetContent } from "@/components/email-templates/PasswordResetContent";
import { sendEmail } from "./sendEmail";

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.WEBSITE_URL}/auth/new-password?token=${token}`;
  const html = await PasswordResetContent(resetLink, email);
  await sendEmail({
    email: [email],
    subject: `איפוס סיסמה: GenerationsRecipes`,
    html: html,
  });
};
