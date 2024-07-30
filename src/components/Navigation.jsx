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
import logo from "/images/logo.svg";

export default function Navigation() {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const { handleLogout } = useLogout();

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
            className="hover:cursor-pointer"
          >
            Home
          </NavbarItem>
          <NavbarItem
            onClick={() => navigate("/author")}
            className="hover:cursor-pointer"
          >
            Write
          </NavbarItem>
          <NavbarItem
            onClick={() => navigate("/shop")}
            className="hover:cursor-pointer"
          >
            Shop
          </NavbarItem>
        </div>
        |
        <div className="flex gap-3">
          <NavbarItem
            onClick={() => navigate("/novels")}
            className="hover:cursor-pointer"
          >
            Novels
          </NavbarItem>
          <NavbarItem
            onClick={() => navigate("/shortstories")}
            className="hover:cursor-pointer"
          >
            Shorts
          </NavbarItem>
          <NavbarItem
            onClick={() => navigate("/poems-nisades")}
            className="hover:cursor-pointer"
          >
            Poems & Nisades
          </NavbarItem>
        </div>
      </NavbarContent>

      <ThemeSwitcher />

      {!user && (
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
