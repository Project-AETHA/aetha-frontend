import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    useDisclosure,
  } from "@nextui-org/react";
  import { SearchIcon } from "@/components/common/icons/SearchIcon.jsx";
  import { ChevronDownIcon } from "@/components/common/icons/ChevronDownIcon.jsx";
  import { useState, useMemo, useCallback } from "react";
  
  const columns = [
    { name: "User", uid: "user" },
    { name: "Novel Title", uid: "novelTitle" },
    { name: "Subscription Tier", uid: "subscriptionTier" },
    { name: "Starting Date", uid: "startingDate" },
    { name: "Expire Date", uid: "expireDate" },
    { name: "Status", uid: "status" },
    { name: "Total Revenue", uid: "totalRevenue" },
    { name: "Percentage", uid: "percentage" },
    { name: "Our Income", uid: "ourIncome" },
  ];
  
  const statusColorMap = {
    Active: "success",
    Expired: "danger",
  };
  
  const sampleData = [
    { id: 1, user: "John Doe", novelTitle: "The Great Adventure", subscriptionTier: "Tier 1", startingDate: "2024-01-15", expireDate: "2024-06-15", status: "Active", totalRevenue: 1200, percentage: 10, ourIncome: 120 },
    { id: 2, user: "Jane Smith", novelTitle: "Mystery of the Lost", subscriptionTier: "Tier 2", startingDate: "2024-02-01", expireDate: "2024-07-01", status: "Expired", totalRevenue: 2500, percentage: 10, ourIncome: 250 },
    { id: 3, user: "Alice Johnson", novelTitle: "Journey to the Stars", subscriptionTier: "Tier 1", startingDate: "2024-03-10", expireDate: "2024-09-10", status: "Active", totalRevenue: 1500, percentage: 10, ourIncome: 150 },
    { id: 4, user: "Bob Brown", novelTitle: "The Enchanted Forest", subscriptionTier: "Tier 3", startingDate: "2024-04-20", expireDate: "2024-10-20", status: "Expired", totalRevenue: 1800, percentage: 10, ourIncome: 180 },
    { id: 5, user: "Charlie Davis", novelTitle: "Secrets of the Old World", subscriptionTier: "Tier 2", startingDate: "2024-05-05", expireDate: "2024-11-05", status: "Active", totalRevenue: 2200, percentage: 10, ourIncome: 220 },
    { id: 6, user: "Diana Evans", novelTitle: "The Last Kingdom", subscriptionTier: "Tier 1", startingDate: "2024-06-15", expireDate: "2024-12-15", status: "Active", totalRevenue: 1300, percentage: 10, ourIncome: 130 },
    { id: 7, user: "Ethan Garcia", novelTitle: "Rise of the Phoenix", subscriptionTier: "Tier 3", startingDate: "2024-07-25", expireDate: "2025-01-25", status: "Expired", totalRevenue: 1600, percentage: 10, ourIncome: 160 },
    { id: 8, user: "Fiona Hall", novelTitle: "Echoes of the Past", subscriptionTier: "Tier 2", startingDate: "2024-08-30", expireDate: "2025-02-28", status: "Active", totalRevenue: 2400, percentage: 10, ourIncome: 240 },
    { id: 9, user: "George Ives", novelTitle: "The Hidden Realm", subscriptionTier: "Tier 1", startingDate: "2024-09-10", expireDate: "2025-03-10", status: "Expired", totalRevenue: 1400, percentage: 10, ourIncome: 140 },
    { id: 10, user: "Hannah Jackson", novelTitle: "A New Beginning", subscriptionTier: "Tier 3", startingDate: "2024-10-20", expireDate: "2025-04-20", status: "Active", totalRevenue: 1700, percentage: 10, ourIncome: 170 },
    { id: 11, user: "Ian King", novelTitle: "The Forgotten Prophecy", subscriptionTier: "Tier 2", startingDate: "2024-11-05", expireDate: "2025-05-05", status: "Expired", totalRevenue: 2000, percentage: 10, ourIncome: 200 },
    { id: 12, user: "Jasmine Lee", novelTitle: "The Final Chapter", subscriptionTier: "Tier 1", startingDate: "2024-12-15", expireDate: "2025-06-15", status: "Active", totalRevenue: 1100, percentage: 10, ourIncome: 110 },
  ];
  
  export default function Subscriptions() {
    const { isOpen: isAddNewOpen, onOpen: onAddNewOpen } = useDisclosure();
  
    const [data, setData] = useState(sampleData);
    const [filterValue, setFilterValue] = useState("");
    const [statusFilter, setStatusFilter] = useState(new Set(["Active", "Expired"]));
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [page, setPage] = useState(1);
  
    const hasSearchFilter = Boolean(filterValue);
  
    const filteredItems = useMemo(() => {
      let filteredData = [...data];
  
      // Filter by date
      if (hasSearchFilter) {
        const [year, month, day] = filterValue.split('-').map(Number);
        if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
          filteredData = filteredData.filter(item => {
            const startingDate = new Date(item.startingDate);
            return (
              startingDate.getFullYear() === year &&
              (month ? startingDate.getMonth() + 1 === month : true) &&
              (day ? startingDate.getDate() === day : true)
            );
          });
        }
      }
  
      // Filter by status
      if (statusFilter.size > 0) {
        filteredData = filteredData.filter(item => statusFilter.has(item.status));
      }
  
      return filteredData;
    }, [data, filterValue, statusFilter]);
  
    const pages = Math.ceil(filteredItems.length / rowsPerPage);
  
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);
  
    const renderCell = useCallback((item, columnKey) => {
      const cellValue = item[columnKey];
      switch (columnKey) {
        case "status":
          return (
            <Chip className="capitalize" color={statusColorMap[cellValue]} size="sm" variant="flat">
              {cellValue}
            </Chip>
          );
        case "totalRevenue":
          return `LKR ${cellValue.toLocaleString()}`;
        case "percentage":
          return `${cellValue}%`;
        case "ourIncome":
          return `LKR ${cellValue.toLocaleString()}`;
        default:
          return cellValue;
      }
    }, []);
  
    const onSearchChange = useCallback((value) => {
      setFilterValue(value);
      setPage(1);
    }, []);
  
    const onStatusFilterChange = useCallback((keys) => {
      setStatusFilter(new Set(keys));
      setPage(1);
    }, []);
  
    const onRowsPerPageChange = useCallback((e) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    }, []);
  
    const onNextPage = useCallback(() => {
      if (page < pages) {
        setPage(page + 1);
      }
    }, [page, pages]);
  
    const onPreviousPage = useCallback(() => {
      if (page > 1) {
        setPage(page - 1);
      }
    }, [page]);
  
    const topContent = useMemo(() => (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by date (YYYY-MM-DD)..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onSearchChange("")}
            onValueChange={onSearchChange}
          />
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button endContent={<ChevronDownIcon className="text-small" />} variant="ghost">
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Select status"
              closeOnSelect={false}
              selectedKeys={Array.from(statusFilter)}
              selectionMode="multiple"
              onSelectionChange={onStatusFilterChange}
            >
              <DropdownItem key="Active">Active</DropdownItem>
              <DropdownItem key="Expired">Expired</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-black text-small">Total {filteredItems.length} entries</span>
          <label className="flex items-center text-black text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-black text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
            </select>
          </label>
        </div>
      </div>
    ), [filterValue, statusFilter, filteredItems.length, onSearchChange, onStatusFilterChange, onRowsPerPageChange]);
  
    const bottomContent = useMemo(() => (
      pages > 1 && (
        <div className="py-2 px-2 flex justify-center items-center">
          <div className="flex w-[30%] justify-between gap-12">
            <Button
              isDisabled={page === 1}
              size="sm"
              variant="flat"
              color={page > 1 ? "primary" : "default"}
              onPress={onPreviousPage}
            >
              Previous
            </Button>
            <span className="text-black text-small">Page {page} of {pages}</span>
            <Button
              isDisabled={page === pages}
              size="sm"
              variant="flat"
              color={page < pages ? "primary" : "default"}
              onPress={onNextPage}
            >
              Next
            </Button>
          </div>
        </div>
      )
    ), [page, pages, onPreviousPage, onNextPage]);
  
    return (
      <div className="flex flex-col gap-4 p-4">
        <div className='mt-4 bg-sky-500 relative rounded-md' style={{ height: '40px' }}>
          <p className='flex items-center justify-center h-full font-sans text-foreground-50 text-lg font-medium'>
            Subscription Income
          </p>
        </div>
        {topContent}
        <Table aria-label="Subscription income table" className="overflow-hidden">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                {columns.map((column) => (
                  <TableCell key={column.uid}>
                    {renderCell(item, column.uid)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {bottomContent}
      </div>
    );
  }
  