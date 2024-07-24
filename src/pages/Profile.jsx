import React from "react";
import "../components/Profile.css";
import { FaRegUserCircle ,FaEye ,FaStar , FaTrophy, FaThList , FaFileAlt, FaPen, FaRegComments, FaUserEdit} from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { BiSolidCertification } from "react-icons/bi";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg';

function Profile() {
  return (
    <>
      {/* <div className="profile-pic"> */}
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 color-black bg-blue-400">
      
        <div className="main-detail">
        <div className="profile-info">
          <h3>Follows</h3>
          <h3>10</h3>
        </div>
        <div className="profile-info">
          <h3>Reviews</h3>
          <h3>10</h3>
         </div>
         <img className="picture"src={profilepic} alt="profile-pic" ></img>
        <div className="profile-info">
          <h3>Favourites</h3>
          <h3>10</h3>
        </div>
        <div className="profile-info">
          <h3>Saved</h3>
          <h3>10</h3>
        </div>
        </div>
      <div className="flex p-1 bg-white"><h2 className="font-semibold flex-grow text-center">HANSI</h2><FaRegComments className="ml-auto mr-2" /><FaUserEdit className="ml-auto mr-5" /></div>

      </div>
      {/* <div className="flex"> */}
      {/* <div className="flex  "><FaRegComments /> */}
      {/* <Link color="foreground" to="/editprofile"> */}
            {/* <FaUserEdit /> */}
          {/* </Link> */}
           {/* </div> */}
          {/* </div> */}
 {/* </div> */}
      <div className="content">
          <div className="side-bar-main">
          <div className="side-topic flex align-middle"><FaRegUserCircle className="m-4 justify-start "/>Overview</div>
          <div className="side-topic flex align-middle"><FaBook className="m-4 justify-start" />Fictions</div>
          <div className="side-topic flex align-middle"><FaEye className="m-4 justify-start"/>Reviews</div>
          <div className="side-topic flex align-middle"><FaStar className="m-4 justify-start"/>Favorites</div>
          <div className="side-topic flex align-middle"><FaFileAlt className="m-4 justify-start"/>Threads</div>
          <div className="side-topic flex align-middle"><FaThList className="m-4 justify-start "/>Posts</div>
          <div className="side-topic flex align-middle"><FaTrophy className="m-4 justify-start"/>Achievements</div>
          <div className="side-topic flex align-middle"><BiSolidCertification className="m-4 justify-start"/>Reputation</div>
          </div>
          <div className="dashboard">
          <div className="details border-2 border-blue-700 px-8">
              <div className="topics"> <FaRegUserCircle className="inline m-3" />Personal Information </div>
              <p className="leading-loose">Joined : </p>
              <p className="leading-loose">Gender: </p>
              <p className="leading-loose">Location: </p>
              <p className="leading-loose">Last Active: </p>
              <p className="leading-loose">Bio:</p>
          </div>
          <div className="details border-2 border-blue-700 px-8">
              <div className="topics"><MdOutlineHistory className="inline m-3" />Activity</div>
              <p className="leading-loose">Follows   : </p>
              <p className="leading-loose">Favorites : </p>
              <p className="leading-loose">Ratings   : </p>
              <p className="leading-loose">Reviews   : </p>
              <p className="leading-loose">Reviews   : </p>
              <p className="leading-loose">Comments  : </p>
          </div>
          <div className="details border-2 border-blue-700 px-8">
              <div className="topics"><FaPen className="inline m-3" />Author Information</div>
              <p className="leading-loose">Fictions    :</p>
              <p className="leading-loose">Total Words :</p>
              <p className="leading-loose">Total Reviews Received  : </p>
              <p className="leading-loose">Total Ratings Received  :</p>
              <p className="leading-loose">Followers  :</p>
              <p className="leading-loose">Favorites  : </p>
          </div>
          </div>
      </div>
      {/* <div className="footer">
          
          </div> */}
    </>
  );
}

export default Profile;
