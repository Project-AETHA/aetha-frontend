import React from 'react';
import "../components/Profile.css";
import { FaUsersSlash } from "react-icons/fa";
import profilepic from '../../public/images/profilepic.jpg';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

function Myblockedusers() {
  const blockedUsers = [
    {
      profilePic: profilepic,
      username: 'JohnDoe123',
      reason: 'Spamming',
      date: '1 month ago'
    },
    {
      profilePic: profilepic,
      username: 'JaneSmith456',
      reason: 'Inappropriate Content',
      date: '2 months ago'
    },
    {
      profilePic: profilepic,
      username: 'MikeBrown789',
      reason: 'Harassment',
      date: '3 months ago'
    },
    {
      profilePic: profilepic,
      username: 'EmilyWhite012',
      reason: 'Scamming',
      date: '4 months ago'
    }
  ];

  return (
    <div>
      <div className="dashboard">
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <FaUsersSlash size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Blocked Users
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>

        <div className="bg-white border-2 border-black m-4 h-20 p-4 text-black">
          Advertisement
        </div>

        <div className='m-4'>
          <Table aria-label="Blocked Users Table">
            <TableHeader>
              <TableColumn>Profile</TableColumn>
              <TableColumn>Username</TableColumn>
              <TableColumn>Reason</TableColumn>
              <TableColumn>Date Blocked</TableColumn>
            </TableHeader>
            <TableBody>
              {blockedUsers.map((user, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}
                >
                  <TableCell>
                    <img
                      src={user.profilePic}
                      alt="profile"
                      className="h-12 w-12 object-cover rounded-full"
                    />
                  </TableCell>
                  <TableCell className='text-primary-400'>{user.username}</TableCell>
                  <TableCell>{user.reason}</TableCell>
                  <TableCell>{user.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Myblockedusers;
