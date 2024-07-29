import React from 'react'
import {
    Card,
    CardBody,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Chip,
    Image,
    Button,
    User,
    Link
} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom'

const contentColumns = [
    { key: 'coverImage', label: 'Cover Image' },
    { key: 'title', label: 'Title' },
    { key: 'contentType', label: 'Category' },
    { key: 'author', label: 'Author' },
    { key: 'createdDate', label: 'Date Created' },
    { key: 'status', label: 'Status' },
    { key: 'view', label: 'Actions' }, // New column for the "View" button
];

const recentContent = [
    {
        key: '1',
        coverImage: 'https://via.placeholder.com/150',
        title: 'The Great Adventure',
        contentType: 'Novel',
        author: 'Jane Doe',
        createdDate: '2024-07-20T10:30:00Z',
        status: 'Pending',
    },
    {
        key: '2',
        coverImage: 'https://via.placeholder.com/150',
        title: 'Mystery of the Forest',
        contentType: 'Novel',
        author: 'John Smith',
        createdDate: '2024-07-21T14:45:00Z',
        status: 'Pending',
    },
    {
        key: '3',
        coverImage: 'https://via.placeholder.com/150',
        title: 'Whispers of the Wind',
        contentType: 'Novel',
        author: 'Emily Johnson',
        createdDate: '2024-07-22T09:15:00Z',
        status: 'Pending',
    },
    {
        key: '4',
        coverImage: 'https://via.placeholder.com/150',
        title: 'Legends of the Past',
        contentType: 'Novel',
        author: 'Michael Brown',
        createdDate: '2024-07-23T12:00:00Z',
        status: 'Pending',
    },
];

function ContentManagemenet() {

    const navigate = useNavigate();


    return (
        <div className='min-h-screen flex justify-center'>
            <div className='flex-col w-full bg-white rounded-md'>
                <div className='flex flex-wrap gap-4 p-4 max-w-full w-full'>
                    <Card className='flex-1 min-w-[200px] min-h-[120px] transform transition-transform  hover:cursor-pointer duration-300 hover:scale-105 bg-slate-700' >
                        <CardBody className='flex flex-col justify-center h-full' onClick={() => { navigate(`/admin/contents/novels`); }}>
                            <p className='text-white text-xl font-bold'>Novels</p>
                            <p className='text-white text'>5 Contents</p>
                        </CardBody>
                    </Card>
                    <Card className='flex-1 min-w-[200px] min-h-[120px] transform transition-transform duration-300 hover:scale-105 bg-slate-600' >
                        <CardBody className='flex flex-col justify-center h-full'>
                            <p className='text-white text-xl font-semibold'>Short Stories</p>
                            <p className='text-white text-md'>7 Contents</p>
                        </CardBody>
                    </Card>
                    <Card className='flex-1 min-w-[200px] min-h-[120px] transform transition-transform duration-300 hover:scale-105 bg-slate-500'>
                        <CardBody className='flex flex-col justify-center h-full'>
                            <p className='text-white text-xl font-semibold'>Poems</p>
                            <p className='text-white text-md'>10 Contents</p>
                        </CardBody>
                    </Card>
                    <Card className='flex-1 min-w-[200px] min-h-[120px] transform transition-transform duration-300 hover:scale-105 bg-slate-400' >
                        <CardBody className='flex flex-col justify-center h-full'>
                            <p className='text-white text-xl font-semibold'>Nisadas</p>
                            <p className='text-white text-md'>3 Contents</p>
                        </CardBody>
                    </Card>

                </div>

                <div className='mt-8 mx-4 p-4 shadow-lg bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative' style={{ height: '50px' }}>
                    <p className='flex items-center justify-center h-full font-sans text-white text-xl font-normal'>
                        Pending Approvals
                    </p>
                </div>

                <div className='p-4'>
                    <Table aria-label="Recent Content Details" className='text-foreground-900' radius='none' removeWrapper>
                        <TableHeader columns={contentColumns} >
                            {(column) => <TableColumn key={column.key} className='bg-gray-400 text-black '>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={recentContent}>
                            {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => {
                                        if (columnKey === 'coverImage') {
                                            return (
                                                <TableCell>
                                                    <Image
                                                        width={80}
                                                        height={80}
                                                        alt="NextUI Fruit Image with Zoom"
                                                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                                                        radius='sm'
                                                    />
                                                </TableCell>
                                            );
                                        } else if (columnKey === 'status') {
                                            return (
                                                <TableCell>
                                                    <Chip color="danger" variant='flat' radius='sm'>
                                                        {item.status}
                                                    </Chip>
                                                </TableCell>
                                            );

                                        } else if (columnKey === 'createdDate') {
                                            return <TableCell >{new Date(item.createdDate).toLocaleDateString()}</TableCell>;
                                        } else if (columnKey === "title") {
                                            return <TableCell  >{getKeyValue(item, columnKey)}</TableCell>;
                                        } else if (columnKey === 'author') {
                                            return <TableCell>
                                                <User
                                                    name="Junior Garcia"
                                                    description={(
                                                        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                                            @jrgarciadev
                                                        </Link>
                                                    )}
                                                    avatarProps={{
                                                        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                                                    }}
                                                />

                                            </TableCell>
                                        }
                                        else if (columnKey === 'view') {
                                            return (
                                                <TableCell>
                                                    <Button size='sm' className="bg-indigo-400  text-white" onClick={() => { navigate(`/admin/contents/approve`); }}>
                                                        View
                                                    </Button>
                                                </TableCell>
                                            );
                                        }
                                        return <TableCell style={{ fontWeight: 'medium' }} >{getKeyValue(item, columnKey)}</TableCell>;
                                    }}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default ContentManagemenet;
