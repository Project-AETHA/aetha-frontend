import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaLock } from 'react-icons/fa';
import {Button} from "@nextui-org/react";

function Changepwd() {
  return (
    <div>
          <Editprofilesidebar />
          <div className="dashboard">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <FaLock size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Change Password
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
          <div className="details">
              <div className='p-3 pb-0 font-semibold h-auto border-1 border-t-white border-x-white flex items-center'>Current Password</div>
        <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center justify-center'>
          <div className='w-full flex justify-center items-center mb-2'>
        <span className='w-full'>Current password</span>
        <input
          type='password'
          className='ml-2 p-2 bg-gray-300 w-80 outline-none'
          placeholder='Enter current password'
        />
      </div>
          </div>  
         
         <div className='p-3 pb-0 font-semibold h-auto border-1 border-t-white border-b-0 border-x-white flex items-center'>Insert New Password
         </div>
         <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex flex-col items-center'>
      <div className='w-full flex justify-center items-center mb-2'>
        <span className='w-full'>New password</span>
        <input
          type='password'
          className='ml-2 p-2 bg-gray-300 w-80 outline-none'
          placeholder='Enter new password'
        />
      </div>
      <div className='w-full flex justify-center items-center'>
        <span className='w-full'>Verify new password</span>
        <input
          type='password'
          className='ml-2 p-2 bg-gray-300 w-80  outline-none'
          placeholder='Confirm password'
        />
      </div>
    </div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center justify-center'>
         <Button color="primary">
      Update Password
    </Button>
          </div>
          
          </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Changepwd