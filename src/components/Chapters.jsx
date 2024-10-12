import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FcBiomass, FcGallery } from "react-icons/fc";
import { FaHeart, FaBook , FaLock , FaDonate, FaUserEdit } from "react-icons/fa";
import { MdOutlineReport, MdAddAlert } from "react-icons/md";
import { Button } from "@nextui-org/react";


function LandingPage() {
    let recommendations = [
        {
            title: "THE GREAT GASBY",
            description: "Recommendation description",
            image: "../../public/images/books/book1.jpg",
            author: "James Wan",
            badge1: "../../public/images/badge.png"
        },
    ];

    let latest_updates = recommendations.slice(0, 3);

    const people = [
        {
            key: 1,
            chapter: 'Jane Cooper',
            releaseday: '1 day ago',
            content:'free'

        },
        {
            key: 2,
            chapter: 'John Doe',
            releaseday: '20 day ago',
            content:'free'

        },
        {
            key: 3,
            chapter: 'Veronica Lodge I',
            releaseday: '10 day ago',
            content:'free'

        },
        {
            key: 4,
            chapter: 'Veronica Lodge II',
            releaseday: '8 day ago',
            content:'free'

        },
        {
            key: 5,
            chapter: 'Firing Squad',
            releaseday: '7 day ago',
            content:'free'

        },
        {
            key: 6,
            chapter: 'Start of the End',
            releaseday: '5 day ago',
            content:'premium'

        },
        {
            key: 7,
            chapter: 'Veronica Lodge III',
            releaseday: '4 day ago',
            content:'premium'

        },
        {
            key: 8,
            chapter: 'New Beginnings',
            releaseday: '3 day ago',
            content:'premium'

        },
        {
            key: 9,
            chapter: 'Return of Lodge',
            releaseday: '2 day ago',
            content:'premium'

        },
        {
            key: 10,
            chapter: 'Veronica Lodge',
            releaseday: '1 day ago',
            content:'premium'

        },
        {
            key: 11,
            chapter: 'Veronica Lodge',
            releaseday: '1 day ago',
            content:'premium'

        },
        {
            key: 12,
            chapter: 'Veronica Lodge',
            releaseday: '1 day ago',
            content:'premium'

        },
        {
            key: 13,
            chapter: 'Veronica Lodge',
            releaseday: '1 day ago',
            content:'premium'

        },
        {
            key: 14,
            chapter: 'Veronica Lodge',
            releaseday: '1 day ago',
            content:'premium'

        },
        {
            key: 15,
            chapter: 'Veronica Lodge',
            releaseday: '1 day ago',
            content:'premium'

        },
        {
            key: 16,
            chapter: 'Veronica Lodge',
            releaseday: '1 day ago',
            content:'premium'

        },
        {
            key: 17,
            chapter: 'Veronica Lodge',
            releaseday: 'today',
            content:'premium'

        }


    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 13;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = people.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(people.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="alt-container">
            <div className="flex flex-col md:flex-row gap-4 !p-0 bg-foreground-50 shadow-2xl">
                {/* Latest Updates */}
                <div className="bg-foreground-50 w-full md:w-9/12 rounded-md p-2">
                    <p className="flex gap-2 items-center font-bold text-lg text-primaryText mb-4">
                        <FcGallery size="25px" />
                        Novel
                    </p>
                    <div className="w-full md:w-3/12 inline-block ">
                        <div className="flex mx-5 flex-wrap gap-2 justify-center items-center">
                            {latest_updates &&
                                latest_updates.map((latest_update, index) => (
                                    <Link to="#" key={index}>
                                        <div className="max-w-[370px] w-[170px] flex flex-col m-auto">
                                            <Image
                                                className="hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer w-[80%] m-auto justify-center rounded-md"
                                                alt="NextUI hero Image"
                                                src={latest_update.image}
                                            />
                                            <p className="md:text-md text-sm text-foreground-700 font-bold text-center pt-3">
                                                {latest_update.title}
                                            </p>

                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                    <div className="w-full md:w-9/12 inline-block align-top text-justify pl-5 text-primaryText ">
                        <p className="h-55 md:inline-block hidden">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis assumenda quaerat, eos tenetur explicabo nam in
                            facere aspernatur fuga accusantium magni saepe, ex nesciunt consectetur, eum sit reiciendis mollitia. Excepturi, magni.
                            Repudiandae, doloribus veritatis doloremque, odio delectus repellat saepe facilis adipisci ullam ratione illo iste! Voluptatum facere fugiat error. Incidunt!
                        </p>


                        <div className="mt-5 w-full flex flex-col md:flex-row justify-center md:justify-start">
                            <div className="mb-4 md:mb-0 justify-center flex">
                                <Link to="/chapterreading">
                                <Button className="bg-accentText text-whiteText rounded-">
                                    <FaBook /> Start Reading
                                </Button>
                                </Link>
                            </div>
                            <div className="ml-0 md:ml-10 justify-center flex">
                                <Link to="/buytiers">
                                <Button className="border border-accentText text-accentText rounded-xl" variant="bordered">
                                <MdAddAlert /> Subscribe
                                </Button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="bg-foreground-50 w-full md:w-3/12 rounded-md h-[300px] pl-5 flex justify-center md:pr-10 md:items-center">
                    <div className="flex flex-col gap-2">

                        <Button className="bg-foreground-50 text-primaryText border border-primaryText w-40 flex items-center justify-start space-x-2 hover:bg-green-400">
                            <FaHeart />
                            <p>Favourite</p>
                        </Button>

                        <Button className="bg-foreground-50 text-primaryText border border-primaryText w-40 flex items-center justify-start space-x-2 hover:bg-green-400">
                            <FaDonate />
                            <p> Donate </p>
                        </Button>
                        <Button className="bg-foreground-50 text-primaryText border border-primaryText w-40 flex items-center justify-start space-x-2 hover:bg-red-600">
                            <MdOutlineReport />
                            <p> Complaint </p>
                        </Button>
                        <Button className="bg-red-300 text-black border border-red-800 w-40 flex items-center justify-start space-x-2">
                            <MdOutlineReport />
                            <p> Report </p>
                        </Button>

                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 !p-0">
                {/* Chapters part */}
<div className="shadow-2xl bg-foreground-50 w-full md:w-9/12 rounded-md p-2">
    <p className="flex gap-2 items-center font-bold text-lg text-primaryText mb-4">
        <FcBiomass size="25px" />
        Chapters
    </p>
    <div className="flex justify-evenly items-center flex-wrap gap-1">
        {currentItems.map(person => (
            <Link to={person.content === 'premium' ? "/subscribe" : "/chapterreading"} key={person.key} className="w-full pr-3">
                <div className="h-10 items-center border-2 border-gray-200 rounded-xl p-3 w-full mx-2 flex hover:shadow-sm hover:bg-chapterselect">
                    <div className="inline-block w-full md:w-8/12">
                        <p className="text-primaryText text-xs">
                            {person.content === 'premium' && <FaLock className="w-3 mx-2 inline-block" />}
                            Chapter {person.key} : {person.chapter}
                        </p>
                    </div>
                    <div className="inline-block w-0 md:w-4/12">
                        <p className="text-secondaryText text-right text-xs italic hidden md:block"> {person.releaseday} </p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
    <div className="flex justify-between items-center mt-4">
        <Button onClick={handlePreviousPage} disabled={currentPage === 1} variant="bordered" className="text-accentText h-8 border border-accentText">
            Previous
        </Button>
        <p className="text-primaryText">Page {currentPage} of {totalPages}</p>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages} variant="bordered" className="text-accentText h-8 border border-accentText">
            Next
        </Button>
    </div>
</div>


                {/* Rising Stars */}
                <div className="shadow-2xl bg-foreground-50 w-full md:w-3/12 rounded-md p-2 flex justify-center">
                    <div className="flex flex-col gap-2">
                        <p className="flex gap-2 items-center font-bold text-lg text-gray-500 mb-1 justify-center mt-5">
                            <FaUserEdit size="25px" />
                            Author Details
                        </p>
                        <div>
                            {recommendations.map((recommendation, index) => (
                                <div key={index}>
                                    <img src="/images/user.png" alt="book" className="w-20 mx-auto" />
                                    <div className="p-4 rounded-md flex text-primaryText justify-center">
                                        
                                        <div className="font-bold inline-block"> Name : </div> <div className="inline-block ml-2"> {recommendation.author}</div>
                                    </div>

                                    <div className="flex items-center justify-center mb-4">
                                        <Button variant="bordered" className="text-primaryText border border-primaryText items-center justify-start hover:scale-105 hover:bg-accentText hover:text-black">
                                            <MdAddAlert />
                                            <p> Subscribe </p>
                                        </Button>
                                    </div>

                                    <p className="flex gap-2 items-center font-bold text-lg text-gray-500 justify-center">
                                        Achievements
                                    </p>

                                    <div className="grid grid-cols-3 gap-4">
                                        <img src={recommendation.badge1} alt="badge" className="w-full inline-block" />
                                        <img src={recommendation.badge1} alt="badge" className="w-full inline-block" />
                                        <img src={recommendation.badge1} alt="badge" className="w-full inline-block" />
                                        <img src={recommendation.badge1} alt="badge" className="w-full inline-block" />
                                        <img src={recommendation.badge1} alt="badge" className="w-full inline-block" />
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className="flex">
                            <div className="w-1/3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );


}


export default LandingPage;