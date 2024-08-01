import React from 'react'
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { BiSolidUserRectangle } from "react-icons/bi";

function Borderwardrobe() {
  return (
    <div>
      <div className="">
        <div className="details bg-background text-foreground">
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <BiSolidUserRectangle size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Border Wardrobe
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
</div>
        </div>

        {/* <div className="footer"></div> */}
      </div>
      )
}

      export default Borderwardrobe