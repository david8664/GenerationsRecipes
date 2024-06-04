"use client";

import { useEffect, useState } from "react";
import api from "@/lib/apiCalls";
import Image from "next/image";
import translateApiMessage from "@/Functions/utils/translateApiMessage";
import formatDateForIsrael from "@/lib/formatDateForIsrael";
import { useRouter } from "next/navigation";

interface IngredientProps {
  name: string;
  amount: number;
  unit: string;
}

interface RecipeProps {
  illustrationImage: string;
  chefPhoto: string;
  chefNickname: string;
  name: string;
  preparationTime: string;
  catagories: string[];
  description: string;
  preparationMethod: string;
  comments: string;
  recipeYield: number;
  allergens: string[];
  uploadTime: string;
  ingredients: IngredientProps[];
}

const Recipe = ({
  chefNickname,
  recipeId,
}: {
  chefNickname: string;
  recipeId: string;
}) => {
  const [recipe, setRecipe] = useState<RecipeProps>();
  const router = useRouter();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { message } = await api.get<any>(
          `/p/${chefNickname}/${recipeId}`
        );
        setRecipe({
          illustrationImage: message.illustrationImage,
          chefPhoto: message.User.image,
          chefNickname: message.User.nickname,
          name: message.name,
          preparationTime: message.preparationTime,
          catagories: message.tags,
          description: message.description,
          preparationMethod: message.preparationMethod,
          comments: message.comments,
          recipeYield: message.yield,
          allergens: message.allergens,
          uploadTime: formatDateForIsrael(message.uploadTime, false),
          ingredients: message.ingredients.map(
            (ingredient: IngredientProps) => ({
              name: ingredient.name,
              amount: ingredient.amount,
              unit: getIngredientUnit(ingredient.unit),
            })
          ),
        });
      } catch (error) {
        router.push("/NOT_FOUND")
      }
    };
    fetchRecipe();
  }, []);

  const getIngredientUnit = async (unit: string) => {
    const unitTranslateTHebrew = await translateApiMessage.ingredientUnit(unit);
    return unitTranslateTHebrew;
  };

  return (
    <div className="w-2/3 h-full flex flex-col flex-wrap gap-2 bg-slate-200 border rounded-sm p-4">
      <div className="w-full h-32 border rounded-b-md relative">
        <Image alt="תמונה להמחשה" src={recipe?.illustrationImage || ""} fill />
      </div>
      <header className="font-semibold text-3xl text-center w-full">
        {recipe?.name}
      </header>
      <div className="border border-b-black flex flex-wrap justify-evenly text-xl font-light pb-2 w-full">
        <div className="flex flex-row gap-2">
          <h3>כמות הגשה:</h3>
          <span> {recipe?.recipeYield}</span>
        </div>
        <div className="flex flex-row gap-2">
          <h3>זמן הכנה: </h3>
          <span>{recipe?.preparationTime}</span>
        </div>
        <div className="flex flex-row gap-2">
          <h3>תאריך העלאה:</h3>
          <span>{recipe?.uploadTime}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly">
        <div>
          <h6 className="font-medium text-2xl">אופן הכנה</h6>
          <p>{recipe?.preparationMethod}</p>
        </div>
        <div>
          <h6 className="font-medium text-2xl">מצרכים</h6>
          {recipe?.ingredients.map((ingredient) => (
            <div className="flex flex-row justify-evenly gap-4">
              <span>{ingredient.name}</span>
              <span>{ingredient.amount}</span>
              <span>{ingredient.unit}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="border border-black my-4 p-4 rounded-lg">
        {recipe?.comments}
      </p>
    </div>
  );
};
export default Recipe;
