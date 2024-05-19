import RoleGate from "@/components/auth/role-gate";
import React from "react";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoleGate allowedRole="ADMIN">
      <div className="flex flex-col gap-y-4">
        <nav></nav>
        {children}
      </div>
    </RoleGate>
  );
}
