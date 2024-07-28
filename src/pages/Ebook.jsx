import React, { useState } from 'react';
import {
  Button, Input, Card, Tabs, Tab, Table, getKeyValue,
  TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Tooltip, Chip
} from '@nextui-org/react';
import { Eye, Trash2, Pencil, Plus } from 'lucide-react';
import Analytics from '../components/Analytics';

const statusColorMap = {
  Available: "success",
  Unavailable: "danger",
};

const Ebook = () => {
  const [selectedTab, setSelectedTab] = useState('Listed');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(new Set(["all"]));

  const selectedCategoryValue = React.useMemo(
    () => Array.from(selectedCategory).join(", ").replaceAll("_", " "),
    [selectedCategory]
  );

  const ebooks = [
    { key: "1", title: 'E Book Title', status: 'Available', sales: '250', },
    { key: "2", title: 'E Book Title', status: 'Unavailable', sales: '1250',},
    { key: "3", title: 'E Book Title', status: 'Available', sales: '30',},
  ];

  const ebooks2 = [
    { key: "1", title: 'E Book Title',comment: 'Reason for declining',},
    { key: "2", title: 'E Book Title',comment: 'Reason for declining', },
    { key: "3", title: 'E Book Title',comment: 'Reason for declining', },
  ];

  const columns = [
    { key: "title", label: "Title" },
    { key: "status", label: "Status" },
    { key: "sales", label: "Sales" },
    { key: "action", label: "Action" },
  ];

  const columns2 = [
    { key: "title", label: "Title" },
    // { key: "status", label: "Status" },
    { key: "comment", label: "Comments" },
    { key: "action", label: "Action" },
  ];

  const renderCell = (ebook, columnKey) => {
    const cellValue = ebook[columnKey];

    switch (columnKey) {
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[ebook.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "action":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Eye />
              </span>
            </Tooltip>
            <Tooltip content="Edit">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Pencil />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <Trash2 />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-2">
      <Card className="p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">E Books</h1>
          <Button color="primary" startContent={<Plus />} className="ml-auto">
            Add an Ebook
          </Button>
        </div>

        <Tabs aria-label="Ebook Tabs" value={selectedTab} onValueChange={setSelectedTab}>
          <Tab key="Listed" title="Listed">
            <div>
              <Card className="px-8 py-5 max-3xl shadow-none">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">E Books on sale</h2>
                  <div className="flex justify-between items-center">
                    <Input
                      clearable
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 mr-2"
                    />
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered" className="capitalize">
                          {selectedCategoryValue}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Category selection"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedCategory}
                        onSelectionChange={setSelectedCategory}
                      >
                        <DropdownItem key="all">All</DropdownItem>
                        <DropdownItem key="Novel">Novel</DropdownItem>
                        <DropdownItem key="Short Story">Short Story</DropdownItem>
                        <DropdownItem key="Poem & Nisadas">Poem & Nisadas</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>

                <Table aria-label="Ebook Table">
                  <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                  </TableHeader>
                  <TableBody items={ebooks}>
                    {(item) => (
                      <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </Tab>
          <Tab key="Pending" title="Pending">
            <div>
              <Card className="px-8 py-5 shadow-none">
              <Table aria-label="Example empty table">
                <TableHeader>
                  <TableColumn>Title</TableColumn>
                  <TableColumn>Date</TableColumn>
                  <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
              </Table>
              </Card>
            </div>
          </Tab>
          <Tab key="Declined" title="Declined">
          <div>
              <Card className="px-8 py-5 max-3xl shadow-none">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">E Books on sale</h2>
                  <div className="flex justify-between items-center">
                    <Input
                      clearable
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 mr-2"
                    />
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered" className="capitalize">
                          {selectedCategoryValue}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Category selection"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedCategory}
                        onSelectionChange={setSelectedCategory}
                      >
                        <DropdownItem key="all">All</DropdownItem>
                        <DropdownItem key="Novel">Novel</DropdownItem>
                        <DropdownItem key="Short Story">Short Story</DropdownItem>
                        <DropdownItem key="Poem & Nisadas">Poem & Nisadas</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>

                <Table aria-label="Ebook Table">
                  <TableHeader columns={columns2}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                  </TableHeader>
                  <TableBody items={ebooks2}>
                    {(item) => (
                      <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
};

export default Ebook;
