"use client";

import useCurrentUser from "@/hooks/use-current-user";
import { useSession } from "next-auth/react";
import FormError from "@/components/form-error";
import LogoutButton from "@/components/auth/logout-button";

interface RoleGateProps {
  children: React.ReactNode;
}

const CreateRecipeGate = ({ children }: RoleGateProps) => {
  const accountType = useSession().data?.user.role;
  console.log(accountType);
  if (accountType !== "USER" && accountType !== "ADMIN") {
    return (
      <div>
        <FormError message="אפשרות זו ניתן למשתמשים רשומים בלבד!" />
        <LogoutButton>
          <p className="text-blue-400">התחברות לחשבון</p>
        </LogoutButton>
      </div>
    );
  }
  return <>{children}</>;
};
export default CreateRecipeGate;
