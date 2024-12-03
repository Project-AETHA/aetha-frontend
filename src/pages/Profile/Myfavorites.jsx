import React, { useState } from 'react';
import "../../components/Profile.css";
import Editprofilesidebar from '../../components/Editprofilesidebar';
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import novelpic from '../../../public/images/novel.jpg';
import book1 from '../../../public/images/books/book1.jpg';
import book2 from '../../../public/images/books/book2.jpg';
import book3 from '../../../public/images/books/book3.jpg';
import book4 from '../../../public/images/books/book4.jpg';
import { Button } from "@nextui-org/react";

function Myfavorites() {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
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

  return (
    <div>
      <div className="">
       <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
              <MdOutlineFavorite size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Favorites
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>

        <div className="bg-white border-2 border-black m-4 h-20 p-4 text-black">
          Advertisement
        </div>
        <div className='m-4'>
          {favorites.map((favorite, index) => (
            <div key={favorite.key} className='h-auto border-1 border-x-white flex p-3 items-start mb-4'>
              <div className="space-y-3">
                <img
                  src={favorite.picture}
                  alt="novel"
                  className="h-[180px] w-[120px] object-cover rounded-md"
                />
              </div>
              <div className='p-6 w-3/4 font-semibold text-primary text-xl'>
                {favorite.title}
                <div className='mt-3 font-semibold pb-3 text-foreground text-small'>{favorite.pages}</div>
                <div className='text-foreground text-small font-normal'>
                  {showMore[index] ? favorite.description : `${favorite.description.substring(0, 100)}...`}
                </div>
                <button 
                  onClick={() => toggleShowMore(index)} 
                  className='text-semibold text-small pl-28 text-foreground'
                >
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </button>
              </div>
              <div className='flex flex-col justify-between items-start p-3'>
                <div className='text-primary-400 text-small'>{favorite.author}</div>
                <Button className="bg-danger-500 m-1 text-white">
                  Unfavorite
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Myfavorites;
