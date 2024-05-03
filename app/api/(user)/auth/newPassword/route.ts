import { NewPasswordSchema } from "@/schemas";
import userModel from "@/data/user";
import { NextResponse, type NextRequest } from "next/server";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import bcrypt from "bcryptjs";
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
    const { password, token } = await req.json();
    if (!token) {
      return NextResponse.json({ message: "Missing token!" }, { status: 404 });
    }

    const validatedFields = NewPasswordSchema.safeParse(password);
    if (!validatedFields.success) {
      throw new ValidationError(
        "Please check the provided information and try again."
      );
    }
    const existingToken = await getPasswordResetTokenByToken(token);
    if (!existingToken) {
      return NextResponse.json({ message: "Invalid token!" }, { status: 404 });
    }

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (!hasExpired) {
      return NextResponse.json(
        { message: "Token has expired!" },
        { status: 404 }
      );
    }

    const existingUser = await userModel.getByEmail(existingToken.email);
    if (!existingUser) {
      return NextResponse.json(
        { message: "Email does not exist!" },
        { status: 404 }
      );
    }
    const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    await db.user.update({
      where: { id: existingUser.id },
      data: { password: hashedPassword },
    });
    await db.passwordResetToken.delete({ where: { id: existingToken.id } });

    return NextResponse.json({ message: "Password updated!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
