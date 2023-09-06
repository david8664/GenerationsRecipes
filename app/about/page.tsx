import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative">
      <Image
        src={
          "https://cdn.pixabay.com/photo/2017/09/22/19/48/tomato-2776824_1280.jpg"
        }
        alt="about bg"
        fill
        className="absolute top-2 left-0 object-cover aspect-square -z-10"
      />
      <div className="p-4 backdrop-blur-sm bg-white/60">
        <div className="max-w-3xl mx-auto mb-4">
          <h1 className="text-2xl font-semibold">קצת עלינו</h1>
          <p className="text-base">
            ברוכים הבאים ל-GenerationsRecipes! ב-GenerationsRecipes, אנו נלהבים
            לשמר ולחגוג את המסורות הקולינריות שעברו במשפחתנו במשך דורות.
          </p>
          <p className="text-base">
            המטבח של המשפחה שלנו תמיד היה מקום של יצירתיות, למידה ויחד. אנו
            מאמינים שמתכונים הם יותר מסתם הוראות; הם מהווים קישור לעבר שלנו
            ומתנה לדורות הבאים.
          </p>
          <p className="text-base">
            המשימה שלנו פשוטה: לחלוק איתכם את חדוות הבישול ואת הקסם של מתכונים
            משפחתיים. יש לנו אוסף של מנות קלאסיות ועכשוויות כאחד ששוכללו עם
            הזמן, מה שמבטיח שתוכלו ליצור אותן מחדש במטבח שלכם בקלות.
          </p>
          <p className="text-base">
            תודה שהצטרפת אלינו למסע הטעים הזה לאורך הדורות. אנו מזמינים אתכם
            לחקור את המתכונים שלנו, ליצור זיכרונות מתמשכים עם יקיריכם, ולהתענג
            על הטעמים המחברים את כולנו.
          </p>
          <p className="text-base">מהמשפחה שלנו לשלך, צוות המתכונים של דורות</p>
          <h2 className="text-xl font-semibold">הסיפור שלנו</h2>
          <p className="text-base">
            מתכוני דורות היא מחווה לקשרים החזקים שנוצרים בארוחה משותפת ולטעמים
            הנצחיים שמחברים אותנו לשורשים שלנו. המטבח של המשפחה שלנו תמיד היה
            מקום של יצירתיות, למידה ויחד. אנו מאמינים שמתכונים הם יותר מסתם
            הוראות; הם מהווים קישור לעבר שלנו ומתנה לדורות הבאים.
          </p>
          <h2 className="text-xl font-semibold">המשימה שלנו</h2>
          <p className="text-base">
            המשימה שלנו פשוטה: לחלוק איתכם את חדוות הבישול ואת הקסם של מתכונים
            משפחתיים. אנו אוצרים אוסף של מנות קלאסיות ועכשוויות כאחד ששוכללו עם
            הזמן, מה שמבטיח שתוכלו ליצור אותן מחדש במטבח שלכם בקלות.
          </p>
          <h2 className="text-xl font-semibold">מה תמצא כאן</h2>
          <ul>
            <li className="text-lg font-semibold list-disc list-inside">
              אוצרות מסורתיים:
            </li>
            <p className="text-base">
              חקור את המתכונים שהיו במשפחתנו במשך עשרות שנים, שהוכנו באהבה על
              ידי הסבתות והאימהות שלנו. המנות הללו עמדו במבחן הזמן וממשיכות
              להביא נחמה ושמחה לשולחנות שלנו.
            </p>
            <li className="text-lg font-semibold list-disc list-inside">
              פיתולים מודרניים:
            </li>
            <p className="text-base">
              אנו מאמצים חדשנות גם במטבח. גלה תפיסות חדשות על המועדפים הישנים,
              כאשר אנו מוסיפים טוויסט מודרני למתכונים קלאסיים, מתאימים אותם
              לטעמים ולסגנון החיים של היום.
            </p>
            <li className="text-lg font-semibold list-disc list-inside">
              עצות מומחים:
            </li>
            <p className="text-base">
              לצד כל מתכון, תמצאו טיפים, טריקים ותובנות שאספנו מניסיון של שנים.
              אנחנו כאן כדי לעזור לך להפוך לשף ביתי בטוח ומיומן.
            </p>
          </ul>
          <p className="text-base">
            תודה שהצטרפת אלינו למסע הטעים הזה לאורך הדורות. אנו מזמינים אתכם
            לחקור את המתכונים שלנו, ליצור זיכרונות מתמשכים עם יקיריכם, ולהתענג
            על הטעמים המחברים את כולנו.
          </p>
          <p className="text-base">
            מהמשפחה שלנו לשלך, צוות GenerationsRecipes
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
