import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{
 *   children: React.ReactNode;
 * }} param0
 * @param {React.ReactNode} param0.children
 * @returns {unknown}
 */
export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }

  return <section>{children}</section>;
}
