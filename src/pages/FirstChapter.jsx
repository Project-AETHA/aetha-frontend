import React, { useState } from 'react';
import { Breadcrumbs, BreadcrumbItem, Card, Input, Textarea, Checkbox, Button, Spacer, Link } from '@nextui-org/react';
import { Book, BarChart2, BookOpenCheck, Users, Star, MessageCircleMore } from "lucide-react";
import Sidebar, { SidebarItem } from "../components/Writer-dashboard/Sidebar";
import FileUpload from "../components/FileUpload";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';


const FirstChapter = () => {

    const [chapterContent, setChapterContent] = useState('');

  return (
    <div className="flex h-screen">
      <Sidebar className="w-1/4 bg-gray-100 p-4">
        <SidebarItem icon={<BarChart2 />} text="Overview"/>
        <SidebarItem icon={<Book />} text="Submissions" active/>
        <SidebarItem icon={<Star />} text="Notes" />
        <SidebarItem icon={<Users />} text="Advertising" />
        <SidebarItem icon={<BookOpenCheck />} text="E-Book Selling" />
      </Sidebar>
      <div className="flex-1">
      <Card className="p-5 mb-4 shadow-none flex-auto" radius="none">
      <div className="flex justify-between items-center">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link to="/submition">Submissions</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>New Fiction Submission</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      </Card>
        <Card className="p-4" shadow='none'>
          <h2 className="text-2xl font-bold mb-4">New Fiction Submission</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Submit your fiction</h3>
            <p>
              To submit your fiction, both the fiction information and the first
              chapter or prologue are required. After that, your submission will
              be inspected by our system and one of the staff members.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-5">Cover</h3>
            <FileUpload />
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Title</h3>
            <Input placeholder="Title of fiction" fullWidth />
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Synopsis</h3>
            <Textarea placeholder="Synopsis" fullWidth />
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Genres</h3>
            <div className="flex flex-wrap gap-2">
              <Checkbox>Action</Checkbox>
              <Checkbox>Adventure</Checkbox>
              <Checkbox>Comedy</Checkbox>
              {/* Add more genres as needed */}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <Checkbox>Anti-Hero Lead</Checkbox>
              <Checkbox>Artificial Intelligence</Checkbox>
              <Checkbox>Cyberpunk</Checkbox>
              {/* Add more tags as needed */}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Content Warning</h3>
            <div className="flex flex-wrap gap-2">
              <Checkbox>Profanity</Checkbox>
              <Checkbox>Sexual Content</Checkbox>
              <Checkbox>Graphic Violence</Checkbox>
              <Checkbox>Sensitive Content</Checkbox>
              <Checkbox>AI-Assisted Content</Checkbox>
              <Checkbox>AI-Generated Content</Checkbox>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Content Ownership</h3>
            <div className="flex flex-wrap gap-2">
              <Checkbox>Fanfiction</Checkbox>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Manual Release</h3>
            <Checkbox>Set manual release</Checkbox>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Chapter Title</h3>
            <Input placeholder="Title of Chapter" fullWidth />
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Chapter Content</h3>
            <ReactQuill
              value={chapterContent}
              onChange={setChapterContent}
              theme="snow"
              placeholder="Write your chapter content here..."
              className="h-32 mb-10"
            />
          </div>
          <div className="mb-4">
            <Button>Submit</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FirstChapter;
