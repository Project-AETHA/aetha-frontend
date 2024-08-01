import React, { useState } from 'react';
import { Breadcrumbs, BreadcrumbItem, Card, Input, Checkbox, Button, Spacer, Link } from '@nextui-org/react';
import { Book, BarChart2, BookOpenCheck, Users, Star, MessageCircleMore, Plus } from "lucide-react";
import FileUpload from "../components/FileUpload";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const FirstChapter = () => {
  const [chapterContent, setChapterContent] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [customTags, setCustomTags] = useState([]);
  const [newCustomTag, setNewCustomTag] = useState('');

  const handleAddCustomTag = () => {
    if (newCustomTag.trim() !== '') {
      setCustomTags([...customTags, newCustomTag.trim()]);
      setNewCustomTag('');
    }
  };

  const handleRemoveCustomTag = (tagToRemove) => {
    setCustomTags(customTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <div className="p-2">
          <Card className="p-8" shadow="none" radius="sm">
            <h2 className="text-xl font-semibold mb-4 text-default-600">New Novel Submission</h2>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4">
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
                To submit your Novel, both the Novel information and the <strong>first
                chapter</strong> or <strong>prologue</strong> are required. After that, your submission will
                be inspected by our system and one of the staff members.
              </span>
            </div>
            <div className="mb-4">
              <h3 className="text-default-700 text-small">Cover</h3>
              <FileUpload />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Title</h3>
              <Input variant="bordered" placeholder="Title of Novel" fullWidth />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Synopsis</h3>
              <ReactQuill
                value={synopsis}
                onChange={setSynopsis}
                theme="snow"
                placeholder="Write your Synopsis here..."
                className="text-editor2"
              />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Genres</h3>
              <div className="flex flex-wrap gap-2">
                <Checkbox size="sm">Action</Checkbox>
                <Checkbox size="sm">Adventure</Checkbox>
                <Checkbox size="sm">Comedy</Checkbox>
                {/* Add more genres as needed */}
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Checkbox size="sm">Anti-Hero Lead</Checkbox>
                <Checkbox size="sm">Artificial Intelligence</Checkbox>
                <Checkbox size="sm">Cyberpunk</Checkbox>
                {/* Add more tags as needed */}
              </div>
              <div className="mt-2">
                <h4 className="text-default-700 text-small mb-2">Custom Tags</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {customTags.map((tag, index) => (
                    <div key={index} className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1">
                      <span className="mr-2">{tag}</span>
                      <button onClick={() => handleRemoveCustomTag(tag)} className="text-red-500 hover:text-red-700">
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center max-w-72">
                  <Input
                    size="sm"
                    placeholder="Add custom tag"
                    value={newCustomTag}
                    onChange={(e) => setNewCustomTag(e.target.value)}
                    className="mr-2"
                  />
                  <Button size="sm" auto onClick={handleAddCustomTag}>
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Content Warning</h3>
              <div className="flex flex-wrap gap-2">
                <Checkbox size="sm">Profanity</Checkbox>
                <Checkbox size="sm">Sexual Content</Checkbox>
                <Checkbox size="sm">Graphic Violence</Checkbox>
                <Checkbox size="sm">Sensitive Content</Checkbox>
                <Checkbox size="sm">AI-Assisted Content</Checkbox>
                <Checkbox size="sm">AI-Generated Content</Checkbox>
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Content Ownership</h3>
              <div className="flex flex-wrap gap-2">
                <Checkbox size="sm">FanNovel</Checkbox>
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Manual Release</h3>
              <Checkbox size="sm">Set manual release</Checkbox>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Chapter Title</h3>
              <Input variant="bordered" placeholder="Title of Chapter" fullWidth />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Chapter Content</h3>
              <ReactQuill
                value={chapterContent}
                onChange={setChapterContent}
                theme="snow"
                placeholder="Write your chapter content here..."
                className="text-editor2"
              />
            </div>
            <div className="mb-4 mt-4">
            <div className="w-full  flex justify-center gap-2">
                    <Button variant="flat" color="success" className="text-sm">Submit</Button>
                    <Button variant="flat" color="primary" className="text-sm">Save as a Draft</Button>
                    <Button variant="flat" color="danger" className="text-sm">Discard</Button>
                </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FirstChapter;