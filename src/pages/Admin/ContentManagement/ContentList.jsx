import React, { useEffect } from 'react'
import { Table, TableHeader, TableColumn, Tooltip, TableBody, TableRow, TableCell, getKeyValue, Chip, Button, User } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom'
import useGet from "@/hooks/useGet";
import ImageOnline from "@/components/common/ImageOnline";
import LoadingComponent from "@/components/utility/LoadingComponent";
import axios from "axios";
import { EyeIcon } from "@/components/common/icons/EyeIcon.jsx";

const statusColorMapping = {
    PENDING: 'warning',
    REJECTED: 'danger',
    DELETED: 'gray',
    DRAFT: 'default',
    PUBLISHED: 'success',
};

const contentColumns = [
    { key: 'coverImage', label: 'Cover Image' },
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'rating', label: 'Rating' },
    { key: 'createdDate', label: 'Date Created' },
    { key: 'status', label: 'Status' },
    { key: 'view', label: 'Actions' },
];

function ContentList() {

    const { data, isLoading, isError, error, refetch } = useGet({
        queryKey: "content-management",
        url: "/api/novels/all-novels",
        params: {
            status: "all"
        }
    })

    const [meta, setMeta] = React.useState({});

    async function getMetaData() {
        const response = await axios.get("/api/stats/admin-contentmanagement");
        console.log(response.data.content);
        if(response.status === 200 && response.data.code === "00") {
            setMeta(response.data.content);
        }
    }

    const navigate = useNavigate();

    function BoxWrapper({ children,link }) {
        return <div className="bg-white rounded-md p-4 hover:cursor-pointer hover:scale-105 duration-300 ease-in-out flex-1 border border-gray-200 flex items-center" onClick={()=>navigate(link)}>{children}</div>
    }
    
    useEffect(() => {
        refetch()
        getMetaData()
    }, [])

    return (
        <div className='min-h-screen flex justify-center'>
            <div className='flex-col w-full rounded-md'>
                <div className='mt-8 mx-4 p-4 shadow-lg bg-sky-500/75 py-8 relative rounded-lg' style={{ height: '50px' }} >
                    <p className='flex items-center justify-center h-full font-sans text-foreground-50 text-lg font-semibold'>
                        Published Novels
                    </p>
                </div>

                <div className='p-4'>
                    {isLoading && <LoadingComponent />}
                    {!isLoading && isError && <div>{error.message}</div>}
                    {!isLoading && !isError && (
                        <Table aria-label="Recent Content Details" className='text-foreground-900' radius='md' selectionMode='single' color='secondary'>
                        <TableHeader columns={contentColumns} >
                            {(column) => <TableColumn key={column.key} className='  '>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={data} >
                            {(item) => (
                                <TableRow key={item.key} className='bg-white'>
                                    {(columnKey) => {
                                        if (columnKey === 'coverImage') {
                                            return (
                                                <TableCell>
                                                    <ImageOnline
                                                        width={80}
                                                        height={80}
                                                        alt="NextUI Fruit Image with Zoom"
                                                        path={item.coverImage}
                                                        className="rounded-md"
                                                    />
                                                </TableCell>
                                            );
                                        } else if (columnKey === 'status') {
                                            return (
                                                <TableCell>
                                                    <Chip color={statusColorMapping[item.status] || 'default'} variant='flat' radius='sm'>
                                                        {item.status}
                                                    </Chip>
                                                </TableCell>
                                            );

                                        } else if (columnKey === 'createdDate') {
                                            return <TableCell >{item.createdAt}</TableCell>;
                                        } else if (columnKey === "title") {
                                            return <TableCell  >{getKeyValue(item, columnKey)}</TableCell>;
                                        } else if (columnKey === 'author') {
                                            return <TableCell>
                                                <User
                                                    name={item.author.displayName}
                                                    description={item.author.email}
                                                    avatarProps={{
                                                        src: item.author.image.startsWith("/images") ? item.author.image : "https://ik.imagekit.io/aetha/" + item.author.image
                                                    }}
                                                />

                                            </TableCell>
                                        }
                                        else if (columnKey === 'view') {
                                            return (
                                                <TableCell>
                                                    <Tooltip key="view" color="secondary" content="view" >
                                                        <Button isIconOnly variant="flat" color="secondary" className="capitalize" size="sm" onClick={() => { navigate(`/novels/${item.id}`); }}>
                                                            <EyeIcon />
                                                        </Button>
                                                    </Tooltip>
                                                </TableCell>
                                            );
                                        }
                                        return <TableCell style={{ fontWeight: 'medium' }} >{getKeyValue(item, columnKey)}</TableCell>;
                                    }}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContentList;
