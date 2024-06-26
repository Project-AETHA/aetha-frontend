import { Card } from "@nextui-org/react";

const StatsCard = ({ title, value }) => {
  return (
    <Card className="stats-card">
      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
      <style jsx>{`
        .stats-card {
          margin: 10px;
          padding: 20px;
          text-align: center;
          background: #fafafa;
        }
      `}</style>
    </Card>
  );
};

export default StatsCard;
