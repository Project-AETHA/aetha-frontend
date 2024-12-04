import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { MdOutlineSettings } from "react-icons/md";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import axios from 'axios';
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "sonner";

function Reading({ data, setData, loading, setLoading }) {

  const { user } = useAuthContext();

  const navigate = useNavigate();
  async function checkSubscription(novelId) {
    console.log(user)
    if(user) {
      const response = await axios.get(`/api/subscription/check/${novelId}`);
      
      if(response.data.code === "00") {
        return response.data.content ?? false;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }

  let recommendations = [
    {
      title: "THE GREAT GASBY",
      description: "Recommendation description",
      image: "../../public/images/books/book1.jpg",
      author: "James Wan",
      badge1: "../../public/images/badge.png",
    },
  ];

  const [disabled, setDisabled] = useState({
    prev: false,    
    next: false
  });

  async function handleNext() {
    console.log(data)

    if (data.chapter.isPremium) {
      try {
        const response = await checkSubscription(novel.id);
        if (response) {
          navigate(`/novels/${id}/${data.chapter.chapterNumber}`);
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
      if(data.chapter.totalChapterCount === data.chapter.chapterNumber) {
        setDisabled({...disabled, next: true})
      } else {
        navigate(`/novels/${data.novel.id}/${data.chapter.chapterNumber+1}`)
      }
    }
  }

  function handlePrev() {
    if(data.chapter.chapterNumber === 1) {
      setDisabled({...disabled, prev: true})
    } else {
      setDisabled({next: false, prev: false})
      navigate(`/novels/${data.novel.id}/${data.chapter.chapterNumber-1}`)
    }
  }

  let latest_updates = recommendations.slice(0, 3);

  return (
    <div className="alt-container px-4">
      <div className="flex flex-col md:flex-row gap-4 !p-0">
        {/* Latest Updates */}
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="w-full border-5 shadow-2xl border-foreground-50 rounded-md p-2 dark:bg-[url('../../public/images/darkbackground.png')] bg-[url('../../public/images/bookbackground.png')] bg-cover">
            <div className="w-full md:w-3/12 inline-block">
              <div className="flex mx-5 items-center flex-wrap gap-2">
                <div className="max-w-[350px] w-[150px] flex flex-col">
                  {data.novel !== null ? (
                    <ImageOnline
                      className={
                        "rounded-md min-w-[100px] max-w-[150px] h-[200px]"
                      }
                      alt={data.novel.title}
                      path={data.novel.coverImage}
                    />
                  ) : (
                    <NothingToDisplay />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full md:w-9/12 inline-block align-top text-justify px-5 text-primaryText mt-5">
              <div>
                {data.novel !== null ? (
                  <div>
                    <h1 className="md:text-4xl text-xl font-semibold">
                      {" "}
                      {data.novel.title}{" "}
                    </h1>
                    <p className="md:text-xl ml-2">
                      {" "}
                      by {data.novel.author.displayName}{" "}
                    </p>
                  </div>
                ) : (
                  <NothingToDisplay />
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 !p-0">
        {/* Latest Updates */}
        <div className="shadow-2xl bg-foreground-50 w-full rounded-md py-5 p-2">
          {/* previous chapter button and next chapter button */}
          <div className="flex justify-between items-center md:mx-5">
            <Button 
                className="bg-accentText rounded-lg text-whiteText shadow-md w-[140px] h-[35px]"
                onClick={handlePrev}
                disabled={disabled.prev}
            >
              Previous Chapter
            </Button>

            <Button
              className="bg-accentText rounded-lg text-whiteText shadow-md w-[140px] h-[35px]"
              onClick={handleNext}
              disabled={disabled.next}
            >
              Next Chapter
            </Button>
          </div>

          {/* chapter story */}
          <div className="w-full md:w-full inline-block align-top text-justify px-5 text-primaryText my-5">
            <h1 className=" bg-gray-200 text-center my-4 p-2 text-xl font-semibold">
              {" "}
              Chapter {data.chapter !== null
                ? data.chapter.chapterNumber
                : 0} : {data.chapter !== null ? data.chapter.title : 0}{" "}
            </h1>
            <p>
              {data.chapter !== null
                ? data.chapter.content
                : "No content available"}
            </p>
          </div>

          {/* prvious chapter button and next chapter button */}
          <div className="flex justify-between items-center md:mx-5">
            <Button
                className="bg-accentText rounded-lg text-whiteText shadow-md w-[140px] h-[35px]"
                onClick={handlePrev}
                disabled={disabled.prev}
            >
              Previous Chapter
            </Button>
            <Button
                className="bg-accentText rounded-lg text-whiteText shadow-md w-[140px] h-[35px]"
                onClick={handleNext}
                disabled={disabled.next}
            >
              Next Chapter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reading;
