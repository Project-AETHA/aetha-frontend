import React from 'react';
import { Breadcrumbs, BreadcrumbItem, Card, Button, Tab, Tabs, CardBody, CardFooter, Image, Link } from '@nextui-org/react';
import { Book, BarChart2, BookOpenCheck, Users, Star, BookHeadphones, LibraryBig, Castle, NotepadTextDashed } from "lucide-react";
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

  const Test = () => {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs>
              <BreadcrumbItem>
                <Link href="/authordashboard">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Submissions</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </header>
  
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Novels</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Manage your submissions and view your published works.</p>
          </div>
  
          <Card className="mb-8 bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500">
            <CardBody>
              <div className="flex items-center">
                <span className="mr-4 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1 4V9h-1m1 4h-1m5-5h.01M6 20H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v13a2 2 0 01-2 2h-1m-10-2h4m-4 0v1m4-1v1m-4-2h4"></path>
                  </svg>
                </span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  It can take <strong>up to 48 hours</strong> for a submission to be approved. If issues are found, it will be rejected and corrections will be required before re-submission.
                </p>
              </div>
            </CardBody>
          </Card>
  
          <Card className="mb-8">
            <CardBody>
              <h2 className="text-xl font-semibold mb-4">Pending Submissions</h2>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-center text-gray-500 dark:text-gray-400">
                No pending submissions
              </div>
              <div className="mt-4 flex justify-end">
                <Link href="/author/chapter/create">
                  <Button auto className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                    + Submit a New Novel
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
  
          <Tabs aria-label="Recent Activities" color="primary" variant="underlined" size="lg">
            <Tab
              key="novels"
              title={
                <div className="flex items-center space-x-2">
                  <LibraryBig />
                  <span>Published Novels</span>
                </div>
              }
            >
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {booksData.slice(0, 4).map(({ id, img, title, author, rating }) => (
                  <Card key={id} isPressable className="hover:shadow-lg transition-shadow">
                    <CardBody className="p-0">
                      <Image
                        src={img}
                        alt={title}
                        className="w-full h-64 object-cover"
                      />
                    </CardBody>
                    <CardFooter className="flex flex-col items-start p-4">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{author}</p>
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{rating}</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </Tab>
            <Tab
              key="Draft"
              title={
                <div className="flex items-center space-x-2">
                  <NotepadTextDashed />
                  <span>Drafts</span>
                </div>
              }
            >
              <div className="mt-6 space-y-4">
                <Card>
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-2">Untitled Draft</h3>
                    <p className="text-gray-600 dark:text-gray-400">Last edited: 2 days ago</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-2">Work in Progress</h3>
                    <p className="text-gray-600 dark:text-gray-400">Last edited: 1 week ago</p>
                  </CardBody>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  };
  
  export default Test;