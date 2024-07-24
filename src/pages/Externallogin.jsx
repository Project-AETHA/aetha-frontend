import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

function Externallogin() {
  return (
    <div>
          <div className="dashboard">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <FaExternalLinkSquareAlt size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                External Logins
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
          <div className="details">
        <div className='p-3 h-auto border-1 border-t-white border-b-0 border-x-white flex items-center justify-center'>
          <div className='w-full  items-center'>
        <div className=' bg-white'>Google</div><div><button className='w-3/4 h-auto m-4 bg-blue-300 p-4'>Link Your Google Account
        </button></div>
        <div className='bg-white'>Facebook</div><div><button className='w-3/4 h-auto m-4 bg-blue-300 p-4'>Link Your Facebook Account
        </button></div>
        <div className='bg-white '>Microsoft</div><div><button className='w-3/4 h-auto m-4 bg-blue-300 p-4'>Link Your Microsoft Account
        </button></div>
        <div className=' bg-white '>Apple</div><div><button className='w-3/4 h-auto m-4 bg-blue-300 p-4'>Link Your Apple Account
        </button></div>
      </div>
      </div>
         
        
          
          </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Externallogin