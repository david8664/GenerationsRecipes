import { NextResponse } from "next/server";

async function GET() {
  NextResponse.json({ get: "create" });
}
