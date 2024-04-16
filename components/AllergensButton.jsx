// components/AllergensButton.jsx
import React from "react";

const AllergensButton = ({ allergenName, allergens, setAllergens }) => {
  return (
    <div className="flex gap-2 p-2 border border-gray-300 rounded-md">
      <button
      type="button"
        className={`border rounded-md p-1 border-gray-300 ${
          allergens.includes(allergenName) && "bg-red-400 text-white"
        }`}
        onClick={() => {
          setAllergens(Array.from(new Set([...allergens, allergenName])));
        }}
      >
        כן
      </button>
      <button
      type="button"
        className={`border rounded-md p-1 border-gray-300 ${
          !allergens.includes(allergenName) && "bg-green-400 text-white"
        }`}
        onClick={() => {
          setAllergens(allergens.filter((name) => name !== allergenName));
        }}
      >
        לא
      </button>
    </div>
  );
};

export default AllergensButton;
