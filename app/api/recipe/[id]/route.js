import { NextResponse } from "next/server";

async function GET() {
  return NextResponse.json({ get: "recipeId" });
}
