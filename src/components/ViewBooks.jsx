import React from "react";
import Book1 from "../../public/images/books/book1.jpg";
import Book2 from "../../public/images/books/book2.jpg";
import Book3 from "../../public/images/books/book3.jpg";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import { FaStar } from "react-icons/fa";


const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 6,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];

const ViewBooks = () => {

 


  return (

    <>
    <div className="alt-container">
      <div className="bg-gray-300 transform -translate-y-12">
          {/* Body section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3 py-5">
              {/* Card */}

              {booksData.map(({ id, img, title, rating, author }) => (

                <div key={id} className="div space-y-3 transform hover:scale-105 transition-transform duration-300 ease-in-out mb-4">

                  <Link to="/chapters" color="foreground">
                    <img
                      src={img}
                      alt=""
                      className="h-[220px] w-[150px] object-cover rounded-sm"
                    />
                  </Link>
                  <div>
                    <h3 className="font-semibold text-primaryText">{title}</h3>
                    <p className="text-sm text-secondaryText">{author}</p>
                    <div className="flex items-center gap-1">
                      {/* <FaStar className="text-yellow-500" /> */}
                      <span className="text-tertiaryText text-xs">
                      <FaStar className="text-yellow-500 mr-1 inline-block" />
                      {rating}</span>
                    </div>
                  </div>
                </div>

              ))}

            </div>

          </div>
        </div>
        
      
    </>
  );
};

export default ViewBooks;
