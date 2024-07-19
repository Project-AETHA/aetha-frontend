import React from 'react';
import { TERipple } from 'tw-elements-react';

export default function SearchBar() {
    return (
        <div className="alt-container px-4">
        <div className="bg-gray-300 to-blue-500 relative">
            
            <div className="max-w-2xl px-4 m-auto relative z-10">
                <h1 className="text-2xl font-semibold mb-4 text-center text-primaryText">
                    Discover Your Next Read
                </h1>
                <form className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="relative flex-grow">
                        <TERipple
                            rippleColor="light"
                            className="w-full rounded-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-black left-3"
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
                                className="w-full py-3 pl-12 pr-4 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-50 focus:bg-white focus:border-gray-50 focus:ring-2 transition duration-300 ease-in-out transform hover:scale-105"
                            />
                        </TERipple>
                    </div>
                    <div className="relative flex-shrink-0">
                        <select className="w-full py-3 pl-4 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-50 focus:bg-white focus:border-gray-50 focus:ring-2 transition duration-300 ease-in-out">
                            <option value=""> All </option>
                            <optgroup label="Book Type">
                                <option value="thriller">Thriller</option>
                                <option value="comedy">Comedy</option>
                                <option value="new-arrivals">New Arrivals</option>
                                <option value="top-rated">Top Rated</option>
                            </optgroup>
                            <optgroup label="Price">
                                <option value="low-to-high">Low to High</option>
                                <option value="high-to-low">High to Low</option>
                            </optgroup>
                        </select>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}
