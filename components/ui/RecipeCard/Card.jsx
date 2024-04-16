"use client";
import ChefPhoto from "./ChefPhoto";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Card({ recipe }) {
  return (
    <li>
      <Link href={`/p/${recipe.userId}/${recipe.recipeId}`}>
        <div className="relative gap-1 flex flex-col w-52 h-72 overflow-hidden md:w-52 lg:w-72 bg-white/25 rounded-lg">
          <h3 className="text-white text-xl">{recipe.name}</h3>
          <h6>{recipe.description}</h6>
          <h6 className="pl-4 pr-2 text-white text-base font-medium backdrop-blur-sm bg-[rgba(0,0,0,0.7)] rounded-r-lg">
            {`${recipe.preparationTime.hour}:${recipe.preparationTime.minute}`}
          </h6>
          <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20">
            <ChefPhoto userId={recipe.userId} img={recipe.ChefPhoto} />
          </div>
          <div className="relative w-full h-36 mt-auto">
            <Image
              src={
                "https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg"
              }
              fill
              alt="recipe image"
              className="object-cover bottom-0 right-0 absolute"
            />
          </div>
        </div>
      </Link>
    </li>
  );
}
