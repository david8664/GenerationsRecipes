"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { UserRole } from "@prisma/client";
import FormError from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentUser()?.role;

  if (role !== allowedRole) {
    return <FormError message="אין לך הרשאה לצפות בתוכן זה!" />;
  }
  return <>{children}</>;
};
