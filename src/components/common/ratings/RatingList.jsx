import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Textarea } from "@nextui-org/react";
import { FaComment, FaStar } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { useParams } from 'react-router-dom'
import useGet from "@/hooks/useGet"
import ImageOnline from '@/components/common/ImageOnline.jsx';

const StarRating = () => {
    const [hoverRating, setHoverRating] = useState(0);



    return (

        <div className="flex justify-center gap-5 my-5">

            {[1, 2, 3, 4, 5].map((star, index) => (
                <FaStar
                    key={index}
                    className={`text-4xl cursor-pointer ${hoverRating >= star ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                />
            ))}
        </div>
    );
};


function Rate() {

    const { novelId } = useParams();
    const { data, isLoading, isError, error } = useGet({
        queryKey: 'ratings',
        url: '/api/ratings/getRatings',
        params: {
            novelId: novelId
        }
    })

    const isLogIn = localStorage.getItem("token") ? true : false;

    return (
        <>
            <div className="alt-container pb-2">

                <div className="flex flex-col md:flex-row gap-4 !p-0">
                    <div className="bg-foreground-50 w-full rounded-md p-2 shadow-2xl">
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


                        <hr className="my-4 mx-4" />

                        <div className="md:w-10/12 m-auto my-5">

                            <h1 className=" text-xl font-semibold text-center text-primaryText"> Rate this Book  </h1>
                            <h3 className="text-center text-primaryText text-sm"> 3 responses </h3>

                            {/* add 5 stars */}
                            <StarRating />

                            <div>
                                <Textarea isRequired labelPlacement="outside" placeholder="Type Here" />
                            </div>

                            <div className="flex justify-end mt-4">
                                <Button className=" rounded-lg text-whiteText bg-accentText mx-2">
                                    <FaComment />
                                    Post
                                </Button>

                                <Button variant="bordered" className="rounded-lg text-accentText border border-accentText mx-2">
                                    Cancel
                                </Button>
                            </div>


                            {
                                !isLoading && !isError && data.map((ratings, index) => (
                                    <div key={index}>
                                        <div className="bg-transparant px-3 rounded-md mt-10">
                                            <div className="flex rounded-4xl my-10">
                                                <ImageOnline path={ratings.user.image} alt="profile" className="rounded-full border border-black w-10 h-10 mt-2 mr-3 ml-3" />
                                                <p className="inline-block text-secondaryText text-sm mr-5">
                                                    <div className="text-primaryText font-bold pt-3"> {ratings.user.displayName} </div>
                                                    <div className="flex items-center">
                                                        {/* showiing rating as stars */}
                                                        {[1, 2, 3, 4, 5].map((star, index) => (
                                                            <FaStar
                                                                key={index}
                                                                className={`text-lg ${ratings.rating >= star ? 'text-yellow-500' : 'text-gray-300'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className="text-justify">  {ratings.content} </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rate;