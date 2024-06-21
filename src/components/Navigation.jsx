import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import {ThemeSwitcher} from "./common/ThemeSwitcher";

import { Link } from "react-router-dom";

import logo from "/images/logo.png";

export default function Navigation() {
  // const menuItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out",
  // ];

  const menuItems = [
    { name: "HOME", route: "/" },
    {
      name: "READ",
      route: "/reading",
      // name: "READ", link: "", submenu: [
      //     { name: "Blog Posts", link: "/blog-posts" },
      //     { name: "Novels", link: "/novels" },
      //     { name: "Poems", link: "/poems" },
      //     { name: "Short Stories", link: "/short-stories" },
      // ]
    },
    { name: "SHOP", route: "/shop" },
  ];

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden flex pr-3" justify="center">
        <NavbarBrand className="flex gap-1">
          <img src={logo} alt="aetha-ogo" className="w-7" />
          <Link className="text-black font-bold">AETHA</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex gap-1">
        <img src={logo} alt="aetha-ogo" className="w-7" />
        <Link className="text-black font-bold">AETHA</Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-xl hover:font-bold hover:text-blue-500"
              >
                Read
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Example with disabled actions"
              variant="flat"
              color="primary"
              // disabledKeys={["edit", "delete"]}
            >
              <DropdownItem key="novels" href="/novels">
                Novels
              </DropdownItem>
              <DropdownItem key="shorts">Short Stories</DropdownItem>
              <DropdownItem key="poems">Poems</DropdownItem>
              <DropdownItem key="nisades">Nisades</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" color="foreground">
            Write
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Shop
          </Link>
        </NavbarItem>
      </NavbarContent>

      <ThemeSwitcher />

      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link to="/login">
            <Button color="primary" className="font-bold" variant="flat">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/signup">
            <Button color="secondary" variant="solid">
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.name}-${item.route}`}>
            <Link
              className="w-full"
              color={"foreground"}
              href={item.route}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
