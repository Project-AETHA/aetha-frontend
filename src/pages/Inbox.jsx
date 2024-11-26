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
import { SearchIcon } from 'lucide-react';
import {Input} from "@nextui-org/react";

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

function Inbox() {
   const [selectedColor, setSelectedColor] = React.useState("default");

  return (
    
      <div className="">
        <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
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
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
                "m-2",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
          <div className="flex flex-col gap-3">
            <Table
              color={'primary'}
              selectionMode="multiple"
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn>Message Title</TableColumn>
                <TableColumn>Sender</TableColumn>
                <TableColumn>Date/Time Sent</TableColumn>
              </TableHeader>
              <TableBody className='text-black/90 dark:text-white/90'>
                <TableRow key="1">
                  <TableCell>Exciting New Chapter Released!</TableCell>
                  <TableCell>Jane Writes</TableCell>
                  <TableCell>2024/07/25 9:45am</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Feedback on Your Latest Story</TableCell>
                  <TableCell>BookLover92</TableCell>
                  <TableCell>2024/07/25 11:12am</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Discussion on Your Recent Review</TableCell>
                  <TableCell>FantasyFanatic</TableCell>
                  <TableCell>2024/07/25 2:33pm</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Collaborate on a New Project</TableCell>
                  <TableCell>CreativeWriter</TableCell>
                  <TableCell>2024/07/25 4:20pm</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Update: New Writing Challenge</TableCell>
                  <TableCell>StoryMaster</TableCell>
                  <TableCell>2024/07/25 6:50pm</TableCell>
                </TableRow>
                <TableRow key="6">
                  <TableCell>Important: Community Guidelines Update</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell>2024/07/25 8:15pm</TableCell>
                </TableRow>
                <TableRow key="7">
                  <TableCell>Congratulations on Your Featured Story!</TableCell>
                  <TableCell>EditorInChief</TableCell>
                  <TableCell>2024/07/25 10:30pm</TableCell>
                </TableRow>
                <TableRow key="8">
                  <TableCell>Reminder: Upcoming Live Writing Workshop</TableCell>
                  <TableCell>WritingCoach</TableCell>
                  <TableCell>2024/07/26 7:00am</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-b-0 border-x-white flex items-center justify-center'>
            <Button color="primary">
              Move to
            </Button>
            <Select className='pl-1 pr-3'>
              <SelectItem key="inbox">
                Inbox
              </SelectItem>
              <SelectItem key="sent items">
                Sent Items
              </SelectItem>
              <SelectItem key="drafts">
                Drafts
              </SelectItem>
              <SelectItem key="trashcan">
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
   
  );
}

export default Inbox;
