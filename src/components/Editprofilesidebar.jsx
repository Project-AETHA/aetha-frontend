import React from 'react'
import { Link } from 'react-router-dom';
import { FaBook, FaComments, FaDownload, FaEnvelope, FaExternalLinkSquareAlt, FaHistory, FaHome, FaKey, FaListUl, FaLock, FaTrophy, FaUserAltSlash, FaUserLock, FaUsersSlash } from "react-icons/fa";

import { IoBookmark, IoNotifications, IoTrash} from "react-icons/io5";
import { ImProfile } from 'react-icons/im';
import { TbSettingsCog } from 'react-icons/tb';
import { MdDrafts, MdNotificationImportant, MdOutlineFavorite, MdWatchLater } from 'react-icons/md';
import { BsStarHalf } from 'react-icons/bs';
import { LuClipboardSignature } from 'react-icons/lu';
import { RiFolderReceivedFill, RiFolderSharedFill } from 'react-icons/ri';
import { PiUserSquareFill } from 'react-icons/pi';
import { GoStar } from 'react-icons/go';


function Editprofilesidebar() {
  return (
     <div className="content">
        <div className="side-bar-main">
          <div className="mb-4">
        <div className="bg-sky-600 p-2">Messages</div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/compose" className="flex items-start py-2 px-4"><FaEnvelope className="mr-2" /> Compose</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/inbox" className="flex items-start py-2 px-4 "><RiFolderReceivedFill className="mr-2" /> Inbox</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/sentitems" className="flex items-start py-2 px-4 "><RiFolderSharedFill className="mr-2 " /> Sent Items</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/drafts" className="flex items-start py-2 px-4 "><MdDrafts className="mr-2" /> Drafts</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/trashcan" className="flex items-start py-2 px-4 "><IoTrash className="mr-2" /> Trash Can</Link></div>
      </div>
      <div className="mb-4">
        <div className="bg-sky-600 p-2">Settings</div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit" className="flex items-start py-2 px-4 "><ImProfile className="mr-2 " /> Profile Info</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/settings" className="flex items-start py-2 px-4 "><TbSettingsCog className="mr-2" /> Settings</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/premium" className="flex items-start py-2 px-4 "><GoStar className="mr-2" /> Premium</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/achievements" className="flex items-start py-2 px-4 "><FaTrophy className="mr-2" /> Achievements</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/borderwardrobe" className="flex items-start py-2 px-4 "><PiUserSquareFill className="mr-2" /> Border Wardrobe</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/referafriend" className="flex items-start py-2 px-4 "><FaEnvelope className="mr-2" /> Refer A Friend</Link></div>
      </div>
      <div className="mb-4">
        <div className="bg-sky-600 p-2">Security & Privacy</div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/changeemail" className="flex items-start py-2 px-4 "><FaEnvelope className="mr-2" /> Change Email</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/changepwd" className="flex items-start py-2 px-4 "><FaLock className="mr-2" /> Change Password</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/twofactorauth" className="flex items-start py-2 px-4 "><FaKey className="mr-2" /> Two Factor Auth</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/externallogin" className="flex items-start py-2 px-4 "><FaExternalLinkSquareAlt className="mr-2" /> External Logins</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/downloadacc" className="flex items-start py-2 px-4 "><FaDownload className="mr-2" /> Download Account</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-red-600 flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/deleteacc" className="flex items-start py-2 px-4 "><FaUserAltSlash className="mr-2" /> Delete Account</Link></div>
      </div>
      <div className="mb-4">
        <div className="bg-sky-600 p-2">Notifications</div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/notifications" className="flex items-start py-2 px-4 "><MdNotificationImportant className="mr-2" /> General Settings</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/notificationthreads" className="flex items-start py-2 px-4 "><FaListUl className="mr-2" /> Threads</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/notificationhistory" className="flex items-start py-2 px-4 "><IoNotifications className="mr-2" /> Notification History</Link></div>
      </div>
      <div className="mb-4">
        <div className="bg-sky-600 p-2">Forum</div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/usercp" className="flex items-start py-2 px-4 "><FaHome className="mr-2" /> UserCP</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/editsign" className="flex items-start py-2 px-4 "><LuClipboardSignature className="mr-2" /> Edit Signature</Link></div>
      </div>
      <div className="mb-4">
        <div className="bg-sky-600 p-2">My</div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/myfictions" className="flex items-start py-2 px-4 "><FaBook className="mr-2" /> Fictions</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/myfollowlist" className="flex items-start py-2 px-4 "><IoBookmark className="mr-2" /> Follow List</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/myfavorites" className="flex items-start py-2 px-4 "><MdOutlineFavorite className="mr-2" /> Favorites</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/myreadlater" className="flex items-start py-2 px-4 "><MdWatchLater className="mr-2" /> Read Later</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/myreadinghistory" className="flex items-start py-2 px-4 "><FaHistory className="mr-2" /> Reading History</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/myreviews" className="flex items-start py-2 px-4 "><BsStarHalf className="mr-2" /> Reviews</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/mycomments" className="flex items-start py-2 px-4 "><FaComments className="mr-2" /> Comments</Link></div>
        <div className="w-[300px] h-[20px] border-[25px] border-white text-black flex items-center transition-all duration-300 ease-in-out"><Link to="/profile/edit/myblockedusers" className="flex items-start py-2 px-4 "><FaUsersSlash className="mr-2" /> Blocked Users</Link></div>
      </div>
          </div>
          
      </div>
  )
}

export default Editprofilesidebar