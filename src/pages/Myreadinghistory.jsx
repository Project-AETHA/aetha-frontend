import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaBookReader, FaHistory } from "react-icons/fa";
import novelpic from '../../public/images/novel.jpg';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import useGet from "@/hooks/useGet";
import {toast} from "sonner"

function Myreadinghistory() {

  const {data, isLoading, isError, error, refetch} = useGet({
    queryKey: "my-history",
    url: `/api/history/my-history`
  })

  return (
    <>
<div className="">
       <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
              <FaHistory size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Reading History
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>


        <div class="bg-white border-2 border-black m-4 h-20 p-4 text-black">
          Advertisement
        </div>
        <div className='m-4'>
          {!isLoading && !isError && console.log(data)}
          {!isLoading && !isError && (
            <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>History</TableColumn>
              <TableColumn></TableColumn>
              <TableColumn></TableColumn>
              <TableColumn></TableColumn>
            </TableHeader>
            <TableBody items={data}>
            {(item, index) => (
              <TableRow key={index}>
                <TableCell>{}</TableCell>
              </TableRow>
            )}
            </TableBody>
          </Table>
          )}


        </div>
      </div>
      </div>
      {/* <div className="footer"></div> */}
    </>
  )
}

export default Myreadinghistory