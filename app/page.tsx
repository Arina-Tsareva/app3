"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Pages() {
  const { data: session } = useSession();
  const [response, setResponse] = useState("");

  const fetchAPI = async (url: string, method: string = "GET") => {
    const res = await fetch(url, { method });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">API Test Page</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user?.name} ({session.user?.role})</p>
          <button className="p-2 bg-red-500 text-white" onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button className="p-2 bg-green-500 text-white" onClick={() => signIn()}>Sign In</button>
      )}

      <div className="mt-5">
        <button className="p-2 bg-blue-500 text-white" onClick={() => fetchAPI("/api/public")}>Test Public API</button>
        <button className="p-2 bg-yellow-500 text-white" onClick={() => fetchAPI("/api/protected")}>Test Protected API</button>
        <button className="p-2 bg-orange-500 text-white" onClick={() => fetchAPI("/api/protected", "POST")}>Test Protected POST</button>
        <button className="p-2 bg-purple-500 text-white" onClick={() => fetchAPI("/api/admin")}>Test Admin API</button>
      </div>

      {response && (
        <pre className="bg-gray-100 p-2 mt-5">{response}</pre>
      )}
    </div>
  );
}
