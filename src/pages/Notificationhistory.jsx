import React from 'react';
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { IoNotifications } from 'react-icons/io5';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

function Notificationhistory() {
  const notifications = [
    {
      key: "1",
      message: "Your profile has been updated successfully.",
      date: "30-07-2024",
      time:"9.15 AM",
    },
    {
      key: "2",
      message: "You have a new follower!",
      date: "29-07-2024",
      time:"9.15 AM",
    },
    {
      key: "3",
      message: "Your story 'The Great Adventure' received a new comment.",
      date: "28-07-2024", 
      time:"9.15 AM",
    },
    {
      key: "4",
      message: "Your subscription has been renewed.",
      date: "27-07-2024",
      time:"9.15 AM",
    },
  ];

  return (
    <div>
      <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
              <IoNotifications size={50} className="text-white justify-middle" />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Notifications
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
        
        <div className='p-3 m-2 h-auto flex items-center justify-center'></div>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Notification</TableColumn>
            <TableColumn>Date</TableColumn>
            <TableColumn>Time</TableColumn>
          </TableHeader>
          <TableBody>
            {notifications.map((notification) => (
              <TableRow key={notification.key}>
                <TableCell>{notification.message}</TableCell>
                <TableCell>{notification.date}</TableCell>
                <TableCell>{notification.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Notificationhistory;
