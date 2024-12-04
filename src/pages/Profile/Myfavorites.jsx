import React, { useState } from 'react';
import "@/components/Profile.css";
import { MdOutlineFavorite } from 'react-icons/md';
import { Button } from "@nextui-org/react";
import useGet from "@/hooks/useGet";
import { toast } from "sonner";
import axios from 'axios';
import ImageOnline from "@/components/common/ImageOnline";

function Myfavorites() {
  const [showMore, setShowMore] = useState({});

  const { data, isLoading, isError, error, refetch } = useGet({
    queryKey: "my-favourite-novels",
    url: `/api/fav/novels`
  })
  
  const toggleShowMore = (index) => {
    setShowMore(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  async function handleUnfollow(novelId) {
    const response = await axios.post(`/api/fav/novel/${novelId}?setFav=false`)
    console.log({response, data})
    if(response.status === 200 && response.data.code === "00") {
      toast.success("Unfolled Successfully")
      refetch()
    } else {
      
      toast.error("Failed to unfollow")
    }
  }

  return (
    <div>
      <div className="">
       <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
              <MdOutlineFavorite size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Favorites
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>

        <div className='m-4'>
          {!isLoading && !isError && data.map((favorite, index) => (
            <div key={index} className='h-auto border-1 border-x-white flex p-3 items-start mb-4'>
              <div className="space-y-3">
                <ImageOnline
                  path={favorite.novel.coverImage}
                  alt="novel"
                  className="h-[180px] w-[120px] object-cover rounded-md"
                />
              </div>
              <div className='p-6 w-3/4 font-semibold text-primary text-xl'>
                {favorite.title}
                <div className='mt-3 font-semibold pb-3 text-foreground text-small'>{favorite.novel.pages}</div>
                <div className='text-foreground text-small font-normal'>
                  {showMore[index] ? favorite.novel.description : `${favorite.novel.description.substring(0, 100)}...`}
                </div>
                <button 
                  onClick={() => toggleShowMore(index)} 
                  className='text-semibold text-small pl-28 text-foreground'
                >
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </button>
              </div>
              <div className='flex flex-col justify-between items-start p-3'>
                <div className='text-primary-400 text-small'>{favorite.novel.user}</div>
                <Button className="bg-danger-500 m-1 text-white" onClick={() => handleUnfollow(favorite.novel.id)}>
                  Unfavorite
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Myfavorites;
