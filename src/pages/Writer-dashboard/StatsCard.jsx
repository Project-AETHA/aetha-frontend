import { Card } from "@nextui-org/react";
import { BookOpen, FileText, AlignJustify, Star, Users } from "lucide-react";  // Import icons from lucide-react

const StatsCard = ({ title, value, Icon }) => {
  return (
    <Card isHoverable variant="bordered" className="stats-card">
      <div className="flex items-center p-4">
        {Icon && <Icon size={34} />}
        <div className="pl-4">
          <h4 className="text-xl font-semibold">{title}</h4>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-3xl font-bold">{value}</h2>
      </div>
    </Card>
  );
};

// const StatsGrid = () => {
//   const stats = [
//     { title: "Fictions", value: 0, Icon: BookOpen },
//     { title: "Total Chapters", value: 0, Icon: FileText },
//     { title: "Total Words", value: 0, Icon: AlignJustify },
//     { title: "Reviews Received", value: 0, Icon: Star },
//     { title: "Unique Followers", value: 0, Icon: Users }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {stats.map((stat, index) => (
//         <StatsCard key={index} title={stat.title} value={stat.value} Icon={stat.Icon} />
//       ))}
//     </div>
//   );
// };

export default StatsCard;
