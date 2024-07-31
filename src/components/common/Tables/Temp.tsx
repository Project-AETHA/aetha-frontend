import React from 'react';
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

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
    <Doughnut className='max-w-[300px] max-h-[500px]' data={data} />
    </div>
  );
};

export default TestComponent;
