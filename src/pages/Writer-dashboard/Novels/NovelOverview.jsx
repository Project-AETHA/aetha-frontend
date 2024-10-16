import {useEffect, useState} from 'react';
import { Card, Button, Tab, Tabs, CardBody, CardFooter, Image } from '@nextui-org/react';
import { LibraryBig, NotepadTextDashed, } from "lucide-react";
import { BsPencilFill } from "react-icons/bs";
import Book1 from "/images/books/book8.png";
import Book2 from "/images/books/book5.png";
import Book3 from "/images/books/book6.png";
import Book4 from "/images/books/book4.png";
import Book5 from "/images/books/book9.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import {toast} from "sonner";
import SingleNovel from "@/pages/Writer-dashboard/Novels/components/SingleNovel.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";

const booksData = [
  {
    id: 1,
    coverImage: Book1,
    title: "Skill Eater",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    coverImage: Book2,
    title: "Dao of Cooking",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    coverImage: Book3,
    title: "Worm Mage",
    rating: 4.7,
    author: "Lost Girl",
  },

  {
    id: 4,
    coverImage: Book4,
    title: "Gun Soul",
    rating: 4.7,
    author: "Lost Girl",
  },
  // Add more book objects as needed...
];

const DraftsData = [
  {
    id: 1,
    coverImage: Book5,
    title: "Pale Lights",
    author: "Someone",
  },
];

const Submissions = () => {

  const navigate = useNavigate();
  const [pendingNovels, setPendingNovels] = useState([]);
  const [publishedNovels, setPublishedNovels] = useState([]);
  const [draftNovels, setDraftNovels] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAllNovelsByAuthor () {

    setLoading(true);

    const pending = [];
    const published = [];
    const drafts = [];

    await axios.get("/api/novels/all")
        .then(response => {
            if(response.status === 200) {
                if(response.data.code === ResponseCodes.SUCCESS) {
                  console.log(response.data.content)
                  response.data.content.map(novel => {
                    if(novel.status === "PENDING") {
                      pending.push(novel);
                    } else if(novel.status === "DRAFT") {
                        drafts.push(novel);
                    } else {
                      published.push(novel);
                    }
                  })

                  // Update states once
                  setPendingNovels(pending);
                  setPublishedNovels(published);
                  setDraftNovels(drafts);
                  console.log(publishedNovels);

                } else {
                  throw new Error(response.data.message);
                }
            } else {
                throw new Error("Error - Server not responding" + response.data.message);
            }
        })
        .catch(error => {
            toast.error("Error occurred", {
                description: error.message
            });
            console.log(error);
        })

    setLoading(false);
  }

  useEffect(() => {
    getAllNovelsByAuthor();
  }, []);

  return (
    <div className="flex h-screen p-2">
      <div className="flex-1">
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
            {loading && <LoadingComponent />}
            {!loading && pendingNovels.map((novel,index) => <SingleNovel key={index} novel={novel} />)}
            {!loading && pendingNovels.length === 0 && <p>No Pending Novels</p>}
          </div>
          <div className="flex justify-end mt-4">
            <Button auto className="bg-blue-500 text-white" onClick={() => navigate("/author/chapter/create")}>
              <BsPencilFill className="mr-1" />
              <p>Write a Novel</p>
            </Button>
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
                  {booksData.map((novel,index) => <SingleNovel key={index} novel={novel} />)}
                  {publishedNovels.map((novel,index) => <SingleNovel key={index} novel={novel} />)}
                  {!loading && publishedNovels.length === 0 && <p>No Published Novels</p>}
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
                  {loading && <LoadingComponent />}
                  {!loading && DraftsData.map(({ id, coverImage, title, rating }) => (
                    <Card shadow="none" key={id} isPressable onClick={() => navigate(`/author/novels/${id}`)}>
                      <CardBody className="p-0">
                        <Image
                          shadow="sm"
                          radius="sm"
                          width="100%"
                          alt={title}
                          className="w-[120px] object-cover h-[180px]"
                          src={coverImage}
                          href='/author/chapter'
                        />
                      </CardBody>
                      <CardFooter className="flex flex-col items-start p-1">
                        <h3 className="text-sm font-semibold text-left">{title}</h3>
                        <div className="flex items-center mt-2">
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                  {!loading && draftNovels.map((novel, index) => <SingleNovel key={index} novel={novel} />)}
                  {!loading && draftNovels.length === 0 && <p>No Draft Novels</p>}
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
