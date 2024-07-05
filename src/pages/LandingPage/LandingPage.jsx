import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FcBiomass } from "react-icons/fc";

function LandingPage() {
  return (
    <div className="alt-container">
      <h1>Welcome to the Landing Page!</h1>

      {/* Carousel with images of the latest content */}
      <div className="!p-0">
        <Image
          width="100%"
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>

      {/* Advertisements */}
      <div className="ad-container">
        <div className="">
          <Image
            width="300px"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <h2>Advertisement 1</h2>
          <p>Advertise your product here!</p>
        </div>

        <div className="!hidden sm:flex">
          <Image
            width="300px"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <h2>Advertisement 1</h2>
          <p>Advertise your product here!</p>
        </div>

        <div className="">
          <Image
            width="300px"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <h2>Advertisement 1</h2>
          <p>Advertise your product here!</p>
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-gray-300">
        <p className="text-foreground-800 flex gap-2 items-center font-bold text-lg text-green-700 mb-4"><FcBiomass size="25px" />Personalized Recommendations</p>

        <div className="flex justify-evenly items-center flex-wrap gap-2">
        <Link to="#content_recommendation">
        <div className="max-w-[350px] w-[150px] flex flex-col">
          <Image
            width="150px"
            height="300px"
            className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <p className="text-sm text-foreground-700">Recommendation 1</p>
          <p className="truncate text-xs text-foreground-500">Recommendation description</p>
        </div>
        </Link>

        <Link to="#content_recommendation">
        <div className="max-w-[350px] w-[150px] flex flex-col">
          <Image
            width="150px"
            height="300px"
            className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <p className="text-sm text-foreground-700">Recommendation 1</p>
          <p className="truncate text-xs text-foreground-500">Recommendation description</p>
        </div>
        </Link>

        <Link to="#content_recommendation">
        <div className="max-w-[350px] w-[150px] flex flex-col">
          <Image
            width="150px"
            height="300px"
            className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <p className="text-sm text-foreground-700">Recommendation 1</p>
          <p className="truncate text-xs text-foreground-500">Recommendation description</p>
        </div>
        </Link>

        <Link to="#content_recommendation">
        <div className="max-w-[350px] w-[150px] flex flex-col">
          <Image
            width="150px"
            height="300px"
            className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <p className="text-sm text-foreground-700">Recommendation 1</p>
          <p className="truncate text-xs text-foreground-500">Recommendation description</p>
        </div>
        </Link>

        <Link to="#content_recommendation">
        <div className="max-w-[350px] w-[150px] flex flex-col">
          <Image
            width="150px"
            height="300px"
            className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
          <p className="text-sm text-foreground-700">Recommendation 1</p>
          <p className="truncate text-xs text-foreground-500">Recommendation description</p>
        </div>
        </Link>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
