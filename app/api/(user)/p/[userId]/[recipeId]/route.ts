import { db } from "@/lib/db";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url, `http://${req.headers.get("host")}`);
    const recipeId = url.pathname.split("/").pop();

    const recipe = await db.recipe.findUnique({
      where: { id: recipeId, isActive: true, isPrivate: false },
      select: {
        User: { select: { image: true, nickname: true } },
        name: true,
        illustrationImage: true,
        description: true,
        preparationTime: true,
        preparationMethod: true,
        comments: true,
        allergens: true,
        uploadTime: true,
        ingredients: true,
        tags: true,
        yield: true,
      },
    });

    return NextResponse.json({ message: recipe }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
