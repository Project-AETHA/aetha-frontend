import ImageOnline from "@/components/common/ImageOnline.jsx";
import { FaRegComments, FaUserEdit } from "react-icons/fa";
import { TbSettingsCog } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function ProfileHeader({ user, isLoading, isError }) {
  const navigate = useNavigate();

  // const handleSettingsClick = () => {
  //   navigate("/profile/settings");
  // };

  const handleEditClick = () => {
    navigate("/profile/edit");
  };

  return (
    <>
      {!isLoading && !isError && (
        <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-gradient-to-b from-violet-500 to-fuchsia-500">
          <div className="main-detail">
            <div className="profile-info">
              <h1 className="text-lg text-foreground-50">Follows</h1>
              <h3 className="text-lg text-foreground-50">
                {user.follows || 0}
              </h3>
            </div>
            <div className="profile-info">
              <h3 className="text-lg text-foreground-50">Reviews</h3>
              <h3 className="text-lg text-foreground-50">
                {user.reviews || 0}
              </h3>
            </div>
            {user && (
              <ImageOnline
                width={120}
                height={150}
                className="picture"
                path={user.image}
                alt={user.displayName}
                loading="lazy"
              />
            )}
            <div className="profile-info">
              <h3 className="text-lg text-foreground-50">Favorites</h3>
              <h3 className="text-lg text-foreground-50">{user.fav || 0}</h3>
            </div>
            <div className="profile-info">
              <h3 className="text-lg text-foreground-50">Saved</h3>
              <h3 className="text-lg text-foreground-50">{user.fav || 0}</h3>
            </div>
          </div>
          <div className="flex p-1 bg-foreground-50 items-center justify-between">
            <h2 className="font-semibold text-black text-center ml-56 flex-grow">{`${user.firstname} ${user.lastname}`}</h2>
            <div className="flex">
              <button
               // onClick={handleSettingssClick}
                className="ml-2 flex items-center border-2 rounded-xl border-violet-500 bg-violet-500 hover:bg-black px-2 text-foreground-50"
              >
                <TbSettingsCog className="text-foreground-50 m-1" />
                Settings
              </button>
              <button
                onClick={handleEditClick}
                className="ml-2 flex mr-5 items-center border-2 rounded-xl border-violet-500 bg-violet-500 hover:bg-black px-2 text-foreground-50"
              >
                <FaUserEdit className="text-foreground-50 m-1" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
