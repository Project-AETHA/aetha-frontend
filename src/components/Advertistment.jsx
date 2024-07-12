import React, { useEffect } from "react";
import Slider from "react-slick";
import click from "../../../public/images/click.gif";
import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Catch The Eye",
    author: "Nelson mandela",
    rating: 4.0,
    img: "../../../public/books/book1.jpg",
  },
  {
    id: 1,
    name: "Satya Narayan",
    text: "Lorem Ipsum",
    author: "The nisal",
    rating: 4.7,
    img: "../../../public/books/book2.jpg",
  },
  {
    id: 1,
    name: "Sachin Tendulkar",
    text: "Adipisicing Elit. ",
    author: "Ravishan jayee",
    rating: 4.1,
    img: "../../../public/books/book3.jpg",
  },
];

const Advertistment = () => {




  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 600
    }
    );
  }, [])



  return (
    <>
      <div data-aos="fade-up" data-aos-duration="900" className="py-10 bg-slate-50  shadow-lg mb-10">
        <div className="container m-auto">
          <div className="text-center m-auto">
            <h1 className="text-3xl font-bold"> Advertistment </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6 shadow-sm"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (

                  <div className="my-6">

                    <div
                      key={data.id}
                      className="flex flex-col gap-4 py-8 w-[260px] mx-auto h-[350px] rounded-xl dark:bg-white bg-primary/10 relative shadow-xl"
                    >
                      <div>
                        <img
                          className="m-auto w-[100px] h-[150px]"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-black font-bold text-xl text-center m-auto w-full">{data.text}</p>
                          <p className="text-black  text-sm text-center"> - {data.author} - </p>

                          <div className="w-9 flex items-center gap-1 m-auto content-center">
                            <FaStar className="text-yellow-500" />
                            <span>{data.rating}</span>
                          </div>

                          <a href="#">
                            <img
                              className="rounded-full h-35 m-auto w-[260px]"
                              src={click}
                              alt=""
                            />
                          </a>

                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>

                  </div>

                );
              })}

            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertistment;
