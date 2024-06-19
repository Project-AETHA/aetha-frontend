import React,{useEffect} from "react";
import Img1 from "../../../public/books/book2.jpg";
import Img2 from "../../../public/books/book1.jpg";
import Img3 from "../../../public/books/book3.jpg";
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
];

const Services = ({ handleOrderPopup }) => {

  useEffect(() => {
    AOS.init( {
      duration : 600
    }
    );
  }, [])

  return (
    <>
      <span id="services"></span>
      <div className="py-20 px-20 mt-10"  data-aos="fade-out">
        <div className="container m-auto">
          <div className="text-center mb-20 max-w-[600px] mx-auto">

            <h1 className="text-5xl mb-5 font-bold"> Most Popular Books </h1>
            <p className="text-xs text-gray-400">
              These are the books that was written by the top authors
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white light:bg-gray-800 hover:bg-gradient-to-tl from-cyan-300 to-indigo-600 dark:hover:bg-primary hover:text-white shadow-xl duration-high group max-w-[300px] h-[300px]"
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
                    Read
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
