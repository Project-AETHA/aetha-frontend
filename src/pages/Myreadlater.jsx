import React, { useState } from 'react';
import "../components/Profile.css";
import { MdWatchLater } from 'react-icons/md';
import book1 from '../../public/images/books/book1.jpg';
import book2 from '../../public/images/books/book2.jpg';
import book3 from '../../public/images/books/book3.jpg';
import { Button } from "@nextui-org/react";

function Myreadlater() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const items = [
    {
      title: 'The Great Gatsby',
      picture: book1,
      pages: '124 Pages',
      description: "The Great Gatsby, published in 1925, is F. Scott Fitzgerald's most famous novel. Set during the Roaring 20s, the book tells the story of a group of wealthy, often hedonistic residents of the fictional New York towns of West Egg and East Egg. The novel critiques the idea of the American Dream, suggesting that the concept has been corrupted by the careless pursuit of decadence. Though it was poorly received in Fitzgerald’s lifetime, The Great Gatsby is now considered a cornerstone of American literature.",
      author: "F. Scott Fitzgerald"
    },
    {
      picture: book2,
      title: "The Catcher In The Rye",
      pages: "58 Pages",
      description: "Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable.",
      author: "J.D. Salinger"
    },
    {
      title: 'Brave New World',
      picture: book3,
      pages: '58 Pages',
      description: "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites.",
      author: 'Aldous Huxley'
    }
  ];

  return (
    <div>
      <div className='details bg-background text-foreground'>
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex items-center">
            <div className="h-16 w-16">
              <MdWatchLater size={50} className="text-white" />
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Read Later
              </h1>
              <h1 className="text-base text-left">Manage your account</h1>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-black m-4 h-20 p-4 text-black">
          Advertisement
        </div>

        <div className="m-4 space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex p-4 border border-gray-300 rounded-lg bg-foreground-50 shadow-sm">
              <div className="flex-shrink-0">
                <img
                  src={item.picture}
                  alt={item.title}
                  className="h-[180px] w-[120px] object-cover rounded-md"
                />
              </div>
              <div className="ml-6 flex-1">
                <h2 className="font-semibold text-xl text-primary">{item.title}</h2>
                <div className="mt-1 text-small font-semibold text-foreground">{item.pages}</div>
                <div className="mt-2 text-foreground text-small font-normal">
                  {expandedIndexes.includes(index) ? item.description : `${item.description.substring(0, 150)}...`}
                </div>
                <span
                  className="text-small text-blue-600 cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedIndexes.includes(index) ? 'Show Less' : 'Show More'}
                </span>
                <div className="mt-4 flex space-x-4">
                  <Button className="bg-danger-400 text-white">
                    Remove
                  </Button>
                  <Button className="bg-blue-500 text-white">
                    Follow
                  </Button>
                </div>
              </div>
              <div className="ml-auto text-primary-400 text-small flex items-center">
                by {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myreadlater;
