import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";

function Sentitems() {
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
              Private Messages
            </h1>
            <h1 className='text-base text-left'>All your conversations in one place.</h1>
          </span>
        </div>
      </div>
        <div className="details">
          <div className="topics text-black font-semibold inline-flex align-middle"> <FaEnvelope className='m-2'></FaEnvelope>Change Email</div>
          <div className='p-3 pb-0 h-auto border-1 border-t-white border-x-white flex items-center'><div className='w-1/3'>Recipients</div><div className='w-2/3'></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center justify-center'>
            Verify password
          </div>

        </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Sentitems