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
    Button
} from "@nextui-org/react";

const contentColumns = [
    { key: 'coverImage', label: 'Cover Image' },
    { key: 'title', label: 'Title' },
    { key: 'contentType', label: 'Category' },
    { key: 'tags', label: 'Tags' },
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
        tags: 'Adventure, Fantasy',
        author: 'Jane Doe',
        createdDate: '2024-07-20T10:30:00Z',
        status: 'Pending',
    },
    {
        key: '2',
        coverImage: 'https://via.placeholder.com/150',
        title: 'Mystery of the Forest',
        contentType: 'Novel',
        tags: 'Mystery, Suspense',
        author: 'John Smith',
        createdDate: '2024-07-21T14:45:00Z',
        status: 'Pending',
    },
    {
        key: '3',
        coverImage: 'https://via.placeholder.com/150',
        title: 'Whispers of the Wind',
        contentType: 'Novel',
        tags: 'Poetry, Nature',
        author: 'Emily Johnson',
        createdDate: '2024-07-22T09:15:00Z',
        status: 'Pending',
    },
    {
        key: '4',
        coverImage: 'https://via.placeholder.com/150',
        title: 'Legends of the Past',
        contentType: 'Novel',
        tags: 'Legends, History',
        author: 'Michael Brown',
        createdDate: '2024-07-23T12:00:00Z',
        status: 'Pending',
    },
];

function ContentManagemenet() {
    const handleViewClick = (item) => {
        // Add logic to handle the "View" button click, e.g., navigate to a detail page or open a modal
        console.log('Viewing content:', item);
    };

    return (
        <div className='min-h-screen flex justify-center'>
            <div className='flex-col w-full bg-white rounded-md'>
                <div className='flex flex-wrap gap-4 p-4 max-w-[990px] mx-auto'>
                    <Card className='bg-blue-400 flex-1 min-w-[200px] max-w-[240px] min-h-[120px]'>
                        <CardBody className='flex flex-col justify-center h-full'>
                            <p className='text-white text-xl font-bold'>Novels</p>
                            <p className='text-white text'>5 Contents</p>
                        </CardBody>
                    </Card>
                    <Card className='bg-green-400 flex-1 min-w-[200px] max-w-[240px] min-h-[120px]'>
                        <CardBody className='flex flex-col justify-center h-full'>
                            <p className='text-white text-xl font-semibold'>Short Stories</p>
                            <p className='text-white text-md'>7 Contents</p>
                        </CardBody>
                    </Card>
                    <Card className='bg-red-400 flex-1 min-w-[200px] max-w-[240px] min-h-[120px]'>
                        <CardBody className='flex flex-col justify-center h-full'>
                            <p className='text-white text-xl font-semibold'>Poems</p>
                            <p className='text-white text-md'>10 Contents</p>
                        </CardBody>
                    </Card>
                    <Card className='bg-yellow-400 flex-1 min-w-[200px] max-w-[240px] min-h-[120px]'>
                        <CardBody className='flex flex-col justify-center h-full'>
                            <p className='text-white text-xl font-semibold'>Nisadas</p>
                            <p className='text-white text-md'>3 Contents</p>
                        </CardBody>
                    </Card>
                </div>

                <div className='mt-8 mx-4 p-4 rounded-md shadow-lg' style={{ backgroundColor: '#3498DB', height: '40px' }}>
                    <p className='flex items-center justify-center h-full font-sans text-white text-xl font-normal'>
                        Pending Approvals
                    </p>
                </div>

                <div className='p-4'>
                    <Table aria-label="Recent Content Details" className='text-foreground-900' radius='none' removeWrapper>
                        <TableHeader columns={contentColumns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={recentContent}>
                            {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => {
                                        if (columnKey === 'coverImage') {
                                            return (
                                                <TableCell>
                                                    <Image
                                                        width="100px"
                                                        height="180px"
                                                        className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
                                                        alt="Content Cover Image"
                                                        src={item.coverImage}
                                                        radius='sm'
                                                    />
                                                </TableCell>
                                            );
                                        } else if (columnKey === 'status') {
                                            return (
                                                <TableCell>
                                                    <Chip color="danger" variant='flat'>
                                                        {item.status}
                                                    </Chip>
                                                </TableCell>
                                            );
                                        } else if (columnKey === 'tags') {
                                            return (
                                                <TableCell>
                                                    {item.tags.split(', ').map((tag, index) => (
                                                        <Chip key={index} color="secondary" variant='light' className="mr-1 mb-1">
                                                            {tag}
                                                        </Chip>
                                                    ))}
                                                </TableCell>
                                            );
                                        } else if (columnKey === 'createdDate') {
                                            return <TableCell>{new Date(item.createdDate).toLocaleDateString()}</TableCell>;
                                        } else if (columnKey === 'view') {
                                            return (
                                                <TableCell>
                                                    <Button auto flat color="primary" size='sm'>
                                                        View
                                                    </Button>
                                                </TableCell>
                                            );
                                        }
                                        return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
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
