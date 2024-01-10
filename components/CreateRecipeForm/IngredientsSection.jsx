// components/CreateRecipeForm/IngredientsSection.jsx
import React from "react";
import measurementUnit from "@/Data/measurementUnit.json"; // DB test only

function IngredientsSection({ ingredients, setRecipeData }) {
  const handleInputChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setRecipeData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
  };

  const handleUnitChange = (index, value) => {
    handleInputChange(index, "unit", value);
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setRecipeData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
  };

  const addIngredient = () => {
    setRecipeData((prevData) => ({
      ...prevData,
      ingredients: [
        ...prevData.ingredients,
        { name: "", amount: "", unit: "" },
      ],
    }));
  };

  return (
    <div>
      <label htmlFor="Ingredients">מצרכים:</label>

      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="שם"
            value={ingredient.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
            className="pr-2 outline-none"
          />

          <input
            type="text"
            placeholder="כמות"
            value={ingredient.amount}
            onChange={(e) => handleInputChange(index, "amount", e.target.value)}
            className="pr-2 outline-none"
          />

          <select
            value={ingredient.unit}
            onChange={(e) => handleUnitChange(index, e.target.value)}
            className="w-[4%] text-center m-4 border rounded-md"
          >
            {measurementUnit.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>

          <button onClick={() => removeIngredient(index)}>X</button>
        </div>
      ))}

      <button
        onClick={addIngredient}
        className="border border-black p-1 rounded-r-md"
      >
        הוספת מצרך
      </button>
    </div>
  );
}

export default IngredientsSection;
