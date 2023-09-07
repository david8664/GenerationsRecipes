"use client";
export default function createRecipe() {
  return (
    <form className="even:border even:border-black flex flex-col gap-2 w-min justify-center">
      <input type="text" placeholder={`שם`} name="recipeName" id="recipeName" />
      <textarea
        name="discription"
        id="discription"
        placeholder="תיאור"
        cols="30"
        rows="3"
      ></textarea>
      <input
        type="number"
        name="preparationTime"
        min={0.5}
        placeholder="זמן הכנה (לדקה)"
      />
      {/* image 
Recipe Name
Discription
Preparation Time
Ingredients
Instructions
Tags
Yald - Number of servings the recipe makes
Equipment Needed
private / public
*/}
    </form>
  );
}

fetch;
