import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage =
    req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register";

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  const isProtectedRoute = [
    "/dashboard",
    "/accounts",
    "/transactions",
    "/categories",
    "/recurring",
    "/reports",
  ].some((path) => req.nextUrl.pathname.startsWith(path));

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/accounts/:path*",
    "/transactions/:path*",
    "/categories/:path*",
    "/recurring/:path*",
    "/reports/:path*",
    "/login",
    "/register",
  ],
};