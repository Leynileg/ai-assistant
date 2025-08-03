import { LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

import { ChatForm } from "./chat-form";

interface Props {
  userEmail: string;
  userName: string;
  onLogoutClick?: () => Promise<void>;
}

export const ChatCard = async ({
  userEmail,
  userName,
  onLogoutClick,
}: Props) => {
  return (
    <Card className="h-[90vh] overflow-scroll relative py-0">
      <CardHeader className="flex flex-row items-center justify-between sticky top-0 z-10 bg-card p-6">
        <div className="flex items-center gap-4">
          <Avatar className="border">
            <AvatarImage src="/avatars/01.png" alt="Image" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm leading-none font-medium">{userName}</p>
            <p className="text-muted-foreground text-xs">{userEmail}</p>
          </div>
        </div>
        <div>
          <Button variant="ghost" onClick={onLogoutClick}>
            <LogOutIcon />
            <span className="text-xs">Logout</span>
          </Button>
        </div>
      </CardHeader>
      <ChatForm />
    </Card>
  );
};
