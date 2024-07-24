import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    getKeyValue
} from "@nextui-org/react";

export default function BasicTableWithLinks(props) {
    const [page, setPage] = useState(1);
    const rowsPerPage = props.rowsPerPage ?? 5;

    const dataAvailable = props.data && props.data.length > 0

    const navigate = useNavigate()

    function handleItemClick(item) {
        navigate(props.formatLink(item))
    }

    const columns = props.columns

    let items = []
    let pages = 0

    if(dataAvailable) {
        pages = Math.ceil(props.data.length / rowsPerPage);
        items = useMemo(() => {
            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;

            return props.data.slice(start, end);
        }, [page, props.data]);
    }

    return (
        <Table
            aria-label="BasicTableWithLinks"
            selectionMode="single"
            removeWrapper
            bottomContent={
                dataAvailable && (
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />
                    </div>
                )
            }
            classNames={{
                wrapper: "min-h-[222px]",
            }}
        >
            <TableHeader>
                {columns && columns.map((column, column_index) => (
                    <TableColumn key={column_index}>{column.toUpperCase()}</TableColumn>
                ))}
            </TableHeader>
            <TableBody items={items} emptyContent={"No rows to display."}>
                {(item, item_index) => (
                    <TableRow key={item_index} onClick={() => handleItemClick(item)} className="hover:cursor-pointer">
                        {columns && columns.map((column, column_index) => (
                            <TableCell key={column_index}>{getKeyValue(item, column)}</TableCell>
                        ))}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}