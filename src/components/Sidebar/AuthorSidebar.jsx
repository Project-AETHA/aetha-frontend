import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdAttachMoney, MdOutlineDashboard } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { RiAdvertisementLine } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import {Accordion, AccordionItem} from "@nextui-org/react";
import "./sidebar_styles.css";

export default function AuthorSidebar () {

    const menus = [
        { name: "Overview", link: "/author", icon: MdOutlineDashboard },
        { name: "Publishes", link: "/author/publishes", icon: LiaBookSolid,
            subMenus: [
                { name: "Poems", link: "/author/publishes/poems", icon: LiaBookSolid },
                { name: "Short Stories", link: "/author/publishes/short-stories", icon: LiaBookSolid },
                { name: "Novels", link: "/author/publishes/novels", icon: LiaBookSolid },
                { name: "Nisades", link: "/author/publishes/nisades", icon: LiaBookSolid },
            ]
        },
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
            <div className="sidebar-inner">
                {menus && menus.map((menu, index) => {
                    if(!menu.subMenus) {
                        return (
                            <Link
                                to={menu?.link}
                                key={index}
                                className={` ${menu?.margin && "mt-5"} group`}
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
                                    className={`${open && "hidden"} hovering-content group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        )
                    } else {
                        return (
                            <Accordion key={index} variant="light">
                                <AccordionItem key={index} aria-label={menu.title} title={menu.name} startContent={React.createElement(menu.icon, {size: "20"})} 
                                    className={`${open && "opened"}`}
                                >
                                    {menu.subMenus.map((subMenu, subIndex) => (
                                        <Link
                                            to={subMenu.link}
                                            key={subIndex}
                                            className={` ${subMenu.margin && "mt-5"} group`}
                                        >
                                            <div>{React.createElement(subMenu.icon, {size: "20"})}</div>
                                            <h2
                                                className={`whitespace-pre duration-500 ${
                                                    !open && "opacity-0 translate-x-28 overflow-hidden"
                                                }`}
                                            >
                                                {subMenu.name}
                                            </h2>
                                        </Link>
                                    ))}
                                </AccordionItem>
                            </Accordion>
                            // <Link
                            //     to={menu?.link}
                            //     key={index}
                            //     className={` ${
                            //         menu?.margin && "mt-5"
                            //     } text-foreground-900 hover:text-foreground-50 dark:hover:text-foreground-900 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            // >
                            //     <div>{React.createElement(menu?.icon, {size: "20"})}</div>
                            //     <h2
                            //         className={`whitespace-pre duration-500 ${
                            //             !open && "opacity-0 translate-x-28 overflow-hidden"
                            //         }`}
                            //     >
                            //         {menu?.name}
                            //     </h2>
                            //     <h2
                            //         className={`${
                            //             open && "hidden"
                            //         } absolute z-50 left-48 bg-white font-semibold whitespace-pre text-black rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            //     >
                            //         {menu?.name}
                            //     </h2>
                            // </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}