import { db } from "@/lib/db";
import userModel from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { NextResponse, type NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { token } = await req.json();

    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
      return NextResponse.json(
        { message: "Token does not exist!" },
        { status: 400 }
      );
    }

    const expiredToken = new Date(existingToken.expires) < new Date();

    if (expiredToken) {
      return NextResponse.json(
        { message: "Token has expired!" },
        { status: 400 }
      );
    }

    const existingUser = await userModel.getByEmail(existingToken.email);

    if (!existingUser) {
      return NextResponse.json(
        { message: "Email does not exist!" },
        { status: 400 }
      );
    }

    await db.user.update({
      where: { id: existingUser.id },
      data: { emailVerified: new Date(), email: existingToken.email },
    });

    await db.verificationToken.delete({ where: { id: existingToken.id } });

    return NextResponse.json({ message: "Email verified!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
