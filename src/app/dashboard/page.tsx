import { auth, signOut } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Bem-vindo, {session?.user?.name}!
      </p>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button
          type="submit"
          className="mt-4 rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
        >
          Sair
        </button>
      </form>
    </div>
  );
}