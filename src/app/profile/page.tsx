import { Client } from "./client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function action() {
  "use server";
  revalidatePath("/profile");
  redirect("/");
}
export default function Profile() {
  cookies();
  const time = new Date().toISOString();
  return (
    <main>
      <h1 className="font-bold text-3xl">Profile page</h1>
      <form action={action}>
        <Client time={time} />
        <div>time: {time}</div>
        <button
          type="submit"
          className="bg-indigo-600 px-4 py-1 text-white mt-5"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export const dynamic = "force-dynamic";
