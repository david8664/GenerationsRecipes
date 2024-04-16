// r/create
import { NextResponse, type NextRequest } from "next/server";
import { RecipeSchema } from "@/schemas";
import userModel from "@/data/user";
import cloudinaryService from "@/Functions/utils/cloudinaryService";
import { db } from "@/lib/db";
import { string } from "zod";

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    const validatedFields = RecipeSchema.safeParse(requestBody);
    if (!validatedFields.success) {
      return NextResponse.json({ message: "Invalid fields!" }, { status: 400 });
    }

    const {
      allergens,
      description,
      ingredients,
      name,
      preparationMethod,
      preparationTime,
      tags,
      yield: recipeYield,
      comments,
      illustrationImage,
      isPrivate,
      userId,
    } = validatedFields.data;

    const existingUser = await userModel.getById(userId as string);
    if (!existingUser) {
      return NextResponse.json(
        { message: "An error occurred while processing your request." },
        { status: 404 }
      );
    }

    // Upload the photo to Cloudinary
    let imageUrl: string | undefined;
    try {
      if (illustrationImage) {
        imageUrl = await cloudinaryService.uploadImage({
          photo: illustrationImage as string,
          photoName: name,
          tags: ["recipe"],
        });
      }
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to upload illustration image" },
        { status: 500 }
      );
    }

    const ingredientCreates = ingredients.map((ingredient) => ({
      name: ingredient.name,
      amount: ingredient.amount,
      unit: ingredient.unit,
    }));
    // Create a new recipe
    await db.recipe.create({
      data: {
        allergens,
        description,
        ingredients: {
          create: ingredientCreates,
        },
        name,
        preparationMethod,
        preparationTime,
        tags,
        yield: recipeYield,
        comments: comments || "",
        illustrationImage: imageUrl || "",
        isPrivate,
        userId: userId as string,
      },
    });
    return NextResponse.json(
      { message: "Recipe created successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
