import React from "react";
import Book1 from "../../public/images/shortstories/shortstory1.jpg";
import Book2 from "../../public/images/shortstories/shortstory2.jpg";
import Book3 from "../../public/images/shortstories/shortstory3.jpg";
import Book4 from "../../public/images/shortstories/shortstory4.jpg";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import { FaStar } from "react-icons/fa";


const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 2,
    img: Book4,
    title: "His Life",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 6,
    img: Book4,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 7,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 7,
    img: Book4,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the guesthouses. July 3, 2014 Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
  {
    id: 7,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Alps. Way back to the . July 3,  Thursday. Night Mary and Paweł decided to return to the guesthouse. They had to complete a section in the forest. There was another danger waiting for them there. They were both very scared when they heard the…",
  },
];

const ViewBooks = () => {

 


  return (

    <>
    <div className="alt-container">
      <div className="bg-gray-300 transform -translate-y-12">
          {/* Body section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-3 py-5">
              {/* Card */}

              {booksData.map(({ id, img, title, rating, author }) => (

                <div key={id} className="space-y-3 transform hover:scale-105 transition-transform duration-300 ease-in-out mb-4 justify-center">

                  <Link to="/shortstoriesreading" color="foreground">
                    <img
                      src={img}
                      alt=""
                      className="w-10/12 object-cover rounded-sm m-auto"
                    />
                  </Link>
                  <div className="w-10/12 m-auto">
                    <h3 className="font-semibold text-primaryText">{title}</h3>
                    <p className="text-sm text-secondaryText text-justify">{author}</p>
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
