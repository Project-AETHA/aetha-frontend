import React, { useEffect } from "react";
import Book1 from "/books/book1.jpg";
import Book2 from "/books/book2.jpg";
import Book3 from "/books/book3.jpg";
// import { FaStar } from "react-icons/fa6";


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

const Novels = () => {


  return (
    <>
      <div className="mt-14 mb-20 mx-20 " data-aos="zoom-in">
        <div className="container m-auto">
         

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      {/* <FaStar className="text-yellow-500" /> */}
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Novels;
