import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaRegComments, FaUserEdit, FaRegUserCircle, FaPen, FaTrophy, FaBook, FaEye, FaStar, FaFileAlt, FaThList } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import profilepic from '../../public/images/profilepic.jpg'; 
import "../components/Profile.css";
import Sidebar from "../components/Sidebar/Sidebar.jsx"; 
import novelpic from '../../public/images/novel.jpg';
import book1 from '../../public/images/books/book1.jpg';
import book2 from '../../public/images/books/book2.jpg';
import book3 from '../../public/images/books/book3.jpg';
import book4 from '../../public/images/books/book4.jpg';


function Pro_favorites() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  const handleCommentsClick = () => {
    navigate('/profile/edit/inbox');
  };

  const favorites = [
    {
      key: "1",
      picture: book4,
      title: "Scientific Sorcery : Beware of Kittens!",
      pages: "248 Pages",
      description: "Ioan Starfall, a Nordstaii teen on the cusp of adulthood, drowned as his village was set ablaze by a dragon.I woke up in his body and refused to become a cultivator hero to seek revenge when offered incredible power by a witch. You, see I've got far more important things on my to-do list. For a biochemist like myself reborn in the land of Nordic cultivators and giant monsters there's a whole new world of science to explore, witchy powers to experiment with, and magical creatures just waiting to be dissected. Mwa ha ha ha.",
      author: "by Vitaly S Alexius"
    },
    {
      key: "2",
      picture: novelpic,
      title: "Soul",
      pages: "124 Pages",
      description: "“Soul” by Olivia Wilson delves into the essence of human existence. This novel invites readers to explore the depths of the soul, where emotions, experiences, and aspirations converge. Follow the characters on a transformative journey, where the true essence of humanity is laid bare, creating a narrative that resonates with the universal threads that bind us all.",
      author: "by Olivia Wilson"
    },
    {
      key: "3",
      picture: book1,
      title: "The Great Gatsby",
      pages: "124 Pages",
      description: "The Great Gatsby, published in 1925, is F. Scott Fitzgerald's most famous novel. Set during the Roaring 20s, the book tells the story of a group of wealthy, often hedonistic residents of the fictional New York towns of West Egg and East Egg. The novel critiques the idea of the American Dream, suggesting that the concept has been corrupted by the careless pursuit of decadence. Though it was poorly received in Fitzgerald’s lifetime, The Great Gatsby is now considered a cornerstone of American literature.",
      author: "by F.Scott Fitzgerald"
    },
    {
      key: "4",
      picture: book2,
      title: "The Catcher In The Rye",
      pages: "58 Pages",
      description: "Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable.",
      author: "by J.D.Salinger"
    },
    {
      key: "5",
      picture: book3,
      title: "Brave New world",
      pages: "58 Pages",
      description: "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites.",
      author: "by Aldous Huxley"
    }
  ];

  const menus = [
        { name: "Overview", link: "/profile", icon: FaRegUserCircle },
        { name: "Fictions", link: "/author", icon: FaBook },
        { name: "Reviews", link: "/profile/reviews", icon: FaEye },
        { name: "Favorites", link: "/profile/favorites", icon: FaStar },
        { name: "Posts", link: "/profile/posts", icon: FaThList },
        { name: "Achievements", link: "/profile/achievements", icon: FaTrophy },
    ];
    const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", picture: book1 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", picture: book2 },
  { title: "1984", author: "George Orwell", picture: book3 },
  { title: "Pride and Prejudice", author: "Jane Austen", picture: novelpic },
  // Add more book objects here
];

  return (
    <>
      <div className="justify-evenly h-auto w-screen py-2 border-r-5 bg-gradient-to-r from-purple-400 to-blue-500">
        <div className="main-detail">      
          <div className="profile-info">
            <h1 className="text-lg text-foreground-50">Follows</h1>
            <h3 className="text-lg text-foreground-50">12</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Reviews</h3>
            <h3 className="text-lg text-foreground-50">10</h3>
          </div>
          <img className="picture" src={profilepic} alt="profile-pic" />
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Favorites</h3>
            <h3 className="text-lg text-foreground-50">10</h3>
          </div>
          <div className="profile-info">
            <h3 className="text-lg text-foreground-50">Saved</h3>
            <h3 className="text-lg text-foreground-50">10</h3>
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
        <div className="mx-16 mt-6 w-full bg-foreground-50 rounded-2xl">
          <div className="flex flex-wrap justify-center">
                     {favorites.map((favorite, index) => (
              <img
                key={index}
                src={favorite.picture}
                alt="novel"
                className="h-auto w-[180px] object-cover rounded-md m-4 flex-1"
                style={{ maxWidth: '180px' }}
              ></img>
              
           ))}
            </div> 
        </div>
      </div>
    </>
  );
}

export default Pro_favorites;
