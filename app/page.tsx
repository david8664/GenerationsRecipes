import Link from "next/link";
import RecipeCard from "@/components/ui/RecipeCard/Card";
import allRecipes from "@/Data/recipesDb.json";

const Home = () => {
  return (
    <ul className="flex flex-row flex-wrap gap-6 items-center p-24">
      {allRecipes.map((recipe, i) => (
        <RecipeCard recipe={recipe} key={i} />
      ))}
    </ul>
  );
};
export default Home;
