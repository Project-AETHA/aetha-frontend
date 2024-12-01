import React, { useState } from 'react'
import { FaEnvelope } from "react-icons/fa";
import { Button, Textarea } from "@nextui-org/react";

function Compose() {
  const [value, setValue] = useState('');
  return (

      <div className="">
        <div className="details bg-background text-foreground">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
            <FaEnvelope size={50} className="text-white justify-middle " /></div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Private Messages
              </h1>
              <h1 className='text-base text-left'>All your conversations in one place.</h1>
            </span>
          </div>
        </div>
          <div className='p-3 pb-0 mx-2 h-auto border-none flex items-center font-semibold'>
          Recipients</div>
          <div className='p-3 h-auto border-none flex items-center justify-center'>
            <div className='p-3  pb-0 h-auto border-1 border-y-white border-x-white w- w-full items-center'>
          <input
                type='text '
                placeholder='Search for a user'
                className='w-full align-middle p-2 bg-foreground-50 border-2 border-gray-300 rounded-xl'
              />
          </div>
          </div>
          <div className='p-3  pb-0 mx-2 h-auto border-1 border-y-white border-x-white flex items-center font-semibold'>
          Subject
          </div>
          <div className='p-3 h-auto border-1 border-none flex items-center justify-center'>
            <div className='p-3  pb-0 h-auto border-1 border-y-white border-x-white w- w-full items-center'>
          <input
                type='text '
                className='w-full align-middle p-2 bg-foreground-50 border-2 border-gray-300 rounded-xl'
              />
          </div>
          </div>
          <div className='p-3 pb-0 mx-2 h-auto border-none flex items-center font-semibold'>
          Message</div>
          <div className='p-3 h-auto border-none border-x-white flex flex-col items-center'>
            <div className='w-full flex justify-center items-center mb-2'>

              <div className="mx-2 bg-foreground-50 border-none rounded-xl w-full">
                <Textarea className="text-editor" theme="snow" value={value} onChange={setValue} />
              </div>
            </div>
          </div>
          <div className='p-3 h-auto border-none border-x-white flex items-center justify-center'>
            <Button className="bg-primary m-2 text-white">
              Send
            </Button>
            <Button className="bg-primary m-2 text-white">
              Save as Draft
            </Button>
            <Button className="bg-primary m-2 text-white">
              Preview
            </Button>
          </div>

        </div>
      
      {/* <div className="footer"></div> */}
    </div>
  );
}

export default Compose;