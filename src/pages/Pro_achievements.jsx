import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaBook, FaEye, FaStar, FaThList, FaTrophy } from "react-icons/fa";
import profilepic from '../../public/images/profilepic.jpg';
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

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
    { name: "Posts", link: "/profile/posts", icon: FaThList },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
  ];

  const achievements = [
    {
      imgSrc: '../../public/images/badge1.png',
      title: "Bookworm",
      description: "Awarded for reading 10 books on our platform. Your dedication to reading is truly impressive!",
    },
    {
      imgSrc: '../../public/images/badge2.png',
      title: "Prolific Writer",
      description: "Given for publishing 5 books. Your creativity and hard work shine through your published works!",
    },
    {
      imgSrc: '../../public/images/badge3.png',
      title: "Top Reviewer",
      description: "Granted for receiving 50 upvotes on your reviews. Your insights are highly valued by the community!",
    },
    {
      imgSrc: '../../public/images/badge4.png',
      title: "Crowd Pleaser",
      description: "Earned for getting 100 likes on a single book. Readers are enthusiastic about your work!",
    },
    {
      imgSrc: '../../public/images/badge5.png',
      title: "Marathon Reader",
      description: "Earned by reading for 50 hours in total. Your commitment to reading is truly commendable!",
    },
    {
      imgSrc: '../../public/images/badge6.png',
      title: "Master Storyteller",
      description: "Awarded for writing 100,000 words. Your storytelling skills are exceptional and influential!",
    }
  ];

  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="main-detail">
          <div className="profile-info">
            <h1 className="text-lg text-foreground-50">Follows</h1>
            <h3 className="text-lg text-foreground-50">12</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Reviews</h3>
            <h3 className="text-lg text-foreground-50">10</h3>
          </div>
          <img className="picture" src={profilepic} alt="profile-pic" />
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Favorites</h3>
            <h3 className="text-lg text-foreground-50">10</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Saved</h3>
            <h3 className="text-lg text-foreground-50">10</h3>
          </div>
        </div>
        <div className="flex p-1 bg-white items-center justify-between">
          <h2 className="font-semibold text-black text-center ml-56 flex-grow">HANSINI BHAGYA</h2>
          <div className="flex">
            <button onClick={handleCommentsClick} className="ml-2 flex items-center border-2 rounded-xl border-violet-500 bg-violet-500 hover:bg-black px-2 text-foreground-50">
              <FaRegComments className="text-foreground-50 m-1" />Messages
            </button>
            <button onClick={handleEditClick} className="ml-2 flex mr-5 items-center border-2 rounded-xl border-violet-500 bg-violet-500 hover:bg-black px-2 text-foreground-50">
              <FaUserEdit className="text-foreground-50 m-1" />Edit
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <Sidebar menus={menus} />
        <div className="mx-16 mt-6 w-full bg-white rounded-2xl pt-6">
          <div className="flex-wrap mx-16 justify-items-start text-foreground text-lg">
            <div className="text-xl font-bold">Your Achievements</div>
            {achievements.map((achievement, index) => (
              <div key={index} className='p-1 h-40 border-1 border-t-white border-x-white flex items-center'>
                <div className='w-1/6'>
                  <div className='h-20 w-20 m-4'><img src={achievement.imgSrc} alt={achievement.title} /></div>
                </div>
                <div className='w-4/5'>
                  <label className='ml-2'>
                    <div className="text-lg font-semibold px-2 text-foreground">{achievement.title}</div>
                    <div className='w-auto text-base align-middle p-2'>{achievement.description}</div>
                  </label>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </>
  );
}

export default Pro_achievements;
