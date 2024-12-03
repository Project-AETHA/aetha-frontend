import React, { useState } from 'react';
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { MdNotificationImportant } from 'react-icons/md';
import { Button } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

function Notificationsetting() {
  const [settings, setSettings] = useState({
    commentRepliesOnSite: false,
    commentRepliesEmail: false,
    mentioningOnSite: false,
    mentioningEmail: false,
    privateMessagesEmail: false,
    newChaptersEmail: false,
    weeklySummaryEmail: false,
    newCommentOnSite: false,
    reviewsOnSite: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: checked
    }));
  };

  return (
    <div>
      <div className="">
        <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
              <MdNotificationImportant size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Notification Settings
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
          
          <div className='p-3 h-auto border-1 pb-0 border-t-white border-x-white flex items-center font-bold'>
            <div className='w-1/3 '>General</div>
          </div>
          
          <div className='p-3  h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center pl-8'>
            <div className='w-1/3 m-6'>Comment Replies</div>
            <div className='w-2/3'>
              <div>
                      <Checkbox value="pm">On-site notification</Checkbox>
              </div>
              <div>
                      <Checkbox value="pm">Email</Checkbox>
                
              </div>
            </div>
          </div>
          
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center pl-8'>
            <div className='w-1/3 m-6'>Mentioning</div>
            <div className='w-2/3'>
              <div>
                                      <Checkbox value="pm">On-site notification</Checkbox>
              </div>
              <div>
                                      <Checkbox value="pm">Email</Checkbox>

              </div>
            </div>
          </div>
          
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center pl-8'>
            <div className='w-1/3 m-6'>Private Messages</div>
            <div className='w-2/3'>
                                    <Checkbox value="pm">Email</Checkbox>

            </div>
          </div>
          
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center pl-8'>
            <div className='w-1/3 m-6'>New Chapters</div>
            <div className='w-2/3'>
                                    <Checkbox value="pm">Email</Checkbox>

            </div>
          </div>
          
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center pl-8'>
            <div className='w-1/3 m-6'>Weekly Chapter Summary</div>
            <div className='w-2/3'>
                                    <Checkbox value="pm">Email</Checkbox>

            </div>
          </div>

          <div className='p-3 pb-0 h-auto border-1 border-t-white border-b-gray-300 border-x-white flex items-center font-semibold mt-4'>
            <div className='w-1/3'>For Authors</div>
          </div>
          
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center pl-8'>
            <div className='w-1/3 m-6'>New comment in chapter</div>
            <div className='w-2/3'>
                                                    <Checkbox value="pm">On-site notification</Checkbox>

            </div>
          </div>
          
          <div className='p-3 h-auto border-1 border-y-gray-300 border-x-white flex items-center pl-8'>
            <div className='w-1/3 m-6'>Reviews</div>
            <div className='w-2/3'>
                                                    <Checkbox value="pm">On-site notification</Checkbox>

            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-gray-300 border-b-0 border-x-white flex items-center justify-center'>
          <Button className='bg-primary text-white'>Submit</Button>
          </div>
        </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Notificationsetting;
