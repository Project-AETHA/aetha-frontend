import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Button, User } from "@nextui-org/react";
import useGet from "@/hooks/useGet";
import LoadingComponent from "@/components/utility/LoadingComponent";

const statusColorMap = {
    SUCCESS: "success",
    FAILURE: "danger",
    ACTIVE: "primary",
    PAYMENT_PENDING: "warning"
};

export default function TransactionTablePage() {

    const {data, isLoading, isError, error, refetch} = useGet({
        queryKey: "transactions",
        url: `/api/transactions/get-All-transactions`
    })

    return (
        <div className="">
            {isLoading && <LoadingComponent />}
            {!isLoading && isError && <div>{error}</div>}
            {!isLoading && !isError && (
                <Table aria-label="Transaction table with custom cells" radius="sm" shadow='none'>
                <TableHeader>
                    <TableColumn>Transaction ID</TableColumn>
                    <TableColumn>Username</TableColumn>
                    <TableColumn>StartDate</TableColumn>
                    <TableColumn>Amount</TableColumn>
                    <TableColumn>Status</TableColumn>
                </TableHeader>
                <TableBody items={data}>
                    {(item) => (
                        <TableRow key={`${item.id}_${item.creator.id}`}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.creator.username}</TableCell>
                            <TableCell>{item.startDate}</TableCell>
                            <TableCell>{item.calculatedPrice}</TableCell>
                            <TableCell>
                                <Chip variant='flat' color={statusColorMap[item.status ?? "SUCCESS"]}>{item.status ?? "SUCCESS"}</Chip>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            )}
        </div>
    );
}
