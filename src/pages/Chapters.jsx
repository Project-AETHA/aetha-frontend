import React, { useState } from 'react';
import { Input, Button, Card, Modal, Spacer,ModalHeader,ModalBody,ModalFooter } from '@nextui-org/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ChapterItem = ({ id, title, index, moveChapter }) => {
  const [, ref] = useDrag({
    type: 'CHAPTER',
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: 'CHAPTER',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveChapter(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="p-4 bg-white border rounded mb-2 cursor-pointer">
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
  );
};

const Chapters = () => {
  const [chapters, setChapters] = useState([
    { title: 'Chapter 1', content: 'Content of chapter 1', scheduledDate: null },
    { title: 'Chapter 2', content: 'Content of chapter 2', scheduledDate: null },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveChapter = () => {
    const newChapters = [...chapters];
    if (editingIndex !== null) {
      newChapters[editingIndex] = { ...newChapters[editingIndex], title, content };
      setEditingIndex(null);
    } else {
      newChapters.push({ title, content, scheduledDate: null });
    }
    setChapters(newChapters);
    setTitle('');
    setContent('');
    setIsModalOpen(false);
  };

  const handleEditChapter = (index) => {
    setEditingIndex(index);
    setTitle(chapters[index].title);
    setContent(chapters[index].content);
    setIsModalOpen(true);
  };

  const handleDeleteChapter = (index) => {
    setChapters(chapters.filter((_, i) => i !== index));
  };

  const moveChapter = (fromIndex, toIndex) => {
    const updatedChapters = [...chapters];
    const [movedChapter] = updatedChapters.splice(fromIndex, 1);
    updatedChapters.splice(toIndex, 0, movedChapter);
    setChapters(updatedChapters);
  };

  const handleScheduleChapter = (index, date) => {
    const updatedChapters = [...chapters];
    updatedChapters[index].scheduledDate = date;
    setChapters(updatedChapters);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto py-10 space-y-10">
        <h1 className="text-4xl font-bold">Chapter Management</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add New Chapter</Button>
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-semibold">{chapter.title}</h4>
                  <p>{chapter.content}</p>
                  {chapter.scheduledDate && <p>Scheduled for: {chapter.scheduledDate}</p>}
                </div>
                <div className="flex space-x-2">
                  <Button auto onClick={() => handleEditChapter(index)}>Edit</Button>
                  <Button auto flat color="error" onClick={() => handleDeleteChapter(index)}>Delete</Button>
                  <Button auto flat color="primary" onClick={() => handleScheduleChapter(index, '2024-12-25')}>
                    Schedule
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalHeader>
            <h3>{editingIndex !== null ? 'Edit Chapter' : 'Add New Chapter'}</h3>
          </ModalHeader>
          <ModalBody>
            <Input
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              className="w-full h-40 p-2 border rounded"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </ModalBody>
          <ModalFooter>
            <Button auto onClick={handleSaveChapter}>
              {editingIndex !== null ? 'Update Chapter' : 'Save Chapter'}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </DndProvider>
  );
};

export default Chapters;
