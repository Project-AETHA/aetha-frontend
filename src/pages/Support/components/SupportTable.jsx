import {
  Avatar,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Spinner,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { parseISO, format } from "date-fns";

const formatDate = (dateString, default_style = true) => {
    // Parse the given date string
    const date = parseISO(dateString);
    // Format the date to the desired format
    return default_style ? format(date, "yyyy MMM dd") : format(date, "do MMM");
  };

function SupportTable({ createTicket }) {
  const [isLoading, setIsLoading] = useState(false);

  const [tickets, setTickets] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:8080/api/support/get_my_tickets", {
        timeout: 3000, // Set timeout to 3 seconds
      });

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
      if (error.code === 'ECONNABORTED') {
        console.log("Request timed out");
      } else {
        console.log("Error while fetching data:", error.message);
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [createTicket]);

  return (
    <Table
      aria-label="Support Tickets Table"
      className="text-black dark:text-white"
      color="primary"
      selectionMode="single"
    >
      <TableHeader>
        <TableColumn className="hidden sm:flex items-center">NAME</TableColumn>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>CREATED AT</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={"No rows to display."}
        items={tickets}
        isLoading={isLoading}
        loadingContent={<Spinner />}
      >
        {(item) => (
          <TableRow key={item.id}>
            <TableCell className="hidden sm:flex items-center gap-2">
              <Avatar
                src={
                  item.author.image
                    ? item.author.image
                    : "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                }
                size="sm"
              />
              {item.author.displayName}
            </TableCell>
            <TableCell className="truncate text-pretty">{item.title}</TableCell>
            <TableCell className="text-nowrap">
              <span className="hidden sm:block">{formatDate(item.createdAt)}</span>
              <span className="block sm:hidden">{formatDate(item.createdAt, false)}</span>
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
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default SupportTable