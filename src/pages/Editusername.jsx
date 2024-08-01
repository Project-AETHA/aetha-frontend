import React, { useState } from 'react';
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { FaUserAltSlash } from "react-icons/fa";

function Editusername() {
  return (
    <div>
      <div className="">
        <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
                <FaUserAltSlash size={50} className="text-white justify-middle " />
              </div>
              <span>
                <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                  Change Username
                </h1>
                <h1 className='text-base text-left'>Manage your account</h1>
              </span>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-b-0 border-x-white flex items-center justify-center'>
            <div className='w-full items-center mb-2'>
              <div className='w-auto h-auto p-3 m-3 bg-warning-200 border-r-3'>
                <div>Please be aware that:</div>
                <div className='ml-8'>You may only change your username once every 6 months</div>
                <div className='ml-8'>You may not choose a username already in use by a user</div>
                <div className='ml-8'>You may not choose a username that has been used by another user in the past 12 months</div>
              </div>
              <div className='w-full justify-center items-center mb-2'>
                <div className='m-2 flex items-center'>
                  <span className='w-1/3'>New username</span>
                  <input
                    type='text'
                    className='ml-2 p-2 border-2 rounded-large border-gray-300 w-80 outline-none'
                    placeholder='Enter new username'
                  />
                </div>
                <div className='m-2 flex items-center'>
                  <span className='w-1/3'>Confirm New Username</span>
                  <input
                    type='text'
                    className='ml-2 p-2 border-2 rounded-large border-gray-300 w-80 outline-none'
                    placeholder='Confirm new username'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  );
}

export default Editusername;
