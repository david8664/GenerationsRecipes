import Image from "next/image";
import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="relative w-96 h-52">
      <Image
        src={
          "https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg"
        }
        fill
        alt="recipe image"
        className=" object-cover rounded-lg -z-10"
      />
      <Image
        src={
          "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg"
        }
        width={50}
        height={50}
        alt={"chef profile"}
        className="rounded-full z-10 absolute top-2 left-2 "
      />
      {/* src={recipe.image} */}
      <h6 className="z-10 text-white">{recipe.preparationTime}</h6>
      <h5 className="z-10 text-white">{recipe.recipeName}</h5>
    </div>
  );
  //   return <div>{recipe}</div>;
}
