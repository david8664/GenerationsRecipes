"use client";

import { useEffect, useState } from "react";
import RecipeCard from "@/components/recipeCard";
import api from "@/lib/apiCalls";

interface RecipesProps {
  search?: string;
  page?: number;
  limit?: number;
}

const Recipes = ({ search = "", page = 1, limit = 10 }: RecipesProps) => {
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
    <div className="w-2/3 p-2 border rounded-md flex flex-row flex-wrap bg-slate-200">
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.id} />
      ))}
    </div>
  );
};
export default Recipes;
