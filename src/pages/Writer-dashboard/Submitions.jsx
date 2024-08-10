import React from 'react';
import { Breadcrumbs, BreadcrumbItem, Card, Button, Tab, Tabs, CardBody, CardFooter, Image, Link } from '@nextui-org/react';
import { Book, BarChart2, BookOpenCheck, Users, Star, BookHeadphones, LibraryBig, Castle, NotepadTextDashed,} from "lucide-react";
import Book1 from "/images/books/book8.png";
import Book2 from "/images/books/book5.png";
import Book3 from "/images/books/book6.png";
import Book4 from "/images/books/book4.png";
import Book5 from "/images/books/book9.png";

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

  const DraftsData = [
    {
      id: 1,
      img: Book5,
      title: "Pale Lights",
      author: "Someone",
    },
  ];

const Submissions = () => {
  return (
    <div className="flex h-screen p-2">
    {/* <Sidebar className="w-1/4 bg-gray-100 p-4">
      <SidebarItem icon={<BarChart2 />} text="Overview"/>
      <SidebarItem icon={<Book />} text="Submissions" active/>
      <SidebarItem icon={<Star />} text="Notes" />
      <SidebarItem icon={<Users />} text="Advertising" />
      <SidebarItem icon={<BookOpenCheck />} text="E-Book Selling" />
    </Sidebar> */}
    <div className="flex-1">
    {/* <Card className="p-5 mb-4 shadow-none flex-auto" >
      <div className="flex justify-between items-center">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link to="/authordashboard">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Submissions</BreadcrumbItem>
        </Breadcrumbs>
        <Link href="/author/chapter/create">
        <Button auto className="bg-blue-500 text-white">
          + New Novel
        </Button>
        </Link>
      </div>
      </Card> */}
      <Card className="p-4 mb-4 shadow-none" >
      <h1 className="text-3xl font-bold dark:text-white mb-5">Novels</h1>
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <span className="mr-2">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1 4V9h-1m1 4h-1m5-5h.01M6 20H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v13a2 2 0 01-2 2h-1m-10-2h4m-4 0v1m4-1v1m-4-2h4"
              ></path>
            </svg>
          </span>
          <span className="text-gray-700 dark:text-white">
            It can take <strong>up to 48 hours</strong> for a submission to be
            approved. If issues are found within the submission, it will be
            rejected and corrections will have to be made before re-submission.
          </span>
        </div>
      </Card>
      <Card className="p-4 shadow-none" >
        <h3 className="text-xl font-semibold">Pending Submissions</h3>
        <div className="mt-4">
          {/* List of pending submissions will go here */}
        </div>
        <div className="flex justify-end mt-4">
        <Link href="/author/chapter/create">
          <Button auto className="bg-blue-500 text-white">
            + Submit a New Novel
          </Button>
          </Link>
        </div>
      </Card>
      <Card className="p-4 mb-4 shadow-none mt-4" >
      <Tabs aria-label="Recent Activities" color="default" variant="underlined" size="lg">
          <Tab
            key="novels"
            title={
              <div className="flex items-center space-x-2">
                <LibraryBig />
                <span>Novels</span>
              </div>
            }
          >
          <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-none mb-5">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Publishes</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-xl">
            {booksData.map(({ id, img, title, rating }) => (
              <Link href="/author/chapter">
              <Card shadow="none" key={id} isPressable>
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
                      <h3 className="text-sm font-semibold text-left">{title}</h3>
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
          </Tab>
          <Tab
            key="Draft"
            title={
              <div className="flex items-center space-x-2">
                <NotepadTextDashed />
                <span>Draft</span>
              </div>
            }
          >
          <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-none mb-5">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Publishes</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-xl">
            {DraftsData.map(({ id, img, title, rating }) => (
              <Link href="/author/chapter/create">
              <Card shadow="none" key={id} isPressable>
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
                      <h3 className="text-sm font-semibold text-left">{title}</h3>
                      <div className="flex items-center mt-2">
                      </div>
                    </CardFooter>
              </Card>
              </Link>
            ))}
          </div>
        </div>
          </Tab>
        </Tabs>
        </Card>
    </div>
    </div>
  );
};

export default Submissions;
