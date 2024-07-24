import React from 'react';
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { ImProfile } from "react-icons/im";

function Profileinfo() {
  return (
    <div>
          <Editprofilesidebar />
          <div className='dashboard'>
           <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
        <div className="max-w-2xl px-4 m-auto relative z-10 flex">
          <div className="h-16 w-16">
            <ImProfile size={50} className="text-gray-800 justify-middle " />
          </div>
          <span>
            <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
              Profile Info
            </h1>
            <h1 className='text-base text-left'>Manage your account</h1>
          </span>
        </div>
      </div>
      <div className='details'></div>
          <div className="bg-[#a4a4f9] pt-2 pb-2 ml-[300px]">
          <div className="text-[#28292c] bg-white mt-5 mb-5 mx-[100px] rounded-[18px] border border-black p-2.5">
          <div className="text-lg font-medium text-white bg-[#8a8aff] rounded-[20px] m-[15px]">

          <div className='p-2 h-auto border-1 border-t-gray-300 border-x-white inline-flex items-center'>
            <span>Avatar</span>
            <img className="picture ml-2 " src={profilepic} alt="profile-pic" />
            <button className="text-white bg-blue-800 align-middle px-4 py-2 ml-4 rounded-none">
              Change Avatar
            </button>
          </div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Username</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Hansini Bhagya</div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Primary User Group</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>mmmm</div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Display Group</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>mmmm</div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>User title</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>mmmm</div></label></div></div>
          
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Birthday</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'><DatePicker
        showMonthAndYearPickers
      /></div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Gender</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>mmmm</div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Hide Gender</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>mmmm</div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Location</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>mmmm</div></label></div></div>

          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Website</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>mmmm</div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Twitter</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>vrgv</div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Facebook</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>vrvt</div></label></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'><div className='w-1/3'>Biography</div><div className='w-2/3'><label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>mmmm</div></label></div></div>
           <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center justify-center'>
           <button className="text-white bg-blue-800 align-middle px-4 py-2 ml-4 rounded-none">
      Update Profile
    </button>
           </div>
          </div>
          </div>
          </div>
      {/* <div className="footer"></div> */}
    </div></div>
  );
}
export default Profileinfo