"use client";
import React from "react";

function AddCategory({ categories, setCategories }) {
  const handleDelete = (categoryToDelete) => {
    const updatedCategories = categories.tags.filter(
      (tag) => tag !== categoryToDelete
    );
    setCategories({ ...categories, tags: updatedCategories });
  };

  return (
    <div className="border border-black rounded-2xl flex flex-row flex-wrap gap-2 w-[15%] p-2 scrollable-container">
      {categories.tags.length === 0 ? "טבלת קטגוריות:" : categories.tags.map((tag) => (
        <div key={tag} className="border border-black rounded-lg flex flex-row gap-1 p-1">
          {tag}
          <span
            className="text-red-700 cursor-pointer"
            onClick={() => handleDelete(tag)}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
}

export default AddCategory;
