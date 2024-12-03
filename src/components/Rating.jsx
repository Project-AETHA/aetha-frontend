import React, { useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import { FaComment, FaStar } from "react-icons/fa";
import Rate from "@/components/common/ratings/RatingList.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const StarRating = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex justify-center gap-5 my-5">
            {[1, 2, 3, 4, 5].map((star, index) => (
                <FaStar
                    key={index}
                    className={`text-4xl cursor-pointer ${hoverRating >= star || rating >= star ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)} 
                />
            ))}
        </div>
    );
};

export default function Rating() {
    const [rating, setRating] = useState(0); 
    const [content, setContent] = useState(""); 
    const [refreshRatings, setRefreshRatings] = useState(false); 
    const { novelId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (rating === 0) {
            toast.error("Please select a rating.");
            return;
        }

        if (!content.trim()) {
            toast.error("Please add your feedback.");
            return;
        }

        try {
            const response = await axios.post(
                `/api/ratings/saveRating`,
                {
                    rating,       
                    content,        
                    novel: novelId,  
                }
            );

            if (response.status === 200) {
                const { code, message } = response.data;

                if (code === 200) {
                    toast.success(message || "Rating submitted successfully!");
                    setRating(0); 
                    setContent("");
                    setRefreshRatings((prev) => !prev);
                } 
                else if (code === 401) {
                    toast.error(message || "Please login to rate this book.");
                } else {
                    toast.error(message || "Failed to submit rating.");
                }
            }
        } catch (error) {
            console.error("Error submitting rating:", error);
            toast.error("An error occurred while submitting your rating. Please login and try again.");
        }
    }


    const isLogIn = localStorage.getItem("token") ? true : false;

    return (
        <>
            <hr className="my-4 mx-4" />
            {
                !isLogIn && (
                    <div>
                        <h1 className="text-center m-2 text-primaryText"> Login to Rate this Book </h1>
                        <Link to="/login">
                            <Button className="font-semibold m-auto flex bg-accentText text-whiteText">
                                <MdLogin />
                                Login
                            </Button>
                        </Link>
                    </div>
                )
            }
            <div className="alt-container pb-2">
                <div className="flex flex-col md:flex-row gap-4 !p-0">
                    <div className="bg-foreground-50 w-full rounded-md p-2 shadow-2xl">
                        <h1 className="text-xl font-semibold text-center text-primaryText">Rate this Book</h1>
                        <StarRating rating={rating} setRating={setRating} />
                        <div>
                            <Textarea
                                isRequired
                                labelPlacement="outside"
                                placeholder="Type your feedback here..."
                                className="m-auto w-11/12"
                                value={content}
                                onChange={(e) => setContent(e.target.value)} // Update feedback content
                            />
                        </div>
                        <div className="flex justify-end mt-4 mx-6 md:mx-14">
                            <Button
                                className="rounded-lg text-whiteText bg-accentText mx-2"
                                onClick={handleSubmit} // Submit handler
                            >
                                <FaComment />
                                Post
                            </Button>
                            <Button
                                variant="bordered"
                                className="rounded-lg text-accentText border border-accentText"
                                onClick={() => {
                                    setRating(0); // Reset star rating
                                    setContent(""); // Clear feedback content
                                }}
                            >
                                Cancel
                            </Button>
                        </div>
                        {/* Pass refresh trigger to RatingList */}
                        <Rate refreshRatings={refreshRatings} />
                    </div>
                </div>
            </div>
        </>
    );
}
