import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface User {
    role: string; 
  }
}
