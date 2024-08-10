import React from 'react';
import { Breadcrumbs, BreadcrumbItem, Card, Button, Tab, Tabs, CardBody, CardFooter, Image, Link } from '@nextui-org/react';
import { Book, BarChart2, BookOpenCheck, Users, Star, BookHeadphones, LibraryBig, Castle, NotepadTextDashed } from "lucide-react";
// import Sidebar, { SidebarItem } from "../components/Writer-dashboard/Sidebar";
import Book1 from "/images/books/book1.jpg";
import Book2 from "/images/books/book2.jpg";
import Book3 from "/images/books/book3.jpg";
import Book4 from "/images/books/book4.png";
import Book5 from "/images/books/book7.png";

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
    title: "OP Wizard",
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
          <h1 className="text-3xl font-bold dark:text-white">Short Stories</h1>
          {/* <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
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
        </div> */}
        </Card>
        <Card className="p-4 shadow-none" >
          <h3 className="text-xl font-semibold">Pending Submissions</h3>
          <div className="mt-4">
            {/* List of pending submissions will go here */}
          </div>
          <div className="flex justify-end mt-4">
            <Link href="/author/short-stories/create">
              <Button auto className="bg-blue-500 text-white">
                + Submit a New Short Story
              </Button>
            </Link>
          </div>
        </Card>
        <Card className="p-4 mb-4 shadow-none mt-4" >
          <Tabs aria-label="Recent Activities" color="default" variant="underlined" size="lg">
            <Tab
              key="Stories"
              title={
                <div className="flex items-center space-x-2">
                  <LibraryBig />
                  <span>Short Stories</span>
                </div>
              }
            >
              <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-none mb-5">
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
                <div className="flex gap-10">
                  {DraftsData.map(({ id, img, title }) => (
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
            </Tab>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Submissions;
