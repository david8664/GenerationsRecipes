import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Get user recipes
    return NextResponse.json(
      { message: "Fetch user recipes successful" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
