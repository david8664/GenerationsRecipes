"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { UserButton } from "../auth/user-button";
import { HomeIcon } from "@radix-ui/react-icons";

export default function MobileMenu() {
  const [isClose, setIsClose] = useState<boolean>(true);
  const pathname = usePathname();
  return (
    <div className="md:hidden flex z-10 justify-between w-full p-4">
      <UserButton />
      <button onClick={() => setIsClose((prev) => !prev)}>
        {isClose ? <HiMenu /> : <HiMenuAlt3 />}
      </button>
      <nav
        onClick={() => setIsClose(true)}
        className={`
        ${isClose ? "hidden" : "absolute"}
        absolute left-0 right-0 top-12 shadow z-50 flex flex-col gap-4 p-4 backdrop-blur bg-white/30`}
      >
        <Button asChild variant={pathname === "/p" ? "default" : "outline"}>
          <Link href={"/p"}>פרופיל</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/search" ? "default" : "outline"}
        >
          <Link href="/search">חיפוש מתקדם</Link>
        </Button>
        <Button asChild variant={pathname === "/about" ? "default" : "outline"}>
          <Link href="/about">אודות</Link>
        </Button>
      </nav>
      <Button asChild variant={pathname === "/" ? "default" : "outline"}>
        <Link
          href="/"
          aria-label="Home"
          className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer"
        >
          <HomeIcon className="ml-1" />
          דף הבית
        </Link>
      </Button>

      {!isClose && (
        <div
          className="w-screen h-screen absolute top-0 right-0"
          onClick={(e) => {
            e.stopPropagation();
            setIsClose(true);
          }}
        />
      )}
    </div>
  );
}
