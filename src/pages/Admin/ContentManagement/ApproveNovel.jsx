import React from 'react'
import {
  Image,
  Chip,
  Button
} from "@nextui-org/react";
import { FcGallery, FcBiomass, } from "react-icons/fc";

function ApproveNovel() {
  return (

    <div className="bg-white flex justify-center pt-8">
      <div className="flex-col w-10/12 bg-gray-200 rounded-md">
      <div className='mt-4 mx-4 p-4 shadow-lg bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative' style={{ height: '50px' }}>
                    <p className='flex items-center justify-center h-full font-sans text-white text-xl font-normal'>
                        Admin Approval
                    </p>
                </div>
        <div className='text-black font-bold flex justify-start items-start ml-20 mt-4'>
          <FcGallery size="25px" />
          Novel
        </div>
        <div className='flex '>
          <div className="flex flex-col items-center p-6 w-1/3">

            <Image
              className=""
              width={180}
              height={180}
              alt="NextUI Fruit Image with Zoom"
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
            />
            <div className="font-semibold m-4 flex items-center justify-center text-foreground-700 text-xl">
              The grate adventure
            </div>
          </div>
          <div className="my-8 mr-14 w-2/3">

            <div className='flex gap-3 mt-5 mb-3'>
              <Chip color="secondary" radius='sm'>Tag 1</Chip>
              <Chip color="primary" radius='sm'>Tag 2</Chip>
              <Chip color="danger" radius='sm'>Tag 3</Chip>

            </div>
            <div className='mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis assumenda
              quaerat, eos tenetur explicabo nam in facere aspernatur fuga accusantium magni
              saepe, ex nesciunt consectetur, eum sit reiciendis mollitia. Excepturi, magni.
              Repudiandae, doloribus veritatis doloremque, odio delectus repellat saepe facilis
              adipisci ullam ratione illo iste! Voluptatum facere fugiat error. Incidunt!
            </div>
          </div>
        </div>
        <div className='text-black font-bold flex justify-start items-start ml-20 mt-4'>
          <FcBiomass size="25px" />
          Chapter 1
        </div>
        <div className='flex items-center '>
          <div className='flex justify-start items-start ml-20 mt-4 text-foreground-700 w-28'>
            Chapter Title  :
          </div>
          <div className='flex items-start ml-20 mt-4 text-foreground-700 bg-white w-64 rounded-md p-1'>
            Jane Cooper
          </div>
        </div>
        <div className='flex  '>
          <div className='flex justify-start items-start ml-20 mt-4 text-foreground-700 w-28'>
            Content  :
          </div>
          <div className='flex items-start ml-20 mt-4 text-foreground-700 bg-white w-[700px] rounded-md p-1'>
            As the first light of dawn pierced through the dense canopy of the ancient forest, a young adventurer named Aric awoke with a sense of purpose. Today was the day he had been preparing for his entire life. The tales of a hidden treasure buried deep within the heart of Eldoria had been passed down through generations, and now, it was Aric's turn to uncover the truth.
            With his trusty sword strapped to his side and a map clutched tightly in his hand, Aric set out on his journey. The path ahead was fraught with danger, but he was determined to overcome every obstacle in his way. The forest was alive with the sounds of nature, the chirping of birds and the rustling of leaves providing a soothing soundtrack to his thoughts.
            As he ventured deeper into the forest, Aric's mind wandered to the stories his grandfather used to tell him. Legends of ancient guardians, mystical creatures, and powerful relics that held the key to unimaginable power. He couldn't help but feel a mix of excitement and trepidation. The road ahead was uncertain, but he knew that the reward would be worth the risk.
            Hours passed, and the forest grew denser, the light dimming as the canopy above thickened. Aric's senses were on high alert, every rustle in the underbrush making his heart race. He had heard of the dangers that lurked in these woods – from ferocious beasts to cunning bandits – but he was prepared for anything.
            Just as he began to doubt his progress, Aric stumbled upon a clearing. In the center stood an ancient stone monument, covered in moss and vines. He approached cautiously, his eyes scanning the surroundings for any signs of danger. The monument bore strange symbols, ones he had never seen before. With a sense of awe, he realized this was a marker from the old world,
            a relic from a time long forgotten.
            Aric knelt down, tracing his fingers over the symbols. As he did, a faint glow emanated from the stone, illuminating the clearing. He could feel a surge of energy coursing through him, as if the monument itself was acknowledging his presence. With renewed determination, he knew he was on the right path.
            The journey was far from over, but Aric felt a sense of hope. The hidden treasure of Eldoria was within his grasp, and he was ready to face whatever challenges lay ahead. With a final glance at the glowing monument, he stood up and continued his quest, his heart filled with the promise of adventure and discovery.
          </div>
        </div>
        <div className='flex items-center justify-evenly p-8'>
        <Button color="primary" radius='sm'>
          Approve
        </Button>
        <Button color="secondary" radius='sm'>
          Decline
        </Button>
        </div>
      </div>

    </div>

  );






}

export default ApproveNovel