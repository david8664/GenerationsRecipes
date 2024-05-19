import * as z from "zod";

// Define regular expressions for validation
const fullNameRegExp = /^([a-zA-Z]+(?: [a-zA-Z]+)*|[א-ת]+(?: [א-ת]+)*)$/,
  nicknameRegExp = /^[a-zA-Z0-9_א-ת]+$/,
  passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[^\s]).{8,32}$/,
  israeliPhoneNumberRegExp =
    /^(?:\+972|0)(?:-|\s)?(?:(?:5[0-9]\d?|77)[\s-]?\d{3}[\s-]?\d{4})$/,
  cityRegExp = /^([a-zA-Z'-]+(?: [a-zA-Z'-]+)*|[א-ת'-]+(?: [א-ת'-]+)*)$/,
  neighborhoodRegExp =
    /^([a-zA-Z'-]+(?: [a-zA-Z'-]+)*|[א-ת'-]+(?: [א-ת'-]+)*)$/,
  streetRegExp = /^[a-zA-Zא-ת0-9\s\-,.'\(\)]+$/,
  recipeNameRegExp = /^[a-zA-Zא-ת\s\d,.!?-]{3,50}$/,
  ingredientNameRegExp = /^[a-zA-Zא-ת\s]{1,50}$/,
  recipeDescriptionRegExp = /^[a-zA-Zא-ת\s|!#$%()?'",/]{10,70}$/,
  recipePreparationMethodRegExp = /^[a-zA-Zא-ת\s|!#$%()?'",/]{10,1500}$/,
  recipeCommentRegExp = /^[a-zA-Zא-ת\s|!#$%()?'",/]{0,200}$/,
  timeFormatRegExp = /^(?!00:00)(?:[01][0-9]|2[0-3]):[0-5][0-9]$/;

// Reusable validation function for base64 profile picture
const validateBase64ProfilePicture = (value: string) => {
  try {
    const decoded = Buffer.from(value, "base64").toString("utf8");
    // Perform any additional validation on the decoded string here
    return true; // Return true if the conversion and validation are successful
  } catch (error) {
    return false; // Return false if the conversion fails
  }
};

const LoginSchema = z.object({
  email: z.string().email({
    message: "אימייל נדרש",
  }),
  password: z.string().min(1, {
    message: "סיסמא נדרשת",
  }),
  code: z.optional(z.string()),
});

const RegisterSchema = z
  .object({
    fullName: z.string().regex(fullNameRegExp, {
      message: "שם נדרש",
    }),
    nickname: z.string().regex(nicknameRegExp, {
      message: "שם חיבה נדרש",
    }),
    email: z.string().email({
      message: "אימייל נדרש",
    }),
    password: z.string().regex(passwordRegExp, {
      message:
        "הסיסמה חייבת להיות באורך של 8-32 תווים עם אות גדולה, קטנה ותוו מיוחד",
    }),
    confirmPassword: z
      .string()
      .regex(passwordRegExp, {
        message:
          "הסיסמה חייבת להיות באורך של 8-32 תווים עם אות גדולה, קטנה ותוו מיוחד",
      })
      .optional(),
    city: z.string().regex(cityRegExp, { message: "שדה חובה" }),
    neighborhood: z
      .string()
      .regex(neighborhoodRegExp, { message: "שדה חובה" })
      .optional(),
    street: z.string().regex(streetRegExp, { message: "שדה חובה" }).optional(),
    phone: z
      .string()
      .regex(israeliPhoneNumberRegExp, { message: "שדה חובה" })
      .optional(),
    profilePicture: z
      .string()
      .refine(validateBase64ProfilePicture, {
        message: "תמונת הפרופיל חייבת להיות בפורמט base64 תקני",
      })
      .optional(),
    ToS: z.boolean().refine((value) => value === true, {
      message: "יש לאשר את התנאים",
    }),
  })
  .refine(
    (data) => {
      // Check if confirmPassword is provided and matches password
      if (data.confirmPassword) {
        return data.password === data.confirmPassword;
      }
      // If confirmPassword is not provided, it's considered valid
      return true;
    },
    {
      message: "הסיסמאות אינם זהות",
      path: ["confirmPassword"],
    }
  );

const ResetSchema = z.object({
  email: z.string().email({
    message: "אימייל נדרש",
  }),
});

const NewPasswordSchema = z
  .object({
    password: z.string().regex(passwordRegExp, {
      message:
        "הסיסמה חייבת להיות באורך של 8-32 תווים עם אות גדולה, קטנה ותוו מיוחד",
    }),
    confirmPassword: z.string().regex(passwordRegExp, {
      message:
        "הסיסמה חייבת להיות באורך של 8-32 תווים עם אות גדולה, קטנה ותוו מיוחד",
    }),
  })
  .refine(
    (data) => {
      // Check if confirmPassword is provided and matches password
      if (data.confirmPassword) {
        return data.password === data.confirmPassword;
      }
      // If confirmPassword is not provided, it's considered valid
      return true;
    },
    {
      message: "הסיסמאות אינם זהות",
      path: ["confirmPassword"],
    }
  );

const RecipeSchema = z.object({
  userId: z.string().optional(),
  illustrationImage: z
    .string()
    .refine(validateBase64ProfilePicture, {
      message: "תמונת המתכון חייבת להיות בפורמט base64 תקני",
    })
    .optional(),
  name: z.string().regex(recipeNameRegExp, { message: "שם המתכון אינו תקין" }),
  preparationTime: z.string().regex(timeFormatRegExp, {
    message: "זמן הכנה חייב להיות בין דקה ל-24 שעות",
  }),
  tags: z
    .array(z.string().min(1, { message: "שם קטגוריה לא חוקי" }))
    .nonempty({ message: "דרוש לפחות קטגוריה אחת" }),
  description: z
    .string()
    .regex(recipeDescriptionRegExp, { message: "ערך לא תקין" }),
  ingredients: z
    .array(
      z.object({
        name: z.string().regex(ingredientNameRegExp, {
          message: "השם לא תקין",
        }),
        amount: z
          .union([z.string(), z.number()])
          .transform((value) => parseFloat(value as string))
          .refine((value) => !isNaN(value) && value >= 1 && value <= 1000, {
            message: "כמות חייבת להיות בין 1 ל-1000",
          }),
        unit: z.enum(["GRAM", "LITER"], {
          required_error: "יחידת המדידה חייבת להיות גרם או ליטר",
        }),
      })
    )
    .nonempty({ message: "חייב להיות לפחות מצרך אחד" }),
  preparationMethod: z
    .string()
    .regex(recipePreparationMethodRegExp, { message: "ערך לא תקין" }),
  comments: z
    .string()
    .regex(recipeCommentRegExp, { message: "ערך לא תקין" })
    .optional(),
  yield: z
    .union([z.string(), z.number()])
    .transform((value) => parseInt(value as string, 10))
    .refine((value) => Number.isInteger(value) && value >= 1 && value <= 1000, {
      message: "כמות הגשה חייבת להיות בין 1 ל-1000",
    }),
  allergens: z
    .array(
      z.enum([
        "milk",
        "nuts",
        "peanuts",
        "fish",
        "eggs",
        "sesame",
        "soy",
        "wheat",
      ])
    )
    .optional(),
  isPrivate: z
    .boolean()
    .refine((value) => value !== undefined, {
      message: "חובה לציין אם המתכון פרטי",
    })
    .optional(),
});
const IngredientSchema = z.object({
  name: z.string().regex(ingredientNameRegExp, {
    message: "השם לא תקין",
  }),
  amount: z
    .union([z.string(), z.number()])
    .transform((value) => parseFloat(value as string))
    .refine((value) => !isNaN(value) && value >= 1 && value <= 1000, {
      message: "כמות חייבת להיות בין 1 ל-1000",
    }),
  unit: z.enum(["GRAM", "LITER"], {
    required_error: "יחידת המדידה חייבת להיות גרם או ליטר",
  }),
});

export {
  LoginSchema,
  RegisterSchema,
  ResetSchema,
  NewPasswordSchema,
  RecipeSchema,
  IngredientSchema,
};
