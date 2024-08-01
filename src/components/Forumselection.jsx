import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { EditIcon } from "../components/common/icons/EditIcon";
import { DeleteIcon } from "../components/common/icons/DeleteIcon";
import { EyeIcon } from "../components/common/icons/EyeIcon";


function Forum() {

    const columns = [
        { name: "POPULAR THREADS", uid: "name" },
        { name: "", uid: "role" },
        { name: "", uid: "user" },

    ];

    const columns1 = [
        { name: "COMMUNITY", uid: "name" },
        { name: "", uid: "role" },
        { name: "", uid: "user" },

    ];

    const columns2 = [
        { name: "Forum", uid: "name" },
        { name: "", uid: "role" },
        { name: "", uid: "user" },

    ];

    const forum = [
        {
            id: 1,
            name: "Marketing : Welcome to The Tavern. All MCs welcome! Come",
            role: " 100 Replies",
            team: "5,000 views",
            status: "active",
            age: "07-20-2024",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "by User 01",
        },
        {
            id: 2,
            name: "General : Adverb and adjetive-phobia",
            role: " 250 Replies",
            team: "1,000 views",
            status: "paused",
            age: "07-20-2024",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            email: "by User 02",
        },
        {
            id: 3,
            name: "General : Thoughts on A.I novels",
            role: " 250 Replies",
            team: "1,000 views",
            status: "paused",
            age: "07-20-2024",
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
            email: "by User 02",
        },
        {
            id: 4,
            name: "General : The thread of Ackcshyually",
            role: " 2500 Replies",
            team: "1,0000 views",
            status: "paused",
            age: "07-20-2024",
            avatar: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg",
            email: "by User 03",
        },
        {
            id: 5,
            name: "Marketing : Selling Books",
            role: " 2500 Replies",
            team: "200 views",
            status: "paused",
            age: "07-20-2024",
            avatar: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg",
            email: "by User 03",
        },
        {
            id: 6,
            name: "General : The thread of Ackcshyually",
            role: " 250 Replies",
            team: "1,000 views",
            status: "paused",
            age: "07-20-2024",
            avatar: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg",
            email: "by User 03",
        },

    ];

    const forum1 = [
        {
            id: 1,
            name: "Introductions",
            role: " 100 Topics",
            team: "5,000 Topics",
            status: "active",
            avatar: "https://media.istockphoto.com/id/1133905340/vector/greeting-sign-hello-symbol.jpg?s=612x612&w=0&k=20&c=bRlrvDdp2EAW3bi3f6wEMdVQs_G3_eZn3ZrwtfQQ6pw=",

        },
        {
            id: 2,
            name: "Assistance Request",
            role: " 2503 Topics",
            team: "1,000 views",
            status: "paused",
            avatar: "https://static.vecteezy.com/system/resources/previews/013/209/856/non_2x/voice-assistant-icon-design-free-vector.jpg",

        },
        {
            id: 3,
            name: "Celebration",
            role: " 2504 Topics",
            team: "1,000 views",
            status: "paused",
            avatar: "https://media.istockphoto.com/id/1126957082/vector/party-popper-icon-pixel-perfect-outline.jpg?s=612x612&w=0&k=20&c=pAYdtywb5yKHE4jrfExquHN8ZGRr_R6mJAjCG6IcFA8=",

        }


    ];



    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (

                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        description={user.email}
                        name={cellValue}
                        className="text-primaryText hover:text-accentText"
                    >
                        {user.email}
                    </User>
                   

                );
            case "role":
                return (

                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize text-secondaryText hidden md:block">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400 text-thirtaryText hidden md:block">{user.team}</p>
                    </div>

                );
            case "user":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-secondaryText hidden md:block">{user.age}</p>
                    </div>
                );


        }
    }, []);



    return (
        <>
            <div className="alt-container pb-2">
                <div className="flex flex-col md:flex-row gap-4 !p-0">
                    <div className="bg-foreground-50 py-5 w-full rounded-md">
                        <div className="m-auto">
                                <div className="mx-5 py-5">
                                        <Table aria-label="Example table with custom cells">
                                            <TableHeader columns={columns}>
                                                {(column) => (
                                                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                                        {column.name}
                                                    </TableColumn>
                                                )}
                                            </TableHeader>
                                            <TableBody items={forum}>
                                                {(item) => (
                                                    <TableRow key={item.id}>
                                                        {(columnKey) => <TableCell>  <Link to="/forum" className=""> {renderCell(item, columnKey)} </Link> </TableCell>}
                                                    </TableRow>
                                                )}

                                            </TableBody>
                                        </Table>
                                </div>


                            
                            <div className="mx-5 pb-5">
                                        <Table aria-label="Example table with custom cells">
                                            <TableHeader columns={columns1}>
                                                {(column) => (
                                                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                                        {column.name}
                                                    </TableColumn>
                                                )}
                                            </TableHeader>
                                            <TableBody items={forum1}>
                                                {(item) => (
                                                    <TableRow key={item.id}>
                                                        {(columnKey) => <TableCell> <Link to="#" className=""> {renderCell(item, columnKey)} </Link> </TableCell>}
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                  
                                </div>

                                <div className="mx-5">
                                        <Table aria-label="Example table with custom cells">
                                            <TableHeader columns={columns2}>
                                                {(column) => (
                                                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                                        {column.name}
                                                    </TableColumn>
                                                )}
                                            </TableHeader>
                                            <TableBody items={forum}>
                                                {(item) => (
                                                    <TableRow key={item.id}>
                                                        {(columnKey) => <TableCell>  <Link to="/forum" className=""> {renderCell(item, columnKey)} </Link> </TableCell>}
                                                    </TableRow>
                                                )}

                                            </TableBody>
                                        </Table>
                                </div>

                                </div>

                             
                            </div>





                       
                </div>
            </div>
        </>
    );
}

export default Forum;