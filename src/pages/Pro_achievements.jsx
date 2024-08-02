import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaPen, FaTrophy, FaBook, FaEye, FaStar, FaFileAlt, FaThList } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg';
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { BiSolidCertification } from "react-icons/bi";

function Pro_achievements() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  const handleCommentsClick = () => {
    navigate('/profile/edit/inbox');
  };

  const menus = [
    { name: "Overview", link: "/profile", icon: FaRegUserCircle },
    { name: "Publishes", link: "/author", icon: FaBook },
    { name: "Reviews", link: "/profile/reviews", icon: FaEye },
    { name: "Favorites", link: "/profile/favorites", icon: FaStar },
    //{ name: "Threads", link: "/profile/threads", icon: FaFileAlt},
    { name: "Posts", link: "/profile/posts", icon: FaThList },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
    // { name: "Reputation", link: "/profile/reputation", icon: BiSolidCertification },
  ];

  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-gradient-to-r from-purple-400 to-blue-500">
        <div className="main-detail">      
          <div className="profile-info ">
            <h1 className="text-lg text-foreground-50 ">Follows</h1>
            <h3 className="text-lg text-foreground-50 ">12</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50 ">Reviews</h3>
            <h3 className="text-lg text-foreground-50 ">10</h3>
          </div>
          <img className="picture" src={profilepic} alt="profile-pic" />
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50 ">Favorites</h3>
            <h3 className="text-lg text-foreground-50 ">10</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50 ">Saved</h3>
            <h3 className="text-lg text-foreground-50 ">10</h3>
          </div>
        </div>
        <div className="flex p-1 bg-white items-center justify-between">
          <h2 className="font-semibold text-black text-center ml-56 flex-grow">HANSINI BHAGYA</h2>
          <div className="flex">
            <button onClick={handleCommentsClick} className="ml-2 flex items-center border-2 rounded-xl border-purple-500 bg-purple-400 hover:bg-foreground-50 px-2">
              <FaRegComments className="text-black m-1" />Messages
            </button>
            <button onClick={handleEditClick} className="ml-2 flex mr-5 items-center border-2 rounded-xl border-purple-500 bg-purple-400 hover:bg-foreground-50 px-2">
              <FaUserEdit className="text-black m-1" />Edit
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <Sidebar menus={menus} />
        <div className="mx-16 mt-6 w-full bg-foreground-50 rounded-2xl pt-6">
          <div className="flex-wrap mx-16 justify-items-start">
            <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center'>
              <div className='w-1/6'>
                <div className='h-20 w-20 m-4'><img src='../../public/images/badge1.png' alt="badge1" /></div>
              </div>
              <div className='w-4/5'>
                <label className='ml-2'>
                  <div className="font-semibold px-2 text-foreground">Bookworm</div>
                  <div className='w-auto align-middle p-2'>Awarded for reading 10 books on our platform. Your dedication to reading is truly impressive!</div>
                </label>
              </div>
            </div>
            <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center'>
              <div className='w-1/6'>
                <div className='h-20 w-20 m-4'><img src='../../public/images/badge2.png' alt="badge2" /></div>
              </div>
              <div className='w-4/5'>
                <label className='ml-2'>
                  <div className="font-semibold px-2 text-foreground">Prolific Writer</div>
                  <div className='w-auto align-middle p-2'>Given for publishing 5 books. Your creativity and hard work shine through your published works!</div>
                </label>
              </div>
            </div>
            <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center'>
              <div className='w-1/6'>
                <div className='h-20 w-20 m-4'><img src='../../public/images/badge3.png' alt="badge3" /></div>
              </div>
              <div className='w-4/5'>
                <label className='ml-2'>
                  <div className="font-semibold px-2 text-foreground">Top Reviewer</div>
                  <div className='w-auto align-middle p-2'>Granted for receiving 50 upvotes on your reviews. Your insights are highly valued by the community!</div>
                </label>
              </div>
            </div>
            <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center'>
              <div className='w-1/6'>
                <div className='h-20 w-20 m-4'><img src='../../public/images/badge4.png' alt="badge4" /></div>
              </div>
              <div className='w-4/5'>
                <label className='ml-2'>
                  <div className="font-semibold px-2 text-foreground">Crowd Pleaser</div>
                  <div className='w-auto align-middle p-2'>Earned for getting 100 likes on a single book. Readers are enthusiastic about your work!</div>
                </label>
              </div>
            </div>
            <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center'>
              <div className='w-1/6'>
                <div className='h-20 w-20 m-4'><img src='../../public/images/badge5.png' alt="badge5" /></div>
              </div>
              <div className='w-4/5'>
                <label className='ml-2'>
                  <div className="font-semibold px-2 text-foreground">Marathon Reader</div>
                  <div className='w-auto align-middle p-2'>Earned by reading for 50 hours in total. Your commitment to reading is truly commendable!</div>
                </label>
              </div>
            </div>
            <div className='p-1 h-40 border-1 border-t-white border-x-white flex items-center'>
              <div className='w-1/6'>
                <div className='h-20 w-20 m-4'><img src='../../public/images/badge6.png' alt="badge6" /></div>
              </div>
              <div className='w-4/5'>
                <label className='ml-2'>
                  <div className="font-semibold px-2 text-foreground">Master Storyteller</div>
                  <div className='w-auto align-middle p-2'>Awarded for writing 100,000 words. Your storytelling skills are exceptional and influential!</div>
                </label>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Pro_achievements;
