import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Button, Textarea } from "@nextui-org/react";
import { FaComment, FaReply } from "react-icons/fa";
import { MdOutlineReport, MdLogin } from "react-icons/md";



function Forum() {

    return (
        <>
            <div className="alt-container pb-2">
                <div className="flex flex-col md:flex-row gap-4 !p-0">
                    <div className="bg-gray-300 w-full rounded-md p-2">
                        <div className="m-auto">
                        

                            <div className="md:flex m-2 border-1 md:border-0 border-whiteTxt">
                                <div className="md:w-[140px] w-full inline-block md:m-2 my-2">
                                    <img src="../../public/images/user.png" className="m-auto w-28" />
                                    <h1 className="text-center text-primaryText font-semibold my-2"> User 01 </h1>

                                    <div className="hidden md:block">
                                        <p className="text-primaryText text-xs"> Posts : 845 </p>
                                        <p className="text-primaryText text-xs"> Reputation :  100 </p>
                                        <p className="text-primaryText text-xs"> Joined : 08-10-2024 </p>
                                    </div>

                                </div>

                                <div className="md:w-10/12 w-full inline-block md:border border-whiteText md:m-2">
                                    <h1 className="p-4 font-semibold text-primaryText"> Topic : Selling My Novel - The Catcher in the Eye </h1>
                                    <hr className="bg-black"/>

                                    <p className="text-sm text-primaryText text-justify p-4">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quos unde inventore tempora autem necessitatibus debitis
                                        accusamus quisquam consectetur blanditiis ut expedita officia repudiandae culpa asperiores porro laboriosam perferendis
                                        laudantium harum, veritatis explicabo non. Minima, aspernatur officiis. Necessitatibus, voluptatibus ut quos itaque eius
                                        similique aperiam amet animi dolor perspiciatis praesentium explicabo? Animi ea ab quas quia fugit aspernatur est maiores
                                        <br /> <br />

                                        similique deleniti exercitationem commodi cum minus suscipit soluta dolorem repellendus id quam, consectetur quisquam?
                                        Suscipit nesciunt aliquam voluptatem molestiae quasi dolorum at, magnam sequi. Assumenda eos sunt, itaque delectus saepe,
                                        nisi soluta neque rem maxime iure odio quas, deleniti explicabo?
                                    </p>

                                    <hr className="mx-5 bg-black" />
                                    <img src="../../public/images/books/book2.jpg" className="m-4 w-40" />
                                    <hr className="mx-5 bg-black" />


                                    <Button variant="bordered" className="rounded-md text-xs text-accentText border border-accentText mx-5 h-5 my-5">
                                        <FaReply />
                                        Reply
                                    </Button>

                                    <Button variant="bordered" className="rounded-md text-xs text-red-600 border border-red-600 mx-5 h-5 my-5">
                                        <MdOutlineReport />
                                        Report this post
                                    </Button>
                                </div>
                            </div>



                            <div className="mt-5 md:flex m-2 border-1 md:border-0 border-whiteTxt">
                                <div className="md:w-[140px] w-full inline-block md:m-2  my-2">
                                    <img src="../../public/images/user.png" className="m-auto w-28" />
                                    <h1 className="text-center text-primaryText font-semibold my-2"> User 02 </h1>

                                    <div className="hidden md:block">
                                        <p className="text-primaryText text-xs"> Posts : 845 </p>
                                        <p className="text-primaryText text-xs"> Reputation :  100 </p>
                                        <p className="text-primaryText text-xs"> Joined : 08-10-2024 </p>
                                    </div>

                                </div>

                                <div className="md:w-10/12 w-full inline-block md:border border-whiteText md:m-2">
                                    <h1 className="p-4 font-semibold text-primaryText"> RE : You can sell your novel in sales book option. </h1>
                                    <hr />

                                    <p className="text-sm text-primaryText text-justify p-4">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quos unde inventore tempora autem necessitatibus debitis
                                        accusamus quisquam consectetur blanditiis ut expedita officia repudiandae culpa asperiores porro laboriosam perferendis
                                        laudantium harum, veritatis explicabo non. Minima, aspernatur officiis. Necessitatibus, voluptatibus ut quos itaque eius
                                        similique aperiam amet animi dolor perspiciatis praesentium explicabo? Animi ea ab quas quia fugit aspernatur est maiores
                                        <br /> <br />

                                        similique deleniti exercitationem commodi cum minus suscipit soluta dolorem repellendus id quam, consectetur quisquam?
                                        Suscipit nesciunt aliquam voluptatem molestiae quasi dolorum at, magnam sequi. Assumenda eos sunt, itaque delectus saepe,
                                        nisi soluta neque rem maxime iure odio quas, deleniti explicabo?
                                    </p>

                                   
                                </div>
                            </div>


                            <div className="mt-5 md:flex m-2 border-1 md:border-0 border-whiteTxt">
                                <div className="md:w-[140px] w-full inline-block md:m-2  my-2">
                                    <img src="../../public/images/user.png" className="m-auto w-28" />
                                    <h1 className="text-center text-primaryText font-semibold my-2"> User 03 </h1>

                                    <div className="hidden md:block">
                                        <p className="text-primaryText text-xs"> Posts : 845 </p>
                                        <p className="text-primaryText text-xs"> Reputation :  100 </p>
                                        <p className="text-primaryText text-xs"> Joined : 08-10-2024 </p>
                                    </div>

                                </div>

                                <div className="md:w-10/12 w-full inline-block md:border border-whiteText md:m-2">
                                    <h1 className="p-4 font-semibold text-primaryText"> RE : Go to the sales book option </h1>
                                    <hr />

                                    <p className="text-sm text-primaryText text-justify p-4">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quos unde inventore tempora autem necessitatibus debitis
                                        accusamus quisquam consectetur blanditiis ut expedita officia repudiandae culpa asperiores porro laboriosam perferendis
                                        laudantium harum, veritatis explicabo non. Minima, aspernatur officiis. Necessitatibus, voluptatibus ut quos itaque eius
                                        similique aperiam amet animi dolor perspiciatis praesentium explicabo? Animi ea ab quas quia fugit aspernatur est maiores
                                        <br /> <br />

                                        similique deleniti exercitationem commodi cum minus suscipit soluta dolorem repellendus id quam, consectetur quisquam?
                                        Suscipit nesciunt aliquam voluptatem molestiae quasi dolorum at, magnam sequi. Assumenda eos sunt, itaque delectus saepe,
                                        nisi soluta neque rem maxime iure odio quas, deleniti explicabo?
                                    </p>

                                   
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Forum;