
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
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
    }
  ]

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>

      <div className='bg-gray-500 min-h-screen '>
        <div className='grid grid-cols-12 gap-2'>
          <Accordion
            showDivider={false}
            className="p-2 flex flex-col gap-1 col-span-2"
            variant="shadow"
            itemClasses={itemClasses}
          >
            <AccordionItem
              key="1"
              aria-label="Connected devices"


              title="Connected devices"
            >

              <div className=' flex flex-col mx-4'>
                <Button color="primary" className='my-0.5'>
                  Secondary
                </Button>
                <Button color="primary" className='my-0.5'>
                  Secondary
                </Button>
                <Button color="primary" className='my-0.5'>
                  Secondary
                </Button>
              </div>

            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Apps Permissions"
              title="Apps Permissions"
            >
              <div className=' flex flex-col mx-4'>
                <Button color="secondary" className='my-0.5'>
                  Secondary
                </Button>
                <Button color="secondary" className='my-0.5'>
                  Secondary
                </Button>
                <Button color="secondary" className='my-0.5'>
                  Secondary
                </Button>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Pending tasks"
              classNames={{ subtitle: "text-warning" }}
              title="Pending tasks"
            >
              <div className=' flex flex-col mx-4'>
                <Button color="danger" className='my-0.5'>
                  Secondary
                </Button>
                <Button color="danger" className='my-0.5'>
                  Secondary
                </Button>
                <Button color="danger" className='my-0.5'>
                  Secondary
                </Button>
              </div>

            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Card expired"
              classNames={{ subtitle: "text-danger" }}
              title={
                <p className="flex gap-1 items-center">
                  Card expired
                </p>
              }
            >
              <div className=' flex flex-col mx-4'>
                <Button color="success" className='my-0.5'>
                  Secondary
                </Button>
                <Button color="success" className='my-0.5'>
                  Secondary
                </Button>
                <Button color="success" className='my-0.5'>
                  Secondary
                </Button>
              </div>
            </AccordionItem>
          </Accordion>
          <div className="col-span-7 ">
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
          <div className="col-span-3 bg-blue-300 p-4 mt-4"></div>
        </div>
      </div>


    </>
  );
}

export default Poems;