import CreateRecipeForm from "@/components/create-recipe-form";
import CreateRecipeFormByScan from "@/components/create-recipe-form-by-scan";

const NewRecipePage = () => {
  return (
    <div className="w-2/3">
      <CreateRecipeForm />
      {/* <CreateRecipeFormByScan /> */}
    </div>
  );
};
export default NewRecipePage;
