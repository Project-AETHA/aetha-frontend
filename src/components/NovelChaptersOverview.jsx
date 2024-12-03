import { useEffect, useState } from "react";
import { Button,useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { FcBiomass, FcGallery } from "react-icons/fc";
import { FaBook, FaDonate, FaHeart, FaLock, FaUnlock, FaYoutube } from "react-icons/fa";
import { MdAddAlert, MdBugReport, MdWhatsapp, MdFacebook, MdReport } from "react-icons/md";
import axios from "axios";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import NovelReportModal from "./Novels/NovelReportModal";

function NovelChapterOverview({ id }) {
  const [novel, setNovel] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [Fav, setFav] = useState(false);

  async function checkFavStatus() {
    try {
        const response = await axios.get(`/api/fav/novel/${id}`);
        if (response.status === 200) {
            if (response.data.code === ResponseCodes.SUCCESS) {
                setFav(response.data.content);
            } else {
                toast.error(response.data.message, {
                    description: response.data.content,
                });
            }
        }
    } catch (error) {
        console.error("Failed to check fav status:", error);
    }
  }

  async function handleFav() {
    try {
        let response;
        if (!Fav) {
            response = await axios.post(`/api/fav/novel/${id}?setFav=true`);
        } else {
            response = await axios.post(`/api/fav/novel/${id}?setFav=false`);
        }
        setFav(!Fav);

    } catch (error) {
        console.error("Failed to add favourites:", error);
    }
  }

  const {isOpen, onOpen, onClose} = useDisclosure();

  async function checkSubscription(novelId) {
    const response = await axios.get(`/api/subscription/check/${novelId}`);
    
    return response.data.content ?? false;
  }

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
            description: response.data.content,
          });
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Error", {
        description: e.message || "An unexpected error occurred",
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    getNovelDetails();
    checkFavStatus();
  }, [id]);

  return (
    <div className="alt-container">
      <NovelReportModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} novelId={novel?.id} />
      <div className="flex flex-col md:flex-row gap-4 !p-0 bg-foreground-50 shadow-2xl">
        {/* Novel Details */}
        {loading ? (
          <LoadingComponent />
        ) : (
          novel && (
            <div className="bg-foreground-50 w-full md:w-9/12 rounded-md p-2">
              <div className="flex gap-2 items-center font-bold text-lg text-primaryText mb-4">
                <FcGallery size="25px" />
                Novel
              </div>
              <div className="w-full md:w-3/12 inline-block">
                <div className="flex mx-5 flex-wrap gap-2 justify-center items-center">
                  <div className="max-w-[370px] w-[170px] flex flex-col m-auto">
                    <ImageOnline
                      className={
                        "rounded-md min-w-[100px] max-w-[150px] h-[200px]"
                      }
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
                      onClick={() => navigate(`/novels/${novel.id}/1`)}
                    >
                      <FaBook /> Start Reading
                    </Button>
                  </div>
                  <div className="ml-0 md:ml-10 justify-center flex">
                    <Button
                      className="border border-accentText text-accentText rounded-xl hover:bg-blue-500 hover:text-foreground-50"
                      onClick={() => navigate("/buytiers/" + novel.id)}
                      variant="bordered"
                    >
                      <MdAddAlert /> Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* Actions */}
        <div className="bg-foreground-50 w-full md:w-3/12 rounded-md h-[300px] pl-5 flex justify-center md:pr-10 md:items-center">
          <div className="flex flex-col gap-2">
            <Button onClick={handleFav}
              className={`bg-foreground-50 text-primaryText border border-primaryText w-40 flex items-center 
                justify-start space-x-2 hover:bg-blue-500 hover:text-foreground-50 hover:border-foreground-50
                ${Fav ? "bg-pink-500 text-foreground-50 border-foreground-50" : ""}`}
            >
              <FaHeart />
              <p>{Fav ? "My Favorite" : "Favorite"}</p>
            </Button>
            <Button className="bg-foreground-50 text-primaryText border border-primaryText w-40 flex items-center justify-start space-x-2 hover:bg-blue-500 hover:text-foreground-50 hover:border-foreground-50">
              <FaDonate />
              <p>Donate</p>
            </Button>
            <Button onClick={() => navigate("/support")} className="bg-foreground-50 text-amber-600 border border-amber-600 w-40 flex items-center justify-start space-x-2 hover:bg-amber-600 hover:border-foreground-50 hover:text-foreground-50">
              <MdBugReport size={18} />
              <p>Complaint</p>
            </Button>
            <Button className="bg-foreground-50 border border-red-500 text-red-700 hover:bg-red-600 hover:border-foreground-50 hover:text-foreground-50 w-40 items-center justify-start flex space-x-2" onClick={onOpen}>
              <MdReport size={18} />
              <p>Report</p>
            </Button>
          </div>
        </div>
      </div>

      {/* Chapters */}
      <div className="flex flex-col md:flex-row gap-4 !p-0">
        <div className="shadow-2xl bg-foreground-50 w-full md:w-9/12 rounded-md p-2">
          <p className="flex gap-2 items-center font-bold text-lg text-primaryText mb-4">
            <FcBiomass size="25px" />
            Chapters
          </p>
          <div className="flex justify-evenly items-center flex-wrap gap-1">
            {loading ? (
              <LoadingComponent />
            ) : chapters && chapters.length > 0 ? (
              chapters.map((chapter, index) => (
                <div
                  key={index}
                  onClick={async () => {
                    if (chapter.isPremium) {
                      try {
                        const response = await checkSubscription(novel.id);
                        if (response) {
                          navigate(`/novels/${id}/${chapter.chapterNumber}`);
                        } else {
                          toast.error("Access Denied", {
                            description: "Subscribe to unlock this chapter.",
                          });
                          navigate(`/buytiers/${id}`);
                        }
                      } catch (e) {
                        console.error(e);
                        toast.error("Error", {
                          description:
                            e.message || "An unexpected error occurred",
                        });
                      }
                    } else {
                      navigate(`/novels/${id}/${chapter.chapterNumber}`);
                    }
                  }}
                  className="h-10 items-center border-2 border-gray-200 rounded-xl p-3 w-full mx-2 flex select-none hover:shadow-sm hover:cursor-pointer hover:bg-chapterselect"
                >
                  <div className="inline-block w-full md:w-8/12">
                    <p className="text-primaryText text-xs">
                      {chapter.isPremium && (
                        <FaLock className="text-danger w-3 mx-2 inline-block" />
                      )}
                      {!chapter.isPremium && (
                        <FaUnlock className="text-primary w-3 mx-2 inline-block" />
                      )}
                      Chapter {chapter.chapterNumber} : {chapter.title}
                    </p>
                  </div>
                  <div className="inline-block w-0 md:w-4/12">
                    <p className="text-secondaryText text-right text-xs italic hidden md:block">
                      {" "}
                      {chapter.createdAt}{" "}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-foreground-900 mb-4">
                No chapters available
              </div>
            )}
          </div>
        </div>

        {/* Author Details */}
        <div className="shadow-2xl bg-foreground-50 w-full md:w-3/12 rounded-md p-2 flex justify-stretch">
          <div className="flex flex-col gap-2 w-full">
            <p className="flex gap-2 items-center select-none font-semibold text-lg text-gray-500 mb-1 justify-center mt-2">
              {/*<FaUserEdit size="25px" />*/}
              Author Details
            </p>
            {/* Placeholder for author details */}
            {loading ? (
              <LoadingComponent />
            ) : (
              novel && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <ImageOnline
                    path={novel.author.image}
                    alt={novel.author.name}
                    className="rounded-full max-w-[100px] max-h-[100px] select-none"
                  />
                  <p className="text-foreground-900 font-semibold mt-2 select-none">
                    {novel.author.displayName}
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <MdWhatsapp
                      className="social-buttons"
                      onClick={() => navigate(novel.author.whatsapp ?? "/#")}
                    />
                    <FaYoutube
                      className="social-buttons"
                      onClick={() => navigate(novel.author.youtube ?? "/#")}
                    />
                    <MdFacebook
                      className="social-buttons"
                      onClick={() => navigate(novel.author.facebook ?? "/#")}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovelChapterOverview;
