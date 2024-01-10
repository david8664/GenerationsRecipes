// components/CreateRecipeForm/IsPrivateSection.jsx

import React from "react";

export default function IsPrivateSection({ isPrivate, setIsPrivate }) {
  return (
    <div className="flex gap-2 p-2">
      <label>זה מתכון סודי:</label>
      <button
        className={`border rounded-md p-1 ${
          isPrivate && "bg-red-400  text-white"
        }`}
        onClick={() => {
          setIsPrivate(true);
        }}
      >
        כן
      </button>
      <button
        className={`border rounded-md p-1 ${
          !isPrivate && "bg-green-400  text-white"
        }`}
        onClick={() => {
          setIsPrivate(false);
        }}
      >
        לא
      </button>
    </div>
  );
}
