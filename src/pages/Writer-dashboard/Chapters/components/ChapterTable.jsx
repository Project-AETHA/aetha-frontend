import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Spinner } from "@nextui-org/react";
import useGet from "@/hooks/useGet";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import AlertConfirmation from "../../../../components/common/alerts/AlertConfirmation";
import LoadingComponent from "@/components/utility/LoadingComponent";
import { useEffect } from "react";

export default function ChapterTable({novelId}) {

    const { data, isLoading, isError, error, refetch } = useGet({ queryKey: "chapters", url: `/api/chapters/all/author/${novelId}`, params: { novelId } });

    const navigate = useNavigate();

    const statusColorMap = {
        PENDING: "warning",
        APPROVED: "success",
        REJECTED: "error",
        DELETED: "default",
        DRAFT: "default",
        PUBLISHED: "success",
        COMPLETED: "primary",
    };

    function handleDelete(id) {
        console.log({msg: "Delete", id: id});
    }

    useEffect(() => {
      refetch();
    }, []);

  return (
    <Table
        aria-label="Chapters Table"
        className="mb-8"
        selectionMode="single"
    >
      <TableHeader>
        <TableColumn>NUMBER</TableColumn>
        <TableColumn>PAID</TableColumn>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>CREATED ON</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody items={data || []} isLoading={isLoading} loadingContent={<LoadingComponent />}>
        {!isLoading && !isError && ((item, index) => (
            <TableRow key={index}>
                <TableCell>{item.chapterNumber}</TableCell>
                <TableCell>{item.isPremium ? "YES" : "NO"}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                    <Chip variant="flat" radius="sm" color={statusColorMap[item.status]}>{item.status}</Chip>
                </TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell className="flex gap-2 items-center justify-center">
                    <MdModeEdit className="text-blue-500 hover:cursor-pointer" onClick={() => navigate(`/author/novels/details/${item.id}/editChapter`)} size="20px" />
                    <AlertConfirmation
                        message="Continuing will delete the chapter permanently."
                        callback={handleDelete}
                        params={item.id}
                    >
                        <MdDelete className="text-red-500 hover:cursor-pointer" size="20px" />
                    </AlertConfirmation>
                </TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}