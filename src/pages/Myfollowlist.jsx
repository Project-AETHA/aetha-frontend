import React, { useState } from 'react';
import "../components/Profile.css";
import { IoBookmark } from 'react-icons/io5';
import { FaBookOpenReader } from 'react-icons/fa6';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoIosNotifications } from 'react-icons/io';
import { MdNotificationsActive, MdNotificationsOff } from 'react-icons/md';
import { BsFillEnvelopeFill, BsFillEnvelopeXFill } from 'react-icons/bs';
import { GoCircleSlash } from 'react-icons/go';
import novelpic from '../../public/images/novel.jpg';
import book1 from '../../public/images/books/book1.jpg';
import book2 from '../../public/images/books/book2.jpg';
import book3 from '../../public/images/books/book3.jpg';
import book4 from '../../public/images/books/book4.jpg';

const books = [
  { title: "Soul", author: "Olivia Wilson", image: novelpic, chapter: "Awakening", updateTime: "3 hours ago" },
  { title: "Heart of Darkness", author: "Joseph Conrad", image: book2, chapter: "Into the Jungle", updateTime: "30 days ago" },
  { title: "The Light Between Oceans", author: "M.L. Stedman", image: book3, chapter: "Lighthouse Keeper", updateTime: "2 days ago" },
  { title: "Brave New World", author: "Aldous Huxley", image: book4, chapter: "The Savage", updateTime: "5 days ago" },
  // Add more book objects as needed
];

function Myfollowlist() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [pushNotifications, setPushNotifications] = useState(Array(books.length).fill(true));
  const [emailSubscriptions, setEmailSubscriptions] = useState(Array(books.length).fill(true));
  const [showModal, setShowModal] = useState(false);

  const handleDropdownToggle = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const togglePushNotification = (index) => {
    setPushNotifications((prevNotifications) => {
      const newNotifications = [...prevNotifications];
      newNotifications[index] = !newNotifications[index];
      return newNotifications;
    });
  };

  const toggleEmailSubscription = (index) => {
    setEmailSubscriptions((prevSubscriptions) => {
      const newSubscriptions = [...prevSubscriptions];
      newSubscriptions[index] = !newSubscriptions[index];
      return newSubscriptions;
    });
  };

  const handleUnfollowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className='details bg-background text-foreground'>
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex items-center">
            <div className="h-16 w-16">
              <IoBookmark size={50} className="text-white" />
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Follow List
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-black m-4 h-20 p-4 text-black">
          Advertisement
        </div>

        <div className='m-4'>
          {books.map((book, index) => (
            <div key={index} className='h-auto border-1 border-x-white flex p-3 items-center'>
              <div className="space-y-3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
              </div>
              <div className='p-6 font-semibold text-primary text-xl w-1/2'>
                {book.title}
                <div className='mt-3 font-thin text-black text-small'>
                  Last Update : {book.updateTime}
                </div>
                <div className='mt-3 font-semibold text-purple-600 text-medium'>{book.chapter}</div>
              </div>
              <div className='text-primary-400 text-small ml-auto flex flex-col items-end'>
                <div>by {book.author}</div>
                <button className='bg-primary-400 px-3 mt-4 py-1 text-white rounded-lg flex items-center'>
                  <FaBookOpenReader className='mr-2' />Open Next Chapter
                </button>
                <div className='relative flex mt-4 text-xl'>
                  <IoIosNotifications className='mr-2 cursor-pointer' onClick={() => handleDropdownToggle(index)} />
                  <HiOutlineDotsVertical className='cursor-pointer' onClick={() => handleDropdownToggle(index)} />
                  {showDropdown === index && (
                    <div className='absolute right-0 mt-8 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50'>
                      <ul>
                        <li className='px-4 py-2 text-small text-foreground cursor-pointer hover:bg-gray-200 flex' onClick={() => togglePushNotification(index)}>
                          {pushNotifications[index] ? <MdNotificationsActive className='mr-2' /> : <MdNotificationsOff className='mr-2' />}
                          Push Notification
                        </li>
                        <li className='px-4 py-2 text-small text-foreground cursor-pointer hover:bg-gray-200 flex' onClick={() => toggleEmailSubscription(index)}>
                          {emailSubscriptions[index] ? <BsFillEnvelopeFill className='mr-2' /> : <BsFillEnvelopeXFill className='mr-2' />}
                          Email Subscription
                        </li>
                        <li className='px-4 py-2 text-small text-foreground cursor-pointer hover:bg-gray-200 flex' onClick={handleUnfollowClick}>
                          <GoCircleSlash className='mr-2' />Unfollow
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Unfollow Fiction</h2>
            <p>Are you sure you want to unfollow this fiction?</p>
            <div className='mt-4 flex justify-end'>
              <button className='bg-gray-300 px-4 py-2 rounded-lg mr-2' onClick={handleCloseModal}>Cancel</button>
              <button className='bg-red-500 px-4 py-2 text-white rounded-lg'>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Myfollowlist;
