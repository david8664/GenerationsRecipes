import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";

export const GET = async (req: NextRequest) => {
  try {
    const { searchType, value } = await req.json();
    let verificationToken = null;
    if (searchType === "token") {
      verificationToken = await db.passwordResetToken.findUnique({
        where: { token: value },
      });
    } else if (searchType === "email") {
      verificationToken = await db.passwordResetToken.findFirst({
        where: { email: value },
      });
    }

    return NextResponse.json({ message: verificationToken }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get the verification token" },
      { status: 500 }
    );
  }
};
