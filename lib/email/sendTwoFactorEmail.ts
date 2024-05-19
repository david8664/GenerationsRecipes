import twoFactorContent from "@/components/email-templates/two-factor-content";
import sendEmail from "@/lib/email/sendEmail";

const sendTwoFactorEmail = async (email: string, token: string) => {
  const html = await twoFactorContent(token, email);
  await sendEmail({
    email: [email],
    subject: `קוד אימות דו-שלבי: GenerationsRecipes`,
    html: html,
  });
};
export default sendTwoFactorEmail;
