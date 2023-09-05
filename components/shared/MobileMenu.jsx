"use client";
import Link from "next/link";
import { React, useState } from "react";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";

export default function MobileMenu() {
  const [isClose, setIsClose] = useState(true);
  return (
    <div className="md:hidden flex z-10 justify-between w-full">
      <button onClick={() => setIsClose((prev) => !prev)}>
        {isClose ? <HiMenuAlt3 /> : <HiMenu />}
      </button>
      <nav
        className={`
        ${!isClose ? "absolute" : "hidden"}
        absolute left-0 right-0 top-12 shadow z-50 flex flex-col gap-4 p-4 backdrop-blur bg-white/30`}
      >
        <Link href="/profile">פרופיל</Link>
        <Link href="/about">אודות</Link>
        <Link href="/category">קטגוריה</Link>
      </nav>
      <Link href="/">
        <img src="/next.svg" alt="logo" width={30} height={30} />
      </Link>
      {!isClose && (
        <div
          className="w-screen h-screen absolute top-0 right-0"
          onClick={(e) => {
            console.log("clicking on");
            e.stopPropagation();
            setIsClose(true);
          }}
        />
      )}
    </div>
  );
}
