import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaPen, FaTrophy, FaBook, FaEye, FaStar, FaThList } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg'; 
import "../components/Profile.css";
import Sidebar from "./Profile/components/Sidebar/Sidebar.jsx";

function Profile() {
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
    { name: "Posts", link: "/profile/posts", icon: FaThList },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
  ];

  const userDetails = {
    joined: "January 2023",
    gender: "Female",
    location: "Colombo, Sri Lanka",
    lastActive: "July 2024",
    bio: "Author and avid reader.",
    follows: "12",
    favorites: "10",
    ratings: "8",
    reviews: "10",
    comments: "5",
    fictions: "3",
    totalWords: "15000",
    totalReviewsReceived: "25",
    totalRatingsReceived: "20",
    followers: "100",
    authorFavorites: "15"
  };

  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-gradient-to-r from-purple-400 to-blue-500">
        <div className="main-detail">      
          <div className="profile-info">
          - add block button and report buttons
            <h1 className="text-lg text-foreground-50">Follows</h1>
            <h3 className="text-lg text-foreground-50">{userDetails.follows}</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Reviews</h3>
            <h3 className="text-lg text-foreground-50">{userDetails.reviews}</h3>
          </div>
          <img className="picture" src={profilepic} alt="profile-pic" />
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Favorites</h3>
            <h3 className="text-lg text-foreground-50">{userDetails.favorites}</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Saved</h3>
            <h3 className="text-lg text-foreground-50">{userDetails.favorites}</h3>
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
          <div className="details border-2 border-gray-300 px-8 dark:bg-background text-foreground">
            <div className="topics rounded-lg">
              <FaRegUserCircle className="inline m-3" />Personal Information
            </div>
            <div className="flex flex-col ml-10">
              <div className="flex">
                <p className="leading-loose w-1/3">Joined:</p>
                <p className="leading-loose">{userDetails.joined}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Gender:</p>
                <p className="leading-loose">{userDetails.gender}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Location:</p>
                <p className="leading-loose">{userDetails.location}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Last Active:</p>
                <p className="leading-loose">{userDetails.lastActive}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Bio:</p>
                <p className="leading-loose">{userDetails.bio}</p>
              </div>
            </div>
          </div>
          <div className="details border-2 border-gray-300 px-8 dark:bg-background text-foreground">
            <div className="topics rounded-lg">
              <MdOutlineHistory className="inline m-3" />Activity
            </div>
            <div className="flex flex-col ml-10">
              <div className="flex">
                <p className="leading-loose w-1/3">Follows:</p>
                <p className="leading-loose">{userDetails.follows}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Favorites:</p>
                <p className="leading-loose">{userDetails.favorites}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Ratings:</p>
                <p className="leading-loose">{userDetails.ratings}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Reviews:</p>
                <p className="leading-loose">{userDetails.reviews}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Comments:</p>
                <p className="leading-loose">{userDetails.comments}</p>
              </div>
            </div>
          </div>
          <div className="details border-2 border-gray-300 px-8 dark:bg-background text-foreground">
            <div className="topics rounded-lg">
              <FaPen className="inline m-3" />Author Information
            </div>
            <div className="flex flex-col ml-10">
              <div className="flex">
                <p className="leading-loose w-1/3">Fictions:</p>
                <p className="leading-loose">{userDetails.fictions}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Total Words:</p>
                <p className="leading-loose">{userDetails.totalWords}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Total Reviews Received:</p>
                <p className="leading-loose">{userDetails.totalReviewsReceived}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Total Ratings Received:</p>
                <p className="leading-loose">{userDetails.totalRatingsReceived}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Followers:</p>
                <p className="leading-loose">{userDetails.followers}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Favorites:</p>
                <p className="leading-loose">{userDetails.authorFavorites}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
