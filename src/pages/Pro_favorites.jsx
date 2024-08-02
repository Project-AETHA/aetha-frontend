import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaPen, FaTrophy, FaBook, FaEye, FaStar, FaFileAlt, FaThList } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg'; 
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx"; 
import novelpic from '../../public/images/novel.jpg';


function Pro_favorites() {
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
    const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "path/to/great-gatsby.jpg" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", image: "path/to/to-kill-a-mockingbird.jpg" },
  { title: "1984", author: "George Orwell", image: "path/to/1984.jpg" },
  { title: "Pride and Prejudice", author: "Jane Austen", image: "path/to/pride-and-prejudice.jpg" },
  // Add more book objects here
];

  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-gradient-to-r from-purple-400 to-blue-500">
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
        <div className="mx-16 mt-6 w-full bg-foreground-50 rounded-2xl">
          <div className="flex flex-wrap justify-center">
            {[...Array(14)].map((_, index) => (
              <img
                key={index}
                src={novelpic}
                alt="novel"
                className="h-auto w-[180px] object-cover rounded-md m-4 flex-1"
                style={{ maxWidth: '180px' }}
              >
              {/* <div className="bg-black text-foreground h-auto ">
              
              </div> */}
              </img>
           ))}
            </div> 
        </div>
      </div>
    </>
  );
}

export default Pro_favorites;
