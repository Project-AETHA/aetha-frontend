import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import {Accordion, AccordionItem} from "@nextui-org/react";
import "./sidebar_styles.css";

function isLinkActive(link) {
    return window.location.pathname === link;
}

export default function AuthorSidebar ({menus}) {

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
                                className={` ${menu?.margin && "mt-5"} group ${isLinkActive(menu.link) ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 !text-white" : ""}`}
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
                                            className={` ${subMenu.margin && "mt-5"} group ${isLinkActive(subMenu.link) ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 !text-white" : ""}`}
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
                        )
                    }
                })}
            </div>
        </div>
    )
}