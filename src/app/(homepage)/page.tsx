import { Metadata } from "next";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";

import { ChatCard } from "./_components/";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const handleLogout = async () => {
    "use server";
    await auth.api.signOut({
      headers: await headers(),
    });
  };

  return (
    <ChatCard
      userName={session!.user.name}
      userEmail={session!.user.email}
      onLogoutClick={handleLogout}
    />
  );
}

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the home page",
};
