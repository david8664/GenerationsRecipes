import "@/styles/globals.css";
import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "@/components/shared/navbar";
import Foot from "@/components/shared/footer";
import MobileMenu from "@/components/shared/mobile-menu";

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
  metadataBase: new URL("https://generations-recipes.vercel.app"), // change my domain name
  openGraph: {
    title: "GenerationsRecipes",
    description: "Timeless Family Recipes, Old and New.",
    type: "website",
    url: "https://generations-recipes.vercel.app", // change my domain name
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
          "bg-background font-sans antialiased text-neutral-200 h-full w-screen bg-zinc-800 flex flex-col",
          assistant.className
        )}
      >
        <SessionProvider session={session}>
          <div className="flex-grow">
            <header className="h-16 w-full flex justify-between items-center px-6 bg-white shadow-sm">
              <Navbar />
              <MobileMenu />
            </header>
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
