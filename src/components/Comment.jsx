import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Button, Textarea } from "@nextui-org/react";
import { FaComment, FaReply } from "react-icons/fa";
import { MdOutlineReport ,MdLogin  } from "react-icons/md";



function Comment() {

    return (
        <>
            <div className="alt-container px-4 pb-2">
                <div className="flex flex-col md:flex-row gap-4 !p-0">
                    <div className="bg-gray-300 w-full rounded-md p-2">
                        <hr className="my-4 mx-4" />

                        <h1 className="text-center m-2 text-primaryText"> Login to comment </h1>


                        <Link to="/login">
                            <Button className="font-semibold m-auto flex bg-accentText text-whiteText">
                                <MdLogin />
                                Login
                            </Button>
                        </Link>

                        <hr className="my-4 mx-4" />

                        <div className="md:w-10/12 m-auto my-5">

                            <div>
                                <Textarea isRequired labelPlacement="outside" placeholder="Type Here" />
                            </div>

                            <div className="flex justify-end mt-4">
                                <Button className=" rounded-sm text-whiteText bg-accentText mx-2">
                                    <FaComment />
                                    Comment
                                </Button>

                                <Button className="rounded-sm text-accentText border border-accentText mx-2">
                                    Cancel
                                </Button>
                            </div>

                            <div className="bg-transparant pb-5 px-3 rounded-md mt-10">
                                <div className="flex rounded-4xl">


                                    <img src="../../public/images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />

                                    <p className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3"> Reader </div>
                                        <div className=""> Lorem ipsum dolor dipisicing elit. </div>
                                    </p>

                                </div>

                                <div className="flex justify-end border-l-2 border-gray-400 ml-8">
                                    <Button className="h-6 rounded-3xl text-xs text-accentText bg-transparant border border-accentText mx-2 hover:bg-accentText hover:text-whiteText">
                                        <FaReply />
                                        Reply
                                    </Button>
                                    <Button className="h-6 rounded-3xl text-xs text-red-600 bg-transparant border border-red-600 mx-2 hover:bg-red-600 hover:text-whiteText">                                        <MdOutlineReport />
                                        Report
                                    </Button>
                                </div>

                                {/* reply section */}
                                <div className="flex rounded-4xl md:py-0 py-3 align-middle md:pl-10 border-l-2 border-gray-400 ml-8">

                                    <img src="../../public/images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />
                                    <p className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3"> Writer </div>
                                        <div className=""> Obcaecati deserunt quam quisquam libero quidem tempora. </div>
                                    </p>
                                </div>

                                <div className="flex justify-end border-l-2 border-gray-400 ml-8">
                                    <Button className="h-6 rounded-3xl text-xs text-accentText bg-transparant border border-accentText mx-2  hover:bg-accentText hover:text-whiteText">
                                        <FaReply />
                                        Reply
                                    </Button>
                                    <Button className="h-6 rounded-3xl text-xs text-red-600 bg-transparant border border-red-600 mx-2 hover:bg-red-600 hover:text-whiteText">                                        <MdOutlineReport />
                                        Report
                                    </Button>
                                </div>


                                <div className="flex rounded-4xl">

                                    <img src="../../public/images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />
                                    <p className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3"> Reader </div>
                                        <div className=""> Lorem ipsum dolor </div>
                                    </p>
                                </div>
                                <div className="flex justify-end border-l-2 border-gray-400 ml-8">
                                    <Button className="h-6 rounded-3xl text-xs text-accentText bg-transparant border border-accentText mx-2  hover:bg-accentText hover:text-whiteText">
                                        <FaReply />
                                        Reply
                                    </Button>
                                    <Button className="h-6 rounded-3xl text-xs text-red-600 bg-transparant border border-red-600 mx-2 hover:bg-red-600 hover:text-whiteText">                                        <MdOutlineReport />
                                        Report
                                    </Button>
                                </div>


                                <div className="flex rounded-4xl">
                                    <img src="../../public/images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />
                                    <p className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3"> Reader </div>
                                        <div className=""> Lorem ipsum dolor dipisicing elit. </div>
                                    </p>
                                </div>
                                <div className="flex justify-end border-l-2 border-gray-400 ml-8">
                                    <Button className="h-6 rounded-3xl text-xs text-accentText bg-transparant border border-accentText mx-2  hover:bg-accentText hover:text-whiteText">
                                        <FaReply />
                                        Reply
                                    </Button>
                                    <Button className="h-6 rounded-3xl text-xs text-red-600 bg-transparant border border-red-600 mx-2 hover:bg-red-600 hover:text-whiteText">                                        <MdOutlineReport />
                                        Report
                                    </Button>
                                </div>

                                {/* reply section */}
                                <div className="flex rounded-4xl md:py-0 py-3 align-middle md:pl-10 border-l-2 border-gray-400 ml-8">

                                    <img src="../../public/images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />
                                    <p className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3"> Reader </div>
                                        <div className=""> Obcaecati deserunt quam quisquam libero quidem tempora. </div>
                                    </p>
                                </div>
                                <div className="flex justify-end border-l-2 border-gray-400 ml-8">
                                    <Button className="h-6 rounded-3xl text-xs text-accentText bg-transparant border border-accentText mx-2 hover:bg-accentText hover:text-whiteText">
                                        <FaReply />
                                        Reply
                                    </Button>
                                    <Button className="h-6 rounded-3xl text-xs text-red-600 bg-transparant border border-red-600 mx-2 hover:bg-red-600 hover:text-whiteText">                                        <MdOutlineReport />
                                        Report
                                    </Button>
                                </div>

                                {/* reply section */}
                                <div className="flex rounded-4xl md:py-0 align-middle md:pl-10 border-l-2 border-gray-400 ml-8">

                                    <img src="../../public/images/user.png" alt="user" className="rounded-full w-12 h-12 m-2 inline-block" />
                                    <p className="inline-block text-secondaryText text-sm mr-5">
                                        <div className="text-primaryText font-bold pt-3"> Writer </div>
                                        <div className=""> deserunt quam quisquam libero quidem tempora. </div>
                                    </p>
                                </div>
                                <div className="flex justify-end border-l-2 border-gray-400 ml-8">
                                    <Button className="h-6 rounded-3xl text-xs text-accentText bg-transparant border border-accentText mx-2 hover:bg-accentText hover:text-whiteText">
                                        <FaReply />
                                        Reply
                                    </Button>
                                    <Button className="h-6 rounded-3xl text-xs text-red-600 bg-transparant border border-red-600 mx-2 hover:bg-red-600 hover:text-whiteText">  
                                        <MdOutlineReport />
                                        Report
                                    </Button>
                                </div>


                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;