import React, { useState } from "react";
import { Image, Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";



function Subscribe() {
    let recommendations = [
        {
            title: "THE GREAT GASBY",
            description: "Recommendation description",
            image: "../../public/images/books/book1.jpg",
            author: "James Wan",
            badge1: "../../public/images/badge.png"
        },
    ];

    return (
        <>
{/* disaply recommendations as text */}
<div className="bg-foreground-50">
   <div className="w-full rounded-md pt-5">
        {recommendations && recommendations.map((recommendation, index) => (
            <div className=" md:w-1/2 m-auto text-primaryText text-center" key={index}>
                <div className="flex justify-center">
                    <div className="inline-block">
                    <Image

                        width="100px"
                        height="160px"
                        className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
                        alt="NextUI hero Image"
                        src={recommendation.image}
                    />
                    </div>


                    </div>

                    <div className="inline-block justify-center">
                        <h1 className="text-xl font-semibold">{recommendation.title}</h1>
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-md text-secondaryText">{recommendation.author}</h1>
                        </div>
                    </div>
                ))}
   </div>
        
        <div className="md:flex justify-center md:gap-5 md:mx-0 mx-10 pb-5">
            <div className="m-auto w-[300px] mt-5 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Card className="border border-secondaryText shadow-md">
                    <CardHeader>
                        <p className="text-md font-semibold m-auto"> Tier 01 : Chapters 05-10 </p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="h-40 overflow-y-auto gap-1">
                        {/* random chapter names */}
                        <p className="text-sm text-secondaryText">Chapter 05 : The Fire Blast</p>
                        <p className="text-sm text-secondaryText">Chapter 06 : Return of the Earth</p>
                        <p className="text-sm text-secondaryText">Chapter 07 : Death of King </p>
                        <p className="text-sm text-secondaryText">Chapter 08 : Next King </p>
                        <p className="text-sm text-secondaryText">Chapter 09 : The Fire Blast</p>
                        <p className="text-sm text-secondaryText">Chapter 10 : Return of the Earth</p>

                    </CardBody>
                    <Divider />
                    <CardBody>
                        {/* Price */}
                        <h1 className="text-4xl text-center"> LKR 200/= </h1>

                    </CardBody>

                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                            className="m-auto"
                        >

                            <Button variant="bordered" className="font-semibold border-accentText text-accentText hover:bg-accentText hover:text-whiteText">
                            BUY NOW
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>

            <div className="m-auto w-[300px] mt-5 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Card className="border border-secondaryText shadow-md">
                    <CardHeader>
                        <p className="text-md font-semibold m-auto"> Tier 02 : Chapters 05-15 </p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="h-40 overflow-y-auto gap-1">
                        {/* random chapter names */}
                        <p className="text-sm text-secondaryText">Chapter 05 : The Fire Blast</p>
                        <p className="text-sm text-secondaryText">Chapter 06 : Return of the Earth</p>
                        <p className="text-sm text-secondaryText">Chapter 07 : Death of King </p>
                        <p className="text-sm text-secondaryText">Chapter 08 : Next King </p>
                        <p className="text-sm text-secondaryText">Chapter 09 : The Fire Blast</p>
                        <p className="text-sm text-secondaryText">Chapter 10 : Return of the Earth</p>
                        <p className="text-sm text-secondaryText">Chapter 11 : Return of the Earth II </p>
                        <p className="text-sm text-secondaryText">Chapter 12 : End of the Earth</p>
                        <p className="text-sm text-secondaryText">Chapter 13 : Death </p>
                        <p className="text-sm text-secondaryText">Chapter 14 : Kill Queen </p>
                        <p className="text-sm text-secondaryText">Chapter 15 : Death II </p>

                    </CardBody>
                    <Divider />
                    <CardBody>
                        {/* Price */}
                        <h1 className="text-4xl text-center"> LKR 250/= </h1>

                    </CardBody>

                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                            className="m-auto"
                        >

                            <Button variant="bordered" className="font-semibold border-accentText text-accentText hover:bg-accentText hover:text-whiteText">
                            BUY NOW
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>

            <div className="m-auto w-[300px] mt-5 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Card className="border border-secondaryText shadow-md">
                    <CardHeader>
                        <p className="text-md font-semibold m-auto"> Tier 03 : Chapters 05-20</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="h-40 overflow-y-auto gap-1">
                        {/* random chapter names */}
                        <p className="text-sm text-secondaryText">Chapter 05 : The Fire Blast</p>
                        <p className="text-sm text-secondaryText">Chapter 06 : Return of the Earth</p>
                        <p className="text-sm text-secondaryText">Chapter 07 : Death of King</p>
                        <p className="text-sm text-secondaryText">Chapter 08 : Next King</p>
                        <p className="text-sm text-secondaryText">Chapter 09 : The Fire Blast</p>
                        <p className="text-sm text-secondaryText">Chapter 10 : Return of the Earth</p>
                        <p className="text-sm text-secondaryText">Chapter 11 : Return of the Earth II</p>
                        <p className="text-sm text-secondaryText">Chapter 12 : End of the Earth</p>
                        <p className="text-sm text-secondaryText">Chapter 13 : Death</p>
                        <p className="text-sm text-secondaryText">Chapter 14 : Kill Queen</p>
                        <p className="text-sm text-secondaryText">Chapter 15 : Death II</p>
                        <p className="text-sm text-secondaryText">Chapter 16 : Return of the Earth III</p>
                        <p className="text-sm text-secondaryText">Chapter 17 : The phill</p>
                        <p className="text-sm text-secondaryText">Chapter 18 : Friend</p>
                        <p className="text-sm text-secondaryText">Chapter 19 : Phill's friend</p>
                        <p className="text-sm text-secondaryText">Chapter 20 : The end of phill</p>
                    </CardBody>
                    <Divider />
                    <CardBody>
                        {/* Price */}
                        <h1 className="text-4xl text-center">LKR 300/=</h1>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                            className="m-auto"
                        >
                            <Button variant="bordered" className="font-semibold border-accentText text-accentText hover:bg-accentText hover:text-whiteText">
                                BUY NOW
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>




            </div>

        </div>
        </>
    );
}

export default Subscribe;