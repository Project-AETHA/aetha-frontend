import { Button } from "@nextui-org/react";
import { FaReply } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useGet from "@/hooks/useGet";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import { useState } from "react";

export default function CommentList() {
    const { chapterNumber, novelId } = useParams();
    const [visibleCount, setVisibleCount] = useState(5); // Number of comments to show initially
    const { data: comments, isLoading, isError } = useGet({
        queryKey: "comments",
        url: "/api/comments/getComments",
        params: {
            chapterNumber: chapterNumber,
            novelId: novelId,
        },
    });

    // Function to handle showing more comments
    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 5); // Show 5 more comments on each click
    };

    return (
        <div className="bg-transparant pb-5 px-3 rounded-md mt-10">
            {!isLoading && !isError && comments && comments?.slice(0, visibleCount).map((comment, index) => (
                <div key={index}>
                    <div className="flex rounded-4xl">
                        <ImageOnline
                            path={comment.user.image}
                            alt="profile"
                            className="rounded-full border border-black w-10 h-10 mt-2 mr-3 ml-3"
                        />
                        <div className="text-secondaryText text-sm mr-5">
                            <div className="text-primaryText font-bold pt-3">
                                {comment.user.displayName}
                            </div>
                            <div>{comment.content}</div>
                            {/* show comment date and time */}
                            <div className="text-[10px] opacity-40">
                                {new Date(comment.createdAt).toLocaleString()}
                            </div>                
                        </div>
                    </div>

                    <div className="flex justify-end border-l-2 border-gray-400 ml-8">
                        <Button className="h-6 rounded-3xl text-xs text-accentText bg-transparant border border-accentText mx-2 hover:bg-accentText hover:text-whiteText">
                            <FaReply />
                            Reply
                        </Button>
                    </div>
                </div>
            ))}

            {/* Show "Load More" button only if there are more comments */}
            {!isLoading && !isError && visibleCount < comments.length && (
                <div className="flex justify-center mt-5">
                    <Button
                        className="rounded-lg text-whiteText bg-accentText mx-2"
                        onClick={handleShowMore}
                    >
                        Load More
                    </Button>
                </div>
            )}

            {/* Handle loading and error states */}
            {isLoading && <div>Loading comments...</div>}
            {isError && <div>Error loading comments. Please try again later.</div>}
        </div>
    );
}
