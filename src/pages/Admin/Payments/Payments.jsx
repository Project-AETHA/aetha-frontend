import React from 'react'
import { IoPeople, IoMenu, IoLogoUsd } from 'react-icons/io5';
import { LiaAdSolid, LiaGhostSolid } from "react-icons/lia";
import { FcTodoList } from "react-icons/fc";
import { FcDataEncryption } from "react-icons/fc";
import { IoBookSharp } from "react-icons/io5";
import { SiLibreofficewriter } from "react-icons/si";


function BoxWrapper({ children }) {
    return <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center justify-center">{children}</div>
}



function Payments() {
    return (
        <div>
            <div className="flex gap-4 m-4">
            <BoxWrapper>
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">Advertisements</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <FcTodoList size={64}  />
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">$154,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">Subscriptions</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <FcDataEncryption color="green" size={64} />
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">$454,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">E-Book Selling</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <SiLibreofficewriter color='orange' size={64} />
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">$34,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">Pre Selling Registration</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <IoBookSharp  size={64} color='green'/>
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">$4,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
            <div>
            <BoxWrapper>
                <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">Pre Selling Registration</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <IoBookSharp  size={64} color='green'/>
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">$4,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
        </div>
    )
}

export default Payments