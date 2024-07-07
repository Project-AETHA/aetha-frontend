import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FcBiomass, FcGallery, FcRating } from "react-icons/fc";

function LandingPage() {
  let recommendations = [
    {
      title: "Recommendation 1",
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      title: "Recommendation 1",
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      title: "Recommendation 1",
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      title: "Recommendation 1",
      description: "Recommendation description",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      title: "Recommendation 1",
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
  let latest_updates = recommendations.slice(0, 3);
  let rising_stars = recommendations.slice(0, 3);

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
        {ads &&
          ads.map((ad, index) => (
            <div className="" key={ad.id}>
              <Image width="300px" alt="NextUI hero Image" src={ad.image} />
              <h2>
                {ad.title} {index}
              </h2>
              <p>{ad.content}</p>
            </div>
          ))}
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-gray-300">
        <p className="flex gap-2 items-center font-bold text-lg text-green-700 mb-4">
          <FcBiomass size="25px" />
          Personalized Recommendations
        </p>

        <div className="flex justify-evenly items-center flex-wrap gap-2">
          {recommendations &&
            recommendations.map((recommendation, index) => (
              <Link to="#" key={index}>
                <div className="max-w-[350px] w-[150px] flex flex-col">
                  <Image
                    width="150px"
                    height="300px"
                    className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
                    alt="NextUI hero Image"
                    src={recommendation.image}
                  />
                  <p className="text-sm text-foreground-700">
                    {recommendation.title}
                  </p>
                  <p className="truncate text-xs text-foreground-500">
                    {recommendation.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="flex gap-4 !p-0">
        {/* Latest Updates */}
        <div className="bg-gray-300 w-[50%] rounded-md p-2">
          <p className="flex gap-2 items-center font-bold text-lg text-orange-700 mb-4">
            <FcGallery size="25px" />
            Latest Updates
          </p>

          <div className="flex justify-evenly items-center flex-wrap gap-2">
            {latest_updates &&
              latest_updates.map((latest_update, index) => (
                <Link to="#" key={index}>
                  <div className="max-w-[350px] w-[150px] flex flex-col">
                    <Image
                      width="150px"
                      height="300px"
                      className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
                      alt="NextUI hero Image"
                      src={latest_update.image}
                    />
                    <p className="text-sm text-foreground-700">
                      {latest_update.title}
                    </p>
                    <p className="truncate text-xs text-foreground-500">
                      {latest_update.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Rising Stars */}
        <div className="bg-gray-300 w-[50%] rounded-md p-2">
          <p className="flex gap-2 items-center font-bold text-lg text-amber-500 mb-4">
            <FcRating size="25px" />
            Rising Stars
          </p>

          <div className="flex justify-evenly items-center flex-wrap gap-2">
            {latest_updates &&
              latest_updates.map((latest_update, index) => (
                <Link to="#" key={index}>
                  <div className="max-w-[350px] w-[150px] flex flex-col">
                    <Image
                      width="150px"
                      height="300px"
                      className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
                      alt="NextUI hero Image"
                      src={latest_update.image}
                    />
                    <p className="text-sm text-foreground-700">
                      {latest_update.title}
                    </p>
                    <p className="truncate text-xs text-foreground-500">
                      {latest_update.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
