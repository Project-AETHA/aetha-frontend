import React from 'react';
import { TERipple } from 'tw-elements-react';
import {Button} from "@nextui-org/react";

export default function SearchBar() {
    return (
        <div className="alt-container">
        <div className="shadow-lg bg-[url('../../public/images/forumwallpaper.png')] dark:bg-[url('../../public/images/forumwallpaper2.png')] bg-cover to-blue-500 relative">
            
            <div className="max-w-2xl px-4 m-auto relative z-10 py-5">
                <h1 className="text-2xl font-semibold mb-4 text-center text-primaryText">
                    Search this forum                
                </h1>
                <form className="flex flex-col md:flex-row md:space-x-4">
                    <div className="relative flex-grow">
                        <TERipple
                            rippleColor="light"
                            className="w-full rounded-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full py-2 px-10 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-200 focus:ring-2 transition duration-300 ease-in-out"
                            />
                        </TERipple>
                    </div>
                    
                    <Button className="bg-accentText text-whiteText rounded-md md:my-0 my-4">
                        Search
                    </Button>
                </form>
            </div>
        </div>
        </div>
    );
}
