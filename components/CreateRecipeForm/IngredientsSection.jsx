// components/CreateRecipeForm/IngredientsSection.jsx
import React from "react";

function IngredientsSection({ ingredients, setIngredients }) {
  const measurementUnit = ["גרם", "ליטר"];
  const handleInputChange = (index, field, value) => {
    const updatedIngredients = ingredients;
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleUnitChange = (index, value) => {
    handleInputChange(index, "unit", value);
  };

  const removeIngredient = (index) => {
    const updatedIngredients = ingredients;
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "", unit: "" }]);
  };

  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold mb-4">מצרכים:</h3>
      <div className="flex flex-col gap-y-4">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 items-center space-x-2 border border-gray-300 p-2 rounded-md"
          >
            <input
              type="text"
              placeholder="שם"
              required
              value={ingredient.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              className="flex-1 px-2 py-1 bg-transparent rounded-md outline-none border border-gray-300"
            />
            <input
              type="number"
              step={0.1}
              required
              placeholder="כמות"
              value={ingredient.amount}
              onChange={(e) =>
                handleInputChange(index, "amount", e.target.value)
              }
              className="flex-1 px-2 py-1 bg-transparent rounded-md outline-none border border-gray-300"
            />
            <select
              value={ingredient.unit}
              onChange={(e) => handleUnitChange(index, e.target.value)}
              className="flex-1 px-2 py-1 rounded-md bg-transparent border border-gray-300"
            >
              {measurementUnit.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => removeIngredient(index)}
              className="px-2 text-white bg-red-400 hover:bg-red-500 rounded-full"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addIngredient}
        className="mt-4 inline-block bg-blue-500 text-white py-2 mr-3 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        הוספת מצרך
      </button>
    </section>
  );
}

export default IngredientsSection;
