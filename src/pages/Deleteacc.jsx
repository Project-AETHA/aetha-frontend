import React, { useState } from 'react';
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { FaUserAltSlash } from "react-icons/fa";

function Deleteacc() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmationChange = (event) => {
    setIsConfirmed(event.target.checked);
  };

  return (
    <div>
      <div className="dashboard">
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <FaUserAltSlash size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Delete Account
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
        <div className="details">
          <div className='p-3 h-auto border-1 border-t-white border-b-0 border-x-white flex items-center justify-center'>
            <div className='w-full items-center mb-2'>
              <div className='w-auto h-auto p-3 m-3 bg-red-200 border-r-3'>
                <div>WARNING: THIS ACTION IS PERMANENT AND IRREVERSIBLE.</div>
                <div>Deleting your account also deletes all of your fictions, comments, reviews, ratings, bookmarks and any other data we store in the system about you</div>
              </div>
              <div className='ml-5 mb-2'>To delete your account, please type your password below:</div>
              <div className='w-full flex justify-center items-center'>
                <input
                  type='password'
                  className='ml-2 p-2 bg-gray-300 w-80 outline-none'
                  placeholder='******'
                />
              </div>
              <div className='p-3 h-auto border-1 border-white mt-5 border-x-white flex items-center '>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    checked={isConfirmed}
                    onChange={handleConfirmationChange}
                    className='mr-2'
                  />
                  <span>I understand that this action is final and my data is not recoverable.</span>
                </div>
              </div>
              <div className='p-3 h-auto border-1 border-white border-b-0 border-x-white flex items-center justify-center '>
                <button className="text-white bg-red-500 align-middle px-4 py-2 ml-4 rounded-none flex items-center">
                  <FaUserAltSlash className="mr-2" />Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Deleteacc;
