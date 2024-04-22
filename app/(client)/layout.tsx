import "@/styles/globals.css";
import Navbar from "@/components/shared/navbar";
import Foot from "@/components/shared/footer";
import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import { cn } from "@/lib/utils";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GenerationsRecipes",
  description: "Timeless Family Recipes, Old and New.",
  keywords: "recipes, family, cooking, traditional, modern",
  authors: [{ name: "David" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.generationsrecipes.com"), // change my domain name
  openGraph: {
    title: "GenerationsRecipes",
    description: "Timeless Family Recipes, Old and New.",
    type: "website",
    url: "https://www.generationsrecipes.com", // change my domain name
    images: {
      url: "./favicon.ico",
      width: 1200,
      height: 630,
      alt: "GenerationsRecipes Logo",
    },
  },
  //   twitter: {
  //     card: "summary_large_image",
  //     site: "@your_twitter_handle",
  //     creator: "@your_twitter_handle",
  //     title: "Your Content Title",
  //     description: "A brief description of your content.",
  //     image: "URL_to_your_image",
  //  },
};

// link rel="icon" href="/favicon.ico" sizes="any"
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={cn(
          "bg-background font-sans antialiased text-gray-900 h-full w-screen bg-blue-400 flex flex-col",
          assistant.className
        )}
      >
        <SessionProvider session={session}>
          <div className="flex-grow">
            <Navbar />
            <main className="flex flex-col justify-center items-center py-8">
              {children}
            </main>
          </div>
          <Foot />
        </SessionProvider>
      </body>
    </html>
  );
}
