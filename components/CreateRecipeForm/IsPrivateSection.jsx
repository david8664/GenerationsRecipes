// components/CreateRecipeForm/IsPrivateSection.jsx

import React from "react";

export default function IsPrivateSection({ isPrivate, setIsPrivate }) {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      <label>זה מתכון סודי:</label>
      <div className="flex gap-2 border border-gray-300 rounded-md p-2">
        <button
          type="button"
          className={`border rounded-md p-1 border-gray-300 ${
            isPrivate && "bg-red-400  text-white"
          }`}
          onClick={() => {
            setIsPrivate(true);
          }}
        >
          כן
        </button>
        <button
          type="button"
          className={`border rounded-md p-1  border-gray-300 ${
            !isPrivate && "bg-green-400  text-white"
          }`}
          onClick={() => {
            setIsPrivate(false);
          }}
        >
          לא
        </button>
      </div>
    </div>
  );
}
