import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="font-bold text-3xl">Home page</h1>

      <Link
        href="/profile"
        className="inline-block text-indigo-700 font-semibold underline mt-4"
      >
        Go to profile page
      </Link>
    </main>
  );
}
