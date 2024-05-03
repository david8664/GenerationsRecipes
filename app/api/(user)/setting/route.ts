import { NextResponse, type NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
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
};

export const GET = async (req: NextRequest) => {
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
};
