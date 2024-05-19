"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BuckButtonProps {
  href: string;
  label: string;
}

const BackButton = ({ href, label }: BuckButtonProps) => {
  return (
    <Button variant={"link"} className="font-normal w-full" size="sm">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
export default BackButton;
