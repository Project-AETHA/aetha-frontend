import { Book, BarChart2, Star, MessageCircleMore } from "lucide-react";
import { Card, CardBody, CardFooter, Image, Button, Tabs, Tab, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, } from "@nextui-org/react";
import {useNavigate} from 'react-router-dom'
import Book1 from "/images/books/book8.png";
import Book2 from "/images/books/book5.png";
import Book3 from "/images/books/book6.png";
import Book4 from "/images/books/book4.png";
import { useEffect } from "react";
import { toast } from "sonner";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Skill Eater",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "Dao of Cooking",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Worm Mage",
    rating: 4.7,
    author: "Lost Girl",
  },

  {
    id: 4,
    img: Book4,
    title: "Gun Soul",
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
          <h2 className="text-3xl">{value}</h2>
        </div>
      </div>
    </Card>
  );
};

const AuthorDashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("user") !== null) {
      if(JSON.parse(localStorage.getItem('user')).role !== 'WRITER') {
        toast.warning("Please upgrade to continue");
        navigate('/upgrade-to-writer');
      }
    } else {
      toast.warning("Please login to continue");
      navigate('/login');
    }
  }, []);

  return (
    <div className="flex h-screen">
      <div className="flex-grow p-5 authbackground">
        <Card className="p-4 mb-4 shadow-none" >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold dark:text-white">Author Dashboard</h1>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button color="secondary" auto>
                  + New Content
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="novel" onClick={() => navigate("/author/novels/create")}>Novel</DropdownItem>
                <DropdownItem key="shortStory" onClick={() => navigate("/author/short-stories/create")} >Short Story</DropdownItem>
                <DropdownItem key="poemnisadas" onClick={() => navigate("/author/poems/create")} >Poem & Nisadas</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <StatsCard title="Total Chapters" value="4" Icon={Book} />
          <StatsCard title="Total Words" value="34896" Icon={BarChart2} />
          <StatsCard title="Reviews Received" value="218" Icon={Star} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-none mb-5">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Publishes</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-xl">
            {booksData.map(({ id, img, title, rating }) => (
              <Link href="/author/chapter" key={id}>
                <Card shadow="none" isPressable>
                  <CardBody className="p-0">
                    <Image
                      shadow="sm"
                      radius="sm"
                      width="100%"
                      alt={title}
                      className="w-[120px] object-cover h-[180px]"
                      src={img}
                      href='/author/chapter'
                    />
                  </CardBody>
                  <CardFooter className="flex flex-col items-start p-1">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-xs font-medium">{rating}</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <Tabs aria-label="Recent Activities" color="default" variant="underlined" size="lg">
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
