import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegComments,
  FaUserEdit,
  FaRegUserCircle,
  FaTrophy,
  FaBook,
  FaEye,
  FaStar,
  FaFileAlt,
  FaThList,
} from "react-icons/fa";
import profilepic from "../../public/images/profilepic.jpg";
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { BiSolidCertification } from "react-icons/bi";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Rating from "../components/common/Rating.jsx";
import novelpic from "../../public/images/novel.jpg";

function Pro_reviews() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/profile/edit");
  };

  const handleCommentsClick = () => {
    navigate("/profile/edit/inbox");
  };

  const menus = [
    { name: "Overview", link: "/profile", icon: FaRegUserCircle },
    { name: "Fictions", link: "/author", icon: FaBook },
    { name: "Reviews", link: "/profile/reviews", icon: FaEye },
    { name: "Favorites", link: "/profile/favorites", icon: FaStar },
    //  { name: "Threads", link: "/profile/threads", icon: FaFileAlt },
    { name: "Posts", link: "/profile/posts", icon: FaThList },
    { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
    //  { name: "Reputation", link: "/profile/reputation", icon: BiSolidCertification },
  ];

  const reviews = [
    {
      key: "1",
      picture: novelpic,
      title: "The Enchanted Forest",
      content: "Chapter 3: The Hidden Village",
      rating: 4.5,
      date: "18 February 2023, 17:30",
    },
    {
      key: "2",
      picture: novelpic,
      title: "Galactic Adventures",
      content: "Chapter 2: The Alien Encounter",
      rating: 4.1,
      date: "08 April 2023, 19:30",
    },
    {
      key: "3",
      picture: novelpic,
      title: "Secrets of the Ancient Temple",
      content: "Chapter 152: The Forbidden Scrolls",
      rating: 3.5,
      date: "24 January 2024, 20:53",
    },
    {
      key: "4",
      picture: novelpic,
      title: "Chronicles of the Lost Kingdom",
      content: "Chapter 54: The Battle for the Throne",
      rating: 3.8,
      date: "14 February 2023, 07:10",
    },
  ];

  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-blue-400">
        <div className="main-detail">
          <div className="profile-info">
            <h3>Follows</h3>
            <h3>12</h3>
          </div>
          <div className="profile-info">
            <h3>Reviews</h3>
            <h3>10</h3>
          </div>
          <img className="picture" src={profilepic} alt="profile-pic" />
          <div className="profile-info">
            <h3>Favorites</h3>
            <h3>10</h3>
          </div>
          <div className="profile-info">
            <h3>Saved</h3>
            <h3>10</h3>
          </div>
        </div>
        <div className="flex p-1 bg-white">
          <h2 className="font-semibold flex-grow text-black text-center">
            HANSI
          </h2>
          <button onClick={handleCommentsClick}>
            <FaRegComments className="ml-auto mr-2 text-black" />
          </button>
          <button onClick={handleEditClick}>
            <FaUserEdit className="ml-auto text-black mr-5" />
          </button>
        </div>
      </div>
      <div className="flex">
        <Sidebar menus={menus} />
        <div className="mx-16 mt-6 w-full">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Picture</TableColumn>
              <TableColumn>Title</TableColumn>
              <TableColumn>Content</TableColumn>
              <TableColumn>Rating</TableColumn>
              <TableColumn>Date</TableColumn>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.key}>
                  <TableCell>
                    <img
                      src={review.picture}
                      alt={review.title}
                      className="w-20 h-28 object-cover"
                    />
                  </TableCell>
                  <TableCell>{review.content}</TableCell>
                  <TableCell className="text-foreground">
                    <div className="font-semibold">{review.title}</div>
                  </TableCell>
                  <TableCell>
                    <Rating rating={review.rating} size={15} />
                  </TableCell>
                  <TableCell>{review.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Pro_reviews;
