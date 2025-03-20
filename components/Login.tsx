"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p>Вошли как {session.user?.email}</p>
        <img src={session.user?.image ?? ""} alt="Avatar" className="w-16 h-16 rounded-full" />
        <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded">
          Выйти
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn("google")} className="px-4 py-2 bg-blue-500 text-white rounded">
      Войти через Google
    </button>
  );
}
