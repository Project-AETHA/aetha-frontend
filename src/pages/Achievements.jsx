import React from 'react';
import { FaTrophy } from "react-icons/fa";

function Achievements() {
  return (
    
      <div className="">
         <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
                <FaTrophy size={50} className="text-white justify-middle " />
              </div>
              <span>
                <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple-100 to-blue-100">
                  Manage Achievements
                </h1>
                <h1 className='text-base text-left'>Manage your account</h1>
              </span>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge1.png' alt='Badge 1'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Top Reader</div>
                <div className='w-auto align-middle p-2'>Awarded for reading the most books this year. Keep up the great reading habit!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge2.png' alt='Badge 2'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Prolific Writer</div>
                <div className='w-auto align-middle p-2'>Given to writers who have published a large number of works. Your creativity knows no bounds!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge3.png' alt='Badge 3'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Five-Star Reviewer</div>
                <div className='w-auto align-middle p-2'>Earned by providing high-quality reviews consistently. Your insights are highly valued!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge4.png' alt='Badge 4'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Top Contributor</div>
                <div className='w-auto align-middle p-2'>Recognizes those who contribute the most to discussions and forums. Your voice makes a difference!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge5.png' alt='Badge 5'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Literary Legend</div>
                <div className='w-auto align-middle p-2'>Awarded to authors whose work has had a significant impact on the community. Your legacy is secure!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge6.png' alt='Badge 6'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Rising Star</div>
                <div className='w-auto align-middle p-2'>Given to new members who quickly become active and engaged. Your enthusiasm is inspiring!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge7.png' alt='Badge 7'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Master Critic</div>
                <div className='w-auto align-middle p-2'>Awarded for providing insightful critiques that help others improve. Your feedback is invaluable!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge8.png' alt='Badge 8'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Reading Marathoner</div>
                <div className='w-auto align-middle p-2'>For completing a reading challenge. Your dedication to reading is truly commendable!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge9.png' alt='Badge 9'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Genre Guru</div>
                <div className='w-auto align-middle p-2'>Earned for reading and reviewing a diverse range of genres. Your literary taste is eclectic!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge10.png' alt='Badge 10'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Influential Writer</div>
                <div className='w-auto align-middle p-2'>Given to authors whose work significantly influences the reading community. Your writing has a profound effect!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge11.png' alt='Badge 11'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Creative Genius</div>
                <div className='w-auto align-middle p-2'>Awarded to authors who demonstrate exceptional creativity in their writing. Your imagination knows no limits!</div>
              </label>
            </div>
          </div>
          <div className='p-3 h-auto border-1 border-t-white border-x-white flex items-center '>
            <div className='w-1/3'>
              <div className='h-20 w-20 m-4'><img src='../../public/images/badge12.png' alt='Badge 12'></img></div>
            </div>
            <div className='w-2/3'>
              <label className='ml-2'>
                <div className='font-semibold text-foreground'>Community Champion</div>
                <div className='w-auto align-middle p-2'>For being an active and supportive member of the community. Your contributions make a difference!</div>
              </label>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Achievements;
