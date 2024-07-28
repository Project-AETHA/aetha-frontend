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
      title: "Recommendation 1",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      id: 1,
      title: "Recommendation 1",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      id: 1,
      title: "Recommendation 1",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      id: 1,
      title: "Recommendation 1",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      id: 1,
      title: "Recommendation 1",
      type: "novel",
      rating: 4.6,
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
        id: 1,
        title: "Recommendation 1",
        type: "novel",
        rating: 4.6,
        description: "Recommendation description",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
      },
      {
        id: 1,
        title: "Recommendation 1",
        type: "novel",
        rating: 4.6,
        description: "Recommendation description",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
      },
      {
        id: 1,
        title: "Recommendation 1",
        type: "novel",
        rating: 4.6,
        description: "Recommendation description",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
      },
      {
        id: 1,
        title: "Recommendation 1",
        type: "novel",
        rating: 4.6,
        description: "Recommendation description",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
      },
      {
        id: 1,
        title: "Recommendation 1",
        type: "novel",
        rating: 4.6,
        description: "Recommendation description",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
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
                <Item key={index} content={recommendation} />
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
            {recommendations.map((recommendation, index) => (
                <Item key={index} content={recommendation} />
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
            {recommendations.map((recommendation, index) => (
                <Item key={index} content={recommendation} />
            ))}
        </div>
      </div>

    </div>
  );
}
