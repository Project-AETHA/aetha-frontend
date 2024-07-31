import SearchBar from "../../components/SearchBar";
import coverImg from "/images/landing_cover.jpg";
import { SearchIcon } from "lucide-react";
import Item from "../../components/common/Item";
import {Link} from 'react-router-dom'

import { Image, Input } from "@nextui-org/react";

export default function GeneralLandingPage() {
  let recommendations = [
    {
      id: 1,
      title: "The Great Gatsby",
      type: "novel",
      rating: 4.6,
      description: "lorem ipsum dolor sit amet",
      image: "../../../public/images/books/4.png",
    },
    {
      id: 1,
      title: "Walk in Shadow",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/books/2.png",
    },
    {
      id: 1,
      title: "The catcher in RYE",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/books/3.png",
    },
    {
      id: 1,
      title: "Alone",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/books/1.png",
    },
    {
      id: 1,
      title: "Brave New World",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/books/5.png",
    },
    {
      id: 1,
      title: "Soul",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/books/6.png",
    },
    {
      id: 1,
      title: "New World",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/books/7.png",
    },
    {
      id: 1,
      title: "Magic Hour",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/books/8.png",
    },
    {
      id: 1,
      title: "Norse Mythology",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/books/9.png",
    },

  ];

  let poems = [
    {
      id: 1,
      title: "The Butterfly",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/7.png",
    },
    {
      id: 1,
      title: "Fower",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/6.png",
    },
    {
      id: 1,
      title: "Hand",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/8.png",
    },
    {
      id: 1,
      title: "Alone",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/9.png",
    },
    {
      id: 1,
      title: "Flower",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/6.png",
    },
    {
      id: 1,
      title: "Hand",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/8.png",
    },
    {
      id: 1,
      title: "Alone",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/9.png",
    },
    {
      id: 1,
      title: "The Butterfly",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/7.png",
    },
    {
      id: 1,
      title: "Hand",
      type: "novel",
      rating: 4.6,
      image: "../../../public/images/poems/8.png",
    },

  ];

  let shortstories = [
    {
      id: 1,
      title: "Who's There",
      type: "novel",
      rating: 4.6,
      description: "lorem ipsum dolor sit amet",
      image: "../../../public/images/shortstories/11.png",
    },
    {
      id: 1,
      title: "The Last Boys",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/shortstories/12.png",
    },
    {
      id: 1,
      title: "Her Life",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/shortstories/13.png",
    },
    {
      id: 1,
      title: "Alone",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/shortstories/14.png",
    },
    {
      id: 1,
      title: "Who's There",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/shortstories/11.png",
    },
    {
      id: 1,
      title: "The Last Boys",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/shortstories/12.png",
    },
    {
      id: 1,
      title: "Alone",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/shortstories/14.png",
    },
    {
      id: 1,
      title: "The catcher in RYE",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/shortstories/13.png",
    },
    {
      id: 1,
      title: "Who's There",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "../../../public/images/shortstories/11.png",
    },

  ];


  let ads = [
    {
      id: 1,
      title: "Advertisement 1",
      content: "Advertise your product here!",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: 2,
      title: "Advertisement 2",
      content: "Advertise your product here!",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: 3,
      title: "Advertisement 3",
      content: "Advertise your product here!",
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
  ];

  return (
    <div className="!rounded-none !p-0 !pb-20 !m-0 w-full h-full flex flex-col gap-10">
      <div className="relative overflow-hidden">
        <Image
          width="100%"
          alt="Cover Image"
          src={coverImg}
          radius="none"
          className="max-h-[400px]"
        />

        <div
          className="
            absolute left-1/2 top-1/2 z-50 
            transform -translate-x-1/2 -translate-y-1/2
            w-full lg:w-1/2
        "
        >
          <SearchBar />
        </div>
      </div>

      <div className="px-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
            <p className="text-large font-semibold tracking-wide text-foreground-900">Latest Updates</p>
            <button className="text-foreground-900 hover:text-foreground-800">
                <Link to="/novels">View All</Link>
            </button>
        </div>
        <div className="flex gap-2 overflow-hidden flex-nowrap">
            {recommendations.map((recommendation, index) => (
                <Item key={index} content={recommendation} />
            ))}
        </div>
      </div>

      <div className="px-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
            <p className="text-large font-semibold tracking-wide text-foreground-900">Novels</p>
            <button className="text-foreground-900 hover:text-foreground-800">
                <Link to="/novels">View All</Link>
            </button>
        </div>
        <div className="flex gap-2 overflow-hidden flex-nowrap">
            {recommendations.map((recommendation, index) => (
                <Item key={index} content={recommendation}/>
          
            ))}
        </div>
      </div>

      <div className="px-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
            <p className="text-large font-semibold tracking-wide text-foreground-900">Short Stories</p>
            <button className="text-foreground-900 hover:text-foreground-800">
                <Link to="/shortstories">View All</Link>
            </button>
        </div>
        <div className="flex gap-2 overflow-hidden flex-nowrap">
            {shortstories.map((shortstories, index) => (
                <Item key={index} content={shortstories} />
            ))}
        </div>
      </div>

      <div className="px-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
            <p className="text-large font-semibold tracking-wide text-foreground-900">Poems & Nisades</p>
            <button className="text-foreground-900 hover:text-foreground-800">
                <Link to="/poems-nisades">View All</Link>
            </button>
        </div>
        <div className="flex gap-2 overflow-hidden flex-nowrap">
            {poems.map((poems, index) => (
                <Item key={index} content={poems} />
            ))}
        </div>
      </div>

    </div>
  );
}
