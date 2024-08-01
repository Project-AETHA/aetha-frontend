import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaPen, FaTrophy, FaBook, FaEye, FaStar, FaFileAlt, FaThList, FaBookReader } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg';
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { BiSolidCertification } from "react-icons/bi";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { IoChatbubbleOutline } from "react-icons/io5";

function Pro_posts() {
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
   // { name: "Threads", link: "/profile/threads", icon: FaFileAlt },
    { name: "Posts", link: "/profile/posts", icon: FaThList },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
  //  { name: "Reputation", link: "/profile/reputation", icon: BiSolidCertification },
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
        {/* <div className="flex"> */}
        {/* <div className='m-4'> */}
        <div className="m-16 mt-6 w-full bg-foreground-50 rounded-2xl">
          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Posts</TableColumn>
              <TableColumn></TableColumn>
              <TableColumn></TableColumn>
              <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className='text-primary-400'><IoChatbubbleOutline /></TableCell>
                <TableCell className='text-foreground '>
                  <div className="font-semibold">Re: How annoying is a short chapter?</div>
                  I don't mind the occasional short chapter at all! The only thing that annoys me as a reader is when every chapter is super short. Having to load a new chapter creates a small pause in the reading experience, (...)</TableCell>
                <TableCell>2/18/2024, 3:07 AM</TableCell>
                <TableCell>Last post by Stubby<div>
                  18 February 2023, 17:30</div></TableCell>


              </TableRow>
              <TableRow key="2">
                <TableCell className='text-primary-400'><IoChatbubbleOutline /></TableCell>
                <TableCell className='text-foreground'>
                  <div className="font-semibold">Re: My wife and I (mostly my wife) worked on this cover over a few months</div>
                  I know I'm late to the party, but I just want to say this cover is GORGEOUS.</TableCell>
                <TableCell>2/17/2023, 9:30 PM</TableCell>
                <TableCell>Last post by Screaming<div>08 April 2023, 19:30</div>
                </TableCell>


              </TableRow>
              <TableRow key="3">
                <TableCell className='text-primary-400'><IoChatbubbleOutline /></TableCell>
                <TableCell className='text-foreground'>
                  <div className="font-semibold">Re: Unpopular opinion: a simple synopsis is better</div>
                  As a reader, I prefer hooky flap copy that tells me about the story's overall vibe and core conflict. In general, no more than two characters should be mentioned by name unless it's a multi-protagonist (...)</TableCell>
                <TableCell>2/16/2023, 7:56 PM</TableCell>
                <TableCell><div>Last post by Lack of Poochline</div><div>24 January 2024, 20:53</div></TableCell>

              </TableRow>
              <TableRow key="4">
                <TableCell className='text-primary-400'><IoChatbubbleOutline /></TableCell>
                <TableCell>
                  <div className="font-semibold">Re: We've made it to 5000 views...</div>
                  Congratulations! And I agree with Second Law. Your cover is really fun!</TableCell>
                <TableCell className='text-foreground'>2/13/2023, 8:52 PM</TableCell>
                <TableCell><div>Last post by Flossindune</div><div>14 February 2023, 07:10</div></TableCell>


              </TableRow>
            </TableBody>
          </Table>
        </div>

      </div>


      {/* </div> */}
      {/* </div> */}

    </>
  );
}

export default Pro_posts;
