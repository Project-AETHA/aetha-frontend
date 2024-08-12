import React from "react";
import { Button } from "@nextui-org/react";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Author Dashboard</h1>
      <div className="hidden sm:flex space-x-2">
        <Button color="success" auto ghost>
          New Story
        </Button>
        {/* Add more buttons or components here if needed */}
      </div>
    </div>
  );
};

export default DashboardHeader;
