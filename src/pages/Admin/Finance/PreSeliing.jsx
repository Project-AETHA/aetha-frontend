import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Chip,
  useDisclosure,
} from "@nextui-org/react";
import { SearchIcon } from "@/components/common/icons/SearchIcon.jsx";
import { useState, useMemo, useCallback } from "react";

const columns = [
  { name: "Author", uid: "author" },
  { name: "Novel", uid: "novel" },
  { name: "Registration Date", uid: "registrationDate" },
  { name: "Income", uid: "income" },
  { name: "Status", uid: "status" },
];

const sampleData = [
  { id: 1, author: "Jane Smith", novel: "The Great Adventure", registrationDate: "2024-01-15", income: 1500, status: "Paid" },
  { id: 2, author: "Bob Brown", novel: "Mystery of the Lost", registrationDate: "2024-02-01", income: 2000, status: "Paid" },
  { id: 3, author: "Charlie Davis", novel: "Secrets of the Ocean", registrationDate: "2024-03-10", income: 2500, status: "Paid" },
  { id: 4, author: "Diana Evans", novel: "Adventures in Space", registrationDate: "2024-04-20", income: 1800, status: "Paid" },
  { id: 5, author: "Fiona Hall", novel: "Journey to the Unknown", registrationDate: "2024-05-05", income: 2200, status: "Paid" },
  { id: 6, author: "George Ives", novel: "The Last Frontier", registrationDate: "2024-06-15", income: 1300, status: "Paid" },
  { id: 7, author: "Hannah Jackson", novel: "Lost in Time", registrationDate: "2024-07-25", income: 1600, status: "Paid" },
  { id: 8, author: "Ian King", novel: "Realm of Fantasy", registrationDate: "2024-08-30", income: 2400, status: "Paid" },
  { id: 9, author: "Jasmine Lee", novel: "Mystery Island", registrationDate: "2024-09-10", income: 1400, status: "Paid" },
  { id: 10, author: "John Doe", novel: "Secrets of the Jungle", registrationDate: "2024-10-20", income: 1700, status: "Paid" },
  { id: 11, author: "Jane Smith", novel: "The Hidden Treasure", registrationDate: "2024-11-05", income: 2000, status: "Paid" },
  { id: 12, author: "Bob Brown", novel: "The Great War", registrationDate: "2024-12-15", income: 1100, status: "Paid" },
];

export default function PreSelling() {
  const { isOpen: isAddNewOpen, onOpen: onAddNewOpen } = useDisclosure();

  const [data, setData] = useState(sampleData);
  const [dateFilterValue, setDateFilterValue] = useState("");
  const [novelFilterValue, setNovelFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [page, setPage] = useState(1);

  const hasDateFilter = Boolean(dateFilterValue);
  const hasNovelFilter = Boolean(novelFilterValue);

  const filteredItems = useMemo(() => {
    let filteredData = [...data];

    // Filter by date
    if (hasDateFilter) {
      const [year, month, day] = dateFilterValue.split('-').map(Number);
      if (!isNaN(year)) {
        filteredData = filteredData.filter(item => {
          const date = new Date(item.registrationDate);
          return (
            date.getFullYear() === year &&
            (month ? date.getMonth() + 1 === month : true) &&
            (day ? date.getDate() === day : true)
          );
        });
      }
    }

    // Filter by novel title
    if (hasNovelFilter) {
      filteredData = filteredData.filter(item => item.novel.toLowerCase().includes(novelFilterValue.toLowerCase()));
    }

    return filteredData;
  }, [data, dateFilterValue, novelFilterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "income":
        return `LKR ${cellValue.toLocaleString()}`;
      case "status":
        return (
          <Chip className="capitalize" color="success" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  const onDateSearchChange = useCallback((value) => {
    setDateFilterValue(value);
    setPage(1);
  }, []);

  const onNovelSearchChange = useCallback((value) => {
    setNovelFilterValue(value);
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
          value={dateFilterValue}
          onClear={() => onDateSearchChange("")}
          onValueChange={onDateSearchChange}
        />
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Search by novel title..."
          startContent={<SearchIcon />}
          value={novelFilterValue}
          onClear={() => onNovelSearchChange("")}
          onValueChange={onNovelSearchChange}
        />
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
  ), [dateFilterValue, novelFilterValue, filteredItems.length, onDateSearchChange, onNovelSearchChange, onRowsPerPageChange]);

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
          Pre-Selling Book Registration Income
        </p>
      </div>
      {topContent}
      <Table aria-label="Pre-Selling Book Registration Income Table" className="overflow-hidden">
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
