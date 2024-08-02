import React, { useState, useCallback } from 'react';
import {
  Button,
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Tooltip,
  Chip,
  Pagination,
  useDisclosure
} from '@nextui-org/react';
import { Line } from 'react-chartjs-2';
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartTooltip, Legend);

const initialTiers = [
  {
    name: 'Bronze',
    benefits: ['Unlock 10 chapters', 'Bronze avatar frame', 'No advertising'],
    monthlyCost: 5,
    yearlyCost: 50,
    color: 'warning'
  },
  {
    name: 'Silver',
    benefits: ['Unlock 25 chapters', 'Silver avatar frame', 'VIP community access', 'No advertising'],
    monthlyCost: 7,
    yearlyCost: 70,
    color: 'warning'
  },
  {
    name: 'Gold',
    benefits: ['Unlock 50 chapters', 'Gold avatar frame', 'VIP community access', 'No advertising'],
    monthlyCost: 9,
    yearlyCost: 110,
    color: 'warning'
  },
];

const initialChapters = [
  { id: 1, name: 'Chapter 1', status: 'Published', wordCount: 2000, scheduledDate: '2024-07-01' },
  { id: 2, name: 'Chapter 2', status: 'Published', wordCount: 1800, scheduledDate: '2024-07-01' },
  { id: 3, name: 'Chapter 3', status: 'Published', wordCount: 1200, scheduledDate: '2024-07-03' },
  { id: 4, name: 'Chapter 4', status: 'Published', wordCount: 2200, scheduledDate: '2024-07-15' },
  { id: 5, name: 'Chapter 5', status: 'Published', wordCount: 1900, scheduledDate: '2024-07-15' },
  { id: 6, name: 'Chapter 6', status: 'Published', wordCount: 2100, scheduledDate: '2024-07-21' },
  { id: 7, name: 'Chapter 7', status: 'Published', wordCount: 1700, scheduledDate: '2024-07-28' },
  { id: 8, name: 'Chapter 8', status: 'Waiting', wordCount: 2300, scheduledDate: '2024-08-05' },
  { id: 9, name: 'Chapter 9', status: 'Waiting', wordCount: 2000, scheduledDate: '2024-08-12' },
  { id: 10, name: 'Chapter 10', status: 'Waiting', wordCount: 1800, scheduledDate: '2024-08-19' },
];

const initialDraftChapters = [
  { id: 1, name: 'Draft Chapter 1', lastModified: '2024-07-05', wordCount: 800 },
  { id: 2, name: 'Draft Chapter 2', lastModified: '2024-07-12', wordCount: 1000 },
  { id: 3, name: 'Draft Chapter 3', lastModified: '2024-07-20', wordCount: 1200 },
];

const statusColorMap = {
  Published: "success",
  Waiting: "warning",
  Draft: "default",
};

