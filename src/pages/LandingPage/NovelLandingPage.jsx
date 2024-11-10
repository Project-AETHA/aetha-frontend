import { Image } from "@nextui-org/react";
import { FcBiomass, FcGallery, FcRating } from "react-icons/fc";
import Item from "../../components/common/Item.jsx";
import LatestUpdates from "./components/LatestUpdates.jsx";
import Rating from "../../components/common/Rating";
import OverallReview from "../../components/common/OverallReview";
import useGet from "@/hooks/useGet";

import {
    CarouselItem,
} from "@/components/ui/carousel"

import CarouselMain from "./components/CarouselMain";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";

function NovelLandingPage() {

    const { 
        isLoading,
        data,
        isError,
        error,
        isFetching,
        refetch
    } = useGet({ url: "/api/novels/all", queryKey: "ebook2" });

    // async function fetchAllNovels() {
    //     setLoading(true);

    //     await axios.get("/api/novels/all")
    //         .then(response => {
    //             if(response.status === 200) {
    //                 if(response.data.code === ResponseCodes.SUCCESS) {
    //                     setRecommendations(response.data.content);
    //                 } else {
    //                     throw new Error(response.data.message);
    //                 }
    //             } else {
    //                 throw new Error("Error - Server not responding" + response.data.message);
    //             }
    //         })
    //         .catch(error => {
    //             toast.error("Error occurred", {
    //                 description: error.message,
    //                 action: {
    //                     label: <div className="flex gap-1 items-center">
    //                         <p>Go Back</p>
    //                         <RiArrowGoBackFill size={18} />
    //                     </div> ,
    //                     // onClick: () => navigate("/author/novels")
    //                 },
    //                 classNames: {
    //                     actionButton: "!bg-red-500"
    //                 },
    //             });
    //         })

    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchAllNovels();
    // }, []);

    //* Advertisements
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

    let latest_updates = data && Array.isArray(data) ? data.slice(0, 4) : [];
    let recommendations = data && Array.isArray(data) ? data.slice(0, 8) : [];
    let rising_stars = data && Array.isArray(data) ? data.slice(0, 4) : [];
    let latest_updates_data = {
        daily: data && Array.isArray(data) ? data.slice(0, 8) : [],
        weekly: data && Array.isArray(data) ? data.slice(0, 8) : [],
        monthly: data && Array.isArray(data) ? data.slice(0, 8) : [],
    };


  //*   Content of the carousel slides
  const slides = [
    {
      title: "slide-01",
      review_score: 4.8,
      rating: 4.5,
      description: "Something-01",
      image: "/images/books/4.png",
    },
    {
      title: "slide-02",
      review_score: 1.2,
      rating: 2.0,
      description: "Something-02",
      image: "/images/books/2.png",
    },
    {
      title: "slide-03",
      review_score: 5.0,
      rating: 3.5,
      description: "Something-03",
      image: "/images/books/1.png",
    },
    {
      title: "slide-04",
      review_score: 3.2,
      rating: 1.5,
      description: "Something-04",
      image: "/images/books/5.png",
    },
  ];

    return (
        <div className="grid grid-cols-12 justify-stretch items-start !p-2 !m-0 w-full h-full gap-2 lg:flex-nowrap">
            <div className="alt-container col-span-12 lg:col-span-9 !m-0 !p-0">
                <div className="flex w-full items-center justify-center !p-0">
                    <CarouselMain>
                        {slides.map((slide, index) => (
                            <CarouselItem className="z-1 relative !pl-0" key={index}
                                          style={{
                                              backgroundImage: `url('${slide.image}')`,
                                              backgroundSize: 'cover',
                                              backgroundPosition: 'center',
                                              // filter: 'blur(8px)',
                                          }}
                            >
                                <div className={`z-2 absolute p-2 inset-2 flex gap-2 bg-foreground-50/95 rounded items-center flex-col sm:flex-row sm:items-start justify-stretch`}>
                                    <img
                                        key={index}
                                        src={slide.image}
                                        className="h-[268px] max-w-[200px] object-fill rounded"
                                        alt={index.toString()}
                                    />
                                    <div className="w-full h-full p-2 flex flex-col gap-2">
                                        <p className="text-2xl text-foreground-700 capitalize tracking-wider font-bold">{slide.title}</p>
                                        <hr className="pb-2 pt-1"/>
                                        <div className="flex gap-2 items-center">
                                            <Rating size={15} rating={slide.rating}/>
                                            <div className="text-foreground-500 text-sm">({slide.rating})</div>
                                        </div>
                                        <OverallReview review_score={slide.review_score} font_size="text-sm"/>
                                        <p className="text-small capitalize text-foreground-900 line-clamp-4 sm:line-clamp-3 md:line-clamp-4">
                                            {slide.description}
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at distinctio earum eum
                                            quibusdam rem repellat tempore veniam! Aut
                                            beatae consectetur
                                            culpa dolore doloremque doloribus eligendi enim error esse hic inventore iste laborum libero
                                            , maxime nam neque nobis optio
                                            perferendis possimus quae quaerat quia q
                                            uis ratione, sed soluta. Reiciendis, vero.
                                        </p>
                                        <div className="bg-red-500">Buttons like add to reading list</div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselMain>
                </div>

                {/* Personalized Recommendations */}
                <div className="bg-foreground-100/75">
                    <p className="flex gap-2 items-center font-bold text-lg text-green-700 mb-4">
                        <FcBiomass size="25px" />
                        Personalized Recommendations
                    </p>
                    <div className="flex items-center flex-wrap gap-3">
                        {isLoading && <LoadingComponent />}

                        {isError && <div className="text-black text-center">{error.message || "An error occurred"}</div>}

                        {!isLoading && !isError && recommendations && recommendations.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none lg:flex lg:flex-wrap place-items-center gap-3 py-5">
                            {recommendations.map((item, index) => (
                                <Item key={index} content={item} />
                            ))}
                        </div>
                        ) : (
                            !isLoading && !isError && <NothingToDisplay />
                        )}
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
                            {isLoading ? (
                                <LoadingComponent />
                            ) : latest_updates.length > 0 ? (
                                latest_updates.map((latest_update, index) => (
                                    <Item key={index} content={latest_update} />
                                ))
                            ) : (
                                <NothingToDisplay />
                            )}
                        </div>
                    </div>

                    {/* Rising Stars */}
                    <div className="bg-foreground-100/75 w-[50%] rounded-md p-2">
                        <p className="flex gap-2 items-center font-bold text-lg text-amber-500 mb-4">
                            <FcRating size="25px" />
                            Rising Stars
                        </p>

                        <div className="flex items-center flex-wrap gap-3">
                            {isLoading ? (
                                <LoadingComponent />
                            ) : rising_stars.length > 0 ? (
                                rising_stars.map((rising_star, index) => (
                                    <Item key={index} content={rising_star} />
                                ))
                            ) : (
                                <NothingToDisplay />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-foreground-50/75 rounded p-2 flex flex-col col-span-12 lg:col-span-3 min-h-full lg:max-w-[350px]">
                <p className="text-foreground-900 font-semibold tracking-wide pl-2">Trending Content</p>
                <hr className="pb-4" />
                <div className="grow rounded p-1 flex">
                    <LatestUpdates data={latest_updates_data} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
}

export default NovelLandingPage;
