import React from 'react';
import {
  Card,
  Input,
  Textarea,
  Checkbox,
  Button,
  Spacer,
} from '@nextui-org/react';

const Fristchapter = () => {
  return (
    <div className="p-4">
      <Card className="p-4">
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
          <h3 className="text-xl font-semibold">Cover</h3>
          <Input type="file" placeholder="Choose File" fullWidth />
          <p className="text-sm text-yellow-500">
            Please use an image that is at least 400 pixels wide and 600 pixels tall or larger.
          </p>
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
          <Textarea placeholder="Chapter Content" fullWidth />
        </div>
        <div className="mb-4">
          <Button>Submit</Button>
        </div>
      </Card>
    </div>
  );
};

export default Fristchapter;
