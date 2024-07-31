import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    Spinner
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { parseISO, format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import {MdDeleteForever, MdError, MdOutlineRefresh} from "react-icons/md";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast";

const formatDate = (dateString, default_style = true) => {
    // Parse the given date string
    const date = parseISO(dateString);
    // Format the date to the desired format
    return default_style ? format(date, "yyyy MMM dd") : format(date, "do MMM");
};

function SupportTable({ createTicket }) {
    const navigate = useNavigate();

    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);

    const [tickets, setTickets] = useState([]);

    const getData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get(
                "http://localhost:8080/api/support/get_my_tickets",
                {
                    timeout: 3000, // Set timeout to 3 seconds
                }
            );

            if (response.status === 200) {
                if (response.data.code === "00") {
                    setTickets(response.data.content);
                } else {
                    console.log("Error reported from server");
                }
            } else {
                console.log("Error while fetching data");
            }
        } catch (error) {
            if (error.code === "ECONNABORTED") {
                console.log("Request timed out");
            } else {
                console.log("Error while fetching data:", error.message);
            }
        }

        setIsLoading(false);
    };

    function createAlert(title, description) {
        toast({
            title: title,
            description: description,
        });
    }

    const deleteTicket = async (complaintId) => {

        try {
            const response = await axios.delete("http://localhost:8080/api/support/delete_ticket/" + complaintId);

            if (response.data.code === "00") {
                // Code for creating a custom title for the popup alert

                let title = (
                    <div className="flex gap-2 items-center text-green-600">
                        <IoCheckmarkDoneCircleSharp size={20} />
                        <p className="text-green-700">Success</p>
                    </div>
                );

                createAlert(
                    title,
                    "Ticket deleted successfully",
                    "success"
                );

                navigate("/support")
            }
        } catch (error) {
            // Code for creating a custom title for the popup alert

            let title = (
                <div className="flex gap-2 items-center text-red-800">
                    <MdError size={20} />
                    <p className="text-red-700">Error !</p>
                </div>
            );

            createAlert(title, "Ticket deletion failed", "danger");
            console.error("Error deleting the ticket:", error);
        }
    };

    function handleRetry() {
        getData();
    }

    useEffect(() => {
        getData();
    }, [createTicket]);

    return (
        <Table
            aria-label="Support Tickets Table"
            className="text-black dark:text-white"
        >
            <TableHeader>
                <TableColumn>TITLE</TableColumn>
                <TableColumn>CREATED AT</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody
                emptyContent={
                    <div
                        className="flex gap-2 items-center justify-center"
                        onClick={handleRetry}
                    >
                        <p>No rows to display.</p>
                        <span className="text-primary border-b-2 border-primary hover:cursor-pointer flex gap-1 items-center">
              Retry <MdOutlineRefresh />
            </span>
                    </div>
                }
                items={tickets}
                isLoading={isLoading}
                loadingContent={<Spinner />}
            >
                {(item) => (
                    <TableRow
                        key={item.id}
                        className="hover:cursor-pointer"
                    >
                        <TableCell className="truncate text-pretty">{item.title}</TableCell>
                        <TableCell className="text-nowrap">
              <span className="hidden sm:block">
                {formatDate(item.createdAt)}
              </span>
                            <span className="block sm:hidden">
                {formatDate(item.createdAt, false)}
              </span>
                        </TableCell>
                        <TableCell>
                            {item.status === "PENDING" ? (
                                <Chip radius="sm" variant="flat" size="sm" color="primary">
                                    Pending
                                </Chip>
                            ) : item.status === "SOLVED" ? (
                                <Chip radius="sm" variant="flat" size="sm" color="success">
                                    Solved
                                </Chip>
                            ) : (
                                <Chip radius="sm" variant="flat" size="sm" color="danger">
                                    Cancelled
                                </Chip>
                            )}
                        </TableCell>
                        <TableCell className="flex gap-2">
                            <Chip variant="flat" radius="sm" className="px-2" color="primary" onClick={() => navigate("/support/" + item.id)}>
                                <FaRegEdit size={13} />
                            </Chip>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Chip variant="flat" radius="sm" className="px-2" color="danger">
                                        <MdDeleteForever size={15} />
                                    </Chip>

                                    {/* This element is the alert confirmation window from shadcn/ui */}
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete this complaint data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction className="bg-danger/75 hover:bg-danger" onClick={() => deleteTicket(item.id)}>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default SupportTable;
