import React from 'react';
import {
    Image,
    Chip,
    Link,
    Button,
    User,
    Avatar,
    AvatarGroup,
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue
} from "@nextui-org/react";
import { FcBiomass, FcGallery, FcRating } from "react-icons/fc";

import { useParams } from 'react-router-dom';

const complaints = [
    {
        key: "1",
        title: "Inappropriate Content",
        status: "Pending",
        date: "2024-07-20",
        handledDate: "N/A",
        adminId: "1234",
    },
    {
        key: "2",
        title: "Harassment",
        status: "Resolved",
        date: "2024-07-18",
        handledDate: "2024-07-19",
        adminId: "5678",
    },
    {
        key: "3",
        title: "Spam",
        status: "Resolved",
        date: "2024-07-15",
        handledDate: "2024-07-16",
        adminId: "9101",
    },
    {
        key: "4",
        title: "Copyright Violation",
        status: "Pending",
        date: "2024-07-10",
        handledDate: "N/A",
        adminId: "1121",
    },
];

const complaintColumns = [
    {
        key: "title",
        label: "COMPLAINT TITLE",
    },
    {
        key: "status",
        label: "STATUS",
    },
    {
        key: "date",
        label: "DATE",
    },
    {
        key: "handledDate",
        label: "DATE HANDLED",
    },
    {
        key: "adminId",
        label: "ADMIN ID",
    },
];


