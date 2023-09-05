"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import recipes from "../../Data/recipesDb.json";
import { useState, useEffect } from "react";
import RecipeCard from "@/components/ui/RecipeCard";

export default function search() {
  const searchResult = useSearchParams();
  const [dataResult, setDataResult] = useState([]);
  const searchBy = searchResult.get("searchby").trim();

  useEffect(() => {
    //   const res = await fetch(`url`);
    //   if (!res.ok) throw new Error`Fetch failed`();
    //   const search = res.json();
    const search = recipes; // don't forget to remove it
    const filtered = search.filter((recipe) => recipe.name.includes(searchBy));
    setDataResult(filtered);
  }, [searchBy]);

  return (
    <div className="flex flex-row flex-wrap gap-6 items-center justify-between p-24">
      {dataResult.map((recipe, i) => (
        <RecipeCard recipe={recipe} key={i} />
      ))}
    </div>
  );
}
