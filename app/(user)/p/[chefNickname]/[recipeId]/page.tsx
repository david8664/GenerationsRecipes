import Recipe from "@/components/recipe";

const RecipePage = ({
  params,
}: {
  params: { recipeId: string; chefNickname: string };
}) => {
  return (
    <div className="w-2/3">
      <Recipe recipeId={params.recipeId} chefNickname={params.chefNickname} />
    </div>
  );
};

export default RecipePage;
