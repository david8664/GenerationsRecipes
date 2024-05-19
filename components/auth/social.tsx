"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const handelOnClick = (provider: "google" | "facebook") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex items-center w-full gap-x-2 justify-center">
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => handelOnClick("google")}
      >
        <FcGoogle size={32} />
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => handelOnClick("facebook")}
      >
        <FaFacebook size={32} color={"#1877f2"} />
      </Button>
    </div>
  );
};
export default Social;
