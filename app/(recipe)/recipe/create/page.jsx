"use client";
import React, { useState } from "react";

export default function CreateRecipe() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [tags, setTags] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [newProduct, setNewProduct] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleTagInputChange = (e) => {
    setNewTag(e.target.value);
  };

  const handleProductInputChange = (e) => {
    setNewProduct(e.target.value);
  };

  const addTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const addProduct = () => {
    if (newProduct.trim()) {
      setGroceryList([...groceryList, newProduct]);
      setNewProduct("");
    }
  };

  const removeTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const removeProduct = (index) => {
    const updatedGroceryList = [...groceryList];
    updatedGroceryList.splice(index, 1);
    setGroceryList(updatedGroceryList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      image,
      description,
      preparationTime,
      ingredients,
      instructions,
      yield: recipeYield,
      isPrivate,
    } = formData;

    try {
      if (
        !name ||
        !image ||
        !description ||
        !preparationTime ||
        !ingredients ||
        !instructions ||
        recipeYield === undefined
      )
        throw "All fields are required.";
      // Add your authentication logic here
    } catch (err) {
      setError(err);
    }

    console.log(formData);
  };

  return (
    <div className="h-full flex justify-center items-center bg-slate-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-8 shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">הוספת מתכון</h2>
        <input
          type="text"
          id="name"
          placeholder="שם המתכון"
          className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="image"
          placeholder="קישור לתמונה"
          className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          id="description"
          placeholder="תיאור (70 תווים todo)"
          cols="46"
          rows="5"
          className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="number"
          name="preparationTime"
          id="preparationTime"
          min={0}
          placeholder="זמן הכנה (לדקה)"
          className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
          value={formData.preparationTime}
          onChange={handleInputChange}
        />
        <div className="ml-8">
          <h3 className="text-2xl font-bold mb-4 text-center">רשימת מצרכים</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="הוסף מצרך"
              className="mb-2 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
              value={newProduct}
              onChange={handleProductInputChange}
            />
            <button
              type="button"
              className="bg-green-500 text-white rounded-lg px-4 py-2 mx-auto block hover:bg-green-700"
              onClick={addProduct}
            >
              הוסף מצרך
            </button>
          </div>
          <ul>
            {groceryList.map((product, index) => (
              <li key={index} className="mb-2">
                {product}
                <button
                  type="button"
                  className="bg-red-500 text-white rounded-lg px-2 py-1 ml-2"
                  onClick={() => removeProduct(index)}
                >
                  מחק
                </button>
              </li>
            ))}
          </ul>
        </div>

        <textarea
          name="instructions"
          id="instructions"
          cols="46"
          rows="5"
          placeholder="הוראות הכנה"
          className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
          value={formData.instructions}
          onChange={handleInputChange}
        ></textarea>
        <div className="ml-8">
          <h3 className="text-2xl font-bold mb-4 text-center">רשימת תגיות</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="הוסף תגית"
              className="mb-2 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
              value={newTag}
              onChange={handleTagInputChange}
            />
            <button
              type="button"
              className="bg-green-500 text-white rounded-lg px-4 py-2 mx-auto block hover:bg-green-700"
              onClick={addTag}
            >
              הוסף תגית
            </button>
          </div>
          <ul>
            {tags.map((tag, index) => (
              <li key={index} className="mb-2">
                {tag}
                <button
                  type="button"
                  className="bg-red-500 text-white rounded-lg px-2 py-1 ml-2"
                  onClick={() => removeTag(index)}
                >
                  מחק
                </button>
              </li>
            ))}
          </ul>
        </div>
        <input
          type="number"
          name="yield"
          id="yield"
          min={1}
          placeholder="כמות מנות שיצאו"
          className="mb-4 w-full rounded-lg p-2 text-center border border-gray-300 focus:outline-none"
          value={formData.yield}
          onChange={handleInputChange}
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="isPrivate"
            id="isPrivate"
            className="mr-2"
            checked={formData.isPrivate}
            onChange={handleInputChange}
          />
          <label htmlFor="isPrivate">המתכון פרטי?</label>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white rounded-lg px-4 py-2 mx-auto block hover:bg-green-700"
        >
          הוסף מתכון
        </button>
        {error && <h2 className="text-red-700">{error}</h2>}
      </form>
    </div>
  );
}
