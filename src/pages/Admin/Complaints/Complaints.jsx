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
    User,
    Pagination,
    Tooltip,
    useDisclosure,
    Spinner
} from "@nextui-org/react";
import { LiaUserSlashSolid } from "react-icons/lia";
import { SearchIcon } from "@/components/common/icons/SearchIcon.jsx";
import { EyeIcon } from "@/components/common/icons/EyeIcon.jsx";
import { ChevronDownIcon } from "@/components/common/icons/ChevronDownIcon.jsx";
import { useEffect, useState, useMemo, useCallback } from "react";
import { EditIcon } from "@/components/common/icons/EditIcon.jsx";
import { DeleteIcon } from "@/components/common/icons/DeleteIcon.jsx";
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const columns = [
    { name: "NAME", uid: "username", sortable: true },
    { name: "EMAIL", uid: "email", sortable: true },
    { name: "TITLE", uid: "title", sortable: false },
    { name: "CATEGORY", uid: "category", sortable: true },
    { name: "CREATED AT", uid: "createdAt", sortable: true },
    { name: "STATUS", uid: "status", sortable: true },
    { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
    { name: "PENDING", uid: "pending" },
    { name: "SOLVED", uid: "solved" },
    { name: "DECLINED", uid: "declined" },
];

const categoryOptions = [
    { name: "COMPLAINT", uid: "complaint" },
    { name: "BUG", uid: "bug" },
    { name: "ASSISTANCE", uid: "assistance" },
    { name: "OTHER", uid: "other" },
];


const statusColorMap = {
    PENDING: "primary",
    SOLVED: "success",
    DECLINED: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "title", "category", "createdAt", "status", "actions"];

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDateTime(isoString) {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours}.${minutes} ${ampm}`;

    return `${year}-${month}-${day} ${formattedTime}`;
}

export default function Complaints() {

    const navigate = useNavigate()

    const { isOpen: isEditOpen, onOpen: onEditOpen, onOpenChange: onEditOpenChange } = useDisclosure();
    const { isOpen: isDisableOpen, onOpen: onDisableOpen, onOpenChange: onDisableOpenChange } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onOpenChange: onDeleteOpenChange } = useDisclosure();
    const { isOpen: isAddNewOpen, onOpen: onAddNewOpen, onOpenChange: onAddNewOpenChange } = useDisclosure();

    async function getAllComplaints() {
        setLoading(true)

        const response = await axios.get("/api/support/get_all_tickets")

        if (response.status === 200) {
            //? DEBUG console.log(response);

            if (response.data.code === "00") {
                // Saving content to the complaints variable
                setComplaints(response.data.content)
            }
        }
        setLoading(false)
    }

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [loading, setLoading] = useState([])
    const [complaints, setComplaints] = useState([])
    const [filterValue, setFilterValue] = useState("");
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [sortDescriptor, setSortDescriptor] = useState({
        column: "createdAt",
        direction: "descending",
    });
    const [page, setPage] = useState(1);

    useEffect(() => {
        getAllComplaints()
    }, [])

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = useMemo(() => {
        let filteredComplaints = [...complaints];

        if (hasSearchFilter) {
            filteredComplaints = filteredComplaints.filter((complaint) =>
                complaint.title.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredComplaints = filteredComplaints.filter((complaint) =>
                Array.from(statusFilter).includes(complaint.status.toLowerCase())
            );
        }
        if (categoryFilter !== "all" && Array.from(categoryFilter).length !== categoryOptions.length) {
            filteredComplaints = filteredComplaints.filter((complaint) =>
                Array.from(categoryFilter).includes(complaint.category.toLowerCase())
            );
        }

        return filteredComplaints;
    }, [complaints, filterValue, statusFilter, categoryFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = useCallback((complaint, columnKey) => {
        complaint.username = complaint.author.username
        complaint.email = complaint.author.email

        const cellValue = complaint[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: complaint.author.image }}
                        description={complaint.email}
                        name={cellValue}
                    >
                        {complaint.email}
                    </User>
                );
            case "email":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                    </div>
                );
            case "title":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                    </div>
                );
            case "category":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                    </div>
                );
            case "createdAt":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{formatDateTime(cellValue)}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[complaint.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-center items-center gap-2">
                        <Tooltip key="view" color="primary" content="view" >
                            <Button isIconOnly variant="flat" color="primary" className="capitalize" size="sm" onPress={() => navigate(`/admin/complaints/${complaint.id}`)}>
                                <EyeIcon />
                            </Button>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
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

    const onRowsPerPageChange = useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const topContent = useMemo(() => {
        return (

            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by title..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />

                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<ChevronDownIcon className="text-small" />}
                                    variant="ghost"
                                >
                                    Category
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Select category"
                                closeOnSelect={false}
                                disallowEmptySelection
                                selectedKeys={categoryFilter}
                                selectionMode="multiple"
                                onSelectionChange={(keys) => setCategoryFilter(keys)}
                            >
                                {categoryOptions.map((item) => (
                                    <DropdownItem key={item.uid}>{item.name}</DropdownItem>
                                ))}
                            </DropdownMenu>

                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} variant="ghost" >
                                    Status
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {capitalize(status.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} variant="ghost" >
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
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-black text-small ">Total {complaints.length} complaints</span>
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
        );
    }, [
        filterValue,
        statusFilter,
        categoryFilter,
        visibleColumns,
        onRowsPerPageChange,
        complaints.length,
        onSearchChange,
        hasSearchFilter,
    ]);

    const bottomContent = useMemo(() => {
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
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    return (

        <>

            <div className='min-h-[calc(100dvh-65px)]  overflow-hidden bg-slate-100 px-3 pt-6'>

                <Table
                    aria-label="Example table with custom cells, pagination and sorting"
                    isHeaderSticky
                    bottomContent={bottomContent}
                    bottomContentPlacement="outside"
                    classNames={{
                        wrapper: "max-h-[450px]",
                    }}
                    selectedKeys={selectedKeys}
                    selectionMode="single"
                    color="secondary"
                    sortDescriptor={sortDescriptor}
                    topContent={topContent}
                    topContentPlacement="outside"
                    onSelectionChange={setSelectedKeys}
                    onSortChange={setSortDescriptor}
                >
                    <TableHeader columns={headerColumns} >
                        {(column) => (
                            <TableColumn
                                key={column.uid}
                                align={column.uid === "actions" ? "center" : "start"}
                                allowsSorting={column.sortable}

                            >
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody emptyContent={"No complaints found"} className="" items={sortedItems} isLoading={loading} loadingContent={<div className="flex items-center h-full w-full justify-center gap-2"><Spinner color="secondary" />Loading ...</div>}>
                        {(item) => (
                            <TableRow key={item.id}  >
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

        </>

    )
}