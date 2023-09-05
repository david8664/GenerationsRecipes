import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="h-12 flex justify-between relative items-center px-6 ">
      <nav className="hidden gap-6 md:flex">
        <Link href="/" className="z-20">
          <img src="/next.svg" alt="logo" width={30} height={30} />
        </Link>
        <Link
          className="font-bold text-gray-400 hover:text-blue-400"
          href="/profile"
        >
          פרופיל
        </Link>
        <Link
          className="font-bold text-gray-400 hover:text-blue-400"
          href="/category"
        >
          קטגוריה
        </Link>
        <Link
          className="font-bold text-gray-400 hover:text-blue-400"
          href="/about"
        >
          אודות
        </Link>
      </nav>
      <MobileMenu />
    </div>
  );
}
