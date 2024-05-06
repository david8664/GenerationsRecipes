import { db } from "@/lib/db";

export const twoFactorContent = async (
  twoFactorToken: string,
  email: string
) => {
  const user = await db.user.findUnique({ where: { email } });
  return `<div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 20px;">
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">שלום ${user?.fullName},</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">קיבלנו בקשה להפעלת אימות דו-שלבי עבור חשבונך ב-GenerationsRecipes.</p>
  <h2 style="font-size: 24px; color: #333333; margin-bottom: 20px;">קוד אימות: <pre>${twoFactorToken}</pre></h2>
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">אם אתה לא ביקשת להפעיל אימות דו-שלבי או יש לך כל שאלה, אנא התעלם מהודעה זו.</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 0;">תודה,</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 0;">צוות GenerationsRecipes</p>
</div>`;
};
