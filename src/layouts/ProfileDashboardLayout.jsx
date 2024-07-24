import Sidebar from "../components/Sidebar/Sidebar.jsx"
import BreadCrumbs from "../components/common/BreadCrumb.jsx";

// Importing icons
import { FaBook, FaComments, FaDownload, FaEnvelope, FaExternalLinkSquareAlt, FaHistory, FaHome, FaKey, FaListUl, FaLock, FaTrophy, FaUserAltSlash, FaUserLock, FaUsersSlash } from "react-icons/fa";
import { IoBookmark, IoNotifications, IoTrash } from "react-icons/io5";
import { ImProfile } from 'react-icons/im';
import { TbSettingsCog } from 'react-icons/tb';
import { MdDrafts, MdNotificationImportant, MdOutlineFavorite, MdWatchLater } from 'react-icons/md';
import { BsStarHalf } from 'react-icons/bs';
import { LuClipboardSignature } from 'react-icons/lu';
import { RiFolderReceivedFill, RiFolderSharedFill } from 'react-icons/ri';
import { PiUserSquareFill } from 'react-icons/pi';
import { GoStar } from 'react-icons/go';

export default function ProfileDashboardLayout (props) {

    const menus = [
  { name: "Messages", icon: FaEnvelope,
    subMenus: [
      { name: "Compose", link: "/profile/edit/compose", icon: FaEnvelope },
      { name: "Inbox", link: "/profile/edit/inbox", icon: RiFolderReceivedFill },
      { name: "Sent Items", link: "/profile/edit/sentitems", icon: RiFolderSharedFill },
      { name: "Drafts", link: "/profile/edit/drafts", icon: MdDrafts },
      { name: "Trash Can", link: "/profile/edit/trashcan", icon: IoTrash },
    ]
  },
  { name: "Settings", icon: TbSettingsCog,
    subMenus: [
      { name: "Profile Info", link: "/profile/edit", icon: ImProfile },
      { name: "Settings", link: "/profile/edit/settings", icon: TbSettingsCog },
      { name: "Premium", link: "/profile/edit/premium", icon: GoStar },
      { name: "Achievements", link: "/profile/edit/achievements", icon: FaTrophy },
      { name: "Border Wardrobe", link: "/profile/edit/borderwardrobe", icon: PiUserSquareFill },
      { name: "Refer A Friend", link: "/profile/edit/referafriend", icon: FaEnvelope },
    ]
  },
  { name: "Security & Privacy", icon: FaLock,
    subMenus: [
      { name: "Change Email", link: "/profile/edit/changeemail", icon: FaEnvelope },
      { name: "Change Password", link: "/profile/edit/changepwd", icon: FaLock },
      { name: "Two Factor Auth", link: "/profile/edit/twofactorauth", icon: FaKey },
      { name: "External Logins", link: "/profile/edit/externallogin", icon: FaExternalLinkSquareAlt },
      { name: "Download Account", link: "/profile/edit/downloadacc", icon: FaDownload },
      { name: "Delete Account", link: "/profile/edit/deleteacc", icon: FaUserAltSlash },
    ]
  },
  { name: "Notifications", icon: IoNotifications,
    subMenus: [
      { name: "General Settings", link: "/profile/edit/notifications", icon: MdNotificationImportant },
      { name: "Threads", link: "/profile/edit/notificationthreads", icon: FaListUl },
      { name: "Notification History", link: "/profile/edit/notificationhistory", icon: IoNotifications },
    ]
  },
  { name: "Forum", icon: FaHome,
    subMenus: [
      { name: "UserCP", link: "/profile/edit/usercp", icon: FaHome },
      { name: "Edit Signature", link: "/profile/edit/editsign", icon: LuClipboardSignature },
    ]
  },
  { name: "My", icon: FaBook,
    subMenus: [
      { name: "Fictions", link: "/profile/edit/myfictions", icon: FaBook },
      { name: "Follow List", link: "/profile/edit/myfollowlist", icon: IoBookmark },
      { name: "Favorites", link: "/profile/edit/myfavorites", icon: MdOutlineFavorite },
      { name: "Read Later", link: "/profile/edit/myreadlater", icon: MdWatchLater },
      { name: "Reading History", link: "/profile/edit/myreadinghistory", icon: FaHistory },
      { name: "Reviews", link: "/profile/edit/myreviews", icon: BsStarHalf },
      { name: "Comments", link: "/profile/edit/mycomments", icon: FaComments },
      { name: "Blocked Users", link: "/profile/edit/myblockedusers", icon: FaUsersSlash },
    ]
  },
];


    return (
        <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
            <Sidebar menus={menus} />
            <div className={`${props.class} w-full overflow-y-scroll default-scrollbar`}>
                <BreadCrumbs />
                {props.children}
            </div>
        </div>
    )
}