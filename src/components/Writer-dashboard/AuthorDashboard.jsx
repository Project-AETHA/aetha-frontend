import React from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Book, BarChart2, ThumbsUp, Users, Star } from "lucide-react";
import DashboardHeader from "./DashboardHeader";
import { Card } from "@nextui-org/react";

const booksData = [
  {
    id: 1,
    img: "https://via.placeholder.com/150",
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150",
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150",
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  // Add more book objects as needed...
];

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

const AuthorDashboard = () => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<BarChart2 />} text="Author Dashboard" active />
        <SidebarItem icon={<Book />} text="Submissions" />
        <SidebarItem icon={<Star />} text="Notes" />
        <SidebarItem icon={<Users />} text="Writathon" />
        <SidebarItem icon={<ThumbsUp />} text="Invitations" />
      </Sidebar>
      <div className="flex-grow p-5">
        <DashboardHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <StatsCard title="Total Stories" value="10" Icon={Book} />
          <StatsCard title="Total Chapters" value="500" Icon={BarChart2} />
          <StatsCard title="Reviews Received" value="500" Icon={Star} />
          <StatsCard title="Unique Followers" value="346" Icon={Users} />
          <StatsCard title="Total Likes" value="300" Icon={ThumbsUp} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {booksData.map(({ id, img, title, rating, author }) => (
            <div key={id} className="bg-white p-5 text-center rounded-lg shadow-md">
              <img
                src={img}
                alt={title}
                className="w-36 h-52 object-cover mb-3 rounded-lg mx-auto"
              />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600">{author}</p>
              <p className="text-yellow-500">{rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorDashboard;
