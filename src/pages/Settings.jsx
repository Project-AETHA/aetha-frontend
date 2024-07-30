import React from 'react'
import Editprofilesidebar from '../components/Editprofilesidebar';
import { Link } from 'react-router-dom';
import { TbSettingsCog } from "react-icons/tb";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import {Button} from "@nextui-org/react";


function Settings() {
  return (
      <div>
          <div className="">
          <div className="details">
           <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
        <div className="max-w-2xl px-4 m-auto relative z-10 flex">
          <div className="h-16 w-16">
            <TbSettingsCog size={50} className="text-white justify-middle " />
          </div>
          <span>
            <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
              Account Settings
            </h1>
            <h1 className='text-base text-left'>Manage your account</h1>
          </span>
        </div>
      </div>
        
          <div className='p-3 pb-0 h-auto border-1 border-t-white border-x-white flex items-center'><div className='w-1/3 font-bold'>General</div><div className='w-2/3'></div></div>
         <div className='p-3 h-auto border-1  border-t-gray-300 border-x-white flex items-center'>
         <CheckboxGroup  >
      <Checkbox value="pm">Users can send me Private Messages</Checkbox>
      <Checkbox value="hideme">Hide me from 'Reading this Chapter' from authors</Checkbox>
      <Checkbox value="showmyborders">Show my Border to all users</Checkbox>
      <Checkbox value="showpopup">Show popup for mobile redirect</Checkbox>
    </CheckboxGroup>
         </div>

          {/* <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center justify-center'>
         User Avatar Borders
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center justify-center'>
          Default Theme
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center justify-center'>
          Date Format
          </div>
          <div className='p-3 h-auto border-1 border-white border-x-white flex items-center justify-center'>
          Time Format
          </div> */}
          <div className='p-3 pb-0 h-auto border-1 border-t-white border-x-white flex items-center'><div className='w-1/3 font-bold'>Reading</div><div className='w-2/3'></div></div>
         
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
         <CheckboxGroup  >
      <Checkbox value="chap">Enable chapter navigation via the keyboard Left and Right Keys - requires JavaScript</Checkbox>
      <Checkbox value="progress">Never show the Reading Progress backtracking box</Checkbox>
      <Checkbox value="fictions">Disable the Reading Progress backtracking box for your own fictions</Checkbox>
      <Checkbox value="oldreaing">Use the old Reading Progress backtracking behavior (always move reading progress backwards if you visit an earlier chapter)</Checkbox>
      <Checkbox value="suggestions">Enable Reader Suggestions</Checkbox>
      <Checkbox value="fullscreen">Enable fullscreen mode with double-tap on the chapter</Checkbox>
    </CheckboxGroup>
          </div>
          <div className='p-3 pb-0 h-auto border-1 border-t-white border-x-white flex items-center'><div className='w-1/3 font-bold'>Forum</div><div className='w-2/3'></div></div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
         <CheckboxGroup>
         <Checkbox value="usersigns">Display users' signatures in their posts</Checkbox>
    </CheckboxGroup>
          </div>
          {/* <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center justify-center'>
          Default Forum subscription method
          </div> */}
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-white border-x-white flex items-center justify-center'>
          <Button color="primary">
      Save Changes
    </Button>
          </div>
          </div >
</div>
    {/* <div className="footer"></div> */}
    </div >
  )
}

export default Settings