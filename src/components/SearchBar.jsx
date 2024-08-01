import React from 'react';
import { TERipple } from 'tw-elements-react';
{/* import button from next ui */}
import {Button} from "@nextui-org/react"
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="alt-container">
          <div className="bg-gray-300 to-blue-500 relative">
            <div className="m-auto relative">
              <h1 className="text-2xl font-semibold mb-4 text-center text-primaryText">
                Discover Your Next Read
              </h1>
              <form className="space-y-4 md:space-y-0">
                <div className="flex flex-grow items-center">
                  <TERipple rippleColor="light" className="w-full rounded-md">
                    <input
                      type="text"
                      placeholder="Search"
                      className="my-5 w-full py-2 pl-4 pr-4 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-200 focus:border-gray-50 focus:ring-2 transition duration-300 ease-in-out"
                    />
                  </TERipple>
                  <Button className="ml-2 px-10 rounded-md bg-accentText text-whiteText">
                    Search
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <select className="py-2 pl-4 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-200 focus:border-gray-50 focus:ring-2 transition duration-300 ease-in-out">
                    <option value="">All</option>
                 
                      <option value="thriller">Thriller</option>
                      <option value="comedy">Comedy</option>
                      <option value="new-arrivals">New Arrivals</option>
                      <option value="top-rated">Top Rated</option>
                  
                  </select>
               
                  <select className="py-2 pl-4 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-200 focus:border-gray-50 focus:ring-2 transition duration-300 ease-in-out">
                    <option value="">Genre</option>
                    <option value="action"> Action </option>
                    <option value="adventure">Adventure</option>
                    <option value="family">Family</option>
                    <option value="history">History</option>
                    <option value="music">Music</option>
                  </select>
             
                  <select className="py-2 pl-4 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-200 focus:border-gray-50 focus:ring-2 transition duration-300 ease-in-out">
                    <option value="">Publication</option>
                    <option value="2024"> This week</option>
                    <option value="2023"> Last week </option>
                    <option value="2022"> This Month </option>
                    <option value="2021"> Last Month </option>
                  </select>
                  <select className="py-2 pl-4 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-200 focus:border-gray-50 focus:ring-2 transition duration-300 ease-in-out">
                    <option value="">Rating</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };

