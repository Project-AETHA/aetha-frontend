import React, { useEffect } from "react";
import Book1 from "../../public/images/books/book1.jpg";
import Book2 from "../../public/images/books/book2.jpg";
import Book3 from "../../public/images/books/book3.jpg";
import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


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
];

const Books = () => {
  useEffect(() => {
    AOS.init({
      duration: 600
    });
  }, []);

  return (
    <>
      <div className="mt-14 mb-20 " data-aos="zoom-in">
        <div className="container m-auto">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
          
            <h1 className="text-2xl font-bold text-primaryText"> Recomended Books for you </h1>
            <p className="text-xs text-gray-400">
              User wadiyenma kiyawana poth types Recomend wenne menna methenta
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold text-primaryText">{title}</h3>
                    <p className="text-sm text-secondaryText">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span className="text-primaryText">{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a href="/novels">
              <button className="text-center mt-10 cursor-pointer bg-blue-600 text-white py-1 px-5 rounded-md">
                View All Books
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
