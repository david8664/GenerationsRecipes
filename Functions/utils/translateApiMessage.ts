interface TranslateApiMessageProps {
  login: (message: string) => Promise<string>;
  newPassword: (message: string) => Promise<string>;
  newVerification: (message: string) => Promise<string>;
  register: (message: string) => Promise<string>;
  reset: (message: string) => Promise<string>;
  newRecipe: (message: string) => Promise<string>;
  getAllTags: (message: string) => Promise<string>;
}

const translateApiMessage: TranslateApiMessageProps = {
  login: async (message: string) => {
    const messages: { [key: string]: string } = {
      "User successfully authenticated": "אומתת בהצלחה",
      "Confirmation email sent!": "אימות נשלח במייל!",
      "Two-factor email sent!": "אימות דו-שלבי נשלח במייל",
      "Invalid code!": "קוד לא תקין!",
      "Email does not exist!": "אימייל לא קיים!",
      "Invalid fields!": "שדות לא חוקיים!",
      "Token has expired!": "פג תוקפו של האסימון!",
      "Invalid credentials": "אישורים לא חוקיים",
    };
    return messages[message] || "אירעה שגיאה במהלך האימות";
  },
  // Implement other methods here
  newPassword: async (message: string) => {
    const messages: { [key: string]: string } = {
      "Password updated!": "הסיסמה עודכנה!",
      "Email does not exist!": "אימייל לא קיים!",
      "Token has expired!": "פג תוקפו של האסימון!",
      "Invalid token!": "אסימון לא חוקי!",
      "Missing token!": "חסר אסימון!",
      "Please check the provided information and try again.":
        "יש לבדוק את המידע שסופק ולנסות שוב.",
    };
    return messages[message] || "אירעה שגיאה בעת עיבוד בקשתך.";
  },
  newVerification: async (message: string) => {
    const messages: { [key: string]: string } = {
      "Email verified!": "אימייל אומת!",
      "Token has expired!": "פג תוקפו של האסימון!",
      "Email does not exist!": "אימייל לא קיים!",
      "Token does not exist!": "אסימון לא קיים!",
    };
    return messages[message] || "אירעה שגיאה במהלך האימות";
  },
  register: async (message: string) => {
    const messages: { [key: string]: string } = {
      "Please check the provided information and try again.":
        "יש לבדוק את המידע שסופק ולנסות שוב.",
      "The nickname you've chosen is already in use. Please choose a different one.":
        "הכינוי שבחרת כבר בשימוש. יש לבחור כינוי אחר.",
      "The email address you've provided is already registered. Please use a different email address.": `כתובת האימייל שסיפקת כבר רשומה. יש להשתמש בכתובת דוא"ל אחרת.`,
      "Your account has been successfully created. Confirmation email sent!": `החשבון שלך נוצר בהצלחה. יש לאשר את הבקשה במייל!`,
    };
    return messages[message] || "אירעה שגיאה בעת עיבוד בקשתך.";
  },
  reset: async (message: string) => {
    const messages: { [key: string]: string } = {
      "Please check the provided information and try again.":
        "יש לבדוק את המידע שסופק ולנסות שוב.",
      "Email does not exist!": "אימייל לא קיים!",
      "Reset email sent!": "הודעת איפוס סיסמא נשלחה במייל!",
    };
    return messages[message] || "אירעה שגיאה במהלך האימות";
  },
  newRecipe: async (message: string) => {
    const messages: { [key: string]: string } = {
      "Recipe created successfully.": "המתכון נוצר בהצלחה.",
      "Invalid fields!": "שדות לא חוקיים!",
      "Failed to upload illustration image": "העלאת תמונת המחשה נכשלה",
    };
    return messages[message] || "אירעה שגיאה בעת עיבוד בקשתך.";
  },
  getAllTags: async (message: string) => {
    // const messages: { [key: string]: string } = {

    // };
    // return messages[message] || "אירעה שגיאה במהלך הבקשה";
    return "אירעה שגיאה בעת עיבוד בקשתך.";
  },
};

export default translateApiMessage;
