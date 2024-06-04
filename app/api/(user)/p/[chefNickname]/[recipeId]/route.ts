import { db } from "@/lib/db";
import { NextResponse, type NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { recipeId: string; chefNickname: string } }
) => {
  try {
    const recipe = await db.recipe.findUnique({
      where: { id: params.recipeId, isActive: true },
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
        isPrivate: true,
      },
    });

    if (
      !recipe ||
      (recipe.isPrivate && recipe.User.nickname !== params.chefNickname)
    ) {
      // Respond with 404 Not Found if the recipe doesn't exist or the user is not authorized
      return NextResponse.json({ message: "Recipe not." }, { status: 404 });
    }
    const { isPrivate, ...cleanedRecipe } = recipe;
    return NextResponse.json({ message: cleanedRecipe }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
};
