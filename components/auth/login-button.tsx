"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactElement;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();

  const handelOnClick = () => {
    router.push("/login");
  };

  if (mode === "modal") {
    return <>TODO: Implement this modal</>;
  }

  return (
    <span onClick={handelOnClick} className="cursor-pointer">
      {children}
    </span>
  );
}

export default LoginButton;
