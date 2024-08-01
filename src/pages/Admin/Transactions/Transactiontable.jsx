import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Button, User } from "@nextui-org/react";
import { EyeIcon } from '../../../components/common/icons/EyeIcon';

// Updated columns
const columns = [
    { name: "Transaction ID", uid: "transactionId" },
    { name: "Date and Time", uid: "dateTime" },
    { name: "User Account", uid: "userAccount" },
    { name: "Category", uid: "category" },
    { name: "Status", uid: "status" },
    { name: "View", uid: "view" },
];

// Sample data
const transactions = [
    {
        id: 1,
        transactionId: "TX12345",
        dateTime: "2024-07-01 14:30",
        userAccount: "tony.reichert@example.com",
        category: "Subscription Payment",
        status: "success",
    },
    {
        id: 2,
        transactionId: "TX12346",
        dateTime: "2024-07-02 09:15",
        userAccount: "zoey.lang@example.com",
        category: "Ebook Buy",
        status: "failure",
    },
    {
        id: 3,
        transactionId: "TX12347",
        dateTime: "2024-07-03 17:45",
        userAccount: "jane.fisher@example.com",
        category: "Preselling Book Register",
        status: "success",
    },
    {
        id: 4,
        transactionId: "TX12348",
        dateTime: "2024-07-04 11:00",
        userAccount: "william.howard@example.com",
        category: "Advertisement",
        status: "failure",
    },
    {
        id: 5,
        transactionId: "TX12349",
        dateTime: "2024-07-05 16:30",
        userAccount: "kristen.cooper@example.com",
        category: "Subscription Payment",
        status: "success",
    },
];

const statusColorMap = {
    success: "success",
    failure: "danger",
};

function renderCell(transaction, columnKey) {
    const cellValue = transaction[columnKey];

    switch (columnKey) {
        case "userAccount":
            return (
                <User
                    name={cellValue}
                    avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                    }}
                />
            );
        case "status":
            return (
                <Chip className="capitalize" color={statusColorMap[cellValue]} size="sm" variant="flat">
                    {cellValue}
                </Chip>
            );
        case "view":
            return (
                <Tooltip content="View Details" color='primary'>
                    <Button isIconOnly variant="flat" color="primary" className="capitalize" size="sm">
                        <EyeIcon />
                    </Button>
                </Tooltip>
            );
        default:
            return cellValue;
    }
}

export default function TransactionTablePage() {
    return (
        <div className="">
            <Table aria-label="Transaction table with custom cells" radius="sm" shadow='none'>
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "view" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={transactions}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => (
                                <TableCell key={columnKey}>
                                    {renderCell(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
