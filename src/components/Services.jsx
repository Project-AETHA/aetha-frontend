import React, { useState } from "react";
import Img1 from "../../public/images/books/book2.jpg";
import Img2 from "../../public/images/books/book1.jpg";
import Img3 from "../../public/images/books/book3.jpg";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "The Catcher in the Eye",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "The Great Gatsby",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Img1,
    title: "The Catcher in the Eye",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: Img2,
    title: "The Great Gatsby",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img3,
    title: "Brave New World",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

];

const Services = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  // Get current services
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = ServicesData.slice(indexOfFirstService, indexOfLastService);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 

  const totalPages = Math.ceil(ServicesData.length / servicesPerPage);

  return (
    <>

<div className="alt-container">
      <div>
        <div className="container rounded-md bg-gray-300 p-3 sm:px-5">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 place-items-center pt-20">
            {currentServices.map((service) => (
              <div
                key={service.id}
                
                className="rounded-md border border-primaryText text-primaryText light:bg-gray-800 shadow-xl duration-high group w-[95%] h-[250px] mb-20"
              >
                <div className="h-[100px] relative">
                  <img
                    src={service.img}
                    alt=""
                    className="w-[100px] h-[150px] mx-auto transform -translate-y-14 group-hover:scale-110 duration-300 shadow-md z-10"
                  />
                </div>
                <div className="text-center">
                  <div className="pt-2 w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-md md:text-xl font-semibold h-[60px]">{service.title}</h1>
                 
                  <button
                    className="bg-blue-600 hover:scale-110 hover:font-bold duration-300 text-white py-1 px-7 rounded group-hover:bg-white group-hover:text-blue-600"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
        </div>
      </div>
      </div>
    </>
  );
};

const Pagination = ({ totalPages, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="">
      <ul className="flex justify-center">
        {pageNumbers.map(number => (
          <li key={number} className={`mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
            <button
              onClick={() => paginate(number)}
              className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Services;
