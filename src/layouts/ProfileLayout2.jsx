import "@/components/Profile.css";
import Sidebar from "@/pages/Profile/components/Sidebar/Sidebar.jsx";
import BreadCrumbs from "@/components/common/BreadCrumb.jsx";

import { FaRegUserCircle, FaTrophy, FaBook, FaEye, FaStar, FaComments, FaHistory } from "react-icons/fa";
import useGet from "@/hooks/useGet.jsx";
import ProfileHeader from "@/pages/Profile/components/ProfileHeader";
import { MdOutlineFavorite, MdWatchLater } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";

export default function ProfileLayout2(props) {
  const menus = [
    { name: "Overview", link: "/profile", icon: FaRegUserCircle },
    // { name: "Reviews", link: "/profile/reviews", icon: FaEye },
    // { name: "Follows", link: "/profile/follows", icon: IoBookmark },
    { name: "Favorites", link: "/profile/favorites", icon: MdOutlineFavorite },
    { name: "Comments", link: "/profile/comments", icon: FaComments },
    // { name: "Read Later", link: "/profile/readlater", icon: MdWatchLater },
    { name: "Reading History", link: "/profile/readinghistory", icon: FaHistory },
    { name: "Publishes", link: "/author", icon: FaBook },
  ];

  const { data: user, isLoading, isError, error } = useGet({
    queryKey: "user-details",
    url: "/api/user",
  });

  return (
    <div className="flex flex-col overflow-hidden max-h-[calc(100vh-65px)]">
      <ProfileHeader user={user} isLoading={isLoading} isError={isError} />
      <div className="flex overflow-hidden">
        <Sidebar menus={menus} />
        <div className={`${props.class} w-full overflow-y-scroll default-scrollbar`}>
          <BreadCrumbs />
          {props.children}
        </div>
      </div>
    </div>
  );
}
