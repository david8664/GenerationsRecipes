import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  adminRoutes,
} from "@/routes";

import { currentRole } from "@/lib/auth";

const { auth } = NextAuth(authConfig);

// Helper function to check if the route is an admin route
const isAdminRoute = (pathname: string): boolean =>
  adminRoutes.some((route) => pathname.startsWith(route));

// Helper function to handle redirection
const redirectTo = (url: string, nextUrl: URL): Response =>
  Response.redirect(new URL(url, nextUrl));


export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAdmin = (await currentRole()) === "ADMIN";

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn) {
      if (isAdmin) {
        return redirectTo("/admin", nextUrl);
      }
      return redirectTo(DEFAULT_LOGIN_REDIRECT, nextUrl);
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return redirectTo("/auth/login", nextUrl);
  }

  if (isAdminRoute(nextUrl.pathname) && !isAdmin) {
    return redirectTo("/", nextUrl);
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
