import { ResetSchema } from "@/schemas";
import { NextResponse, type NextRequest } from "next/server";
import { generatePasswordResetToken } from "@/lib/tokens";
import sendPasswordResetEmail from "@/lib/email/sendPasswordResetEmail";
import { db } from "@/lib/db";

// Custom error class for validation errors
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const validatedFields = ResetSchema.safeParse(await req.json());
    if (!validatedFields.success) {
      throw new ValidationError(
        "Please check the provided information and try again."
      );
    }

    const { email } = validatedFields.data;

    const existingUser = await db.user.findUnique({ where: { email } });
    if (!existingUser) {
      return NextResponse.json(
        { message: "Email does not exist!" },
        { status: 404 }
      );
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
      passwordResetToken.email,
      passwordResetToken.token
    );

    return NextResponse.json({ message: "Reset email sent!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
};
