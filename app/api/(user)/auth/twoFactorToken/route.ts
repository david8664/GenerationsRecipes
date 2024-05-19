import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";

export const GET = async (req: NextRequest) => {
  try {
    const { searchType, value } = await req.json();
    let twoFactorToken = null;
    if (searchType === "token") {
      twoFactorToken = await db.passwordResetToken.findUnique({
        where: { token: value },
      });
    } else if (searchType === "email") {
      twoFactorToken = await db.passwordResetToken.findFirst({
        where: { email: value },
      });
    }

    return NextResponse.json({ message: twoFactorToken }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get the two-factor token" },
      { status: 500 }
    );
  }
};
