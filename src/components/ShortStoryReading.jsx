import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { MdOutlineSettings } from "react-icons/md";


function Reading() {
    let recommendations = [
        {
            title: "Who's there",
            description: "Recommendation description",
            image: "../../public/images/shortstories/shortstory1.jpg",
            author: "John williams",
            badge1: "../../public/images/badge.png"
        },
    ];

    let latest_updates = recommendations.slice(0, 3);

    return (
        <div className="alt-container px-4">
            <div className="flex flex-col md:flex-row gap-4 !p-0">
                {/* Latest Updates */}
                <div className="w-full border-5 border-gray-300 rounded-md p-2 dark:bg-[url('../../public/images/darkbackground.png')] bg-[url('../../public/images/bookbackground.png')] bg-cover">

                    <div className="w-full md:w-3/12 inline-block">
                        <div className="flex items-center justify-center">
                            {latest_updates &&
                                latest_updates.map((latest_update, index) => (
                                    <Link to="#" key={index}>
                                   
                                            <Image
                                                
                                                className="rounded-md hover:scale-105transition-transform duration-300 ease-in-out hover:cursor-pointer"
                                                alt="NextUI hero Image"
                                                src={latest_update.image}
                                            />


                                       
                                    </Link>
                                ))}
                        </div>
                    </div>
                    <div className="w-full md:w-9/12 inline-block align-top text-center md:text-justify px-5 text-primaryText md:mt-5 ">

                        {latest_updates &&
                            latest_updates.map((latest_update, index) => (
                                <div key={index}>
                                    <h1 className="md:text-4xl text-2xl font-semibold">  {latest_update.title} </h1>

                                    <p className="md:text-xl"> by {latest_update.author} </p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 !p-0">
                {/* Latest Updates */}
                <div className="bg-gray-300 w-full rounded-md py-5 p-2">


                    {/* reader preference butotn on right side */}
                    <div className="flex items-right justify-end mb-5 md:mx-5">
                        <Button
                            className="bg-red-900 text-white border shadow-md h-[25px]"

                        >
                            <MdOutlineSettings />
                            Reader Preference
                        </Button>
                    </div>






                    {/* chapter story */}
                    <div className="w-full md:w-full inline-block align-top text-justify px-5 text-primaryText my-5">
                     
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            pellentesque, nisl vel tincidunt ornare, felis nunc lacinia
                            sapien, vel auctor sapien odio ac felis. Sed sed magna nec
                            libero tincidunt tincidunt. Curabitur sit amet nunc ac nulla
                            facilisis semper. Integer nec velit eget odio tincidunt
                            ultrices. Nullam nec nunc vel nunc sollicitudin aliquam. Cras.

                        </p>

                        {/* line break */}
                        <br></br>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            pellentesque, nisl vel tincidunt ornare, felis nunc lacinia
                            sapien, vel auctor sapien odio ac felis. Sed sed magna nec
                            libero tincidunt tincidunt. Curabitur sit amet nunc ac nulla
                            facilisis semper. Integer nec velit eget odio tincidunt
                            ultrices. Nullam nec nunc vel nunc sollicitudin aliquam. Cras
                            nec libero nec purus ultrices varius. Integer euismod, nunc
                            eget lacinia ultricies, nunc nunc ultricies libero, vel
                            ultricies nisi nunc ac nunc. Sed in libero nec odio
                            ullamcorper ultricies. Nullam nec nunc nec libero ultrices
                            malesuada. Sed nec libero nec libero ultrices malesuada.
                            Integer nec libero nec
                        </p>

                        <br></br>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            pellentesque, nisl vel tincidunt ornare, felis nunc lacinia

                        </p>
                        <br></br>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            pellentesque, nisl vel tincidunt ornare, felis nunc lacinia
                            sapien, vel auctor sapien odio ac felis. Sed sed magna nec
                            libero tincidunt tincidunt. Curabitur sit amet nunc ac nulla
                            facilisis semper. Integer nec velit eget odio tincidunt
                            ultrices. Nullam nec nunc vel nunc sollicitudin aliquam. Cras
                            nec libero nec purus ultrices varius. Integer euismod, nunc
                            eget lacinia ultricies, nunc nunc ultricies libero, vel
                            ultricies nisi nunc ac nunc. Sed in libero nec odio
                            ullamcorper ultricies. Nullam nec nunc nec libero ultrices
                            malesuada. Sed nec libero nec libero ultrices malesuada.
                            Integer nec libero nec
                        </p>

                        <br></br>

                        <br></br>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            pellentesque, nisl vel tincidunt ornare, felis nunc lacinia
                            sapien, vel auctor sapien odio ac felis. Sed sed magna nec
                            libero tincidunt tincidunt. Curabitur sit amet nunc ac nulla
                            facilisis semper. Integer nec velit eget odio tincidunt
                            ult.
                        </p>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    );
}

export default Reading;