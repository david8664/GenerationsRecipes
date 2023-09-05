import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <li className="relative w-96 h-52 md:w-52 lg:w-72">
      <Link href={`/recipe/${recipe.id}`}>
        <Image
          src={
            "https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg"
          }
          fill
          alt="recipe image"
          className=" object-cover aspect-square rounded-lg -z-10"
        />
      </Link>
      <Image
        src={
          "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg"
        }
        width={50}
        height={50}
        alt={"chef profile"}
        className="rounded-full z-10 absolute top-2 left-2 object-cover aspect-square"
      />
      {/* src={recipe.image} */}
      <h3 className="z-10 text-white text-xl">{recipe.name}</h3>
      <h6 className="z-10 text-white text-lg">{recipe.preparationTime}</h6>
    </li>
  );
  //   return <div>{recipe}</div>;
}
