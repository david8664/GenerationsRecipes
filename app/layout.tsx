import "./globals.css";
import type { Metadata } from "next";
import { Assistant } from "next/font/google";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
      <body className={`${assistant.className} bg-gray-20 text-gray-950 `}>
        <div className="flex flex-col items-center justify-between "></div>
        <main className="p-4 ">{children}</main>
      </body>
    </html>
  );
}
