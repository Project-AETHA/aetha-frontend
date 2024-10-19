import {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import {FcBiomass, FcGallery} from "react-icons/fc";
import {FaBook, FaDonate, FaHeart, FaLock} from "react-icons/fa";
import {MdAddAlert, MdOutlineReport} from "react-icons/md";
import axios from 'axios';
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import {toast} from "sonner";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";


function NovelChapterOverview({id}) {
    const [novel, setNovel] = useState(null);
    const [chapters, setChapters] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function getNovelDetails() {
        setLoading(true);
        try {
            const response = await axios.get(`/api/novels/chapters-overview/${id}`);
            if (response.status === 200) {
                if (response.data.code === ResponseCodes.SUCCESS) {
                    setChapters(response.data.content.chapters);
                    setReviews(response.data.content.reviews);
                    setNovel(response.data.content.novel);
                } else {
                    toast.error(response.data.message, {
                        description: response.data.content
                    });
                }
            }
        } catch (e) {
            console.error(e);
            toast.error("Error", {
                description: e.message || "An unexpected error occurred"
            });
        }
        setLoading(false);
    }

    useEffect(() => {
        getNovelDetails();
    }, [id]);

    return (
        <div className="alt-container">
            <div className="flex flex-col md:flex-row gap-4 !p-0 bg-foreground-50 shadow-2xl">
                {/* Novel Details */}
                {loading ? <LoadingComponent/>
                    : novel && <div className="bg-foreground-50 w-full md:w-9/12 rounded-md p-2">
                        <div className="flex gap-2 items-center font-bold text-lg text-primaryText mb-4">
                            <FcGallery size="25px"/>
                            Novel
                        </div>
                        <div className="w-full md:w-3/12 inline-block">
                            <div className="flex mx-5 flex-wrap gap-2 justify-center items-center">
                                <div className="max-w-[370px] w-[170px] flex flex-col m-auto">
                                    <ImageOnline
                                        className={"rounded-md min-w-[100px] max-w-[150px] h-[200px]"}
                                        alt={novel.title}
                                        path={novel.coverImage}
                                    />
                                    <p className="md:text-md text-sm text-foreground-700 font-bold text-center pt-3">
                                        {novel.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-9/12 inline-block align-top text-justify pl-5 text-primaryText">
                            <p className="h-55 md:inline-block hidden">
                                {/* Replace this with actual novel description */}
                                {novel.description}
                            </p>
                            <div className="mt-5 w-full flex flex-col md:flex-row justify-center md:justify-start">
                                <div className="mb-4 md:mb-0 justify-center flex">
                                    <Button
                                        className="bg-accentText text-whiteText rounded"
                                        onClick={() => navigate('/novels/chapter/1')}
                                    >
                                        <FaBook/> Start Reading
                                    </Button>
                                </div>
                                <div className="ml-0 md:ml-10 justify-center flex">
                                    <Button
                                        className="border border-accentText text-accentText rounded-xl"
                                        onClick={() => navigate('/buytiers')}
                                        variant="bordered"
                                    >
                                        <MdAddAlert/> Subscribe
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {/* Actions */}
                <div
                    className="bg-foreground-50 w-full md:w-3/12 rounded-md h-[300px] pl-5 flex justify-center md:pr-10 md:items-center">
                    <div className="flex flex-col gap-2">
                        <Button
                            className="bg-foreground-50 text-primaryText border border-primaryText w-40 flex items-center justify-start space-x-2 hover:bg-green-400">
                            <FaHeart/>
                            <p>Favourite</p>
                        </Button>
                        <Button
                            className="bg-foreground-50 text-primaryText border border-primaryText w-40 flex items-center justify-start space-x-2 hover:bg-green-400">
                            <FaDonate/>
                            <p>Donate</p>
                        </Button>
                        <Button
                            className="bg-foreground-50 text-primaryText border border-primaryText w-40 flex items-center justify-start space-x-2 hover:bg-red-600">
                            <MdOutlineReport/>
                            <p>Complaint</p>
                        </Button>
                        <Button
                            className="bg-red-300 text-black border border-red-800 w-40 flex items-center justify-start space-x-2">
                            <MdOutlineReport/>
                            <p>Report</p>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Chapters */}
            <div className="flex flex-col md:flex-row gap-4 !p-0">
                <div className="shadow-2xl bg-foreground-50 w-full md:w-9/12 rounded-md p-2">
                    <p className="flex gap-2 items-center font-bold text-lg text-primaryText mb-4">
                        <FcBiomass size="25px"/>
                        Chapters
                    </p>
                    <div className="flex justify-evenly items-center flex-wrap gap-1">
                        {loading ? <LoadingComponent/>
                            : chapters && chapters.length > 0 ? chapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    onClick={() => navigate(`/novels/chapter/${chapter.chapterNumber}`)}
                                    className="h-10 items-center border-2 border-gray-200 rounded-xl p-3 w-full mx-2 flex select-none hover:shadow-sm hover:cursor-pointer hover:bg-chapterselect"
                                >
                                    <div className="inline-block w-full md:w-8/12">
                                        <p className="text-primaryText text-xs">
                                            {chapter.isPremium && <FaLock className="w-3 mx-2 inline-block"/>}
                                            Chapter {chapter.chapterNumber} : {chapter.title}
                                        </p>
                                    </div>
                                    <div className="inline-block w-0 md:w-4/12">
                                        <p className="text-secondaryText text-right text-xs italic hidden md:block"> {chapter.createdAt} </p>
                                    </div>
                                </div>
                            ))
                            : <div className="text-foreground-900 mb-4">No chapters available</div>
                        }
                    </div>
                </div>

                {/* Author Details */}
                <div className="shadow-2xl bg-foreground-50 w-full md:w-3/12 rounded-md p-2 flex justify-stretch">
                    <div className="flex flex-col gap-2 w-full">
                        <p className="flex gap-2 items-center font-semibold text-lg text-gray-500 mb-1 justify-center mt-2">
                            {/*<FaUserEdit size="25px" />*/}
                            Author Details
                        </p>
                        {/* Placeholder for author details */}
                        {loading ? <LoadingComponent/>
                            : novel && <div className="bg-red-500 w-full h-full flex flex-col items-center justify-center">
                                <p>Author details</p>
                                <ImageOnline path={novel.author.image} alt={novel.author.name}
                                             className="rounded-full"/>
                                <p className="text-lg">{novel.author.name}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NovelChapterOverview;