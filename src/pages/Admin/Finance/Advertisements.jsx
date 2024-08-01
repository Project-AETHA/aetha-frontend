import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Button, User, Input, Dropdown, Pagination } from "@nextui-org/react";

const columns = [
  { name: "User", uid: "userAccount" },
  { name: "Start Date", uid: "startDate" },
  { name: "Ending Date", uid: "endingDate" },
  { name: "Package", uid: "package" },
  { name: "Status", uid: "status" },
  { name: "Income", uid: "income" },
];

// Sample data
const advertisements = [
  {
    id: 1,
    userAccount: "tony.reichert@example.com",
    startDate: "2024-07-01",
    endingDate: "2024-08-01",
    package: "package-0",
    status: "active",
    income: 5000,
  },
  {
    id: 2,
    userAccount: "zoey.lang@example.com",
    startDate: "2024-06-01",
    endingDate: "2024-07-01",
    package: "package-1",
    status: "expired",
    income: 10000,
  },
  {
    id: 3,
    userAccount: "jane.fisher@example.com",
    startDate: "2024-07-15",
    endingDate: "2024-08-15",
    package: "package-2",
    status: "active",
    income: 15000,
  },
  {
    id: 4,
    userAccount: "william.howard@example.com",
    startDate: "2024-05-01",
    endingDate: "2024-06-01",
    package: "package-3",
    status: "expired",
    income: 20000,
  },
  {
    id: 5,
    userAccount: "kristen.cooper@example.com",
    startDate: "2024-08-01",
    endingDate: "2024-09-01",
    package: "package-0",
    status: "active",
    income: 5000,
  },
];

const statusColorMap = {
  active: "success",
  expired: "danger",
};

function renderCell(advertisement, columnKey) {
  const cellValue = advertisement[columnKey];

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
    case "income":
      return (
        <strong>
          LKR {cellValue}
        </strong>
      );
    default:
      return cellValue;
  }
}


export default function Advertisements() {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <h1 className="text-foreground-50 text-large bg-sky-500/75 rounded p-4 font-bold tracking-wide w-full flex justify-center">Advertisement Income</h1>
      <Table aria-label="Advertisement table with custom cells" radius="sm" shadow='none'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align="start">
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={advertisements}>
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
  )
}