import { Image } from "@nextui-org/react";
import { FcBiomass, FcGallery, FcRating } from "react-icons/fc";
import Carousel from "./components/Carousel";
import Item from "../../components/common/Item.jsx";
import LatestUpdates from "./components/LatestUpdates.jsx";

function NovelLandingPage() {
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
  let latest_updates_data = {
    daily: recommendations.slice(0, 3),
    weekly: recommendations.slice(0, 3),
    monthly: recommendations.slice(0, 3),
  };

  const slides = [
    {
      title: "slide-01",
      review_score: 4.8,
      rating: 4.5,
      description: "Something-01",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      title: "slide-02",
      review_score: 1.2,
      rating: 2.0,
      description: "Something-02",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      title: "slide-03",
      review_score: 5.0,
      rating: 3.5,
      description: "Something-03",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      title: "slide-04",
      review_score: 3.2,
      rating: 1.5,
      description: "Something-04",
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-12 justify-stretch items-start !p-0 !m-0 w-full h-full gap-2 lg:flex-nowrap">
      <div className="alt-container col-span-12 lg:col-span-9 !m-0 !p-0">
        {/* Carousel with images of the latest content */}
        <Carousel autoSlide={false} slideDetails={slides}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              className="object-fill"
              alt={index}
            />
          ))}
        </Carousel>

        {/* Personalized Recommendations */}
        <div className="bg-foreground-100/75">
          <p className="flex gap-2 items-center font-bold text-lg text-green-700 mb-4">
            <FcBiomass size="25px" />
            Personalized Recommendations
          </p>

          <div className="flex items-center flex-wrap gap-3">
            {recommendations &&
              recommendations.map((recommendation, index) => (
                <Item key={index} content={recommendation} />
              ))}
          </div>
        </div>

        {/* Advertisements */}
        <div className="ad-container !bg-foreground-100/75">
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

        <div className="flex gap-4 !p-0">
          {/* Latest Updates */}
          <div className="bg-foreground-100/75 w-[50%] rounded-md p-2">
            <p className="flex gap-2 items-center font-bold text-lg text-orange-700 mb-4">
              <FcGallery size="25px" />
              Latest Updates
            </p>

            <div className="flex items-center flex-wrap gap-3">
              {latest_updates &&
                latest_updates.map((latest_update, index) => (
                  <Item key={index} content={latest_update} />
                ))}
            </div>
          </div>

          {/* Rising Stars */}
          <div className="bg-foreground-100/75 w-[50%] rounded-md p-2">
            <p className="flex gap-2 items-center font-bold text-lg text-amber-500 mb-4">
              <FcRating size="25px" />
              Rising Stars
            </p>

            <div className="flex items-center flex-wrap gap-3">
              {rising_stars &&
                rising_stars.map((rising_star, index) => (
                  <Item key={index} content={rising_star} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-foreground-200/75 rounded p-2 flex flex-col col-span-12 lg:col-span-3 min-h-full lg:max-w-[350px]">
        <p className="text-foreground-900 text-purple-600">Recent Content</p>
        <div className="grow rounded p-1 flex">
          <LatestUpdates data={latest_updates_data} />
        </div>
      </div>
    </div>
  );
}

export default NovelLandingPage;