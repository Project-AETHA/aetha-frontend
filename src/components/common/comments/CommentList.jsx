import { Button } from "@nextui-org/react";
import { FaReply } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import useGet from "@/hooks/useGet"
import ImageOnline from '@/components/common/ImageOnline.jsx';

export default function CommentList() {

    const { chapterNumber, novelId } = useParams();
    const { data, isLoading, isError, error } = useGet({
        queryKey: 'comments',
        url: '/api/comments/getComments',
        params: {
            chapterNumber: chapterNumber,
            novelId: novelId
        }
    })

    return (
        <div className="bg-transparant pb-5 px-3 rounded-md mt-10">

            {
                !isLoading && !isError && data.map((comment, index) => (

                    <div key={index}>
                        <div className="flex rounded-4xl">
                            <ImageOnline
                                path={comment.user.image}
                                alt="profile"
                             
                                className="rounded-full border border-black w-10 h-10 mt-2 mr-3 ml-3"
                                />

                            <div className="inline-block text-secondaryText text-sm mr-5">
                                <div className="text-primaryText font-bold pt-3"> {comment.user.displayName} </div>
                                <div className=""> {comment.content} </div>
                            </div>
                        </div>

                        <div className="flex justify-end border-l-2 border-gray-400 ml-8">
                            <Button className="h-6 rounded-3xl text-xs text-accentText bg-transparant border border-accentText mx-2 hover:bg-accentText hover:text-whiteText">
                                <FaReply />
                                Reply
                            </Button>

                        </div>

                    </div>
                )
                )
            }
        </div>
    )
}