import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdAttachMoney, MdOutlineDashboard } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { RiAdvertisementLine } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function AuthorSidebar () {

    const menus = [
        { name: "Overview", link: "/author", icon: MdOutlineDashboard },
        { name: "Publishes", link: "/author/publishes", icon: LiaBookSolid },
        { name: "Notes", link: "/author/notes", icon: LuPenTool },
        { name: "Advertising", link: "/author/advertising", icon: RiAdvertisementLine },
        { name: "E-Book Selling", link: "/author/ebooks", icon: MdAttachMoney },
        { name: "Create Poem", link: "/author/publishes/poem/create", icon: MdAttachMoney, margin: true },
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
                        } text-foreground-900 hover:text-foreground-50 dark:hover:text-foreground-900 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                    >
                        <div>{React.createElement(menu?.icon, {size: "20"})}</div>
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
                            } absolute z-50 left-48 bg-white font-semibold whitespace-pre text-black rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            {menu?.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}