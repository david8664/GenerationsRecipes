import RecipeCard from "../../../components/ui/RecipeCard/Card";
import allRecipes from "../../../Data/recipesDb.json";
// make striming

const getRecipes = async () => {
  // const result = await fetch("url");
  // const recipes = await result.json();
  const recipes = allRecipes;
  return recipes;
};

export default async function recipes() {
  const allRecipes = await getRecipes();

  return (
    <div>
      <ul className="flex flex-row flex-wrap gap-6 items-center justify-between p-24">
        {allRecipes.map((recipe, i) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </div>
  );
}
