"use client";

import { useEffect, useState } from "react";
import RecipeCard from "@/components/recipeCard";
import api from "@/lib/apiCalls";
import FormError from "./form-error";

interface RecipesProps {
  endpoint: string;
  page?: number;
  limit?: number;
}

const Recipes = ({ endpoint, page = 1, limit = 10 }: RecipesProps) => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { message } = await api.get<RecipeProps[]>(
          `${endpoint}?page=${page}&limit=${limit}`
        );

        const newRecipes: RecipeProps[] = message.map((recipe: any) => {
          return {
            id: recipe.id,
            illustrationImage: recipe.illustrationImage,
            name: recipe.name,
            preparationTime: recipe.preparationTime,
            description: recipe.description,
            uploadTime: recipe.uploadTime,
            chefPhoto: recipe.User.image,
            chefNickname: recipe.User.nickname,
          };
        });
        setRecipes(newRecipes);
      } catch (error) {
        setError("לא נמצאו מתכונים");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [endpoint]);

  if (loading) return <div>טוען...</div>;
  if (error) return <FormError message={error} />;

  return (
    <div className="w-2/3 p-2 border rounded-md flex flex-row flex-wrap bg-slate-200">
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.id} />
      ))}
    </div>
  );
};
export default Recipes;
