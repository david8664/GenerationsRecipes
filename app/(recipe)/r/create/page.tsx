import CreateRecipeGate from "@/components/auth/create-recipe-gate";
import CreateRecipeForm from "@/components/create-recipe-form";
// import CreateRecipeFormByScan from "@/components/create-recipe-form-by-scan";

const NewRecipePage = () => {
  return (
    <div className="w-2/3">
      <CreateRecipeGate>
        <CreateRecipeForm />
        {/* <CreateRecipeFormByScan /> */}
      </CreateRecipeGate>
    </div>
  );
};
export default NewRecipePage;
