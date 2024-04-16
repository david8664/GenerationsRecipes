import { NextResponse, type NextRequest } from "next/server";
import { AuthError } from "next-auth";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import userModel from "@/data/user";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/email/sendVerificationEmail";
import { sendTwoFactorEmail } from "@/lib/email/sendTwoFactorEmail";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export async function POST(req: NextRequest) {
  try {
    const validatedFields = LoginSchema.safeParse(await req.json());

    if (!validatedFields.success) {
      return NextResponse.json({ message: "Invalid fields!" }, { status: 400 });
    }

    const { email, password, code } = validatedFields.data;
    
    const existingUser = await userModel.getByEmail(email);
    if (!existingUser || !existingUser.email || !existingUser.password) {
      return NextResponse.json(
        { message: "Email does not exist!" },
        { status: 404 }
      );
    }
    // Generate new email verification token
    if (!existingUser.emailVerified) {
      const verificationToken = await generateVerificationToken(
        existingUser.email
      );

      await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
      );
      return NextResponse.json(
        { message: "Confirmation email sent!" },
        { status: 200 }
      );
    }

    if (existingUser.isTwoFactorEnabled && existingUser.email) {
      if (code) {
        const twoFactorToken = await getTwoFactorTokenByEmail(
          existingUser.email
        );
        if (!twoFactorToken || twoFactorToken.token !== code) {
          return NextResponse.json(
            { message: "Invalid code!" },
            { status: 400 }
          );
        }
        const hasExpired = new Date(twoFactorToken.expires) < new Date();
        if (hasExpired) {
          return NextResponse.json(
            { message: "Token has expired!" },
            { status: 400 }
          );
        }

        await db.twoFactorToken.delete({ where: { id: twoFactorToken?.id } });

        const existingConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );
        if (existingConfirmation) {
          await db.twoFactorConfirmation.delete({
            where: { id: existingConfirmation.id },
          });
        }

        await db.twoFactorConfirmation.create({
          data: {
            userId: existingUser.id,
          },
        });
      } else {
        const twoFactorToken = await generateTwoFactorToken(existingUser.email);
        await sendTwoFactorEmail(twoFactorToken.email, twoFactorToken.token);
        return NextResponse.json(
          { message: "Two-factor email sent!" },
          { status: 200 }
        );
      }
    }

    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: process.env.WEBSITE_URL + DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error) {
      console.error(error);
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return NextResponse.json(
              { message: "Invalid credentials" },
              { status: 401 }
            );
          default:
            return NextResponse.json(
              { message: "An error occurred during authentication" },
              { status: 500 }
            );
        }
      }
      throw error;
    }
    return NextResponse.json(
      { message: "The user has been authenticated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred during authentication" },
      { status: 500 }
    );
  }
}
