"use client";
import { FaUser } from "react-icons/fa";
import { ExitIcon, GearIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import useCurrentUser from "@/hooks/use-current-user";
import LogoutButton from "@/components/auth/logout-button";
import SettingsButton from "@/components/settings-button";
import CreateRecipeButton from "../create-recipe-button";

const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} alt="User Avatar" />
          <AvatarFallback className="bg-black">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <CreateRecipeButton>
          <DropdownMenuItem className="hover:cursor-pointer">
            <PlusIcon className="h-4 w-4 mr-auto" />
            יצירת מתכון
          </DropdownMenuItem>
        </CreateRecipeButton>
        <SettingsButton>
          <DropdownMenuItem className="hover:cursor-pointer">
            <GearIcon className="h-4 w-4 mr-auto" />
            הגדרות
          </DropdownMenuItem>
        </SettingsButton>
        <LogoutButton>
          <DropdownMenuItem className="hover:cursor-pointer">
            <ExitIcon className="h-4 w-4 mr-auto" />
            התנתקות
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserButton;
