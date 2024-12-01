import { useNavigate } from "react-router-dom";
import {
  FaRegComments,
  FaUserEdit,
  FaRegUserCircle,
  FaPen,
  FaTrophy,
  FaBook,
  FaEye,
  FaStar,
  FaThList,
} from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import "../../components/Profile.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import useGet from "@/hooks/useGet.jsx";

function Profile() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/profile/edit");
  };

  const handleCommentsClick = () => {
    navigate("/profile/edit/inbox");
  };

  const menus = [
    { name: "Overview", link: "/profile", icon: FaRegUserCircle },
    { name: "Publishes", link: "/author", icon: FaBook },
    { name: "Reviews", link: "/profile/reviews", icon: FaEye },
    { name: "Favorites", link: "/profile/favorites", icon: FaStar },
    { name: "Posts", link: "/profile/posts", icon: FaThList },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
  ];


  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useGet({
    queryKey: "user-details",
    url: "/api/user",
  });

  return (
    <>
      {!isLoading && !isError && (
        <>
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
                <h3 className="text-lg text-foreground-50">
                  {user.fav || 0}
                </h3>
              </div>
              <div className="profile-info">
                <h3 className="text-lg text-foreground-50">Saved</h3>
                <h3 className="text-lg text-foreground-50">
                  {user.fav || 0}
                </h3>
              </div>
            </div>
            <div className="flex p-1 bg-foreground-50 items-center justify-between">
              <h2 className="font-semibold text-black text-center ml-56 flex-grow">{`${user.firstname} ${user.lastname}`}</h2>
              <div className="flex">
                <button
                  onClick={handleCommentsClick}
                  className="ml-2 flex items-center border-2 rounded-xl border-violet-500 bg-violet-500 hover:bg-black px-2 text-foreground-50"
                >
                  <FaRegComments className="text-foreground-50 m-1" />
                  Messages
                </button>
                <button
                  onClick={handleEditClick}
                  className="ml-2 flex mr-5 items-center border-2 rounded-xl border-violet-500 bg-violet-500 hover:bg-black px-2 text-foreground-50"
                >
                  <FaUserEdit className="text-foreground-50 m-1" />
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <Sidebar menus={menus} />
            <div className="mx-16 mt-6 w-full bg-foreground-50 rounded-2xl pt-6">
              <div className="text-xl mx-16 font-bold pb-2">
                Your Profile Details
              </div>
              <div className="details border-2 border-gray-300 px-8 dark:bg-background text-foreground">
                <div className="topics rounded-lg text-foreground-50 ml-6 mr-6 mb-2 bg-gradient-to-r from-violet-500 to-white">
                  <FaRegUserCircle className="inline m-3" />
                  Personal Information
                </div>
                <div className="flex-col ml-10">
                  <div className="flex">
                    <p className="leading-loose w-1/3">Username:</p>
                    <p className="leading-loose">{user.username}</p>
                  </div>
                  <div className="flex">
                    <p className="leading-loose w-1/3">Birthday:</p>
                    <p className="leading-loose">{user.birthdate}</p>
                  </div>
                  <div className="flex">
                    <p className="leading-loose w-1/3">Gender:</p>
                    <p className="leading-loose">{user.gender}</p>
                  </div>
                  <div className="flex">
                    <p className="leading-loose w-1/3">Joined:</p>
                    <p className="leading-loose">{user.createdAt || " -- Not Set -- "}</p>
                  </div>
                  <div className="flex">
                    <p className="leading-loose w-1/3">Website:</p>
                    <p className="leading-loose">{user.web || " -- Not set -- "}</p>
                  </div>
                  <div className="flex">
                    <p className="leading-loose w-1/3">Twitter:</p>
                    <p className="leading-loose">{user.twitter || " -- Not set -- "}</p>
                  </div>
                  <div className="flex">
                    <p className="leading-loose w-1/3">Facebook:</p>
                    <p className="leading-loose">{user.facebook || " -- Not set -- "}</p>
                  </div>
                  <div className="flex">
                    <p className="leading-loose w-1/3">Bio:</p>
                    <p className="leading-loose">{user.bio || " -- Not set -- "}</p>
                  </div>
                </div>
              </div>

              <div
                className="details border-2 border-gray-300 px-8 dark:bg-background text-foreground"
                style={{ padding: "20px" }}
              >
                <div
                  className="topics rounded-lg text-foreground-50 ml-6 mr-6 mb-2 bg-gradient-to-r from-violet-500 to-white"
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  <MdOutlineHistory className="inline m-3" />
                  Activity
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "20px",
                    marginLeft: "24px",
                    marginRight: "24px",
                    marginTop: "16px",
                  }}
                >
                  {[
                    { label: "Follows", value: user.followers || 0 },
                    { label: "Favorites", value: user.fav || 0 },
                    { label: "Ratings", value: user.rated || 0 },
                    { label: "Reviews", value: user.reviewd || 0 },
                    { label: "Comments", value: user.commented || 0 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#f5f5fa",
                        border: "2px solid #d1d1e0",
                        borderRadius: "8px",
                        padding: "15px",
                        textAlign: "center",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-5px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                      }
                    >
                      <p
                        style={{
                          fontSize: "1.1rem",
                          color: "#333333",
                          fontWeight: "500",
                          marginBottom: "8px",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: "1.5rem",
                          color: "#4b59f7",
                          fontWeight: "700",
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="details border-2 border-gray-300 px-8 dark:bg-background text-foreground"
                style={{ padding: "20px" }}
              >
                <div
                  className="topics rounded-lg text-foreground-50 ml-6 mr-6 mb-2 bg-gradient-to-r from-violet-500 to-white"
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  <FaPen className="inline m-3" />
                  Author Information
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "20px",
                    marginLeft: "24px",
                    marginRight: "24px",
                    marginTop: "16px",
                  }}
                >
                  {[
                    { label: "Fictions", value: user.fictions || 0 },
                    { label: "Total Words", value: user.totalWords || 0 },
                    {
                      label: "Total Reviews Received",
                      value: user.totalReviewsReceived || 0,
                    },
                    {
                      label: "Total Ratings Received",
                      value: user.totalRatingsReceived || 0,
                    },
                    { label: "Followers", value: user.followers || 0 },
                    { label: "Favorites", value: user.authorFavorites || 0 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#f5f5fa",
                        border: "2px solid #d1d1e0",
                        borderRadius: "8px",
                        padding: "15px",
                        textAlign: "center",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-5px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                      }
                    >
                      <p
                        style={{
                          fontSize: "1.1rem",
                          color: "#333333",
                          fontWeight: "500",
                          marginBottom: "8px",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: "1.5rem",
                          color: "#4b59f7",
                          fontWeight: "700",
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
