import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const sections = [
  {
    title: "Supported Links",
    items: [
      { name: "Novels", link: "/novels" },
      { name: "Shorts", link: "/shortstories" },
      { name: "Poems", link: "/poems-nisadas" },
    ],
  },
  {
    title: "Other Links",
    items: [
      { name: "Community", link: "/forumselection" },
      { name: "Shop", link: "/shop" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms", link: "/terms" },
      { name: "Privacy", link: "/privacy" },
      { name: "Cookies", link: "/cookies" },
    ],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div className="w-full bg-gray-300 text-primaryText py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-primaryText hover:text-white">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 border border-primaryText rounded-md hover:scale-105 hover:shadow-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-100">
        <p className="py-4 text-primaryText">
          2024 Aetha (PVT) Ltd. All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => (
            <a href={x.link} key={index} target="_blank" rel="noopener noreferrer">
              <x.icon className="text-primaryText hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
