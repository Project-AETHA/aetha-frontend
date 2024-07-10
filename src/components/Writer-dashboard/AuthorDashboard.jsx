import React from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Book, BarChart2, BookOpenCheck, Users, Star, MessageCircleMore } from "lucide-react";
import { Card, CardBody, CardFooter, Image, Button, Tabs, Tab } from "@nextui-org/react";
import Book1 from "/images/books/book1.jpg";
import Book2 from "/images/books/book2.jpg";
import Book3 from "/images/books/book3.jpg";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },

  {
    id: 4,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  // Add more book objects as needed...
];

const StatsCard = ({ title, value, Icon }) => {
  return (
    <Card isHoverable variant="bordered" className="stats-card p-4 shadow-none">
      <div className="flex items-center">
        {Icon && <Icon size={34} />}
        <div className="pl-4">
          <h4 className="text-xl font-semibold">{title}</h4>
          <h2 className="text-3xl font-bold">{value}</h2>
        </div>
      </div>
    </Card>
  );
};

const AuthorDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-1/4 bg-gray-100 p-4">
        <SidebarItem icon={<BarChart2 />} text="Overview" active />
        <SidebarItem icon={<Book />} text="Publishes" />
        <SidebarItem icon={<Star />} text="Notes" />
        <SidebarItem icon={<Users />} text="Advertising" />
        <SidebarItem icon={<BookOpenCheck />} text="E-Book Selling" />
      </Sidebar>
      <div className="flex-grow p-5 authbackground">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold dark:text-white">Author Dashboard - Overview</h1>
          <Button color="secondary" auto>
            New Story
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <StatsCard title="Total Chapters" value="0" Icon={Book} />
          <StatsCard title="Total Words" value="0" Icon={BarChart2} />
          <StatsCard title="Reviews Received" value="0" Icon={Star} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-none mb-5">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Most Recent Publishes</h2>
          <div className="flex gap-10">
            {booksData.slice(0, 4).map(({ id, img, title }) => (
              <Card shadow="none" key={id} isPressable>
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={title}
                    className="w-[120px] object-cover h-[180px]"
                    src={img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-center bg-gray-100 p-1 dark:bg-gray-800 dark:text-white"> 
                  <b>{title}</b>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <Tabs aria-label="Recent Activities" color="default" variant="solid" size="lg">
          <Tab
            key="comments"
            title={
              <div className="flex items-center space-x-2">
                <MessageCircleMore />
                <span>Recent Comments</span>
              </div>
            }
          >
            <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-sm mb-5">
              <h2 className="text-xl font-semibold mb-3 dark:text-white">Recent Comments</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-1">Commenter's Name</p>
              <p className="text-gray-500 dark:text-gray-400 mb-1">Comment Content</p>
              <Button color="primary" auto size="sm">
                Go to Comment
              </Button>
            </div>
          </Tab>
          <Tab
            key="reviews"
            title={
              <div className="flex items-center space-x-2">
                <Star />
                <span>Recent Reviews</span>
              </div>
            }
          >
            <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-sm mb-5">
              <h2 className="text-xl font-semibold mb-3 dark:text-white">Recent Reviews</h2>
              <p className="text-gray-500 dark:text-gray-400">No Reviews Yet</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthorDashboard;
