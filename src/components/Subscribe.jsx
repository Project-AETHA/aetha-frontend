import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { MdOutlineSettings } from "react-icons/md";


function Subscribe() {
    let recommendations = [
        {
            title: "THE GREAT GASBY",
            description: "Recommendation description",
            image: "../../public/images/books/book1.jpg",
            author: "James Wan",
            badge1: "../../public/images/badge.png"
        },
    ];

    return (
        <div className="alt-container px-4 pb-2">
            <div className="flex flex-col md:flex-row gap-4 !p-0">

                <div className="bg-gray-300 w-full rounded-md my-5">

                    <h1 className="md:text-2xl font-semibold text-center my-8 text-primaryText mx-2"> Please ! Subscribe this Book to read Next Chapters </h1>

                    {recommendations && recommendations.map((recommendation, index) => (
                        <div className=" md:w-1/2 m-auto text-primaryText text-center my-10 p-5" key={index}>

                            <div className="flex justify-center">
                                <Image
                                    width="150px"
                                    height="300px"
                                    className="rounded-none hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer h-[200px]"
                                    alt="NextUI hero Image"
                                    src={recommendation.image}
                                />
                            </div>
                            <div className="flex justify-center mt-4">
                                <h1 className="text-2xl font-semibold">{recommendation.title}</h1>
                            </div>
                            <div className="flex justify-center">
                                <h1 className="text-md">{recommendation.author}</h1>
                            </div>




                            <div className="ustify-center mt-5">
                                <div className="justify-center">
                                    <h1 className="text-md text-accentText"> Rs. 2 000/=  </h1>
                                </div>
                                <Link to="">
                                    <Button className="rounded-none border-2 border-accentText text-accentText px-9 hover:bg-accentText hover:text-white hover:scale-110"> Subscribe </Button>
                                </Link>
                            </div>
                        </div>

                    ))}



                </div>

            </div>
        </div>

    );
}

export default Subscribe;