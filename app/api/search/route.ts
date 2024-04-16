import { NextResponse, type NextRequest } from "next/server";

export default function GET(req: NextRequest){
    // Get all recipes that match to the search value
    // TODO: Do trim
    try {
        // TODO: take the search text and return the result
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