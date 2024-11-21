import { useEffect } from 'react';
import Poem from '../components/Poems/Poem';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

const Poems = () => {

  const [ poemList , setPoemList] = useState([]);

  async function getAllPoems() {

    const response = await axios.get("/api/poems/get-all-poems");

    if(response.status == 200){

      setPoemList(response.data.content)
      toast.success("Success", { description : response.data.message })
              
    } else {
      toast.error("Error", {description: response.data.message})
    }
  }

  
  useEffect(() => {
    getAllPoems()
  }, [])

  function formatFollowers(followers) {
    if (followers >= 1000) {
      return (followers / 1000).toFixed(1) + 'k';
    }
    return followers.toString();
  }

  return (
    <>

      <div className='grid grid-cols-12 gap-2'>

        <div className="col-span-9 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide">
          {
            poemList.map(poemItem => (
              <Poem
                key={poemItem.id}
                user={poemItem.author}
                duration={poemItem.duration}
                title={poemItem.title}
                content={poemItem.content}
                tags={poemItem.tags}
                followers={poemItem.followers}

              />
            ))
          }
        </div>
        <div className="col-span-3 mt-1 mr-1 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide">

          <div className="flex gap-2 items-center bg-foreground-50 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 40 40">
              <path fill="#f78f8f" d="M20 31.441L8.5 37.191 8.5 2.5 31.5 2.5 31.5 37.191z"></path><path fill="#c74343" d="M31,3v33.382l-10.553-5.276L20,30.882l-0.447,0.224L9,36.382V3H31 M32,2H8v36l12-6l12,6V2L32,2z"></path>
            </svg>
            <p className="text-md font-bold text-red-500">Popular ths week</p>
          </div>

          {
            poemList.map(poemItem => (
              <Poem
                key={poemItem.id}
                user={poemItem.author}
                duration={poemItem.duration}
                title={poemItem.title}
                content={poemItem.content}
                tags={poemItem.tags}
                followers={poemItem.followers}

              />
            ))
          }
        </div>
      </div>


    </>
  );
}

export default Poems;