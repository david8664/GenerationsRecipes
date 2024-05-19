// r/tags
import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";

export const GET = async (req: NextRequest) => {
  try {
    // Retrieve all tags from the database
    const tags = await db.tag.findMany({
      where: { isActive: true },
      select: { name: true, id: true},
    });

    return NextResponse.json({ message: tags }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add tags to the database" },
      { status: 500 }
    );
  }
};
