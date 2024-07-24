import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaBook } from "react-icons/fa";

function Myfictions() {
  return (
    <div>
      <div className='bg-black p-1 h-30'>
         <div className=' bg-sky-200 h-24 p-3'>
         <div className='flex align-middle'>
          <div className="h-16 w-16"><FaBook size={50} className="text-white justify-middle " /></div>
         <span>
         <h1 className='font-semibold text-2xl text-black'>Should connect author dashboard</h1>
         </span>
         </div>
         </div>
         </div>
          <Editprofilesidebar />
          
          <div className="bg-[#a4a4f9] pt-2 pb-2 ml-[300px]">
          <div className="text-[#28292c] bg-white mt-5 mb-5 mx-[100px] rounded-[18px] border border-black p-2.5">
              <div className="text-lg font-medium text-white bg-[#8a8aff] rounded-[20px] m-[15px]">Compose a new message</div>
              
              <label class="block">
              <span class=" block text-sm font-base text-slate-700">
              Reciptients
              </span>
             <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Search for a user" />
            </label> 
            <label class="block">
              <span class=" block text-sm font-base text-slate-700">
              Subject
              </span>
             <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Search for a user" />
            </label> 
            <label class="block">
              <span class=" block text-sm font-base text-slate-700">
              Reciptients
              </span>
             <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Search for a user" />
            </label>          
          </div>
          
          </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Myfictions