"use client";
import { useChat } from "@ai-sdk/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultChatTransport } from "ai";
import { ArrowUpIcon } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  message: z.string().trim().min(1),
});

export const ChatForm = () => {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  const form = useForm({
    resolver: zodResolver(FormSchema),

    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  const handleSubmit = async () => {
    const message = form.getValues("message");
    form.setValue("message", "");
    await sendMessage({
      parts: [{ type: "text", text: message }],
    });
  };

  return (
    <>
      <CardContent>
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                message.role === "user"
                  ? "bg-primary text-primary-foreground ml-auto"
                  : "bg-muted"
              )}
            >
              {message.parts.map((part) => {
                if (part.type === "text") {
                  return <span key={`${message.id}-text`}>{part.text}</span>;
                }
              })}
            </div>
          ))}
          {status === "submitted" && (
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted animate-pulse">
              <span>...</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="sticky bottom-0 z-10 bg-card px-6 py-4 mt-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="relative w-full"
          >
            <fieldset disabled={form.formState.isSubmitting}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="flex-1 pr-10"
                        placeholder="Type your message..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute top-1/2 right-2 size-6 -translate-y-1/2 rounded-full"
                disabled={!form.formState.isValid}
              >
                <ArrowUpIcon className="size-3.5" />
                <span className="sr-only">Send</span>
              </Button>
            </fieldset>
          </form>
        </Form>
      </CardFooter>
    </>
  );
};
