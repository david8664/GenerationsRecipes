import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";

export const GET = async (req: NextRequest) => {
  try {
    const { searchType, value } = await req.json();
    let passwordResetToken = null;
    if (searchType === "token") {
      passwordResetToken = await db.passwordResetToken.findUnique({
        where: { token: value },
      });
    } else if (searchType === "email") {
      passwordResetToken = await db.passwordResetToken.findFirst({
        where: { email: value },
      });
    }

    return NextResponse.json({ message: passwordResetToken }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get the password reset token" },
      { status: 500 }
    );
  }
};
