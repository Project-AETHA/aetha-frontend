import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaTrophy, FaBook, FaEye, FaStar, FaThList } from "react-icons/fa";
import profilepic from '../../public/images/profilepic.jpg'; 
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx"; 
import novelpic from '../../public/images/novel.jpg';
import book1 from '../../public/images/books/book1.jpg';
import book2 from '../../public/images/books/book2.jpg';
import book3 from '../../public/images/books/book3.jpg';
import book4 from '../../public/images/books/book4.jpg';

function Pro_favorites() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  const handleCommentsClick = () => {
    navigate('/profile/edit/inbox');
  };

  const favorites = [
    {
      key: "1",
      picture: book4,
      title: "Scientific Sorcery : Beware of Kittens!",
      pages: "248 Pages",
      description: "Ioan Starfall, a Nordstaii teen on the cusp of adulthood...",
      author: "by Vitaly S Alexius"
    },
    {
      key: "2",
      picture: novelpic,
      title: "Soul",
      pages: "124 Pages",
      description: "“Soul” by Olivia Wilson delves into the essence of human existence...",
      author: "by Olivia Wilson"
    },
    {
      key: "3",
      picture: book1,
      title: "The Great Gatsby",
      pages: "124 Pages",
      description: "The Great Gatsby, published in 1925, is F. Scott Fitzgerald's most famous novel...",
      author: "by F.Scott Fitzgerald"
    },
    {
      key: "4",
      picture: book2,
      title: "The Catcher In The Rye",
      pages: "58 Pages",
      description: "Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield...",
      author: "by J.D.Salinger"
    },
    {
      key: "5",
      picture: book3,
      title: "Brave New world",
      pages: "58 Pages",
      description: "Aldous Huxley's profoundly important classic of world literature, Brave New World...",
      author: "by Aldous Huxley"
    }
  ];

  const menus = [
    { name: "Overview", link: "/profile", icon: FaRegUserCircle },
    { name: "Publishes", link: "/author", icon: FaBook },
    { name: "Reviews", link: "/profile/reviews", icon: FaEye },
    { name: "Favorites", link: "/profile/favorites", icon: FaStar },
    { name: "Posts", link: "/profile/posts", icon: FaThList },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
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
        <div className="mx-16 mt-6 w-full bg-foreground-50 rounded-2xl pt-6">
        <div className="text-xl mx-16 font-bold pb-2">Your Favorites</div>
         <div className="flex flex-wrap mx-16 justify-items-start text-foreground text-lg">
          
           {favorites.map((favorite, index) => (
              <div
                key={index}
                className="flex flex-col items-center m-4"
                style={{ width: '160px' }}
              >
                <img
                  src={favorite.picture}
                  alt={favorite.title}
                  className="h-[250px] w-full object-cover rounded-lg"
                />
                <div className="text-center mt-2">
                  <h3 className="text-base font-semibold text-black">{favorite.title}</h3>
                  <p className="text-sm text-gray-500">{favorite.author}</p>
                </div>
              </div>
            ))}  
          </div>
        </div>
      </div>
    </>
  );
}

export default Pro_favorites;
