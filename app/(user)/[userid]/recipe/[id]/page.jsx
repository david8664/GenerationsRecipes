import allRecipes from "@/Data/recipesDb.json";

const getRecipeById = async (id) => {
  // const res = await fetch("url"); // get recipe by id
  if (!res.ok) throw new Error("Couldn't find recipe");
  // const recipe = await res.json();
  const recipe = allRecipes[0];
  if (!recipe?.id) throw new Error("Couldn't find recipe");
  return recipe;
};

export const generteStaticParams = async () => {
  // const res = await fetch("url"); // take all recipes
  // const recipes = await res.json();
  const allRcipes = await recipes;
  return recipes.map((recipe) => ({ id: String(recipe.id) }));
};

export default async function Page({ params }) {
  // check if user is the owner on page - if true - can edit
  const recipe = await getRecipeById(params.id);
  return (
    <div>
      <h1 className="text-4xl text-gray-800 my-14">{recipe.name}</h1>
      <p>{recipe.ingredients}</p>
    </div>
  );
}
