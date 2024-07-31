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
import { IoPeople, IoMenu, IoLogoUsd } from 'react-icons/io5'
import { FaBookOpen } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BsMusicNoteList } from "react-icons/bs";

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

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

function ContentManagemenet() {

    const navigate = useNavigate();


    return (
        <div className='min-h-screen flex justify-center'>
            <div className='flex-col w-full rounded-md'>
                <div className="flex gap-4 m-4">
                    <BoxWrapper onClick={() => { navigate(`/admin/contents/novels`); }}>
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                            <FaBookOpen className="text-2xl text-white" />

                        </div>
                        <div className="pl-4">
                            <span className="text-sm text-gray-500 font-light">Novels</span>
                            <div className="flex items-center">
                                <strong className="text-xl text-gray-700 font-semibold">232</strong>
                            </div>
                        </div>
                    </BoxWrapper>
                    <BoxWrapper>
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                            <FaRegPenToSquare className="text-2xl text-white" />
                        </div>
                        <div className="pl-4">
                            <span className="text-sm text-gray-500 font-light">Short Stories</span>
                            <div className="flex items-center">
                                <strong className="text-xl text-gray-700 font-semibold">423</strong>
                            </div>
                        </div>
                    </BoxWrapper>
                    <BoxWrapper>
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400">
                            <BsMusicNoteList className="text-2xl text-white" />
                        </div>
                        <div className="pl-4">
                            <span className="text-sm text-gray-500 font-light">Poems & Nisadas</span>
                            <div className="flex items-center">
                                <strong className="text-xl text-gray-700 font-semibold">613</strong>
                            </div>
                        </div>
                    </BoxWrapper>

                </div>

                <div className='mt-8 mx-4 p-4 shadow-lg to-blue-500 py-8 relative bg-gray-300' style={{ height: '50px' }} >
                    <p className='flex items-center justify-center h-full font-sans text-black  text-lg font-semibold'>
                        Pending Approvals
                    </p>
                </div>

                <div className='p-4'>
                    <Table aria-label="Recent Content Details" className='text-foreground-900' radius='none' removeWrapper>
                        <TableHeader columns={contentColumns} >
                            {(column) => <TableColumn key={column.key} className='  '>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={recentContent} >
                            {(item) => (
                                <TableRow key={item.key} className='bg-white'>
                                    {(columnKey) => {
                                        if (columnKey === 'coverImage') {
                                            return (
                                                <TableCell>
                                                    <Image
                                                        width={80}
                                                        height={80}
                                                        alt="NextUI Fruit Image with Zoom"
                                                        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                                                        radius='none'
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
                                                    <Button size='sm' color='primary' className="text-white " onClick={() => { navigate(`/admin/contents/approve`); }}>
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
