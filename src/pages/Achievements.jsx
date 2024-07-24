import React from 'react'
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { FaTrophy } from "react-icons/fa6";

function Achievements() {
  return (
    <div>
          <Editprofilesidebar />
           <div className="dashboard">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
        <div className="max-w-2xl px-4 m-auto relative z-10 flex">
          <div className="h-16 w-16">
            <FaTrophy size={50} className="text-white justify-middle " />
          </div>
          <span>
            <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
              Manage Achievements
            </h1>
            <h1 className='text-base text-left'>Manage your account</h1>
          </span>
        </div>
           </div>
        <div className="details">
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/3'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden m-4'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-2/3'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/3'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden m-4'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-2/3'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/3'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden m-4'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-2/3'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/3'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden m-4'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-2/3'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/3'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden m-4'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-2/3'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/3'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden m-4'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-2/3'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.</div></label>
          </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
          <div className='w-1/3'>
          <div className='h-20 w-20 border-2  border-blue-800 rounded-full overflow-hidden m-4'><img className='w-full h-full object-cover' src='../../public/images/profilepic.jpg'></img></div>
          </div>
          <div className='w-2/3'>
          <label className='ml-2'><div className='w-auto align-middle p-2 bg-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio praesentium, placeat doloremque dignissimos ipsa accusantium repellendus ullam cupiditate dolores ex. Maiores soluta perspiciatis harum, porro ea consequatur fuga alias laboriosam!</div></label>
          </div>
          </div>
        
          </div >
</div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Achievements