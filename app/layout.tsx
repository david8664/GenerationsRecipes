import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Foot from "@/components/shared/Foot";
import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import SearchSection from "@/components/ui/SearchSection";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GenerationsRecipes",
  description: "Timeless Family Recipes, Old and New.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.className}`}>
        <Navbar />
        <SearchSection />
        <main>{children}</main>
        <Foot />
      </body>
    </html>
  );
}