const Chapters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [tiers, setTiers] = useState(initialTiers);
  const [chapters, setChapters] = useState(initialChapters);
  const [draftChapters, setDraftChapters] = useState(initialDraftChapters);
  const [editingTier, setEditingTier] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen: isEditTierModalOpen, onOpen: onOpenEditTierModal, onClose: onCloseEditTierModal } = useDisclosure();
  const { isOpen: isAddDraftModalOpen, onOpen: onOpenAddDraftModal, onClose: onCloseAddDraftModal } = useDisclosure();
  const [newDraft, setNewDraft] = useState({ name: '', wordCount: 0 });

  const chaptersPerPage = 5;

  const filteredChapters = chapters.filter(
    chapter =>
      chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'All' || chapter.status === statusFilter)
  );

  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = filteredChapters.slice(indexOfFirstChapter, indexOfLastChapter);

  const readerEngagementData = {
    labels: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'],
    datasets: [
      {
        label: 'Reader Engagement Score',
        data: [85, 90, 88, 92, 95],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const handleEditTier = (tier) => {
    setEditingTier({ ...tier });
    onOpenEditTierModal();
  };

  const handleSaveTier = () => {
    setTiers(tiers.map(t => t.name === editingTier.name ? editingTier : t));
    onCloseEditTierModal();
  };

  const handleAddDraft = () => {
    const newDraftChapter = {
      id: draftChapters.length + 1,
      name: newDraft.name,
      lastModified: new Date().toISOString().split('T')[0],
      wordCount: newDraft.wordCount
    };
    setDraftChapters([...draftChapters, newDraftChapter]);
    onCloseAddDraftModal();
    setNewDraft({ name: '', wordCount: 0 });
  };

  const renderCell = useCallback((chapter, columnKey) => {
    const cellValue = chapter[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm">{cellValue}</p>
            <p className="text-bold text-sm text-default-400">{chapter.wordCount} words</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[chapter.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "scheduledDate":
        return cellValue ? cellValue : "Not scheduled";
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="View Chapter">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaEye />
              </span>
            </Tooltip>
            <Tooltip content="Edit Chapter">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete Chapter">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <FaTrash />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="p-8 min-h-screen bg-foreground-100 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Chapter Management</h1>
          <Button auto shadow color="primary"  onPress={onOpenAddDraftModal}>
            <FaPlus className="w-5 h-5 mr-2" />
            Add New Chapter
          </Button>
        </div>

        <Card className="px-6 pb-6 pt-2 mb-8  shadow-lg">
          <div className="flex space-x-4 mb-4">
            <Input
              placeholder="Search chapters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow mt-8"
              startContent={<FaEye className="text-default-400" />}
            />
            <Select
              label="Filter by Status"
              labelPlacement ='outside'
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Published">Published</SelectItem>
              <SelectItem value="Waiting">Waiting</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
            </Select>
          </div>

          <Table aria-label="Chapter table" className="w-full">
            <TableHeader>
              <TableColumn>Chapter Name</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Scheduled Date</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {currentChapters.map((chapter) => (
                <TableRow key={chapter.id}>
                  {["name", "status", "scheduledDate", "actions"].map((columnKey) => (
                    <TableCell key={columnKey}>{renderCell(chapter, columnKey)}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <Pagination
            total={Math.ceil(filteredChapters.length / chaptersPerPage)}
            color="secondary"
            page={currentPage}
            onChange={setCurrentPage}
            className="mt-4"
          />
        </Card>

        <Card className="p-6 mb-8  shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Reader Engagement</h2>
          <div className="h-96">
            <Line data={readerEngagementData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Subscription Tiers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier, index) => (
              <Card key={index} className="p-6  shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <ul className="list-none list-inside mb-6">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-600">✓ {benefit}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-auto mb-2">
                  <div>
                    <p className="text-3xl font-bold">${tier.monthlyCost}</p>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">${tier.yearlyCost}</p>
                    <p className="text-sm text-gray-500">per year</p>
                  </div>
                </div>
                <Button auto color={tier.color} onPress={() => handleEditTier(tier)} className="w-full mt-auto" variant="flat">Edit Tier</Button>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6 mb-8  shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Draft Chapters</h2>
          <Table aria-label="Draft Chapters table" className="w-full">
            <TableHeader>
              <TableColumn>Chapter Name</TableColumn>
              <TableColumn>Last Modified</TableColumn>
              <TableColumn>Word Count</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {draftChapters.map((draft) => (
                <TableRow key={draft.id}>
                  <TableCell>{draft.name}</TableCell>
                  <TableCell>{draft.lastModified}</TableCell>
                  <TableCell>{draft.wordCount}</TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Edit Draft">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <FaEdit />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete Draft">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <FaTrash />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Modal isOpen={isEditTierModalOpen} onClose={onCloseEditTierModal}>
          <ModalContent>
            <ModalHeader>Edit Tier: {editingTier?.name}</ModalHeader>
            <ModalBody>
              <Input
                label="Tier Name"
                value={editingTier?.name || ''}
                onChange={(e) => setEditingTier({ ...editingTier, name: e.target.value })}
                className="mb-4"
              />
              <Input
                label="Monthly Cost"
                type="number"
                value={editingTier?.monthlyCost || 0}
                onChange={(e) => setEditingTier({ ...editingTier, monthlyCost: Number(e.target.value) })}
                className="mb-4"
              />
              <Input
                label="Yearly Cost"
                type="number"
                value={editingTier?.yearlyCost || 0}
                onChange={(e) => setEditingTier({ ...editingTier, yearlyCost: Number(e.target.value) })}
                className="mb-4"
              />
              {/* Add inputs for benefits here */}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={handleSaveTier}>Save Changes</Button>
              <Button color="warning" onPress={onCloseEditTierModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isAddDraftModalOpen} onClose={onCloseAddDraftModal}>
          <ModalContent>
            <ModalHeader>Add New Draft</ModalHeader>
            <ModalBody>
              <Input
                label="Chapter Name"
                value={newDraft.name}
                onChange={(e) => setNewDraft({ ...newDraft, wordCount: Number(e.target.value) })}
                className="mb-4"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={handleAddDraft}>Add Draft</Button>
              <Button color="warning" onPress={onCloseAddDraftModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Chapters;