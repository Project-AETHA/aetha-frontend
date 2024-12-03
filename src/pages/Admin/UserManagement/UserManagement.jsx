import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu,
    DropdownItem, Chip, User, Pagination, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Textarea, Spinner
} from "@nextui-org/react";
import { LiaUserSlashSolid } from "react-icons/lia";
import { PlusIcon } from "../../../components/common/icons/PlusIcon";
import { SearchIcon } from "../../../components/common/icons/SearchIcon";
import { EyeIcon } from "../../../components/common/icons/EyeIcon";
import { ChevronDownIcon } from "../../../components/common/icons/ChevronDownIcon";
import React, { useEffect, useState } from "react";
import { EditIcon } from "@/components/common/icons/EditIcon";
import { useNavigate } from 'react-router-dom'
import AddUserModel from "./components/AddUserModel";
import EditUserModel from "./components/EditUserModel";
import axios from 'axios'


const columns = [
    { name: "ID", uid: "id", sortable: false },
    { name: "EMAIL", uid: "email", sortable: true },
    { name: "NAME", uid: "name", sortable: true },
    { name: "GENDER", uid: "gender", sortable: true },
    { name: "ROLE", uid: "role", sortable: true },
    { name: "STATUS", uid: "status", sortable: true },
    { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
    { name: "ACTIVE", uid: "active" },
    { name: "DISABLED", uid: "disabled" },
    { name: "DELETED", uid: "deleted" },
];

const roleOptions = [
    { name: "READER", uid: "reader" },
    { name: "WRITER", uid: "writer" },
    { name: "ADMIN", uid: "admin" },
];


const statusColorMap = {
    ACTIVE: "success",
    DISABLED: "warning",
    DELETED: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function UserManagement() {

    const genderOptions = [
        { key: "male", label: "Male" },
        { key: "female", label: "Female" },
        { key: "other", label: "Other" },
        { key: "not-preferred", label: "Prefer not to say" },
    ];

    const navigate = useNavigate()

    const { isOpen: isEditOpen, onOpen: onEditOpen, onOpenChange: onEditOpenChange } = useDisclosure();
    const { isOpen: isDisableOpen, onOpen: onDisableOpen, onOpenChange: onDisableOpenChange } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onOpenChange: onDeleteOpenChange } = useDisclosure();
    const { isOpen: isAddNewOpen, onOpen: onAddNewOpen, onOpenChange: onAddNewOpenChange } = useDisclosure();

    async function getAllUsers() {
        setLoading(true)
        const response = await axios.get("/api/user/all-users")

        if (response.status === 200) {
            if (response.data.code === "00") {
                // Saving content to the users variable
                setUsers(response.data.content)
            }
        }
        setLoading(false)
    }

    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([])
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [roleFilter, setRoleFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        getAllUsers()
    }, [])

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.firstname.toLowerCase().includes(filterValue.toLowerCase())
                || user.lastname.toLowerCase().includes(filterValue.toLowerCase())
                || user.email.toLowerCase().includes(filterValue.toLowerCase())
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status.toLowerCase())
            );
        }
        if (roleFilter !== "all" && Array.from(roleFilter).length !== roleOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(roleFilter).includes(user.role.toLowerCase())
            );
        }



        return filteredUsers;
    }, [users, filterValue, statusFilter]);

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

    const renderCell = React.useCallback((user, columnKey) => {
        user.name = `${capitalize(user.firstname)} ${capitalize(user.lastname)}`
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: (user.image !== null && user.image.startsWith("/images")) ? user.image : `https://ik.imagekit.io/aetha/${user.image}` }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "displayName":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                    </div>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
                case "actions":
                    return (
                        <div className="relative flex justify-center items-center gap-2">
                            <Tooltip key="view" color="secondary" content="view" >
                                <Button isIconOnly variant="flat" color="secondary" className="capitalize" size="sm" onPress={() => navigate(`/admin/users/${user.id}`)}>
                                    <EyeIcon />
                                </Button>
                            </Tooltip>
                            <Tooltip key="edit" color="success" content="edit" >
                                <Button 
                                    isIconOnly 
                                    variant="flat" 
                                    color="success" 
                                    className="capitalize" 
                                    size="sm" 
                                    onPress={() => {
                                        setSelectedUser(user); // Save the user object or ID
                                        onEditOpen();         // Open the edit modal
                                    }}
                                >
                                    <EditIcon />
                                </Button>
                            </Tooltip>
                            <Tooltip key="disable" color="danger" content="disable">
                                <Button isIconOnly variant="flat" color="danger" className="capitalize" size="sm" onPress={onDisableOpen}>
                                    <LiaUserSlashSolid size="18px" />
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

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const topContent = React.useMemo(() => {
        return (


            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                        
                
                    />

                    <div className="flex gap-3">
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
                        <Button color="primary" endContent={<PlusIcon />} onPress={onAddNewOpen}>
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-black text-small ">Total {users.length} users</span>
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
        visibleColumns,
        onRowsPerPageChange,
        users.length,
        onSearchChange,
        hasSearchFilter,
    ]);

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
                    color="primary"
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
                    <TableBody emptyContent={"No users found"} className="" items={sortedItems} isLoading={loading} loadingContent={<div className="flex items-center h-full w-full justify-center gap-2"><Spinner color="secondary" />Loading ...</div>}>
                        {(item) => (
                            <TableRow key={item.id}  >
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>


                <AddUserModel isAddNewOpen={isAddNewOpen} onAddNewOpen={onAddNewOpen} onAddNewOpenChange={onAddNewOpenChange} />
                <EditUserModel isEditOpen={isEditOpen} onEditOpen={onEditOpen} onEditOpenChange={onEditOpenChange} user={selectedUser} />

                
                {/* Disable Modal */}
                <Modal
                    isOpen={isDisableOpen}
                    onOpenChange={onDisableOpenChange}
                    backdrop="blur"
                    classNames={{
                        backdrop: "bg-neutral-900/50 backdrop-blur-sm",
                    }}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-4 items-center">
                                    <div className="flex flex-col items-center text-center w-full">
                                        <div className="text-lg font-semibold bg-blue-500 w-full m-5 p-1 text-white">Disable User</div>
                                        <img
                                            className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 mb-3"
                                            src="/images/users/male_01.jpg"
                                            alt="User Avatar"
                                        />
                                        <div className="text-base font-medium">ravindu@gmail.com</div>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <Textarea
                                        key="faded"
                                        variant="faded"
                                        label="Reason for disable this user?"
                                        labelPlacement="outside"
                                        placeholder="Enter your reason"
                                        className="col-span-12 md:col-span-6 mb-6 md:mb-0 p-2"
                                        color="primary"
                                    />
                                    <p className="p-2">Are you sure you want to disable this user?</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onPress={onClose}>
                                        Disable
                                    </Button>
                                    <Button color="secondary" onPress={onClose}>
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>

        </>

    )
}

export default UserManagement