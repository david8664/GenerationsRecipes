"use client";

import Recipes from "@/components/recipes";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.trim() ?? "";
  return (
    <div className="w-2/3">
      <Recipes search={search} />
    </div>
  );
}
