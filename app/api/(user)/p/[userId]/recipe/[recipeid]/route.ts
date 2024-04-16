import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    // Get recipe data
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
