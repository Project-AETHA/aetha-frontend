import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsPen } from "react-icons/bs";
import { MdAttachMoney, MdOutlineReportProblem, MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AdminSidebar () {

    const menus = [
        { name: "Overview", link: "/admin", icon: MdOutlineDashboard },
        { name: "User Management", link: "/admin/users", icon: AiOutlineUser },
        { name: "Content Management", link: "/admin/contents", icon: BsPen },
        { name: "Complaints", link: "/admin/complaints", icon: TbReportAnalytics },
        { name: "Payments", link: "/admin/payments", icon: MdAttachMoney },
        { name: "Reported Content", link: "/admin/reported-content", icon: MdOutlineReportProblem },
        { name: "Report Generation", link: "/admin/report-generation", icon: TbReportAnalytics },
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
