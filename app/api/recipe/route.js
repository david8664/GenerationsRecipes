import { NextResponse } from "next/server";
export async function GET() {
  try {
    const data = [{ name: "dan" }];
    return NextResponse.json({ data });
  } catch (error) {
    return "Error";
  }
}

export async function POST(req, { params }) {
  try {
    const res = ""; //  Headers() req.json() params.paramName
    return NextResponse.json({ done: true });
  } catch (error) {
    return "Error";
  }
}
