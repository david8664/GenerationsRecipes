import { NextResponse, type NextRequest } from "next/server";


export async function POST(req: NextRequest) {
  // edit user settings
  try {
    return new Response("data fetch successful", {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Get user settings
    return NextResponse.json(
      { message: "user setting updated successful" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
