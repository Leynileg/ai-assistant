"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const FormSchema = z.object({
  email: z.email(),
  password: z.string().trim().min(1, { message: "Field is required" }),
});

export type LoginReqBody = z.infer<typeof FormSchema>;

interface Props {
  onSubmit: (data: LoginReqBody) => Promise<void>;
}

export const LoginForm = (props: Props) => {
  const form = useForm<LoginReqBody>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginReqBody) => {
    await props.onSubmit(data).catch((error) => {
      // workaround for try/catch bug
      if (error?.message === "NEXT_REDIRECT") return;
      form.setError("root", {
        type: "manual",
        message: error.message,
      });
    });
  };

  const requestError = form.formState.errors.root;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 mx-auto">
        <fieldset disabled={form.formState.isSubmitting} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormDescription>This is your secret email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormDescription>This is your secret password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            <Loader2Icon
              className={cn(
                "animate-spin hidden",
                form.formState.isSubmitting && "block"
              )}
            />
            Log in
          </Button>
          {requestError && <FormMessage>{requestError.message}</FormMessage>}
        </fieldset>
      </form>
    </Form>
  );
};
