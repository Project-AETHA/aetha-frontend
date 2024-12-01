import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaPen, FaTrophy, FaBook, FaEye, FaStar, FaFileAlt, FaThList } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg'; 
import "../components/Profile.css";
import Sidebar from "./Profile/components/Sidebar/Sidebar.jsx";
import { BiSolidCertification } from "react-icons/bi";

function Pro_reputation() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  const handleCommentsClick = () => {
    navigate('/profile/edit/inbox');
  };

  const menus = [
        { name: "Overview", link: "/profile", icon: FaRegUserCircle },
        { name: "Fictions", link: "/author", icon: FaBook },
        { name: "Reviews", link: "/profile/reviews", icon: FaEye },
        { name: "Favorites", link: "/profile/favorites", icon: FaStar },
      //  { name: "Threads", link: "/profile/threads", icon: FaFileAlt},
        { name: "Posts", link: "/profile/posts", icon: FaThList },
        { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
       // { name: "Reputation", link: "/profile/reputation", icon: BiSolidCertification },
    ];

  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-blue-400">
        <div className="main-detail">
          <div className="profile-info">
            <h3>Follows</h3>
            <h3>12</h3>
          </div>
          <div className="profile-info">
            <h3>Reviews</h3>
            <h3>10</h3>
          </div>
          <img className="picture" src={profilepic} alt="profile-pic" />
          <div className="profile-info">
            <h3>Favorites</h3>
            <h3>10</h3>
          </div>
          <div className="profile-info">
            <h3>Saved</h3>
            <h3>10</h3>
          </div>
        </div>
        <div className="flex p-1 bg-white">
          <h2 className="font-semibold flex-grow text-black text-center">HANSI</h2>
          <button onClick={handleCommentsClick}>
            <FaRegComments className="ml-auto mr-2 text-black" />
          </button>
          <button onClick={handleEditClick}>
            <FaUserEdit className="ml-auto text-black mr-5" />
          </button>
        </div>
      </div>
        <div className="dashboard flex">
        <Sidebar menus={menus} />
           <div className="flex-1 ">
          <div className="details border-2 border-blue-700 px-8">
            <div className="topics">
              <FaRegUserCircle className="inline m-3" />Personal Information
            </div>
            <p className="leading-loose">Joined :</p>
            <p className="leading-loose">Gender:</p>
            <p className="leading-loose">Location:</p>
            <p className="leading-loose">Last Active:</p>
            <p className="leading-loose">Bio:</p>
          </div>
          <div className="details border-2 border-blue-700 px-8">
            <div className="topics">
              <MdOutlineHistory className="inline m-3" />Activity
            </div>
            <p className="leading-loose">Follows :</p>
            <p className="leading-loose">Favorites :</p>
            <p className="leading-loose">Ratings :</p>
            <p className="leading-loose">Reviews :</p>
            <p className="leading-loose">Comments :</p>
          </div>
          <div className="details border-2 border-blue-700 px-8">
            <div className="topics">
              <FaPen className="inline m-3" />Author Information
            </div>
            <p className="leading-loose">Fictions :</p>
            <p className="leading-loose">Total Words :</p>
            <p className="leading-loose">Total Reviews Received :</p>
            <p className="leading-loose">Total Ratings Received :</p>
            <p className="leading-loose">Followers :</p>
            <p className="leading-loose">Favorites :</p>
          </div>
          </div>
        </div>
      
    </>
  );
}

export default Pro_reputation;
