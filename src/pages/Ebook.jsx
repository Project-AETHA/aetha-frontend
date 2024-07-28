import React, { useState } from 'react';
import { Button, Input, Card, Tabs, Tab, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

const Ebook = () => {
  const [selectedTab, setSelectedTab] = useState('Listed');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(new Set(["all"]));

  const selectedCategoryValue = React.useMemo(
    () => Array.from(selectedCategory).join(", ").replaceAll("_", " "),
    [selectedCategory]
  );

  const tabs = [
    { id: 'listed', label: 'Listed' },
    { id: 'pending', label: 'Pending' },
    { id: 'draft', label: 'Draft' },
  ];

  const ebooks = [
    { title: 'E Book Title', status: 'Pending', comment: '', action: 'View Details' },
    { title: 'E Book Title', status: 'Declined', comment: 'Reason for declining', action: 'Make Changes' },
    { title: 'E Book Title', status: 'Approved', comment: '', action: 'Perform Payment' },
  ];

  const filteredEbooks = ebooks.filter((ebook) => ebook.status === selectedTab);

  return (
    <div className="min-h-screen bg-gray-200 p-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">E Books</h1>

        <Tabs aria-label="Ebook Tabs" value={selectedTab} onValueChange={setSelectedTab}>
          {tabs.map((tab) => (
            <Tab key={tab.id} title={tab.label}>
              {tab.id === 'listed' && (
                <div>
                  <Card className="px-8 py-5">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">E Books on sale</h2>
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
                          <DropdownItem key="fiction">Fiction</DropdownItem>
                          <DropdownItem key="non-fiction">Non-Fiction</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>

                    <Table aria-label="Ebook Table">
                      <TableHeader>
                        <TableColumn>Title</TableColumn>
                        <TableColumn>Status</TableColumn>
                        <TableColumn>Comment</TableColumn>
                        <TableColumn>Action</TableColumn>
                        <TableColumn>Remove</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {filteredEbooks.map((ebook, index) => (
                          <TableRow key={index}>
                            <TableCell>{ebook.title}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded ${ebook.status === 'Pending' ? 'bg-yellow-200' : ebook.status === 'Declined' ? 'bg-red-200' : 'bg-green-200'}`}>
                                {ebook.status}
                              </span>
                            </TableCell>
                            <TableCell>{ebook.status === 'Declined' && <p className="text-red-600">{ebook.comment}</p>}</TableCell>
                            <TableCell><Button auto flat>{ebook.action}</Button></TableCell>
                            <TableCell><Button auto flat color="error">Remove</Button></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
              )}
              {tab.id !== 'listed' && (
                <Card className="mt-4">
                  <Card.Body>
                    {tab.id === 'pending' ? 'Pending Ebooks content' : 'Draft Ebooks content'}
                  </Card.Body>
                </Card>
              )}
            </Tab>
          ))}
        </Tabs>

        <div className="flex justify-between items-center my-6">
          <Input 
            clearable 
            placeholder="Search" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Ebook;
