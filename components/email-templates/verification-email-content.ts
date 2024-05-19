import { db } from "@/lib/db";

interface EmailContentProps {
  verificationLink: string;
  email: string;
}

const verificationEmailContent = async ({
  verificationLink,
  email,
}: EmailContentProps) => {
  const user = await db.user.findUnique({ where: { email } });
  return `<div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 20px;">
  <h2 style="color: #333333;">השלמת ההרשמה שלך: אימות כתובת הדוא"ל שלך</h2>
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">שלום ${user?.fullName},</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">ברוך הבא ל-GenerationsRecipes, היכן שחוויות קולינריות מחכות!</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">המסע שלך איתנו מתחיל על ידי אימות כתובת הדוא"ל שלך. זהו צעד פשוט אך חיוני לגישה לכל התכונות הטעימות והאינטראקציות בקהילה שאנו מציעים.</p>
  <a href="${verificationLink}" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 20px;">אימות כתובת הדוא"ל</a>
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">אם לא פתחת את ההרשמה הזו או יש לך כל שאלה, נא להתעלם מהודעה זו. הביטחון והשקט שלך הם חשובים לנו ביותר.</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 0;">כיף לקבל אותך איתנו בהרפתקה הקולינרית הזו!</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 0;">בברכה, צוות GenerationsRecipes</p>
</div>`;
};
export default verificationEmailContent;
