"use client";
import React, { useState, useRef } from "react";
import DescriptionSection from "@/components/CreateRecipeForm/DescriptionSection";
import IngredientsSection from "@/components/CreateRecipeForm/IngredientsSection";
import PreparationTimeSection from "@/components/CreateRecipeForm/PreparationTimeSection";
import RecipeImageSection from "@/components/CreateRecipeForm/RecipeImageSection";
import RecipeNameSection from "@/components/CreateRecipeForm/RecipeNameSection";
import TagsSection from "@/components/CreateRecipeForm/TagsSection";
import PreparationMethodSection from "@/components/CreateRecipeForm/PreparationMethodSection";
import CommentsSection from "@/components/CreateRecipeForm/CommentsSection";
import AllergensSection from "@/components/CreateRecipeForm/AllergensSection";
import IsPrivateSection from "@/components/CreateRecipeForm/IsPrivateSection";

export default function CreateRecipe() {
  const [recipeData, setRecipeData] = useState({
    illustrationImage: null,
    name: "",
    preparationTime: { hour: 0, minute: 0 },
    tags: [],
    description: "<h1>ספרו לנו קצת על המתכון...</h1>",
    ingredients: [{ name: "", amount: "", unit: "" }],
    preparationMethod: "",
    comments: "",
    allergens: [],
    isPrivate: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send recipeData to server
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 h-screen">
      <RecipeImageSection
        illustrationImage={recipeData.illustrationImage}
        setRecipeData={setRecipeData}
      />
      <RecipeNameSection name={recipeData.name} setRecipeData={setRecipeData} />
      <PreparationTimeSection
        preparationTime={recipeData.preparationTime}
        setRecipeData={setRecipeData}
      />
      <TagsSection tags={recipeData.tags} setRecipeData={setRecipeData} />
      <DescriptionSection
        description={recipeData.description}
        setRecipeData={setRecipeData}
      />
      <IngredientsSection
        ingredients={recipeData.ingredients}
        setRecipeData={setRecipeData}
      />
      <PreparationMethodSection
        preparationMethod={recipeData.preparationMethod}
        setRecipeData={setRecipeData}
      />
      <CommentsSection
        comments={recipeData.comments}
        setRecipeData={setRecipeData}
      />
      <AllergensSection />
      <IsPrivateSection />
    </form>
  );
}

// image
// Recipe Name
// Discription
// Preparation Time
// Ingredients
// Instructions
// Tags
// Yald - Number of servings the recipe makes
// Equipment Needed
// private / public
