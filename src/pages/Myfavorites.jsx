import React, { useState } from 'react';
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import novelpic from '../../public/images/novel.jpg';
import { Button } from "@nextui-org/react";

function Myfavorites() {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const reviews = [
    {
      key: "1",
      picture: novelpic,
      title: "Space Score 1%",
      pages: "57 Pages",
      description: "Organic material is sought after for many centuries of galactic societies combating factions, and mercenary groups. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.",
      author: "by Zachary Cooper"
    },
    {
      key: "2",
      picture: novelpic,
      title: "Soul",
      pages: "124 Pages",
      description: "njznjfcccccccccccccc nnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnccccccccccccccccc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.",
      author: "by Olivia Wilson"
    },
    {
      key: "3",
      picture: novelpic,
      title: "Soul",
      pages: "58 Pages",
      description: "Organic material is sought after for many centuries of galactic societies combating factions, and mercenary groups. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.",
      author: "by Zachary Cooper"
    }
  ];

  return (
    <div>
      <div className="">
      <div className='details'>
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <MdOutlineFavorite size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Favorites
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>

        <div className="bg-white border-2 border-black m-4 h-20 p-4 text-black">
          Advertisement
        </div>
        <div className='m-4'>
          {reviews.map((review, index) => (
            <div key={review.key} className='h-auto border-1 border-x-white flex p-3 items-start mb-4'>
              <div className="space-y-3">
                <img
                  src={review.picture}
                  alt="novel"
                  className="h-[180px] w-[120px] object-cover rounded-md"
                />
              </div>
              <div className='p-6 w-3/4 font-semibold text-primary text-xl'>
                {review.title}
                <div className='mt-3 font-semibold pb-3 text-black text-small'>{review.pages}</div>
                <div className='text-black text-small font-normal'>
                  {showMore[index] ? review.description : `${review.description.substring(0, 100)}...`}
                </div>
                <button 
                  onClick={() => toggleShowMore(index)} 
                  className='text-semibold text-small pl-28 text-foreground'
                >
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </button>
              </div>
              <div className='flex flex-col justify-between items-start p-3'>
                <div className='text-primary-400 text-small'>{review.author}</div>
                <Button className="bg-danger-500 m-1 text-white">
                  Unfavorite
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Myfavorites;
