"use client";
import Link from "next/link";
import React from "react";
import MobileMenu from "@/components/shared/MobileMenu";
import SearchSection from "@/components/shared/SearchSection";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { UserButton } from "../auth/user-button";
import { HomeIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="h-16 w-full flex justify-between items-center px-6 bg-white shadow-sm">
      <nav className="hidden gap-6 md:flex">
        <UserButton />

        <div className="flex gap-x-2">
          <Button asChild variant={pathname === "/" ? "default" : "outline"}>
            <Link href="/" aria-label="Home" className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
              <HomeIcon className="ml-1"/>
              דף הבית
            </Link>
          </Button>
          <Button asChild variant={pathname === "/p" ? "default" : "outline"}>
            <Link href="/p" aria-label="Profile">
              <span className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
                פרופיל
              </span>
            </Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/search" ? "default" : "outline"}
          >
            <Link href="/search" aria-label="Advanced Search">
              <span className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
                חיפוש מתקדם
              </span>
            </Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/about" ? "default" : "outline"}
          >
            <Link href="/about" aria-label="About Us">
              <span className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
                אודות
              </span>
            </Link>
          </Button>
        </div>
      </nav>
      <MobileMenu />
      <SearchSection />
    </header>
  );
}
