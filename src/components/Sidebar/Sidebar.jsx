import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Sidebar () {

    const menus = [
        { name: "dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "user", link: "/", icon: AiOutlineUser },
        { name: "messages", link: "/", icon: FiMessageSquare },
        { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
        { name: "File Manager", link: "/", icon: FiFolder },
        { name: "Cart", link: "/", icon: FiShoppingCart },
        { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
        { name: "Setting", link: "/", icon: RiSettings4Line },
    ];

    const [open, setOpen] = useState(true);

    return (
        <div
            className={`bg-foreground-50 text-foreground-900 min-h-screen ${
                open ? "w-72" : "w-16"
            } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-end">
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer text-foreground-900"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {menus?.map((menu, i) => (
                    <Link
                        to={menu?.link}
                        key={i}
                        className={` ${
                            menu?.margin && "mt-5"
                        } text-foreground-900 hover:text-foreground-50 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                    >
                        <div>{React.createElement(menu?.icon, {size: "20", className: "hover:text-white"})}</div>
                        <h2
                            className={`whitespace-pre duration-500 ${
                                !open && "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                        >
                            {menu?.name}
                        </h2>
                        <h2
                            className={`${
                                open && "hidden"
                            } absolute left-48 bg-white font-semibold whitespace-pre text-black rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            {menu?.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}