import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Button, Textarea } from "@nextui-org/react";
import { FaComment, FaStar } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

const StarRating = () => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex justify-center gap-5 my-5">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <FaStar
          key={index}
          className={`text-4xl cursor-pointer ${
            hoverRating >= star ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ))}
    </div>
  );
};


function Rate() {

    return (
        <>
            <div className="alt-container pb-2">
                <div className="flex flex-col md:flex-row gap-4 !p-0">
                    <div className="bg-foreground-50 w-full rounded-md p-2 shadow-2xl">
                        <hr className="my-4 mx-4" />

                        <h1 className="text-center m-2 text-primaryText"> Login to Rate this Book </h1>


                        <Link to="/login">
                            <Button className="font-semibold m-auto flex bg-accentText text-whiteText">
                                <MdLogin />
                                Login
                            </Button>
                        </Link>

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

                            <div className="bg-transparant pb-5 px-3 rounded-md mt-10">

                                <div className="flex rounded-4xl my-10">
                                    <img src="..//images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />
                                    <p className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3"> Reader </div>
                                        <div className="flex items-center">
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/> {/* This is for an empty star */}
                                        </div>
                                        <div className="text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quis illum! Harum accusamus officia eos minima dolor quia voluptas nisi. Dicta impedit, magni quia quae esse harum! Expedita voluptas libero iste rerum veritatis quaerat quas unde ea autem soluta tenetur quis nesciunt quo consectetur, itaque placeat molestias explicabo maiores delectus!</div>
                                    </p>

                                </div>


                                <div className="flex rounded-4xl my-10">
                                    <img src="..//images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />
                                    <div className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3">Reader</div>
                                        <div className="flex items-center">
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-gray-300" size={20}/> {/* This is for an empty star */}
                                        </div>
                                        <div className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt? Labore quasi quos minima animi nobis itaque accusamus placeat blanditiis!</div>
                                    </div>
                                </div>


                                <div className="flex rounded-4xl my-10">
                                    <img src="..//images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />
                                    <p className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3"> Reader </div>
                                        <div className="flex items-center">
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-yellow-500" size={20}/>
                                            <FaStar className="text-gray-300" size={20}/>
                                            <FaStar className="text-gray-300" size={20}/> {/* This is for an empty star */}
                                        </div>
                                        <div className="text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis tenetur sed neque ex esse suscipit architecto qui sequi nisi minima atque tempora, laborum quas iure unde rem ipsam dolore. Cum explicabo voluptate officia excepturi laboriosam, numquam nemo id, iste vero enim necessitatibus itaque earum nam veniam! Asperiores, officiis, quos mollitia suscipit nihil omnis vitae ducimus nemo beatae quo culpa? </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rate;