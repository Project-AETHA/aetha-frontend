import SearchBar from "../components/SearchBar";
import coverImg from "/images/landing_cover.jpg";
import Item from "../components/common/Item";
import { Link } from 'react-router-dom'
import ViewBooks from "../components/ViewBooks";

import { Image, Input } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

export default function ShopPage() {
  let recommendations = [
    {
      id: 1,
      title: "Walk in Shadow",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/books/2.png",
    },
    {
      id: 1,
      title: "The catcher in RYE",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/books/3.png",
    },
    {
      id: 1,
      title: "Alone",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/books/1.png",
    },

    {
      id: 1,
      title: "Brave New World",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/books/5.png",

    },
    {
      id: 1,
      title: "Soul",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/books/6.png",
    },
    {
      id: 1,
      title: "New World",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/books/7.png",
    },
    {
      id: 1,
      title: "Magic Hour",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/books/8.png",
    },
    {
      id: 1,
      title: "Norse Mythology",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/books/9.png",
    },

  ];



  let shortstories = [
    {
      id: 1,
      title: "Who's There",
      type: "novel",
      rating: 4.6,
      description: "lorem ipsum dolor sit amet",
      price: "LKR 2000",
      image: "../../../public/images/shortstories/11.png",
    },
    {
      id: 1,
      title: "The Last Boys",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/shortstories/12.png",
    },
    {
      id: 1,
      title: "Her Life",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/shortstories/13.png",
    },
    {
      id: 1,
      title: "Alone",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/shortstories/14.png",
    },
    {
      id: 1,
      title: "Who's There",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/shortstories/11.png",
    },
    {
      id: 1,
      title: "The Last Boys",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/shortstories/12.png",
    },
    {
      id: 1,
      title: "Alone",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/shortstories/14.png",
    },
    {
      id: 1,
      title: "The catcher in RYE",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      price: "LKR 2000",
      image: "../../../public/images/shortstories/13.png",
    }

  ];


  let ads = [
    {
      id: 1,
      title: "Advertisement 1",
      content: "Advertise your product here!",
      price: "LKR 2000",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: 2,
      title: "Advertisement 2",
      content: "Advertise your product here!",
      price: "LKR 2000",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: 3,
      title: "Advertisement 3",
      content: "Advertise your product here!",
      price: "LKR 2000",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
  ];

  return (
    <div className="rounded-lg mb-10 w-full h-full flex flex-col gap-10 shadow-xl bg-foreground-50 px-10">


      {/* mention cover image in css */}
      <div
        className="
            m-0
            lg:px-60
            px-5
            py-20
            bg-[url('/public/images/landing_cover.jpg')]
            bg-cover
            w-full 
            rounded-lg
        "
      >
        <SearchBar />
      </div>


      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold tracking-wide text-foreground-900"> Best Sellers </p>
          <button className="text-foreground-900 hover:text-foreground-800">
            <Link to="">View All</Link>
          </button>
        </div>
        <hr className="w-full border-primaryText" />
        <div className="flex gap-1 flex-nowrap overflow-x-auto">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="flex flex-col items-start rounded-md">
              <Link to="/buybook"> 
              <img src={recommendation.image} alt={recommendation.title} width="150px" height="250px" className="hover:scale-105" />
              <p className="font-semibold text-sm text-primaryText">{recommendation.title}</p>
              <p className="text-xs text-secondaryText">{recommendation.description}</p>
              <p className="flex text-sm text-secondaryText">{recommendation.rating} <FaStar className="text-yellow-500" /></p>
              <p className="text-sm text-primaryText">{recommendation.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold tracking-wide text-foreground-900"> New Release </p>
          <button className="text-foreground-900 hover:text-foreground-800">
            <Link to="">View All</Link>
          </button>
        </div>
        <hr className="w-full border-primaryText" />
        <div className="flex gap-1 flex-nowrap overflow-x-auto">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="flex flex-col items-start rounded-md">
              <Link to="/buybook"> 
              <img src={recommendation.image} alt={recommendation.title} width="150px" height="250px" className="hover:scale-105" />
              <p className="font-semibold text-sm text-primaryText">{recommendation.title}</p>
              <p className="text-xs text-secondaryText">{recommendation.description}</p>
              <p className="flex text-sm text-secondaryText">{recommendation.rating} <FaStar className="text-yellow-500" /></p>
              <p className="text-sm text-primaryText">{recommendation.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold tracking-wide text-foreground-900">Recently Read </p>
          <button className="text-foreground-900 hover:text-foreground-800">
            <Link to="">View All</Link>
          </button>
        </div>
        <hr className="w-full border-primaryText" />
        <div className="flex gap-2 overflow-hidden flex-nowrap">
          {shortstories.map((shortstories, index) => (
            <Item key={index} content={shortstories} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold tracking-wide text-foreground-900"> Others </p>
        </div>
        <hr className="w-full border-primaryText" />
      </div>
      <ViewBooks />
    </div>


  );
}
