const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-2/3 bg-slate-200 border rounded-md">
      <h1 className="text-4xl font-bold text-center mt-10 mb-10">תנאי שימוש</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">מבוא</h2>
        <p>
          ברוכים הבאים ל-GenerationsRecipes, הפלטפורמה שלך לשיתוף וגילוי מתכונים
          טעימים. על ידי שימוש בשירותים שלנו, אתה מסכים לתנאים שנקבעים במסמך זה.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">הגדרות</h2>
        <p>
          - <strong>משתמש</strong>: כל אדם שנגש או משתמש בשירותים שלנו.
        </p>
        <p>
          - <strong>תוכן</strong>: כל המתכונים, התמונות או המונחים האחרים
          שמשתמשים מגישים ל-GenerationsRecipes.
        </p>
        <p>
          - <strong>מתכון</strong>: פירוט של הוראות להכנת מנה, הכולל מרכיבים,
          שלבי הכנה וזמני בישול.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">התחייבויות המשתמש</h2>
        <p>
          המשתמשים אחראים על:
          <ul className="list-disc pl-5">
            <li>
              הגשת מתכונים מקוריים או הבטחה שיש להם את הזכות לשתף את המתכון.
            </li>
            <li>ספק מידע מדויק על המתכונים.</li>
            <li>אי שימוש בשירותים שלנו לפעילויות לא חוקיות.</li>
          </ul>
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">תיאור השירות</h2>
        <p>
          GenerationsRecipes מספקת פלטפורמה למשתמשים לשיתוף, גילוי וארגון של
          מגוון רחב של מתכונים. השירותים שלנו כוללים:
          <ul className="list-disc pl-5">
            <li>מסד נתונים לחיפוש של מתכונים.</li>
            <li>פרופילי משתמש לשיתוף של מתכונים אישיים.</li>
            <li>כלים לארגון וקטגוריות של מתכונים.</li>
          </ul>
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">זכויות היוצרים</h2>
        <p>
          המשתמשים שומרים על הזכויות שלהם על המתכונים שהם מגישים
          ל-GenerationsRecipes. על פי הגשת מתכון, המשתמש נותן רשיון לא-בלעדי
          ל-GenerationsRecipes להשתמש, להציג ולפרסם את המתכון על הפלטפורמה.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">הגבלת אחריות</h2>
        <p>
          GenerationsRecipes אינה אחראית לדיוק של מתכונים שמוגשים על ידי
          המשתמשים. המשתמשים אחראים לוודא את הדיוק של המתכונים לפני השימוש בהם.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">פתרון נזקים</h2>
        <p>
          נזקים שנגרמים משימוש בשירותי GenerationsRecipes יפתרו דרך פנייה
          באמצעות דוא"ל ל{" "}
          <a
            href="mailto:generationrecipes.sup@gmail.com"
            className="hover:underline hover:text-blue-400"
          >
            generationrecipes.sup@gmail.com
          </a>
          .
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">שינויים בתנאים</h2>
        <p>
          GenerationsRecipes שומרת לעצמה את הזכות לעדכן את התנאים בכל עת.
          המשתמשים יודיעו על כל שינוי על ידי צוות התמיכה.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">פרטי יצירת קשר</h2>
        <p>
          לשאלות או משוב בנושא התנאים, אנא צרו קשר עם GenerationsRecipes בדוא"ל{" "}
          <a
            href="mailto:generationrecipes.sup@gmail.com"
            className="hover:underline hover:text-blue-400"
          >
            generationrecipes.sup@gmail.com
          </a>
          .
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">תאריך יעילות</h2>
        <p>התנאים החלו לתוקף בתאריך 22/04/2024.</p>
      </section>
    </div>
  );
};

export default TermsOfService;
