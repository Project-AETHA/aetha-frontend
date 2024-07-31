import React, { useState } from 'react';
import "../components/Profile.css";
import { MdWatchLater } from 'react-icons/md';
import novelpic from '../../public/images/novel.jpg';
import { Button } from "@nextui-org/react";

function Myreadlater() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const items = [
    {
      title: 'Space Score 1%',
      pages: '57 Pages',
      description: 'Organic material is sought after for many centuries of galactic societies combating factions, and mercenary groups. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.',
      author: 'Zachary Cooper'
    },
    {
      title: 'Soul',
      pages: '124 Pages',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.',
      author: 'Olivia Wilson'
    },
    {
      title: 'Soul',
      pages: '58 Pages',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quasi voluptate. Eveniet, accusamus veritatis ab vero iusto unde voluptates natus accusantium, explicabo, est pariatur? Ratione aliquid dolorum porro dolore.',
      author: 'Olivia Wilson'
    }
  ];

  return (
    <div className="">
      <div className='details bg-background text-foreground'>
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
        <div className="max-w-2xl px-4 m-auto relative z-10 flex items-center">
          <div className="h-16 w-16">
            <MdWatchLater size={50} className="text-white" />
          </div>
          <div className="ml-4">
            <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
              Read Later
            </h1>
            <h1 className="text-base text-left">Manage your account</h1>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-black m-4 h-20 p-4 text-black">
        Advertisement
      </div>

      <div className="m-4 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex p-4 border border-gray-300 rounded-lg bg-foreground-50 shadow-sm">
            <div className="flex-shrink-0">
              <img
                src={novelpic}
                alt="novel"
                className="h-[180px] w-[120px] object-cover rounded-md"
              />
            </div>
            <div className="ml-6 flex-1">
              <h2 className="font-semibold text-xl text-primary">{item.title}</h2>
              <div className="mt-1 text-small font-semibold text-foreground">{item.pages}</div>
              <div className="mt-2 text-foreground text-small font-normal">
                {expandedIndexes.includes(index) ? item.description : `${item.description.substring(0, 150)}...`}
              </div>
              <span
                className="text-small text-blue-600 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                {expandedIndexes.includes(index) ? 'Show Less' : 'Show More'}
              </span>
              <div className="mt-4 flex space-x-4">
                <Button className="bg-danger-400 text-white">
                  Remove
                </Button>
                <Button className="bg-blue-500 text-white">
                  Follow
                </Button>
              </div>
            </div>
            <div className="ml-auto text-primary-400 text-small flex items-center">
              by {item.author}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Myreadlater;
