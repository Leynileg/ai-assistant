import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";

import { ChatForm } from "./chat-form";

interface Props {
  userEmail: string;
}

export const ChatCard = async ({ userEmail }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="flex items-center gap-4">
          <Avatar className="border">
            <AvatarImage src="/avatars/01.png" alt="Image" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm leading-none font-medium">Lorem Ipsum</p>
            <p className="text-muted-foreground text-xs">{userEmail}</p>
          </div>
        </div>
      </CardHeader>
      <ChatForm />
    </Card>
  );
};
