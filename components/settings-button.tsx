"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface SettingsButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
const SettingsButton=({
  children,
  mode = "redirect",
  asChild,
}: SettingsButtonProps) =>{
  const router = useRouter();

  const onClick = () => {
    router.push("/settings");
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}

export default SettingsButton;
