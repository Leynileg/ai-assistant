import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import type { LoginReqBody } from "./_components";
import { LoginForm } from "./_components";

export default async function LoginPage() {
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

  return <LoginForm onSubmit={handleSubmit} />;
}
