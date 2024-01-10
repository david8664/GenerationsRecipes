// components/CreateRecipeForm/RecipeNameSection.jsx

import React from "react";

function RecipeNameSection({ name, setRecipeData }) {
  const handleInputChange = (field, e) => {
    setRecipeData((prevData)=>({ ...prevData, name: e.target.value }));
  };
  return (
    <div className="relative h-6 w-64 right-[40%] rounded-md bg-white pr-2">
      <label htmlFor="name">שם המתכון:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => handleInputChange("name", e)}
        className="pr-1 outline-none"
      />
    </div>
  );
}

export default RecipeNameSection;
