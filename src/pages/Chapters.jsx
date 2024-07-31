import React, { useState } from 'react';
import { Button, Card, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Select, SelectItem, Modal, Checkbox } from '@nextui-org/react';
import { Bar } from 'react-chartjs-2';
import { FaPlus } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const initialChapters = [
  { name: 'Chapter 1', status: 'Published', wordCount: 2000 },
  { name: 'Chapter 2', status: 'Waiting', wordCount: 1800 },
  { name: 'Draft Chapter 1', status: 'Draft', wordCount: 1200 },
];

const draftChapters = [
  { name: 'Draft Chapter 1', lastModified: '2024-07-05', wordCount: 800 },
  { name: 'Draft Chapter 2', lastModified: '2024-07-12', wordCount: 1000 },
];

const Chapters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [tiers, setTiers] = useState([
    { tier: 1, chapters: 0, cost: 0, includedChapters: [] },
    { tier: 2, chapters: 0, cost: 0, includedChapters: [] },
    { tier: 3, chapters: 0, cost: 0, includedChapters: [] },
  ]);
  const [selectedTier, setSelectedTier] = useState(null);
  const [chapterSelectionModal, setChapterSelectionModal] = useState(false);

  const filteredChapters = initialChapters.filter(
    chapter =>
      chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'All' || chapter.status === statusFilter)
  );

  const data = {
    labels: initialChapters.map(chapter => chapter.name),
    datasets: [
      {
        label: 'Word Count',
        data: initialChapters.map(chapter => chapter.wordCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="p-8 min-h-screen bg-foreground-100 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Chapter Management</h1>
          <Button auto shadow color="primary" size="lg">
            <FaPlus className="w-5 h-5 mr-2" />
            Add New Chapter
          </Button>
        </div>

        <div className="mb-4">
          <Select
            label="Filter by Status"
            value={statusFilter}
            onChange={(value) => setStatusFilter(value)}
          >
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Published">Published</SelectItem>
            <SelectItem value="Waiting">Waiting</SelectItem>
            <SelectItem value="Draft">Draft</SelectItem>
          </Select>
        </div>

        <Table aria-label="Chapter table" className="border border-gray-300">
          <TableHeader>
            <TableColumn>Chapter Name</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Word Count</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {filteredChapters.map((chapter, index) => (
              <TableRow key={index}>
                <TableCell>{chapter.name}</TableCell>
                <TableCell>{chapter.status}</TableCell>
                <TableCell>{chapter.wordCount}</TableCell>
                <TableCell>
                  <Button auto color="primary" size="sm">Edit</Button>
                  <Button auto color="danger" size="sm" className="mx-2">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Card className="mt-8 p-4">
          <h3 className="text-lg font-bold mb-4">Subscription Tiers</h3>
          {tiers.map((tier, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-md font-semibold">Tier {tier.tier}</h4>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={tier.chapters}
                  onChange={(e) => {
                    const newTiers = [...tiers];
                    newTiers[index].chapters = e.target.value;
                    setTiers(newTiers);
                  }}
                  placeholder="Chapters"
                  className="border border-gray-300 p-2"
                />
                <input
                  type="number"
                  value={tier.cost}
                  onChange={(e) => {
                    const newTiers = [...tiers];
                    newTiers[index].cost = e.target.value;
                    setTiers(newTiers);
                  }}
                  placeholder="Cost"
                  className="border border-gray-300 p-2"
                />
                <Button auto color="secondary" size="sm" onClick={() => {
                  setSelectedTier(index);
                  setChapterSelectionModal(true);
                }}>
                  Select Chapters
                </Button>
              </div>
            </div>
          ))}
        </Card>

        <Modal open={chapterSelectionModal} onClose={() => setChapterSelectionModal(false)}>
          <div className="p-4">
            <h3 className="text-lg font-bold">Select Chapters for Tier {selectedTier + 1}</h3>
          </div>
          <div className="p-4">
            {initialChapters.map((chapter, index) => (
              <Checkbox
                key={index}
                isSelected={tiers[selectedTier]?.includedChapters.includes(chapter.name)}
                onChange={(isSelected) => {
                  const newTiers = [...tiers];
                  if (isSelected) {
                    newTiers[selectedTier].includedChapters.push(chapter.name);
                  } else {
                    newTiers[selectedTier].includedChapters = newTiers[selectedTier].includedChapters.filter(
                      (name) => name !== chapter.name
                    );
                  }
                  setTiers(newTiers);
                }}
              >
                {chapter.name}
              </Checkbox>
            ))}
          </div>
        </Modal>

        <Card className="mt-8 p-4">
          <h3 className="text-lg font-bold mb-4">Chapter Analytics</h3>
          <div className="h-96">
            <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </Card>

        <h3 className="text-lg font-bold mt-8 mb-4">Draft Chapters</h3>
        <Table aria-label="Draft Chapters table" className="border border-gray-300">
          <TableHeader>
            <TableColumn>Chapter Name</TableColumn>
            <TableColumn>Last Modified Date</TableColumn>
            <TableColumn>Word Count</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {draftChapters.map((chapter, index) => (
              <TableRow key={index}>
                <TableCell>{chapter.name}</TableCell>
                <TableCell>{chapter.lastModified}</TableCell>
                <TableCell>{chapter.wordCount}</TableCell>
                <TableCell>
                  <Button auto color="primary" size="sm">Edit</Button>
                  <Button auto color="success" size="sm" className="mx-2">Publish</Button>
                  <Button auto color="danger" size="sm">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Chapters;
