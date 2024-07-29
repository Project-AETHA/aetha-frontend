import React, { useState } from 'react';
import { Table, Input, Pagination, TableColumn, TableCell, TableRow, TableBody, TableHeader, Card, Button } from '@nextui-org/react';
import 'tailwindcss/tailwind.css';

const initialChapters = [
  { name: 'Chapter 1', lastModified: '2024-07-01', wordCount: 1200, scheduledDate: '2024-07-15', status: 'Published' },
  { name: 'Chapter 2', lastModified: '2024-07-10', wordCount: 1500, scheduledDate: '2024-07-20', status: 'Waiting' },
  // Add more chapters as needed
];

const Chapters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 5;

  const filteredChapters = initialChapters.filter(chapter =>
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = filteredChapters.slice(indexOfFirstChapter, indexOfLastChapter);

  const totalPages = Math.ceil(filteredChapters.length / chaptersPerPage);

  const [tiers, setTiers] = useState([
    { tier: 1, chapters: 0, cost: 0 },
    { tier: 2, chapters: 0, cost: 0 },
    { tier: 3, chapters: 0, cost: 0 }
  ]);

  const handleTierChange = (index, field, value) => {
    const newTiers = [...tiers];
    newTiers[index][field] = value;
    setTiers(newTiers);
  };

  return (
    <div className="p-4">
      <Input
        aria-label="Search chapters"
        placeholder="Search chapters..."
        className="mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table
        aria-label="Chapters table"
        css={{ minWidth: "100%" }}
        className="border border-gray-300"
      >
        <TableHeader>
          <TableColumn>Chapter Name</TableColumn>
          <TableColumn>Last Modified Date</TableColumn>
          <TableColumn>Word Count</TableColumn>
          <TableColumn>Scheduled Date</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {currentChapters.map((chapter, index) => (
            <TableRow key={index}>
              <TableCell>{chapter.name}</TableCell>
              <TableCell>{chapter.lastModified}</TableCell>
              <TableCell>{chapter.wordCount}</TableCell>
              <TableCell>{chapter.scheduledDate}</TableCell>
              <TableCell>{chapter.status}</TableCell>
              <TableCell>
                <Button auto color="primary" size="sm">View</Button>
                <Button auto color="warning" size="sm" className="mx-2">Edit</Button>
                <Button auto color="danger" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        total={totalPages}
        initialPage={1}
        onPageChange={page => setCurrentPage(page)}
        className="mt-4"
      />

      <Card className="mt-8 p-4">
        <h3 className="text-lg font-bold mb-4">Manage Subscription Tiers</h3>
        {tiers.map((tier, index) => (
          <div key={index} className="mb-4 grid grid-cols-2 gap-4">
            <Input
              aria-label={`Tier ${tier.tier} Chapters`}
              placeholder={`Tier ${tier.tier} Chapters`}
              type="number"
              value={tier.chapters}
              onChange={(e) => handleTierChange(index, 'chapters', e.target.value)}
              className="w-full"
            />
            <Input
              aria-label={`Tier ${tier.tier} Cost`}
              placeholder={`Tier ${tier.tier} Cost`}
              type="number"
              value={tier.cost}
              onChange={(e) => handleTierChange(index, 'cost', e.target.value)}
              className="w-full"
            />
          </div>
        ))}
        <Button auto color="primary">Save Tiers</Button>
      </Card>
    </div>
  );
};

export default Chapters;
