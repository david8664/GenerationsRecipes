"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiMenuAlt3, HiOutlineLogin } from "react-icons/hi";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/auth/user-button";
import useCurrentUser from "@/hooks/use-current-user";
import SearchBar from "@/components/shared/search-bar";

export const MobileMenu = () => {
  const [isClose, setIsClose] = useState<boolean>(true);
  const pathname = usePathname();
  const userId = useCurrentUser()?.id;
  return (
    <div className="md:hidden flex z-40 justify-evenly w-full p-4">
      {userId && <UserButton />}

      <button onClick={() => setIsClose((prev) => !prev)}>
        {isClose ? <HiMenu /> : <HiMenuAlt3 />}
      </button>

      {!userId && (
        <Button
          asChild
          variant={pathname === "/auth/login" ? "default" : "outline"}
        >
          <Link
            href="/auth/login"
            aria-label="Login"
            className="font-semibold text-gray-700 hover:text-green-500 cursor-pointer"
          >
            <HiOutlineLogin size={"23"} />
          </Link>
        </Button>
      )}
      <SearchBar />
      <nav
        className={`
        ${isClose ? "hidden" : "absolute"}
        absolute left-0 right-0 top-12 shadow z-50 flex flex-col gap-4 p-4 backdrop-blur bg-white/30`}
      >
        <div onClick={() => setIsClose(true)} className="flex flex-col gap-4">
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
          <Button
            asChild
            variant={pathname === `p/${userId}` ? "default" : "outline"}
          >
            <Link href={`p/${userId}`}>פרופיל</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/about" ? "default" : "outline"}
          >
            <Link href="/about">אודות</Link>
          </Button>
        </div>
      </nav>

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
};
export default MobileMenu;
