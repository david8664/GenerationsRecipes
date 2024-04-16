import React from "react";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-y-4"><nav></nav>{children}</div>;
}
