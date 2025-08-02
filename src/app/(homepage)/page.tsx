import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ChatCard } from "./_components/";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return <ChatCard userEmail={session!.user.email} />;
}
