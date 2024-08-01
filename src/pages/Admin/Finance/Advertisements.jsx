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
  { name: "User", uid: "userAccount" },
  { name: "Start Date", uid: "startDate" },
  { name: "Ending Date", uid: "endingDate" },
  { name: "Package", uid: "package" },
  { name: "Status", uid: "status" },
  { name: "Income", uid: "income" },
];

const statusColorMap = {
  Active: "success",
  Expired: "danger",
};

const sampleData = [
  { id: 1, userAccount: "John Doe", startDate: "2024-01-15", endingDate: "2024-06-15", package: "Basic", status: "Active", income: 1200 },
  { id: 2, userAccount: "Jane Smith", startDate: "2024-02-01", endingDate: "2024-07-01", package: "Premium", status: "Expired", income: 2500 },
  { id: 3, userAccount: "Alice Johnson", startDate: "2024-03-10", endingDate: "2024-09-10", package: "Basic", status: "Active", income: 1500 },
  { id: 4, userAccount: "Bob Brown", startDate: "2024-04-20", endingDate: "2024-10-20", package: "Standard", status: "Expired", income: 1800 },
  { id: 5, userAccount: "Charlie Davis", startDate: "2024-05-05", endingDate: "2024-11-05", package: "Premium", status: "Active", income: 2200 },
  { id: 6, userAccount: "Diana Evans", startDate: "2024-06-15", endingDate: "2024-12-15", package: "Basic", status: "Active", income: 1300 },
  { id: 7, userAccount: "Ethan Garcia", startDate: "2024-07-25", endingDate: "2025-01-25", package: "Standard", status: "Expired", income: 1600 },
  { id: 8, userAccount: "Fiona Hall", startDate: "2024-08-30", endingDate: "2025-02-28", package: "Premium", status: "Active", income: 2400 },
  { id: 9, userAccount: "George Ives", startDate: "2024-09-10", endingDate: "2025-03-10", package: "Basic", status: "Expired", income: 1400 },
  { id: 10, userAccount: "Hannah Jackson", startDate: "2024-10-20", endingDate: "2025-04-20", package: "Standard", status: "Active", income: 1700 },
  { id: 11, userAccount: "Ian King", startDate: "2024-11-05", endingDate: "2025-05-05", package: "Premium", status: "Expired", income: 2000 },
  { id: 12, userAccount: "Jasmine Lee", startDate: "2024-12-15", endingDate: "2025-06-15", package: "Basic", status: "Active", income: 1100 },
];

export default function AdvertisementsIncome() {
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
          const startDate = new Date(item.startDate);
          return (
            startDate.getFullYear() === year &&
            (month ? startDate.getMonth() + 1 === month : true) &&
            (day ? startDate.getDate() === day : true)
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
      case "income":
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
      <div className='mt-4 bg-sky-500  relative rounded-md' style={{ height: '40px' }}>
        <p className='flex items-center justify-center h-full font-sans text-foreground-50 text-lg font-medium'>
          Advertisements Income
        </p>
      </div>
      {topContent}
      <Table aria-label="Example table with custom cells" className="overflow-hidden">
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
