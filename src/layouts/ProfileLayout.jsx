import { FaBook, FaEye, FaFileAlt, FaRegUserCircle, FaStar, FaThList, FaTrophy } from "react-icons/fa";
import BreadCrumbs from "../components/common/BreadCrumb.jsx";
import { BiSolidCertification } from "react-icons/bi";
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

export default function ProfileLayout(props) {

    const menus = [
        { name: "Overview", link: "/profile", icon: FaRegUserCircle },
        { name: "Fictions", link: "/profile/fictions", icon: FaBook },
        { name: "Reviews", link: "/profile/reviews", icon: FaEye },
        { name: "Favorites", link: "/profile/favorites", icon: FaStar },
        { name: "Threads", link: "/profile/threads", icon: FaFileAlt},
        { name: "Posts", link: "/profile/posts", icon: FaThList },
        { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
        { name: "Reputation", link: "/profile/reputation", icon: BiSolidCertification },
    ];
    return (
      //   <div className="">
            
      //        <div className={`${props.class} w-full overflow-y-scroll default-scrollbar`}>
      //            <BreadCrumbs />
      //            {props.children}
      //             <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-blue-400">

       //  <div className="main-detail">
      //     <div className="profile-info">
      //       <h3>Follows</h3>
      //       <h3>12</h3>
      //     </div>
      //     <div className="profile-info">
      //       <h3>Reviews</h3>
      //       <h3>10</h3>
      //     </div>
      //     <img className="picture" src={profilepic} alt="profile-pic" ></img>
      //     <div className="profile-info">
      //       <h3>Favorites</h3>
      //       <h3>10</h3>
      //     </div>
      //     <div className="profile-info">
      //       <h3>Saved</h3>
      //       <h3>10</h3>
      //     </div>
      //   </div>
      //   <div className="flex p-1 bg-white">
      //     <h2 className="font-semibold flex-grow text-black text-center">HANSI</h2>
      //     <button><FaRegComments className="ml-auto mr-2 text-black" >
      //     <Link color="foreground" to="/profile/edit"></Link>
      //     </FaRegComments>          
      //     </button>
      //     <button><FaUserEdit className="ml-auto text-black mr-5">
      //     <Link color="foreground" to="profile/edit/inbox"></Link>
      //       </FaUserEdit>
      //       </button>
      //   </div>

      // </div>

      //        </div> 
      //       <Sidebar menus={menus} />
      //   </div>

      
      <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
           
            <div className={`${props.class} w-full overflow-y-scroll default-scrollbar`}>
                
                {props.children}
                
            </div>
        </div>

    )
}