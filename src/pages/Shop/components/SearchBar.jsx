import { useState } from 'react';
import { TERipple } from 'tw-elements-react';
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import useFetch from "@/hooks/useFetch.jsx";
import { Select, SelectItem } from "@nextui-org/react";

export default function SearchBar() {

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");

    // Obtaining genres from the server
    const { data: availableGenres, loading: loadingGenres } = useFetch("/api/config/genres");

    // Manage multiple genres selection
    const [genres, setGenres] = useState([]);
    const [publishedWithin, setPublishedWithin] = useState("");
    const [rating, setRating] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();

        // Clearing previous search filters before performing the new search
        localStorage.removeItem("searchFilter");
        localStorage.setItem("searchFilter", JSON.stringify({ searchText, genres, publishedWithin, rating }));

        // ! Debugging line - Prints the current search filter on pressing the search button
        console.log({ searchText, genres, publishedWithin, rating });

        navigate("/shop/search");
    }

    function handleTimeSelection(e) {
        // Extract the index from the value
        const index = e.target.value.split('.')[1];

        // Map the index to a specific string
        let label;
        switch (index) {
            case "0":
                label = 'Today';
                break;
            case "1":
                label = 'ThisWeek';
                break;
            case "2":
                label = 'ThisMonth';
                break;
            default:
                label = 'Unknown';
        }

        setPublishedWithin(label);
    }

    return (
        <div className="alt-container">
            <div className="bg-gray-300 to-blue-500 relative">
                <div className="m-auto relative">
                    <h1 className="text-2xl font-semibold mb-4 text-center text-primaryText">
                        Discover Your Next Read
                    </h1>
                    <form className="space-y-4 md:space-y-0" onSubmit={handleSubmit}>
                        <div className="flex flex-grow items-center">
                            <TERipple rippleColor="light" className="w-full rounded-md">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="my-5 w-full py-2 pl-4 pr-4 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none bg-gray-200 focus:border-gray-50 focus:ring-2 transition duration-300 ease-in-out"
                                    value={searchText}
                                    onChange={e => setSearchText(e.target.value)}
                                />
                            </TERipple>
                            <Button className="ml-2 px-10 rounded-md bg-accentText text-whiteText" type="submit">
                                Search
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <Select
                                label="Genres"
                                placeholder="Select genres"
                                selectionMode="multiple"
                                className="max-w-xs"
                                value={genres}
                                onChange={selectedGenres => {
                                    setGenres(selectedGenres.target.value.split(',').map(item => availableGenres[item]));
                                }}
                            >
                                {loadingGenres ? (
                                    <SelectItem value="" disabled>Loading...</SelectItem>
                                ) : (
                                    availableGenres && availableGenres.map((genre, index) => (
                                        <SelectItem key={index} value={index}>{genre}</SelectItem>
                                    ))
                                )}
                            </Select>

                            <Select
                                label="Published Within"
                                placeholder="Select Time Period"
                                className="max-w-xs"
                                onChange={handleTimeSelection}
                            >
                                <SelectItem value="Day">Today</SelectItem>
                                <SelectItem value="Week">This Week</SelectItem>
                                <SelectItem value="Month">This Month</SelectItem>
                            </Select>

                            <Select
                                label="Rating"
                                placeholder="Select Rating"
                                className="max-w-xs"
                                onChange={(e) => {
                                    setRating(parseInt(e.target.value.split('.')[1]) + 1)
                                }}
                            >
                                <SelectItem value={1}>1 Star</SelectItem>
                                <SelectItem value={3}>3 Stars</SelectItem>
                                <SelectItem value={2}>2 Stars</SelectItem>
                                <SelectItem value={4}>4 Stars</SelectItem>
                                <SelectItem value={5}>5 Stars</SelectItem>
                            </Select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}