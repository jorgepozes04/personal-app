import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // authorize() fica só na versão completa (auth.ts),
      // pois precisa consultar o banco — aqui é só a declaração do provider
      authorize: async () => null,
    }),
  ],
} satisfies NextAuthConfig;