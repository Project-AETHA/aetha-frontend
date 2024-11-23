import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaKey} from "react-icons/fa";

function Twofactorauth() {
  return (
          <div className="">
           <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
              <FaKey size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Two-factor Authentication
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
          <div className='p-3 h-auto border-1  border-t-white border-b-white border-b-0 border-x-white flex items-center justify-center'>
          <div className='w-full flex  items-center mb-2'>
        <span>Authenticator App</span>
        <button className='ml-8 p-2 border-2  rounded-large border-gray-300 bg-gray-200 w-80 outline-none'>Add Authenticator App</button>
      </div>
      </div>
         
        
          
          </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Twofactorauth