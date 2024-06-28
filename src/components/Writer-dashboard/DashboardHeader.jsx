import { Button } from "@nextui-org/react";

const DashboardHeader = () => {
  return (
    <div className="header">
      <h1>Author Dashboard</h1>
      <Button>New Story</Button>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default DashboardHeader;
