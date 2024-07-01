import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Spinner} from "@nextui-org/react"
import { parseISO, format } from 'date-fns';
import {useState} from "react";

const formatDate = (dateString) => {
    // Parse the given date string
    const date = parseISO(dateString);
    // Format the date to the desired format
    return format(date, 'yyyy MMM dd');
};

const SupportPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const users = [
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            createdAt: "2010-11-25T00:00:00.000+00:00",
            status: "active",
        },
        {
            id: 2,
            name: "Zoey Lang",
            role: "Technical Lead",
            createdAt: "2015-06-17T00:00:00.000+00:00",
            status: "solved",
        },
        {
            id: 3,
            name: "Jane Fisher",
            role: "Senior Developer",
            createdAt: "2020-09-05T00:00:00.000+00:00",
            status: "active",
        },
        {
            id: 4,
            name: "William Howard",
            role: "Community Manager",
            createdAt: "2023-01-30T00:00:00.000+00:00",
            status: "paused",
        },
        {
            id: 5,
            name: "Kristen Copper",
            role: "Sales Manager",
            createdAt: "2024-08-15T00:00:00.000+00:00",
            status: "active",
        },
    ];


    return (
        <div className="container">
            <div className="">
                Suggest to create a support ticket
            </div>
            <div className="">
                <div className="text-black dark:text-white">Title</div>
                <div>

                    <Table
                        aria-label="Example empty table"
                        className="text-black dark:text-white"
                        color="foreground"
                        selectionMode="single"
                    >
                        <TableHeader>
                            <TableColumn>NAME</TableColumn>
                            <TableColumn>ROLE</TableColumn>
                            <TableColumn>CREATED AT</TableColumn>
                            <TableColumn>STATUS</TableColumn>
                        </TableHeader>
                        <TableBody
                            emptyContent={"No rows to display."}
                            items={users}
                            isLoading={isLoading}
                            loadingContent={<Spinner label="Loading Tickets..." />}
                        >
                            {(item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.role}</TableCell>
                                    <TableCell>{formatDate(item.createdAt)}</TableCell>
                                    <TableCell>{item.status === "active" ? (
                                        <Chip radius="sm" variant='flat' size="sm" color="primary">Active</Chip>
                                    ) : item.status === "solved" ? (
                                            <Chip radius="sm" variant='flat' size="sm" color="success">Solved</Chip>
                                        ) :
                                        (
                                            <Chip radius="sm" variant='flat' size="sm" color="danger">Paused</Chip>
                                        )}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                </div>
            </div>
        </div>
    );
}

export default SupportPage;