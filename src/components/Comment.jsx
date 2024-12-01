import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Button, Textarea } from "@nextui-org/react";
import { FaComment } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import CommentList from "@/components/common/comments/CommentList";

function Comment() {

    const isLoggIn = localStorage.getItem("token") ? true : false;

    return (
        <>
            <div className="alt-container px-4 pb-2">
                <div className="flex flex-col md:flex-row gap-4 !p-0">
                    <div className="shadow-2xl bg-foreground-50 w-full rounded-md p-2">
                        <hr className="my-4 mx-4" />

                        {
                            !isLoggIn && (
                                <div className="md:w-10/12 m-auto my-5">
                                    <h1 className="text-center m-2 text-primaryText"> Login to comment </h1>
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
                            <h1 className=" text-xl font-semibold text-center text-primaryText mb-5"> What do you think ? </h1>
                            {/* add 6 emojies */}
                            <div>
                                <Textarea isRequired labelPlacement="outside" placeholder="Type Here" />
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button className=" rounded-lg text-whiteText bg-accentText mx-2">
                                    <FaComment />
                                    Comment
                                </Button>
                                <Button variant="bordered" className="rounded-lg text-accentText border border-accentText mx-2">
                                    Cancel
                                </Button>
                            </div>
                            <CommentList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;