import React from 'react'
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { GoStar } from "react-icons/go";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


function Premium() {
  return (
    <div>
          <div className="dashboard">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
        <div className="max-w-2xl px-4 m-auto relative z-10 flex">
          <div className="h-16 w-16">
            <GoStar size={50} className="text-white justify-middle " />
          </div>
          <span>
            <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
              Premium
            </h1>
            <h1 className='text-base text-left'>Manage your account</h1>
          </span>
        </div>
           </div>
           

           <div className="details">
             
        <Table aria-label="Premium Data table ">
      <TableHeader>
        <TableColumn>Start Date</TableColumn>
        <TableColumn>Est. End/Renewal Date</TableColumn>
        <TableColumn>Level</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>2024/05/14</TableCell>
          <TableCell>2025/05/13</TableCell>
          <TableCell>2</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>2023/05/14</TableCell>
          <TableCell>2024/05/13</TableCell>
          <TableCell>2</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Deactive</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>2024/05/14</TableCell>
          <TableCell>2025/05/13</TableCell>
          <TableCell>2</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>2024/05/14</TableCell>
          <TableCell>2025/05/13</TableCell>
          <TableCell>2</TableCell>
          <TableCell>1</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
          
           </div> 
          {/* </div> */}
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Premium