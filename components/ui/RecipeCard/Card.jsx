import ChefPhoto from "./ChefPhoto";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// add recipe.img and recipe.chefProfile

export default function Card({ recipe }) {
  return (
    <Link href={`/${recipe.chefName}/recipe/${recipe.id}`}>
      <li className="relative w-52 h-72 md:w-52 lg:w-72 bg-white/25 rounded-lg">
        <h3 className="text-white text-xl border-2 border-blue-500">
          {recipe.name}
        </h3>
        <h6 className="border-2 border-red-900 pl-4 pr-2  text-white text-base font-medium backdrop-blur-sm bg-[rgba(0,0,0,0.7)] rounded-r-lg">
          {recipe.preparationTime}
        </h6>
        <ChefPhoto
          chefName={recipe.chefName}
          img={
            "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg"
          }
        />
        <div className="relative"></div>
        <Image
          src={
            "https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg"
          }
          // height={320}
          // width={208}
          layout="fill"
          alt="recipe image"
          className="object-contain bottom-0 right-0 absolute"
        />
      </li>
    </Link>
  );
}
