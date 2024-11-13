import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaPen, FaTrophy, FaBook, FaEye, FaStar, FaThList } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg'; 
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import axios from 'axios';

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
    { name: "Publishes", link: "/author", icon: FaBook },
    { name: "Reviews", link: "/profile/reviews", icon: FaEye },
    { name: "Favorites", link: "/profile/favorites", icon: FaStar },
    { name: "Posts", link: "/profile/posts", icon: FaThList },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
  ];

  const userDetails = {
    username: "Hansini Bhagya",
    bday: 89,
    joined: "January 2023",
    lastActive: "July 2024",
    gender: "Female",
    location: "Colombo, Sri Lanka",
    web: "TbWorldWww.kjncnch",
    twitter: "jnxjdjjc/,l,",
    fb: "www.njncbfec/jeje/l",
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

  const [user, setUser] = useState({})

  const [username, setUsername] = useState("")
  const [firstname, setFirstName] = useState("")
  const [gender, setGender] = useState("")
  const [image, setImage] = useState("")

  async function getMyDetails() {
      const response = await axios.get("/api/user");

      console.log(response)
      console.log(response.data.content)
      setUser(response.data.content)
      setUsername(response.data.content.username)
      setFirstName(response.data.content.firstname)
      setGender(response.data.content.gender)
      setImage(response.data.content.image)
  }

  useEffect(() => {
    getMyDetails()
  }, [])


  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-gradient-to-r from-purple-400 to-blue-500">
        <div className="main-detail">      
          <div className="profile-info">
            <h1 className="text-lg text-foreground-50">Follows</h1>
            <h3 className="text-lg text-foreground-50">{userDetails.follows}</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Reviews</h3>
            <h3 className="text-lg text-foreground-50">{userDetails.reviews}</h3>
          </div>
          <img className="picture" src={image || profilepic} alt="profile-pic" />
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Favorites</h3>
            <h3 className="text-lg text-foreground-50">{userDetails.favorites}</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Saved</h3>
            <h3 className="text-lg text-foreground-50">{userDetails.favorites}</h3>
          </div>
        </div>
        <div className="flex p-1 bg-foreground-50 items-center justify-between">
          <h2 className="font-semibold text-black text-center ml-56 flex-grow"> {userDetails.username} </h2>
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
            <div className="topics rounded-lg text-foreground-50 ml-6 mr-6 mb-2">
              <FaRegUserCircle className="inline m-3" />Personal Information
            </div>
            <div className="flex-col ml-10">
              <div className="flex">
                <p className="leading-loose w-1/3">Username:</p>
                <p className="leading-loose">{userDetails.username}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Birthday:</p>
                <p className="leading-loose">{userDetails.bday}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Gender:</p>
                <p className="leading-loose">{gender}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Joined:</p>
                <p className="leading-loose">{userDetails.joined}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Last Active:</p>
                <p className="leading-loose">{userDetails.lastActive}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Location:</p>
                <p className="leading-loose">{userDetails.location}</p>
              </div>
             <div className="flex">
                <p className="leading-loose w-1/3">Website:</p>
                <p className="leading-loose">{userDetails.web}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Twitter:</p>
                <p className="leading-loose">{userDetails.twitter}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Facebook:</p>
                <p className="leading-loose">{userDetails.fb}</p>
              </div>
              <div className="flex">
                <p className="leading-loose w-1/3">Bio:</p>
                <p className="leading-loose">{userDetails.bio}</p>
              </div>
            </div>
          </div>
         
          
          <div
  className="details border-2 border-gray-300 px-8 dark:bg-background text-foreground"
  style={{ padding: '20px' }}
>
  <div
    className="topics rounded-lg text-foreground-50 ml-6 mr-6 mb-2"
    style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
  >
    <MdOutlineHistory className="inline m-3" />Activity
  </div>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '20px',
      marginLeft: '24px',
      marginRight: '24px',
      marginTop: '16px',
    }}
  >
    {[
      { label: 'Follows', value: userDetails.follows },
      { label: 'Favorites', value: userDetails.favorites },
      { label: 'Ratings', value: userDetails.ratings },
      { label: 'Reviews', value: userDetails.reviews },
      { label: 'Comments', value: userDetails.comments },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: '#f5f5fa',
          border: '2px solid #d1d1e0',
          borderRadius: '8px',
          padding: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        <p
          style={{
            fontSize: '1.1rem',
            color: '#333333',
            fontWeight: '500',
            marginBottom: '8px',
          }}
        >
          {item.label}
        </p>
        <p style={{ fontSize: '1.5rem', color: '#4b59f7', fontWeight: '700' }}>
          {item.value}
        </p>
      </div>
    ))}
  </div>
</div>

<div
  className="details border-2 border-gray-300 px-8 dark:bg-background text-foreground"
  style={{ padding: '20px' }}
>
  <div
    className="topics rounded-lg text-foreground-50 ml-6 mr-6 mb-2"
    style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
  >
    <FaPen className="inline m-3" />Author Information
  </div>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '20px',
      marginLeft: '24px',
      marginRight: '24px',
      marginTop: '16px',
    }}
  >
    {[
      { label: 'Fictions', value: userDetails.fictions },
      { label: 'Total Words', value: userDetails.totalWords },
      { label: 'Total Reviews Received', value: userDetails.totalReviewsReceived },
      { label: 'Total Ratings Received', value: userDetails.totalRatingsReceived },
      { label: 'Followers', value: userDetails.followers },
      { label: 'Favorites', value: userDetails.authorFavorites },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: '#f5f5fa',
          border: '2px solid #d1d1e0',
          borderRadius: '8px',
          padding: '15px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        <p
          style={{
            fontSize: '1.1rem',
            color: '#333333',
            fontWeight: '500',
            marginBottom: '8px',
          }}
        >
          {item.label}
        </p>
        <p style={{ fontSize: '1.5rem', color: '#4b59f7', fontWeight: '700' }}>
          {item.value}
        </p>
      </div>
    ))}
  </div>
</div>

          
        </div>
      </div>
    </>
  );
}

export default Profile;
