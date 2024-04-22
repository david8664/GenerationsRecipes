import userModel from "@/data/user";

export const PasswordResetContent = async (
  resetLink: string,
  email: string
) => {
  const user = await userModel.getByEmail(email);
  return `<div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 20px;">
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">שלום ${user?.fullName}</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">בקשת איפוס סיסמה התקבלה בחשבונך. כדי לאפס את הסיסמה שלך, נא להשתמש בקישור הבא:</p>
  <a href="${resetLink}" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 20px;">איפוס סיסמה</a>
  <p style="font-size: 16px; color: #666666; margin-bottom: 20px;">אם לא ביקשת איפוס סיסמה, אנא התעלם מהודעה זו.</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 0;">תודה,</p>
  <p style="font-size: 16px; color: #666666; margin-bottom: 0;">צוות GenerationsRecipes</p>
</div>`;
};
