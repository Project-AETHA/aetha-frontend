import React from 'react';
import {
    Image,
    Chip,
    Input,
    Button,
    User,
    Avatar,
    AvatarGroup,
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue
} from "@nextui-org/react";
import { EditIcon } from '../../../components/common/icons/EditIcon';

const rows = [
    {
        key: "1",
        date: "2023-07-15",
        time: "10:30 AM",
        status: "Successful",
        sessionDuration: "1h 20m",
    },
    {
        key: "2",
        date: "2023-07-14",
        time: "09:15 AM",
        status: "Failed",
        sessionDuration: "0h 0m",
    },
    {
        key: "3",
        date: "2023-07-13",
        time: "11:00 AM",
        status: "Successful",
        sessionDuration: "2h 10m",
    },
    {
        key: "4",
        date: "2023-07-12",
        time: "08:45 AM",
        status: "Successful",
        sessionDuration: "3h 5m",
    },

];

const columns = [
    {
        key: "date",
        label: "DATE",
    },
    {
        key: "time",
        label: "TIME",
    },
    {
        key: "status",
        label: "STATUS",
    },
    {
        key: "sessionDuration",
        label: "SESSION DURATION",
    },

];


function SingleUser() {
    return (
        <div className='min-h-screen flex justify-center p-6 '>
            <div className='flex-col border border-black  w-full bg-white rounded-md '>
                <div className='flex'>
                <div className='flex flex-col w-2/3 p-5 items-start'>
                    <div class="flex text-center my-4 gap-3">
                        <img class=" w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto"
                            src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
                        <div class="flex flex-col items-center justify-center ">
                            <h3 class="font-bold text-2xl text-gray-800 dark:text-white">Cait Genevieve</h3>
                            <div className='flex gap-2 my-2'>
                                <Chip radius="none" color='success'>Active</Chip>
                                <Chip radius="none" color='danger'>Writer</Chip>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white w-full shadow overflow-hidden sm:rounded-lg">
                        <div class="flex justify-between px-4 py-5 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                User details
                            </h3>
                            <Button color="primary" radius='none' size="sm">
                                Edit
                            </Button>
                        </div>
                        <div class="border-t border-gray-200 ">
                            <dl>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Username
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Mickael Poulaz
                                    </dd>
                                </div>
                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Email
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        mickal@gmail.com
                                    </dd>
                                </div>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        First Name
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Mickal
                                    </dd>
                                </div>
                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Last Name
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Poulaz
                                    </dd>
                                </div>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Birthday
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        13-05-2000
                                    </dd>
                                </div>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Gender
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Female
                                    </dd>
                                </div>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Registration date
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        13-05-2000
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div class="bg-white w-full shadow overflow-hidden sm:rounded-lg mt-10">
                        <div class="px-4 py-5 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Recent Login Details
                            </h3>
                        </div>
                        <div class="border-t border-gray-200 ">
                            <Table aria-label="Example table with dynamic content  " className='text-foreground-900 ' radius='none'>
                                <TableHeader columns={columns}>
                                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                </TableHeader>
                                <TableBody items={rows}>
                                    {(item) => (
                                        <TableRow key={item.key}>
                                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>




                </div>

                <div className='w-1/3 p-5 border-l overflow-hidden flex flex-col'>
                    <div className='mb-5 '>
                        <span className="text-black-2 font-bold block mb-3">Followers</span>
                        <div className='flex flex-col gap-3 items-start max-h-80 overflow-y-auto text-foreground-900'>
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />

                        </div>
                    </div>
                    <div className='mb-5 '>
                        <span className="text-black-2 font-bold block my-3">Followings</span>
                        <div className='flex flex-col gap-3 items-start max-h-80 overflow-y-auto text-foreground-900'>
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                            <User name="Jane Doe"
                                description="Reader"
                                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d" }}
                            />
                        </div>
                    </div>
                    <div className='flex-grow'>
                        <span className="text-black-2 font-bold block m-3">Achievements</span>
                        <div className='flex flex-col gap-2 items-start max-h-40 overflow-y-auto'>
                            <AvatarGroup isBordered isGrid max={7}>
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                <Avatar src="https://i.pravatar.cc/300?u=a042581f4f29026707d" />
                                <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026710d" />
                                <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026712d" />
                            </AvatarGroup>
                        </div>
                    </div>
                </div>
                </div>
                <div class="bg-white w-11/12  shadow overflow-hidden sm:rounded-lg  p-5">
                        <div class="px-4 py-5 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Subscription Details
                            </h3>
                        </div>
                        <div class="border-t border-gray-200 ">
                            <Table aria-label="Example table with dynamic content  " className='text-foreground-900 ' radius='none'>
                                <TableHeader columns={columns}>
                                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                </TableHeader>
                                <TableBody items={rows}>
                                    {(item) => (
                                        <TableRow key={item.key}>
                                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
            </div>
           
            <div>
                

            </div>
        </div>
    );
}

export default SingleUser;
