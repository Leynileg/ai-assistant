import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";

import type { LoginReqBody } from "./_components";
import { LoginForm } from "./_components";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }

  const handleSubmit = async (formData: LoginReqBody) => {
    "use server";
    try {
      await auth.api.signInEmail({
        body: {
          email: formData.email,
          password: formData.password,
        },
      });
      redirect("/");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
