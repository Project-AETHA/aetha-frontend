import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

function Downloadacc() {
  return (
     <div>
            <div className="">
           <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
              <FaDownload size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Download Your Account
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
        <div className='p-3 h-auto border-1 border-t-white border-b-0 border-x-white flex items-center justify-center'>
          <div className='w-fullitems-center mb-2'>
        <div>Download all of your content with a single click by clicking the button below.</div>
<div>
This download consists of the following:</div>
<div className='font-semibold mt-3 mb-2'>ACCOUNT DATA</div>
<div className='ml-5'>2 Fictions</div>
<div className='ml-5'>8 Chapters</div>
<div className='ml-5'>2 Drafts</div>
<div className='ml-5'>24 Comments</div>
<div className='ml-5'>6 Posts</div>
<div className='ml-5 mb-3'>0 Private Messages</div>
          <button className="text-foreground-50 bg-primary rounded align-middle px-4 py-2 ml-4 flex items-center">
  <FaDownload className="mr-2" />Download
</button>
          </div>
      </div>
         
        
          
          </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Downloadacc