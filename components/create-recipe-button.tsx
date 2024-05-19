"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CreateRecipeButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
const CreateRecipeButton=({
  children,
  mode = "redirect",
  asChild,
}: CreateRecipeButtonProps) =>{
  const router = useRouter();

  const onClick = () => {
    router.push("/r/create");
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}

export default CreateRecipeButton;
