"use client";

import { RecipeCard } from "@/components/recipeCard";
import api from "@/lib/apiCalls";
import { useEffect, useState } from "react";

interface RecipesProps {
  search?: string;
  page?: number;
  limit?: number;
}

export const Recipes = ({
  search = "",
  page = 1,
  limit = 10,
}: RecipesProps) => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const { message } = await api.get("search", { search, page, limit });
      const newRecipes: RecipeProps[] = (message as any).map((recipe: any) => {
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
    };
    fetchRecipes();
  }, []);

  return (
    <div className="w-1/2 flex flex-row flex-wrap bg-slate-200">
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.id} />
      ))}
    </div>
  );
};
