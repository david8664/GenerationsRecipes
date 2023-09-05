import Link from "next/link";
import RecipeCard from "../../../../components/shared/recipeCard";
import allRecipes from "../../../../public/recipesDb.json";

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
      <ul className="flex flex-row gap-2 flex-wrap">
        {allRecipes.map((recipe) => (
          <Link href={`/recipe/${recipe.id}`}>
            <li>
              <RecipeCard recipe={recipe} key={recipe.id} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
