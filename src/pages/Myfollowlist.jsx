import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { IoBookmark } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import novelpic from '../../public/images/novel.jpg';


function Myfollowlist() {
  return (
    <div>
          <Editprofilesidebar />
          <div className="dashboard">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <IoBookmark size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Follow List
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
         

    <div class="bg-white border-2 border-black m-4 h-20 p-4 text-black">
    Advertisement
    </div>
    <div className='m-4'>
    <div className='h-auto border-1 border-x-white flex p-3'>
             
                <div className="div space-y-3">
                  <img
                    src={novelpic} 
                    alt="novel"
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                    
                </div>
                <div className='p-6 font-semibold text-primary text-3xl'>Soul
                <div className='mt-3 font-thin text-black text-small'>Last Update : 
                <div className='mt-3 font-semibold text-purple-600 text-medium'>Chapter name</div>
                </div>
                </div>
                <div className=' text-primary-400 text-small ml-auto flex pt-16 items-start'>by Olivia Wilson</div>

            </div>
            <div className='h-auto border-1 border-x-white flex p-3'>
             
                <div className="div space-y-3">
                  <img
                    src={novelpic} 
                    alt="novel"
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                    
                </div>
                <div className='p-6 font-semibold text-primary text-3xl'>Soul
                <div className='mt-3 font-thin text-black text-small'>Last Update : 
                <div className='mt-3 font-semibold text-purple-600 text-medium'>Chapter name</div>
                </div>
                </div>
                <div className=' text-primary-400 text-small ml-auto flex pt-16 items-start'>by Olivia Wilson</div>

            </div>
    </div>
    </div>
   

      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Myfollowlist