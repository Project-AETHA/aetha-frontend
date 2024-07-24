import React from 'react';
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaEnvelope } from "react-icons/fa";
import { Tabs, Tab } from "@nextui-org/react";
import { RiFolderReceivedFill, RiFolderSharedFill } from 'react-icons/ri';
import { MdDrafts } from 'react-icons/md';
import { IoTrash } from 'react-icons/io5';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";
const colors = ["default", "primary", "secondary", "success", "warning", "danger"];


function Inbox() {
   const [selectedColor, setSelectedColor] = React.useState("default");
  return (
    <div>
      <Editprofilesidebar />
      
      <div className="dashboard">
       <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
        <div className="max-w-2xl px-4 m-auto relative z-10 flex">
          <div className="h-16 w-16">
            <FaEnvelope size={50} className="text-white justify-middle " />
          </div>
          <span>
            <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
              Private Messages
            </h1>
            <h1 className='text-base text-left'>All your conversations in one place.</h1>
          </span>
        </div>
      </div>
        <div className="details">
          <div className="topics text-black font-semibold inline-flex align-middle">
            <div className="flex w-full flex-col">
              <div className="flex flex-wrap gap-4">
                <Tabs variant="underlined" aria-label="Tabs variants" style={{backgroundColor:'white'}}>
                  <Tab key="photos" title={<div className="flex items-center"><RiFolderSharedFill className="mr-2" />Inbox</div>}/>
                  <Tab key="sent" title={<div className="flex items-center"><RiFolderReceivedFill className="mr-2" />Sent Items</div>}/>
                  <Tab key="drafts" title={<div className="flex items-center"><MdDrafts className="mr-2" />Drafts</div>}/>
                  <Tab key="trash" title={<div className="flex items-center"><IoTrash className="mr-2" />Trash Can</div>}/>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
      <Table 
        color={'primary'}
        selectionMode="multiple" 
        defaultSelectedKeys={["2", "3"]} 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>lore</TableColumn>
          <TableColumn>Sender</TableColumn>
          <TableColumn>Date/Time Sent</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Lorem ipsum dolor sit amet consectetur.</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>2024/07/25 4.35 am</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Lorem ipsum dolor sit amet consectetur.</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>2024/07/25 6.56pm</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Lorem ipsum dolor sit amet consectetur.</TableCell>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>2024/07/25 12.34pm</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Lorem ipsum dolor sit amet consectetur.</TableCell>
            <TableCell>William Howard</TableCell>
            <TableCell>2024/07/25 12.34pm</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <div className='p-3 h-auto border-1 border-t-white border-b-0 border-x-white flex items-center justify-center'>
    <Button color="primary">
      Move to
    </Button>
    <Select className='pl-1 pr-3'>
      <SelectItem
        key="inbox"
      >
        Inbox
      </SelectItem>
      <SelectItem
        key="sent items"
      >
        Sent Items
      </SelectItem>
      <SelectItem
        key="drafts"
      >
        Drafts
      </SelectItem>
      <SelectItem
        key="trashcan"
      >
        Trash Can
      </SelectItem>
    
    </Select>
    or
    <Button className="bg-danger ml-3 text-white">
      Delete
    </Button>
    </div>
           
          
          
          
        </div>
      </div>
    </div>
  );
}

export default Inbox;
