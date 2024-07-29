import React from 'react'
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaTrophy } from "react-icons/fa";
import { BiSolidUserRectangle } from 'react-icons/bi';

function Referafriend() {
  return (
    <div>
      <div className="dashboard">
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <BiSolidUserRectangle size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Refer a friend
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
        <div className="details">
      <div className='w-full justify-center items-center'></div>
        <span>Referral Link</span>
        <div className='my-4 w-full'>
        <label 
  className='ml-2 p-2 bg-gray-200 flex justify-between items-center outline-none mb-4 mt-2'
>
  https://aetha.com/signup/RR-CF49-BC3R
  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
  </svg>
</label>

      </div>
      <div>
      <div className='w-full justify-center items-center'> </div>
        <span>Referral Code</span>
        <div className='my-4'>
        <label
          className='ml-2 p-2 bg-gray-200 flex justify-between items-center outline-none mb-4 mt-2'>RR-CF49-BC3R<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg></label>
        </div>
     </div>
    
        </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Referafriend