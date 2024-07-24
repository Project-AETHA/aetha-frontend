import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import {Button} from "@nextui-org/react";

function Changeemail() {
  return (
    <div>

          <div className="dashboard">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <FaEnvelope size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Change Email
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
          <div className="details">
              <div className='pb-0 h-auto border-1 border-t-white border-x-white font-semibold items-center'>Current Email Address</div>
        <div className='pl-10 p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center justify-start'>
          b********6.gmail.com
          </div>  
         <div className='pb-0 h-auto border-1 border-t-white border-x-white font-semibold flex items-center'>Verify Password</div>
         <div className='pl-10 p-3  h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center justify-start'>
         
<div className='w-full flex justify-start items-center mb-2'>
        <span className='w-full'>Verify Password</span>
        <input
          type='password'
          className='ml-2 p-2 bg-gray-300 w-full outline-none justify-end'
          placeholder='Enter password'
        />
      </div>

          </div>
         <div className='pb-0 h-auto border-1 border-t-white border-x-white font-semibold flex items-center'>Insert New Email</div>
         <div className='pl-10 p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex flex-col items-start'>
      <div className='w-full flex justify-start items-center mb-2'>
        <span className='w-full'>New Email</span>
        <input
          type='email'
          className='ml-2 p-2 bg-gray-300 w-full outline-none justify-end'
          placeholder='Enter new email'
        />
      </div>
      <div className='w-full flex justify-start items-center'>
        <span className='w-full'>Confirm Email Address</span>
        <input
          type='email'
          className='ml-2 p-2 bg-gray-300 w-full outline-none justify-end'
          placeholder='Confirm email'
        />
      </div>
    </div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center justify-center'>
          <Button color="primary">
      Update Email
    </Button>
          </div>
          </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Changeemail