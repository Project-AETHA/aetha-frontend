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
import { Link } from "react-router-dom";
import logo from "/images/logo.png";

export default function Navigation() {

  const { user } = useAuthContext();
  const { handleLogout } = useLogout();

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden flex pr-3" justify="center">
        <NavbarBrand className="flex gap-1">
          <img src={logo} alt="aetha-ogo" className="w-7" />
          <Link to="/" className="text-black dark:text-white font-bold">AETHA</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex gap-1">
        <img src={logo} alt="aetha-ogo" className="w-7" />
        <Link className="text-black font-bold dark:text-white" to="/">AETHA</Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <div className="text-foreground hover:cursor-pointer">
                Read
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Example with disabled actions"
              variant="flat"
              color="primary"
              // disabledKeys={["edit", "delete"]}
            >
              <DropdownItem key="lg_novels" href="/novels">Novels</DropdownItem>
              <DropdownItem key="ls_shortstories" href="#shortstories">Short Stories</DropdownItem>
              <DropdownItem key="lg_poems" href="/poems">Poems</DropdownItem>
              <DropdownItem key="lg_nisades" href="#nisades">Nisades</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link to="/author" color="foreground">
            Write
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/shop">
            Shop
          </Link>
        </NavbarItem>
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
              <div className="sm:flex hidden">
                <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description={"@" + user.displayName}
                    name={user.firstname + " " + user.lastname}
                />
              </div>

              <div className="flex sm:hidden hover:cursor-pointer">
                <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              </div>
            </div>

          </DropdownTrigger>

          <DropdownMenu aria-label="User Actions" variant="flat" disableAnimation={true} className="navbar_dropdown">
            <DropdownItem key="profile">
              <Link to="/profile">Profile</Link>
            </DropdownItem>
            <DropdownItem key="settings">
              <Link to="#settings">Settings</Link>
            </DropdownItem>
            <DropdownItem key="support">
              <Link to="/support">Support</Link>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}

      <NavbarMenu>
        <NavbarMenuItem key="home" className="navbar-small-item">
          <Link className="w-full" color={"foreground"} to="/" size="lg"> Home </Link>
        </NavbarMenuItem>
          <Accordion className="navbar-small-item">
            <AccordionItem key="read" aria-label="ReadAccordian" title="Read">
              <NavbarMenuItem key="novels" className="navbar-small-subitem">
                <Link className="w-full" color={"foreground"} to="/novels" size="lg"> Novels </Link>
              </NavbarMenuItem>
              <NavbarMenuItem key="shortstories" className="navbar-small-subitem">
                <Link className="w-full" color={"foreground"} to="#shortstories" size="lg"> Short Stories </Link>
              </NavbarMenuItem>
              <NavbarMenuItem key="poems" className="navbar-small-subitem">
                <Link className="w-full" color={"foreground"} to="/poems" size="lg"> Poems </Link>
              </NavbarMenuItem>
              <NavbarMenuItem key="nisades" className="navbar-small-subitem">
                <Link className="w-full" color={"foreground"} to="#nisades" size="lg"> Nisades </Link>
              </NavbarMenuItem>
            </AccordionItem>
          </Accordion>
        <NavbarMenuItem key="write" className="navbar-small-item">
          <Link className="w-full" color={"foreground"} to="#writingPage" size="lg"> Write </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key="shop" className="navbar-small-item">
          <Link className="w-full" color={"foreground"} to="#shopPage" size="lg"> Shop </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
