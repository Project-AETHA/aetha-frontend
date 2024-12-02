import "@/components/Profile.css";
import Sidebar from "@/pages/Profile/components/Sidebar/Sidebar.jsx";
import BreadCrumbs from "@/components/common/BreadCrumb.jsx";

import { FaRegUserCircle, FaTrophy, FaBook, FaEye, FaStar } from "react-icons/fa";
import useGet from "@/hooks/useGet.jsx";
import ProfileHeader from "@/pages/Profile/components/ProfileHeader";

export default function ProfileLayout2(props) {
  const menus = [
    { name: "Overview", link: "/profile", icon: FaRegUserCircle },
    { name: "Reviews", link: "/profile/reviews", icon: FaEye },
    { name: "Favorites", link: "/profile/favorites", icon: FaStar },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
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
