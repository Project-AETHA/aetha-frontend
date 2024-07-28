import React from "react";
import Book1 from "../../public/images/books/book1.jpg";
import Book2 from "../../public/images/books/book2.jpg";
import Book3 from "../../public/images/books/book3.jpg";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import { FaStar, FaRegClock ,FaRegStar  } from "react-icons/fa";


const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
    chapter: "Chapter 10: The End",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
    chapter: "Chapter 05: Forrest ",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
    chapter: "Chapter 18: Fie Blast ",

  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
    chapter: "Chapter 15: The Main Event ",

  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 02: amzing Forrest ",

  },
  {
    id: 6,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 10: amzing Forrest ",
  },
  {
    id: 7,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 02: amzing Forrest ",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 02: amzing Forrest ",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 02: amzing Forrest ",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 02: amzing Forrest ",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 02: amzing Forrest ",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 02: amzing Forrest ",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 02: amzing Forrest ",
  },
  {
    id: 7,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
    chapter: "Chapter 12: Hugest Home  ",
  },
];

const NovelSelection = () => {




  return (
    <>
      <div className="alt-container ">
        <div className="md:flex bg-gray-300 justify-start items-start -translate-y-10">
          <div className="md:inline-block bg-gray-200 w-full md:w-1/2 justify-start mr-2 ">
            <div className="p-5 text-primaryText">
              <div className="flex items-center text-green-500">
                <FaRegClock />
                <h1 className="font-semibold text-lg ml-2">LATEST UPDATE </h1>
              </div>
              <hr className="border-1 border-gray-400 mt-5" />
            </div>
            <div className="grid grid-cols-1 place-items-center gap-3 py-5">
              {booksData.map(({ id, img, title, rating , chapter}) => (
                <div key={id} className="w-full">
                  <div className="flex w-full">
                    <div className="inline-block mx-5">
                      <div className="div space-y-3 transform hover:scale-105 transition-transform duration-300 ease-in-out mb-4">
                        <Link to="/chapters" color="foreground">
                          <img
                            src={img}
                            alt={title}
                            className="h-[150px] w-[100px] object-cover rounded-sm"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="inline-block">
                      <Link to="/chapterreading">
                      <h3 className="font-semibold text-primaryText text-xl hover:scale-105 hover:text-accentText">{title}</h3>
                      <p className="text-sm text-secondaryText my-5 hover:underline hover:text-accentText">{chapter}</p>
                      </Link>
                     
                  
                    </div>
                  </div>
                  <hr className="border-1 border-gray-400 mx-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="md:inline-block bg-gray-200 w-full md:w-1/2 justify-start md:mt-0 mt-4 md:ml-2 ">
          <div className="p-5 text-primaryText">
              <div className="flex items-center text-red-600">
              <FaRegStar />
              <h1 className="font-semibold text-lg ml-2"> RISING STARS</h1>
              </div>
              <hr className="border-1 border-gray-400 mt-5" />
            </div>
            <div className="grid grid-cols-1 place-items-center gap-3 py-5">
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="w-full">
                  <div className="flex w-full">
                    <div className="inline-block mx-5">
                      <div className="div space-y-3 transform hover:scale-105 transition-transform duration-300 ease-in-out mb-4">
                        <Link to="/chapters" color="foreground">
                          <img
                            src={img}
                            alt={title}
                            className="h-[150px] w-[100px] object-cover rounded-sm"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h3 className="font-semibold text-primaryText text-xl">{title}</h3>
                      <p className="text-sm text-secondaryText">{author}</p>
                      <div className="flex items-center gap-1">
                        <span className="text-tertiaryText text-xs">
                          <FaStar className="text-yellow-500 mr-1 inline-block" />
                          {rating}
                        </span>
                      </div>
                      <div className="mt-2 grid">
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-gray-300 rounded-md px-2 py-1 text-sm text-primaryText">Horror</span>
                          <span className="bg-gray-300 rounded-md px-2 py-1 text-sm text-primaryText">Mystery</span>
                          <span className="bg-gray-300 rounded-md px-2 py-1 text-sm text-primaryText">Thriller</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="border-1 border-gray-400 mx-5" />
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default NovelSelection;