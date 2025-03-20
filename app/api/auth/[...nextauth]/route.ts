import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma"; 

export const authOptions = {
  providers: [
  ],
  adapter: PrismaAdapter(prisma),
};

export default NextAuth(authOptions);
