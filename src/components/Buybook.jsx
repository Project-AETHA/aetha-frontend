import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { MdOutlineSettings } from "react-icons/md";
import {FaStar , FaHeart } from "react-icons/fa";

function BuybookPage() {
    let recommendations = [
        {
            title: "THE CATCHER IN THE RYE",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "../../public/images/books/book2.jpg",
            author: "J.D. Salinger",
            price: "LKR 2000",
            badge1: "../../public/images/badge.png"
        },
    ];

    return (
        <div className="alt-container">
            <div className="flex flex-col md:flex-row gap-4 !p-0">

                <div className="shadow-lg bg-foreground-50 w-full rounded-md pb-5 px-5">
                    {recommendations && recommendations.map((recommendation, index) => (
                        <div className="flex flex-col md:flex-row items-center md:items-start m-auto text-primaryText text-center md:text-left my-10 p-5" key={index}>

                            <div className="lg:w-[300px] w-40 lg:h-[400px] mx-auto md:mx-0">
                                <Image
                                    src={recommendation.image}
                                    alt={recommendation.title}
                                    className="rounded-md w-full h-full object-cover"
                                />
                            </div>

                            <div className="mt-5 md:mt-0 md:ml-10 flex-1 mx-10">
                                <h1 className="md:text-4xl text-xl font-semibold">{recommendation.title}</h1>
                                <h2 className="md:text-xl md:text-gray-600">{recommendation.author}</h2>
                                <p className="mt-4 md:text-md text-justify text-gray-700">{recommendation.description}</p>

                                {/* star rating */}
                                <div className="flex my-1">
                                <FaStar className="text-2xl text-yellow-400" />
                                <FaStar className="text-2xl text-yellow-400" />
                                <FaStar className="text-2xl text-yellow-400" />
                                <FaStar className="text-2xl text-yellow-400" />
                                <p className="text-2xl text-gray-500">4.5 (200)</p>
                                </div>
                                <p className="mt-4 text-4xl font-semibold text-secondaryText">{recommendation.price}/= </p>
                                <div className="flex items-center gap-4 mt-4 md:justify-start justify-center">
                                    <Button className="bg-accentText text-whiteText px-8 hover:scale-105"> Buy Now </Button>
                                    <Button auto variant="bordered" color="secondary"> <FaHeart />Add to Wishlist</Button>
                                </div>
                          
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuybookPage;
