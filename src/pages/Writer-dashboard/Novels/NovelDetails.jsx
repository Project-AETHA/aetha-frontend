import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "sonner";
import { RiArrowGoBackFill } from "react-icons/ri";
import {useEffect, useState} from "react";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";


function NovelDetails () {

    const { novelId } = useParams();
    const navigate = useNavigate();

    const [novel, setNovel] = useState(null);

    async function getNovelDetails (novelId) {
        await axios.get(`/api/novels/${novelId}`)
            .then(response => {
                if(response.status === 200) {
                    if(response.data.code === ResponseCodes.SUCCESS) {
                        setNovel(response.data.content);
                    } else {
                        throw new Error(response.data.message);
                    }
                } else {
                    throw new Error("Error - Server not responding" + response.data.message);
                }
            })
            .catch(error => {
                toast.error("Error occurred", {
                    description: error.message,
                    action: {

                        // * Below is the content of the redirect button
                        label: <div className="flex gap-1 items-center">
                            <p>Go Back</p>
                            <RiArrowGoBackFill size={18} />
                        </div> ,
                        onClick: () => navigate("/author/novels")
                    },

                    // * Below is the custom styling applied to the redirect button
                    // ! Had to override the default tailwindcss classes using the ! prefix
                    classNames: {
                        actionButton: "!bg-red-500"
                    },
                });
            })
    }

    useEffect(() => {
        getNovelDetails(novelId);
    }, []);

  return (
    <div>
      <h1>NovelDetails</h1>
        {novel && (
            <div>
                <h1>Title: {novel.title}</h1>
                <p>Description: {novel.description}</p>
                <p>Author: {novel.author.displayName}</p>
                <p>Synopsis: {novel.synopsis}</p>
                <p>Genres: {novel.genre.map((genre, index) => (
                    <span key={index}>{genre} </span>
                ))}</p>
            </div>
        )}
    </div>
  )
}

export default NovelDetails;