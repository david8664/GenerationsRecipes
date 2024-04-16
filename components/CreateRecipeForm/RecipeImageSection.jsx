import { MdImageSearch } from "react-icons/md";
import React, { useRef } from "react";
import Image from "next/image";
import readFileAsBase64 from "@/Functions/utils/readFileAsBase64";

function RecipeImageSection({ illustrationImage, setIllustrationImage }) {
  const fileInputRef = useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIllustrationImage(await readFileAsBase64(file));
  };

  const handleSelectImage = () => fileInputRef.current.click();

  return (
    <div
      className="relative border-2 w-full h-32 flex cursor-pointer bg-slate-500 rounded-b-lg"
      onClick={handleSelectImage}
    >
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      {!illustrationImage ? (
        <div className="w-full flex flex-col justify-center items-center">
          <MdImageSearch className="text-blue-700 opacity-25" size={96} />
          <span className="text-lg text-slate-400">בחר תמונה</span>
        </div>
      ) : (
        <Image
          src={illustrationImage}
          alt="תמונת מתכון"
          fill
          className="rounded-b-lg"
        />
      )}
    </div>
  );
}

export default RecipeImageSection;
