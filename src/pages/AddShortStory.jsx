import React, { useState } from 'react';
import { Card, Input, Checkbox, Button, Spacer } from '@nextui-org/react';
import { Plus } from "lucide-react";
import FileUpload from "../components/FileUpload";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const AddShortStory = () => {
  const [storyContent, setStoryContent] = useState('');
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
            <h2 className="text-xl font-semibold mb-4 text-default-600">New Short Story Submission</h2>
            <div className="mb-4">
              <h3 className="text-default-700 text-small">Cover Image</h3>
              <FileUpload />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Title</h3>
              <Input variant="bordered" placeholder="Title of Short Story" fullWidth />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Genres</h3>
              <div className="flex flex-wrap gap-2">
                <Checkbox size="sm">Fiction</Checkbox>
                <Checkbox size="sm">Non-fiction</Checkbox>
                <Checkbox size="sm">Mystery</Checkbox>
                <Checkbox size="sm">Sci-Fi</Checkbox>
                <Checkbox size="sm">Romance</Checkbox>
                <Checkbox size="sm">Horror</Checkbox>
                <Checkbox size="sm">Thriller</Checkbox>
                <Checkbox size="sm">Humor</Checkbox>
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Checkbox size="sm">Flash Fiction</Checkbox>
                <Checkbox size="sm">Twist Ending</Checkbox>
                <Checkbox size="sm">Emotional</Checkbox>
                <Checkbox size="sm">Thought-provoking</Checkbox>
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
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Content Ownership</h3>
              <div className="flex flex-wrap gap-2">
                <Checkbox size="sm">Original Work</Checkbox>
                <Checkbox size="sm">Inspired by other work</Checkbox>
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <h3 className="text-default-700 text-small">Story Content</h3>
              <ReactQuill
                value={storyContent}
                onChange={setStoryContent}
                theme="snow"
                placeholder="Write your short story here..."
                className="text-editor2"
              />
            </div>
            <div className="mb-4 mt-4">
              <div className="w-full flex justify-center gap-2">
                <Button variant="flat" color="success" className="text-sm">Publish</Button>
                <Button variant="flat" color="primary" className="text-sm">Save as Draft</Button>
                <Button variant="flat" color="danger" className="text-sm">Discard</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddShortStory;