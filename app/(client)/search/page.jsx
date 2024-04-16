"use client";
import { useSearchParams } from "next/navigation";
import recipes from "../../Data/recipesDb.json";
import RecipeCard from "../../components/ui/RecipeCard/Card";
// import SearchFilter from "../../Functions/SearchFilter";

export default function Search() {
  const search = useSearchParams().get("name")?.trim();
  //  const filteredRecipes = SearchFilter(recipes, search);

  return (
    //  filteredRecipes.length > 0 ? (
    //   <>{filteredRecipes.map((recipe, i) => (
    //     <ul className="flex flex-row flex-wrap gap-6 items-center p-24">
    //       <RecipeCard recipe={recipe} key={recipe.recipeId} />
    //     </ul>
    //   ))}</>
    //  ) : (
    <h1>לא נמצא תוצאות 😞</h1>
  );
}
