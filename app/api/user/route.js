import { NextResponse } from "next/server";
export async function GET() {
  const data = [{ name: "dan" }];
  return NextResponse.json({ data });
}

export async function POST(req, { params }) {
  const res = ""; //  Headers() req.json() params.paramName
  return NextResponse.json({ done: true });
}

