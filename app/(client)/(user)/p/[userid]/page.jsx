import RecipeCard from "@/components/ui/RecipeCard/Card";
import recipesDb from "@/Data/recipesDb.json";

export default function Home() {
  return (
    <ul className="flex flex-row flex-wrap gap-6 items-center p-24">
      {/* TODO: call to the server to get user's recipes */}
      {recipesDb.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </ul>
  );
}
