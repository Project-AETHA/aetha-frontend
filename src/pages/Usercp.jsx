import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaHome } from 'react-icons/fa';

function Usercp() {
  return (
    <div>
          <div className="">
          <div className="details">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <FaHome size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                User Control Panel
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
          <div className='p-3 m-4 h-auto border-1 border-gray-300 flex items-center'>
        <div className='p-2 h-auto items-center border-b-gray-300 border-2 border-white'><div className='font-semibold'>Thread Subscriptions With New Posts</div></div>
        </div>
          <div className='p-3 m-4 h-auto border-1 border-gray-300 flex items-center'>
        <div className='p-2 h-auto flex items-center border-b-gray-300 border-2 border-white'><div className='font-semibold'>Your Latest Threads</div></div>
</div>
         
        
          
          </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Usercp