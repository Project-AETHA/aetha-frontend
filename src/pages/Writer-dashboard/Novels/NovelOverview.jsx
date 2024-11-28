import { Card, Button, Tab, Tabs } from '@nextui-org/react';
import { LibraryBig, NotepadTextDashed, } from "lucide-react";
import { BsPencilFill } from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import SingleNovel from "@/pages/Writer-dashboard/Novels/components/SingleNovel.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";
import useGet from "@/hooks/useGet.jsx";


const Submissions = () => {

  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useGet({
    queryKey: "my-novels",
    url: "/api/novels/my"
  });

  return (
    <div className="flex h-screen p-2">
      <div className="flex-1">
        <Card className="p-4 mb-4 shadow-none">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold dark:text-white mb-5">Novels</h1>
            <div className="flex justify-end">
              <Button auto className="bg-blue-500 text-white" onClick={() => navigate("/author/novels/create")}>
                <BsPencilFill className="mr-1"/>
                <p>Write a Novel</p>
              </Button>
            </div>
          </div>
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
        <Card className="p-4 shadow-none">
          <h3 className="text-xl font-semibold">Pending Submissions</h3>
          <div className="mt-4 flex gap-4 flex-wrap mb-6">
            {/* List of pending submissions will go here */}
            {isLoading && <LoadingComponent />}
            {!isLoading && data.pending.map((novel,index) => <SingleNovel key={index} novel={novel} />)}
            {!isLoading && data.pending.length === 0 && <NothingToDisplay />}
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
                <div className="flex gap-4 flex-wrap">
                  {isLoading && <LoadingComponent />}
                  {!isLoading && data.published.map((novel,index) => <SingleNovel key={index} novel={novel} />)}
                  {!isLoading && data.published.length === 0 && <NothingToDisplay />}
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
                <div className="flex gap-4 flex-wrap">
                  {isLoading && <LoadingComponent />}
                  {!isLoading && data.draft.map((novel, index) => <SingleNovel key={index} novel={novel} />)}
                  {!isLoading && data.draft.length === 0 && <NothingToDisplay />}
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
