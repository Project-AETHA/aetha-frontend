import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Chip,
} from "@nextui-org/react";
import useGet from "@/hooks/useGet";
import LoadingComponent from "@/components/utility/LoadingComponent";

export default function ReportedContent() {
  const { data, isLoading, isError, error } = useGet({
    queryKey: "reported-content",
    url: "/api/reportedContent/get-all-novel-reports",
  });

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  // Calculate the total number of pages
  const pages = Math.ceil((data?.length || 0) / rowsPerPage);

  // Get the items to display on the current page
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return (data || []).slice(start, end);
  }, [page, data]);

  // Function to return the appropriate chip based on status
  const getStatusChip = (status) => {
    if (status === "ACTIVE") {
      return <Chip color="danger" variant="flat">Active</Chip>; // Red chip for Active
    } else if (status === "DECLINED") {
      return <Chip color="primary" variant="flat">Declined</Chip>; // Blue chip for Declined
    }
    return null;
  };

  return (
    <div className="min-h-[calc(100dvh-65px)] overflow-hidden bg-slate-100 px-3 pt-6">
      <h1 className="text-xl font-bold mb-4">Reported Content</h1>

      {isLoading && <LoadingComponent />}
      {isError && <div className="text-red-500">{error}</div>}

      {!isLoading && !isError && (
        <Table
          aria-label="Reported content table with pagination"
          bottomContent={
            <div className="flex w-full justify-center mt-4">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[222px]",
          }}
        >
          <TableHeader>
            <TableColumn>NOVEL TITLE</TableColumn>
            <TableColumn>AUTHOR</TableColumn>
            <TableColumn>REPORTED DATE</TableColumn>
            <TableColumn>REASON</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.novel.id}>
                <TableCell>{item.novel.title}</TableCell>
                <TableCell>{item.novel.author.displayName}</TableCell>
                <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>{item.reason}</TableCell>
                <TableCell>{getStatusChip(item.status)}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
