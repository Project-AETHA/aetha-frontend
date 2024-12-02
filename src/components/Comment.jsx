import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button, Textarea } from "@nextui-org/react";
import { FaComment } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import CommentList from "@/components/common/comments/CommentList";
import { toast } from "sonner";

function Comment() {
    const [content, setContent] = useState(""); // State for comment content
    const [refreshComments, setRefreshComments] = useState(false); // State to trigger re-fetching comments
    const isLoggIn = localStorage.getItem("token") ? true : false; // Check login status
    const { novelId, chapterNumber } = useParams(); // Get novelId and chapterNumber from URL

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (!content.trim()) {
            toast.error("Please fill in the comment field.");
            return;
        }

        try {
            const response = await axios.post(
                `/api/comments/saveComment`, // Backend endpoint
                {
                    content, // Comment content
                    novelId, // Novel ID from URL
                    chapterNumber, // Chapter number from URL
                }
            );

            if (response.status === 200) {
                const { code, message } = response.data;

                if (code === 200) {
                    toast.success(message || "Comment posted successfully!");
                    setContent(""); // Clear the comment box
                    setRefreshComments((prev) => !prev); // Trigger re-fetch of comments
                } else {
                    toast.error(message || "Failed to post comment.");
                }
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            toast.error("An error occurred while posting your comment. Please try again.");
        }
    };

    return (
        <>
            <div className="alt-container px-4 pb-2">
                <div className="flex flex-col md:flex-row gap-4 !p-0">
                    <div className="shadow-2xl bg-foreground-50 w-full rounded-md p-2">
                        <hr className="my-4 mx-4" />
                        {!isLoggIn && (
                            <div className="md:w-10/12 m-auto my-5">
                                <h1 className="text-center m-2 text-primaryText">Login to comment</h1>
                                <Link to="/login">
                                    <Button className="font-semibold m-auto flex bg-accentText text-whiteText">
                                        <MdLogin />
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        )}
                        <hr className="my-4 mx-4" />
                        <div className="md:w-10/12 m-auto my-5">
                            <h1 className="text-xl font-semibold text-center text-primaryText mb-5">
                                What do you think?
                            </h1>
                            {/* Form to handle comment submission */}
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <Textarea
                                        name="content"
                                        isRequired
                                        labelPlacement="outside"
                                        placeholder="Type your comment here..."
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)} // Update state on input change
                                    />
                                </div>
                                <div className="flex justify-end mt-4">
                                    <Button
                                        type="submit" // Button to submit the form
                                        className="rounded-lg text-whiteText bg-accentText mx-2"
                                    >
                                        <FaComment />
                                        Comment
                                    </Button>
                                    <Button
                                        type="reset" // Button to reset the form
                                        variant="bordered"
                                        className="rounded-lg text-accentText border border-accentText mx-2"
                                        onClick={() => setContent("")} // Clear comment box
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                            {/* Pass refresh trigger to CommentList */}
                            <CommentList refreshComments={refreshComments} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;
