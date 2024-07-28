
import React from 'react';
import {
  Accordion,
  AccordionItem,
  Card,
  CardHeader,
  CardBody,
  Divider,

} from "@nextui-org/react";
import Poem from '../components/Poems/Poem';
import { Button } from "@nextui-org/react";



const Poems = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  function formatFollowers(followers) {
    if (followers >= 1000) {
      return (followers / 1000).toFixed(1) + 'k';
    }
    return followers.toString();
  }

  const poemList = [
    {
      id: 1,
      user: { displayName: "Madhusha Hansini" },
      duration: "3hr",
      title: "Mathematical Science",
      content: "hoidhsoaid sdhosad isdjao sdjaso doais doad oisa doasid ao dsoadij.finger review nearly start famous look crowd troops music appropriate produce instance where frozen similar unhappy try particular pocket four hundred save taught dangerous",
      tags: [
        { color: "danger", text: "Popular" },
        { color: "success", text: "Happy" }
      ],
      followers: formatFollowers(41500)
    },
    {
      id: 2,
      user: { displayName: "Nipun Bhathiya" },
      duration: "5hr",
      title: "ReactJS",
      content: "empty well peace beautiful sign essential cool according soon song brought grade find threw slowly heavy lady men combination eat depend needs person clock.children cowboy primitive noise four test story lose on price burst captured sell audience sick direction name body damage numeral nine gulf torn potatoes",
      tags: [
        { color: "primary", text: "Ongoing" },
        { color: "secondary", text: "Sci-Fi" }
      ],
      followers: formatFollowers(21315)
    },
    {
      id: 3,
      user: { displayName: "dilmi siriwardhana" },
      duration: "7hr",
      title: "MongoDB",
      content: "empty well peace beautiful sign essential cool according soon song brought grade find threw slowly heavy lady men combination eat depend needs person clock.children cowboy primitive noise four test story lose on price burst captured sell audience sick direction name body damage numeral nine gulf torn potatoes",
      tags: [
        { color: "success", text: "Ongoing" },
        { color: "secondary", text: "Sci-Fi" }
      ],
      followers: formatFollowers(78315)
    }
  ]

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>

      <div className='grid grid-cols-12 gap-2'>

        <div className="col-span-9 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide">
          {
            poemList.map(poemItem => (
              <Poem
                key={poemItem.id}
                user={poemItem.user}
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
                user={poemItem.user}
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