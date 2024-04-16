import { twoFactorContent } from "@/components/email-templates/twoFactorContent";
import { sendEmail } from "./sendEmail";

export const sendTwoFactorEmail = async (email: string, token: string) => {
  const html = await twoFactorContent(token, email);
  await sendEmail({
    email: [email],
    subject: `קוד אימות דו-שלבי: GenerationsRecipes`,
    html: html,
  });
};
