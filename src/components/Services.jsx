import React, { useState, useEffect } from "react";
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
];

const Services = ({ handleOrderPopup }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4;

  // Get current services
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = ServicesData.slice(indexOfFirstService, indexOfLastService);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    AOS.init({
      duration: 600
    });
  }, []);

  const totalPages = Math.ceil(ServicesData.length / servicesPerPage);

  return (
    <>
      <span id="services"></span>
      <div className=" mt-10 px-4 sm:px-10 md:px-20" data-aos="fade-out">
        <div className="container mx-auto border-2 shadow-md p-4 sm:p-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 place-items-center pt-20">
            {currentServices.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white light:bg-gray-800 hover:bg-gradient-to-tl from-cyan-300 to-indigo-600 dark:hover:bg-primary hover:text-white shadow-xl duration-high group max-w-[300px] h-[300px] mb-20"
              >
                <div className="h-[100px] relative">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] h-[150px] mx-auto transform -translate-y-14 group-hover:scale-110 duration-300 shadow-md z-10"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold h-[60px]">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-slate-200 duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    className="bg-blue-600 hover:scale-110 hover:font-bold duration-300 text-white py-1 px-7 rounded mt-4 group-hover:bg-white group-hover:text-blue-600"
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
