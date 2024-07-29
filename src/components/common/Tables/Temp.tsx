import React from 'react';
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

interface Props {
  message: string;
}

const TestComponent: React.FC<Props> = ({ message }) => {
  return (
    <div>
        <Toaster />
      <h1>{message}</h1>
      <Button
      variant="outline"
      onClick={() =>
      {
        console.log("Button Clicked");
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
      }
    >
      Show Toast
    </Button>
    </div>
  );
};

export default TestComponent;
