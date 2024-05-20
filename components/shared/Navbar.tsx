"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon } from "@radix-ui/react-icons";
import { HiOutlineLogin } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/use-current-user";
import MobileMenu from "@/components/shared/mobile-menu";
import SearchBar from "@/components/shared/search-bar";
import UserButton from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();
  const userId = useCurrentUser()?.id;
  return (
    <header className="h-16 w-full flex justify-between items-center px-6 bg-white shadow-sm">
      <nav className="hidden gap-6 md:flex">
        {userId ? (
          <UserButton />
        ) : (
          <Button
            asChild
            variant={pathname === "/auth/login" ? "default" : "outline"}
          >
            <Link
              href="/auth/login"
              aria-label="Login"
              className="font-semibold text-gray-700 hover:text-green-500 cursor-pointer"
            >
              <span className="pl-2">התחברות</span>
              <HiOutlineLogin size={"23"} />
            </Link>
          </Button>
        )}

        <div className="flex gap-x-2">
          <Button asChild variant={pathname === "/" ? "default" : "outline"}>
            <Link
              href="/"
              aria-label="Home"
              className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer gap-1"
            >
              <HomeIcon />
              דף הבית
            </Link>
          </Button>
          <Button
            asChild
            variant={pathname === `/p/${userId}` ? "default" : "outline"}
          >
            <Link href={`/p/${userId}`} aria-label="Profile">
              <span className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
                פרופיל
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
        <SearchBar />
      </nav>
      <MobileMenu />
    </header>
  );
};
