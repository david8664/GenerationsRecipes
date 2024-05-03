import { db } from "@/lib/db";
import { NextResponse, type NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const searchValue = searchParams.get("search")?.trim() || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    // Calculate the number of records to skip
    const skip = (page - 1) * limit;

    const data = await db.recipe.findMany({
      where: {
        name: { contains: searchValue, mode: "insensitive" },
        isActive: true,
        isPrivate: false,
      },
      skip: skip,
      take: limit,
      select: {
        User: { select: { image: true, nickname: true } },
        id: true,
        name: true,
        illustrationImage: true,
        description: true,
        preparationTime: true,
      },
    });

    return NextResponse.json({ message: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
};
