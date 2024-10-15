import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Button,
    Avatar,
    Accordion,
    AccordionItem,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    User,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./common/ThemeSwitcher";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import logo from "/images/logo.svg";

import NotificationsTab from "./common/Notifications/NotificationsTab.jsx";

function isLinkActive (link) {
    if (link === "/") {
        return window.location.pathname === "/";
    }
    return window.location.pathname.startsWith(link);
}

export default function Navigation() {
    const navigate = useNavigate();

    const { user } = useAuthContext();
    const { handleLogout } = useLogout();

    const [notificationTab, setNotificationTab] = useState(false);

    //* Navigation items
    const items = [
        {
            title: "Read",
            subItems: [
                { key: "novels", title: "Novels", link: "/novels" },
                { key: "shortstories", title: "Short Stories", link: "#shortstories" },
                { key: "poems", title: "Poems", link: "/poems" },
                { key: "nisades", title: "Nisades", link: "#nisades" },
            ],
        },
        {
            title: "Write",
            link: "/author",
        },
        {
            title: "Shop",
            link: "/shop",
        },
        {
            title: "Community",
            link: "/forumselection",
        },
    ];

    return (
        <Navbar isBordered>
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent
                className="md:hidden flex pr-3 w-full justify-center"
                justify="center"
            >
                <NavbarBrand className="flex gap-1 max-w-fit">
                    <img src={logo} alt="aetha-ogo" className="w-7" />
                    <Link to="/" className="text-black dark:text-white font-bold">
                        AETHA
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarBrand className="hidden md:flex gap-1 max-w-fit" style={{}}>
                <img src={logo} alt="aetha-ogo" className="w-7" />
                <Link className="text-black font-bold dark:text-white" to="/">
                    AETHA
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden md:flex gap-4 !justify-center px-2">
                <div className="flex gap-3">
                    <NavbarItem
                        onClick={() => navigate("/")}
                        className={`px-2 rounded hover:cursor-pointer ${isLinkActive("/") ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : ""}`}
                    >
                        Home
                    </NavbarItem>
                    <NavbarItem
                        onClick={() => navigate("/author")}
                        className={`px-2 rounded hover:cursor-pointer ${isLinkActive("/author") ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : ""}`}
                    >
                        Write
                    </NavbarItem>
                    <NavbarItem
                        onClick={() => navigate("/shop")}
                        className={`px-2 rounded hover:cursor-pointer ${isLinkActive("/shop") ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : ""}`}
                    >
                        Shop
                    </NavbarItem>

                    <NavbarItem
                        onClick={() => navigate("/forumselection")}
                        className={`px-2 rounded hover:cursor-pointer ${isLinkActive("/forumselection") ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : ""}`}
                    >
                        Community
                    </NavbarItem>
                </div>
                |
                <div className="flex gap-3">
                    <NavbarItem
                        onClick={() => navigate("/novels")}
                        className={`px-2 rounded hover:cursor-pointer ${isLinkActive("/novels") ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : ""}`}
                    >
                        Novels
                    </NavbarItem>
                    <NavbarItem
                        onClick={() => navigate("/shortstories")}
                        className={`px-2 rounded hover:cursor-pointer ${isLinkActive("/shortstories") ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : ""}`}
                    >
                        Shorts
                    </NavbarItem>
                    <NavbarItem
                        onClick={() => navigate("/poems-nisades")}
                        className={`px-2 rounded hover:cursor-pointer ${isLinkActive("/poems-nisades") ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : ""}`}
                    >
                        Poems & Nisades
                    </NavbarItem>
                </div>
            </NavbarContent>


            <NotificationsTab visible={notificationTab} setVisible={setNotificationTab} />
            <ThemeSwitcher />

            {!user && (
                <NavbarContent justify="end">
                    <NavbarItem className="lg:flex">
                        <Button color="primary" className="font-bold" variant="flat" onClick={() => navigate("/login")}>
                            Login
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button color="secondary" variant="solid" onClick={() => navigate("/signup")}>
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            )}

            {user && (
                <Dropdown placement="bottom-start">
                    {/* Visible in large screens */}
                    <DropdownTrigger>
                        <div>
                            <div className="lg:flex hidden">
                                <User
                                    as="button"
                                    avatarProps={{
                                        isBordered: true,
                                        src: user.image,
                                    }}
                                    className="transition-transform"
                                    description={"AKA " + user.displayName}
                                    name={user.firstname + " " + user.lastname}
                                />
                            </div>

                            <div className="flex lg:hidden hover:cursor-pointer">
                                <Avatar
                                    isBordered
                                    src={user.image}
                                    name={user.firstname + " " + user.lastname}
                                />
                            </div>
                        </div>
                    </DropdownTrigger>

                    <DropdownMenu
                        aria-label="User Actions"
                        variant="flat"
                        disableAnimation={true}
                        className="navbar_dropdown"
                    >
                        <DropdownItem key="profile">
                            <Link to="/profile">Profile</Link>
                        </DropdownItem>
                        <DropdownItem key="settings">
                            <Link to="/settings">Settings</Link>
                        </DropdownItem>
                        <DropdownItem key="support">
                            <Link to="/support">Support</Link>
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )}

            <NavbarMenu>
                {items &&
                    items.map((item, itemIndex) => {
                        if (item.subItems) {
                            return (
                                <Accordion key={itemIndex} className="navbar-small-item">
                                    <AccordionItem
                                        key={itemIndex}
                                        aria-label={`${item.title}-accordion`}
                                        title={item.title}
                                    >
                                        {item.subItems.map((subItem, subIndex) => {
                                            return (
                                                <NavbarMenuItem
                                                    key={subItem.key}
                                                    className="navbar-small-subitem"
                                                >
                                                    <Link
                                                        className="w-full"
                                                        color={"foreground"}
                                                        to={subItem.link}
                                                        size="lg"
                                                    >
                                                        {" "}
                                                        {subItem.title}{" "}
                                                    </Link>
                                                </NavbarMenuItem>
                                            );
                                        })}
                                    </AccordionItem>
                                </Accordion>
                            );
                        } else {
                            return (
                                <NavbarMenuItem key={itemIndex} className="navbar-small-item">
                                    <Link
                                        className="w-full"
                                        color={"foreground"}
                                        to={item.link}
                                        size="lg"
                                    >
                                        {" "}
                                        {item.title}{" "}
                                    </Link>
                                </NavbarMenuItem>
                            );
                        }
                    })}
            </NavbarMenu>
        </Navbar>
    );
}
