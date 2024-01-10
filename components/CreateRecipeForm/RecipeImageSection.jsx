// components/CreateRecipeForm/RecipeImageSection.jsx

import { MdImageSearch } from "react-icons/md";
import React, { useRef } from "react";

function RecipeImageSection({ setRecipeData, illustrationImage }) {
  const fileInputRef = useRef(null);
  const onImageChange = (event) => {
    if (event.target.files) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setRecipeData((prevData) => ({
        ...prevData,
        illustrationImage: imageUrl,
      }));
    }
  };
  const handleSelectImage = () => fileInputRef.current.click();
  return (
    <div className="w-full h-1/6 relative bg-slate-300">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={onImageChange}
        className="filetype hidden"
      />
      {!illustrationImage ? (
        <div className="absolute right-[40%] w-1/5 h-full">
          <MdImageSearch
            onClick={handleSelectImage}
            className="w-full h-full cursor-pointer fill-slate-700"
          />
        </div>
      ) : (
        <img
          src={illustrationImage}
          alt="Recipe image"
          className="object-cover w-full h-full cursor-pointer"
          onClick={handleSelectImage}
        />
      )}
    </div>
  );
}

export default RecipeImageSection;
