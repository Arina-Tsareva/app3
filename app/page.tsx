import Login from "@/components/Login";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">OAuth Login</h1>
      <Login />
    </main>
  );
}
