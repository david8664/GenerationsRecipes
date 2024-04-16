// components/CreateRecipeForm/RecipeNameSection
import React from "react";

export default function RecipeNameSection({ name, setRecipeData }) {
  const handleInputChange = (e) => {
    setRecipeData((prevData) => ({ ...prevData, name: e.target.value }));
  };

  return (
    <input
      type="text"
      name="name"
      id="name"
      required
      value={name}
      maxLength={50}
      onChange={handleInputChange}
      className="w-80 p-2 focus:outline-none font-bold bg-transparent border-b-2 border-gray-400"
      placeholder="הזן שם המתכון"
    />
  );
}