const recentLogins = [
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

const subscriptionDetails = [
    {
        key: "1",
        packageName: "upto 20 Chapters",
        novelTitle: "Novel A",
        startDate: "2024-01-01",
        endDate: "2024-02-01",
        status: "Active",
    },
    {
        key: "2",
        packageName: "upto 10 Chapters",
        novelTitle: "Novel B",
        startDate: "2024-01-15",
        endDate: "2024-02-15",
        status: "Active",
    },
    {
        key: "3",
        packageName: "upto 7 Chapters",
        novelTitle: "Novel C",
        startDate: "2024-01-15",
        endDate: "2024-02-15",
        status: "Expired",
    },
    {
        key: "4",
        packageName: "upto 10 Chapters",
        novelTitle: "Novel D",
        startDate: "2024-01-15",
        endDate: "2024-02-15",
        status: "Expired",
    },
];

const loginColumns = [
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

const subscriptionColumns = [
    {
        key: "novelTitle",
        label: "Content TITLE",
    },
    {
        key: "packageName",
        label: "PACKAGE NAME",
    },
    {
        key: "startDate",
        label: "START DATE",
    },
    {
        key: "endDate",
        label: "END DATE",
    },
    {
        key: "status",
        label: "STATUS",
    },
];

const latest_updates = [
    {
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        title: "Novel 1",
        description: "Description 1",
    },
    {
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        title: "Novel 2",
        description: "Description 2",
    },
    {
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        title: "Novel 2",
        description: "Description 2",
    },
    {
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        title: "Novel 2",
        description: "Description 2",
    },

];



function SingleUser() {

    const { userId } = useParams

    return (
        <div className='min-h-screen flex justify-center '>
            <div className='flex-col w-full bg-white rounded-md '>
                <div className='flex'>
                    <div className='flex flex-col w-2/3 p-5 items-start'>
                        <div className="flex text-center my-4 gap-3">
                            <img className=" w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto"
                                src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
                            <div className="flex flex-col items-center justify-center ">
                                <h3 className="font-bold text-2xl text-gray-800 dark:text-white">Cait Genevieve</h3>
                                <div className='flex gap-2 my-2'>
                                    <Chip radius="none" color='success'>Active</Chip>
                                    <Chip radius="none" color='danger'>Writer</Chip>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-full shadow overflow-hidden sm:rounded-lg">
                            <div className="flex justify-between px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    User details
                                </h3>
                                <Button color="primary" radius='none' size="sm">
                                    Edit
                                </Button>
                            </div>
                            <div className="border-t border-gray-200 ">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Username
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            Mickael Poulaz
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Email
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            mickal@gmail.com
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            First Name
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            Mickal
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Last Name
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            Poulaz
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Birthday
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            13-05-2000
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Gender
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            Female
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Registration date
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            13-05-2000
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div className="bg-white w-full overflow-hidden sm:rounded-lg p-5">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Recent Login Details
                                </h3>
                            </div>
                            <div className="border-t border-gray-200 ">
                                <Table aria-label="Recent login details" className='text-foreground-900 ' radius='none' removeWrapper>
                                    <TableHeader columns={loginColumns}>
                                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                    </TableHeader>
                                    <TableBody items={recentLogins}>
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
                        <div className='mb-5 ml-3'>
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
                        <div className='mb-5 ml-3'>
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
                            <span className="text-black-2 font-bold block m-3 ">Achievements</span>
                            <div className='flex flex-col gap-2 items-start max-h-40 overflow-y-auto m-3'>
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
                <div className="bg-white w-11/12  overflow-hidden sm:rounded-lg p-5 m-5">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Subscription Details
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <Table aria-label="Subscription details" className='text-foreground-900 ' radius='none' removeWrapper>
                            <TableHeader columns={subscriptionColumns}>
                                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody items={subscriptionDetails}>
                                {(item) => (
                                    <TableRow key={item.key}>
                                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="bg-white w-11/12  overflow-hidden sm:rounded-lg p-5 m-5">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Publishes
                        </h3>
                    </div>
                    <div className="flex border-t border-gray-200 ">
                        <div className=" w-[50%] rounded-md p-2">
                            <p className="flex gap-2 items-center font-bold text-lg text-blue-700 mb-4">
                                Novels
                            </p>

                            <div className="flex items-center flex-wrap gap-3 ">
                                {latest_updates &&
                                    latest_updates.map((latest_update, index) => (
                                        <Link to="#" key={index}>
                                            <div className=" w-[100px] flex flex-col">
                                                <Image
                                                    width="100px"
                                                    height="180px"
                                                    className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer "
                                                    alt="NextUI hero Image"
                                                    src={latest_update.image}
                                                    radius='sm'
                                                />
                                                <p className="text-sm text-foreground-700 text-center">
                                                    {latest_update.title}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                        <div className=" w-[50%] rounded-md p-2">
                            <p className="flex gap-2 items-center font-bold text-lg text-blue-700 mb-4">
                                Short Stories
                            </p>

                            <div className="flex items-center flex-wrap gap-3 ">
                                {latest_updates &&
                                    latest_updates.map((latest_update, index) => (
                                        <Link to="#" key={index}>
                                            <div className=" w-[100px] flex flex-col">
                                                <Image
                                                    width="100px"
                                                    height="180px"
                                                    className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer "
                                                    alt="NextUI hero Image"
                                                    src={latest_update.image}
                                                    radius='sm'
                                                />
                                                <p className="text-sm text-foreground-700 text-center">
                                                    {latest_update.title}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-col border-t border-gray-200 ">
                        <p className="flex gap-2 items-center font-bold text-lg text-blue-700 mb-4">
                            Poems
                        </p>
                        <div className="flex items-center flex-wrap gap-3 ">
                            {latest_updates &&
                                latest_updates.map((latest_update, index) => (
                                    <Link to="#" key={index}>
                                        <div className=" w-[100px] flex flex-col">
                                            <Image
                                                width="100px"
                                                height="180px"
                                                className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer "
                                                alt="NextUI hero Image"
                                                src={latest_update.image}
                                                radius='sm'
                                            />
                                            <p className="text-sm text-foreground-700 text-center">
                                                {latest_update.title}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                        </div>


                    </div>

                </div>
                <div className="bg-white w-11/12 overflow-hidden sm:rounded-lg p-5 m-5">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Complaints
                        </h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <Table aria-label="Complaints details" className='text-foreground-900' radius='none' removeWrapper>
                            <TableHeader columns={complaintColumns}>
                                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody items={complaints}>
                                {(item) => (
                                    <TableRow key={item.key}>
                                        {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleUser;
