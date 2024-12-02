import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import useGet from "@/hooks/useGet";
import ImageOnline from '@/components/common/ImageOnline.jsx';

function Rate() {
    const { novelId } = useParams();
    const { data: ratings = [], isLoading, isError } = useGet({
        queryKey: 'ratings',
        url: '/api/ratings/getRatings',
        params: { novelId },
    });

    const [currentPage, setCurrentPage] = useState(1);
    const ratingsPerPage = 5;

    // Calculate the ratings for the current page
    const indexOfLastRating = currentPage * ratingsPerPage;
    const indexOfFirstRating = indexOfLastRating - ratingsPerPage;
    const currentRatings = ratings.slice(indexOfFirstRating, indexOfLastRating);

    const totalPages = Math.ceil(ratings.length / ratingsPerPage);

    // Pagination controls
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <>
            <hr className="my-4 mx-4" />
            <div className="md:w-10/12 m-auto my-5">
                {!isLoading && !isError && currentRatings.map((rating, index) => (
                    <div key={index} className="bg-transparent px-3 rounded-md mt-10">
                        <div className="flex rounded-4xl my-10">
                            <ImageOnline
                                path={rating.user.image}
                                alt="profile"
                                className="rounded-full border border-black w-10 h-10 mt-2 mr-3 ml-3"
                            />
                            <p className="inline-block text-secondaryText text-sm mr-5">
                                <div className="text-primaryText font-bold pt-3">
                                    {rating.user.displayName}
                                </div>
                                <div className="flex items-center">
                                    {/* Display rating as stars */}
                                    {[1, 2, 3, 4, 5].map((star, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-lg ${
                                                rating.rating >= star ? 'text-yellow-500' : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <div className="text-justify">{rating.content}</div>
                            </p>
                        </div>
                    </div>
                ))}

                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-4">
                    <button
                        className={`px-4 py-2 mx-2 rounded ${
                            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-accentText text-whiteText'
                        }`}
                        disabled={currentPage === 1}
                        onClick={handlePrevPage}
                    >
                        Previous
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 rounded ${
                            currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-accentText text-whiteText'
                        }`}
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default Rate;
