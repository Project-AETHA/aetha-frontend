import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Input,
  Pagination,
  Tooltip,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User
} from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { SearchIcon } from "../../../components/common/icons/SearchIcon";
import { ChevronDownIcon } from "../../../components/common/icons/ChevronDownIcon";

const columns = [
  { name: "Content Title", uid: "title" },
  { name: "Chapter No", uid: "chapter" },
  { name: "Reported Date", uid: "reportedDate" },
  { name: "Reason", uid: "reason" },
  { name: "Status", uid: "status" },
];

const reportedContents = [
  { id: 1, title: "The Rise of AI", chapter: "3", reportedDate: "2024-07-28", reason: "Inappropriate content", status: "reported" },
  { id: 2, title: "A Journey to the Moon", chapter: "1", reportedDate: "2024-07-29", reason: "Offensive language", status: "reported" },
  { id: 3, title: "Mystery of the Old Mansion", chapter: null, reportedDate: "2024-07-30", reason: "Plagiarism", status: "reported" },
  { id: 4, title: "Life in the Future", chapter: "5", reportedDate: "2024-07-31", reason: "Spam", status: "reported" },
  { id: 5, title: "Under the Sea", chapter: "2", reportedDate: "2024-08-01", reason: "Copyright infringement", status: "reported" },
  { id: 6, title: "Adventures in Space", chapter: "4", reportedDate: "2024-08-02", reason: "Misleading information", status: "reported" },
  { id: 7, title: "The Secret Garden", chapter: null, reportedDate: "2024-08-03", reason: "Graphic content", status: "reported" },
  { id: 8, title: "Future Tech", chapter: "8", reportedDate: "2024-08-04", reason: "Hate speech", status: "reported" },
  { id: 9, title: "Ocean Mysteries", chapter: "6", reportedDate: "2024-08-05", reason: "Harassment", status: "reported" },
  { id: 10, title: "Virtual Reality", chapter: "7", reportedDate: "2024-08-06", reason: "Explicit content", status: "reported" },
];

const statusColorMap = {
  reported: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["title", "chapter", "reportedDate", "reason", "status"];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ReportedContent() {
  const [filterValue, setFilterValue] = React.useState("");
  const [dateFilterValue, setDateFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "reportedDate",
    direction: "ascending",
  });

  const hasSearchFilter = Boolean(filterValue);
  const hasDateFilter = Boolean(dateFilterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredContents = [...reportedContents];

    if (hasSearchFilter) {
      filteredContents = filteredContents.filter((content) =>
        content.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (hasDateFilter) {
      filteredContents = filteredContents.filter((content) =>
        content.reportedDate.startsWith(dateFilterValue)
      );
    }

    return filteredContents;
  }, [reportedContents, filterValue, dateFilterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((content, columnKey) => {
    const cellValue = content[columnKey];

    switch (columnKey) {
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[content.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Tooltip key="View" color="success" content="View">
              <Button isIconOnly variant="flat" color="success" className="capitalize" size="sm">
                <FaEye />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onDateFilterChange = React.useCallback((value) => {
    if (value) {
      setDateFilterValue(value);
      setPage(1);
    } else {
      setDateFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setDateFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[30%]"
            placeholder="Search by title..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <Input
            isClearable
            className="w-full sm:max-w-[30%]"
            placeholder="Filter by date (YYYY-MM-DD)"
            value={dateFilterValue}
            onClear={() => onClear()}
            onValueChange={onDateFilterChange}
          />
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}
            >
              {columns.map((column) => (
                <DropdownItem key={column.uid} className="capitalize">
                  {capitalize(column.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {reportedContents.length} reports</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">8</option>
              <option value="10">16</option>
              <option value="15">24</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, dateFilterValue, visibleColumns, onRowsPerPageChange, reportedContents.length, onSearchChange, onClear]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center">
        <div className="hidden sm:flex w-[30%] justify-end gap-12">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={setPage}
          />
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [page, pages]);

  return (
    <div className="min-h-[calc(100dvh-65px)] overflow-hidden bg-slate-100 px-3 pt-6">
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[450px]",
        }}
        selectedKeys={[]}
        selectionMode="none"
        color="primary"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No reports found"} className="" items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReportedContent;
