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
  { name: "Transaction ID", uid: "transactionId" },
  { name: "Customer", uid: "customer" },
  { name: "Title", uid: "title" },
  { name: "Writer", uid: "writer" },
  { name: "Date", uid: "date" },
  { name: "Price", uid: "price" },
  { name: "Percentage (5%)", uid: "percentage" },
  { name: "Our Income", uid: "ourIncome" },
  { name: "Status", uid: "status" },
];

const sampleData = [
  { id: 1, transactionId: "TX12345", customer: "John Doe", title: "The Great Adventure", writer: "Jane Smith", date: "2024-01-15", price: 1500, percentage: "5%", ourIncome: 75, status: "Sold" },
  { id: 2, transactionId: "TX12346", customer: "Alice Johnson", title: "Mystery of the Lost", writer: "Bob Brown", date: "2024-02-01", price: 2000, percentage: "5%", ourIncome: 100, status: "Sold" },
  { id: 3, transactionId: "TX12347", customer: "Charlie Davis", title: "Secrets of the Ocean", writer: "Charlie Davis", date: "2024-03-10", price: 2500, percentage: "5%", ourIncome: 125, status: "Sold" },
  { id: 4, transactionId: "TX12348", customer: "Diana Evans", title: "Adventures in Space", writer: "Diana Evans", date: "2024-04-20", price: 1800, percentage: "5%", ourIncome: 90, status: "Sold" },
  { id: 5, transactionId: "TX12349", customer: "Ethan Garcia", title: "Journey to the Unknown", writer: "Fiona Hall", date: "2024-05-05", price: 2200, percentage: "5%", ourIncome: 110, status: "Sold" },
  { id: 6, transactionId: "TX12350", customer: "Fiona Hall", title: "The Last Frontier", writer: "George Ives", date: "2024-06-15", price: 1300, percentage: "5%", ourIncome: 65, status: "Sold" },
  { id: 7, transactionId: "TX12351", customer: "George Ives", title: "Lost in Time", writer: "Hannah Jackson", date: "2024-07-25", price: 1600, percentage: "5%", ourIncome: 80, status: "Sold" },
  { id: 8, transactionId: "TX12352", customer: "Hannah Jackson", title: "Realm of Fantasy", writer: "Ian King", date: "2024-08-30", price: 2400, percentage: "5%", ourIncome: 120, status: "Sold" },
  { id: 9, transactionId: "TX12353", customer: "Ian King", title: "Mystery Island", writer: "Jasmine Lee", date: "2024-09-10", price: 1400, percentage: "5%", ourIncome: 70, status: "Sold" },
  { id: 10, transactionId: "TX12354", customer: "Jasmine Lee", title: "Secrets of the Jungle", writer: "John Doe", date: "2024-10-20", price: 1700, percentage: "5%", ourIncome: 85, status: "Sold" },
  { id: 11, transactionId: "TX12355", customer: "John Doe", title: "The Hidden Treasure", writer: "Jane Smith", date: "2024-11-05", price: 2000, percentage: "5%", ourIncome: 100, status: "Sold" },
  { id: 12, transactionId: "TX12356", customer: "Alice Johnson", title: "The Great War", writer: "Bob Brown", date: "2024-12-15", price: 1100, percentage: "5%", ourIncome: 55, status: "Sold" },
];

export default function EBookSelling() {
  const { isOpen: isAddNewOpen, onOpen: onAddNewOpen } = useDisclosure();

  const [data, setData] = useState(sampleData);
  const [dateFilterValue, setDateFilterValue] = useState("");
  const [titleFilterValue, setTitleFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [page, setPage] = useState(1);

  const hasDateFilter = Boolean(dateFilterValue);
  const hasTitleFilter = Boolean(titleFilterValue);

  const filteredItems = useMemo(() => {
    let filteredData = [...data];

    // Filter by date
    if (hasDateFilter) {
      const [year, month, day] = dateFilterValue.split('-').map(Number);
      if (!isNaN(year)) {
        filteredData = filteredData.filter(item => {
          const date = new Date(item.date);
          return (
            date.getFullYear() === year &&
            (month ? date.getMonth() + 1 === month : true) &&
            (day ? date.getDate() === day : true)
          );
        });
      }
    }

    // Filter by title
    if (hasTitleFilter) {
      filteredData = filteredData.filter(item => item.title.toLowerCase().includes(titleFilterValue.toLowerCase()));
    }

    return filteredData;
  }, [data, dateFilterValue, titleFilterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "price":
      case "ourIncome":
        return `LKR ${cellValue.toLocaleString()}`;
      case "percentage":
        return cellValue;
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

  const onTitleSearchChange = useCallback((value) => {
    setTitleFilterValue(value);
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
          placeholder="Search by book title..."
          startContent={<SearchIcon />}
          value={titleFilterValue}
          onClear={() => onTitleSearchChange("")}
          onValueChange={onTitleSearchChange}
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
  ), [dateFilterValue, titleFilterValue, filteredItems.length, onDateSearchChange, onTitleSearchChange, onRowsPerPageChange]);

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
          Ebook Selling Income
        </p>
      </div>
      {topContent}
      <Table aria-label="Ebook Selling Income Table" className="overflow-hidden">
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
