import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";

export const GET = async (req: NextRequest) => {
  try {
    const { userId } = await req.json();
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });

    return NextResponse.json(
      { message: twoFactorConfirmation },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get the two-factor confirmation" },
      { status: 500 }
    );
  }
};
