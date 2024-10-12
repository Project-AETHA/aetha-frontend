import coverImg from "/images/landing_cover.jpg";
import Item from "../../components/common/Item";
import {Link} from 'react-router-dom'

import { Image, Input } from "@nextui-org/react";
import {SearchIcon} from "@/components/common/icons/SearchIcon.jsx";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function GeneralLandingPage() {
    let recommendations = [
        {
            id: 1,
            title: "The Great Gatsby",
            type: "novel",
            rating: 4.6,
            description: "lorem ipsum dolor sit amet",
            image: "/images/books/4.png",
        },
        {
            id: 1,
            title: "Walk in Shadow",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/books/2.png",
        },
        {
            id: 1,
            title: "The catcher in RYE",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/books/3.png",
        },
        {
            id: 1,
            title: "Alone",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/books/1.png",
        },
        {
            id: 1,
            title: "Brave New World",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/books/5.png",
        },
        {
            id: 1,
            title: "Soul",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/books/6.png",
        },
        {
            id: 1,
            title: "New World",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/books/7.png",
        },
        {
            id: 1,
            title: "Magic Hour",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/books/8.png",
        },
        {
            id: 1,
            title: "Norse Mythology",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/books/9.png",
        },

    ];

    let poems = [
        {
            id: 1,
            title: "The Butterfly",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/7.png",
        },
        {
            id: 1,
            title: "Fower",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/6.png",
        },
        {
            id: 1,
            title: "Hand",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/8.png",
        },
        {
            id: 1,
            title: "Alone",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/9.png",
        },
        {
            id: 1,
            title: "Flower",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/6.png",
        },
        {
            id: 1,
            title: "Hand",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/8.png",
        },
        {
            id: 1,
            title: "Alone",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/9.png",
        },
        {
            id: 1,
            title: "The Butterfly",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/7.png",
        },
        {
            id: 1,
            title: "Hand",
            type: "novel",
            rating: 4.6,
            image: "/images/poems/8.png",
        },

    ];

    let shortstories = [
        {
            id: 1,
            title: "Who's There",
            type: "novel",
            rating: 4.6,
            description: "lorem ipsum dolor sit amet",
            image: "/images/shortstories/11.png",
        },
        {
            id: 1,
            title: "The Last Boys",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/shortstories/12.png",
        },
        {
            id: 1,
            title: "Her Life",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/shortstories/13.png",
        },
        {
            id: 1,
            title: "Alone",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/shortstories/14.png",
        },
        {
            id: 1,
            title: "Who's There",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/shortstories/11.png",
        },
        {
            id: 1,
            title: "The Last Boys",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/shortstories/12.png",
        },
        {
            id: 1,
            title: "Alone",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/shortstories/14.png",
        },
        {
            id: 1,
            title: "The catcher in RYE",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/shortstories/13.png",
        },
        {
            id: 1,
            title: "Who's There",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            image: "/images/shortstories/11.png",
        },

    ];


    let ads = [
        {
            id: 1,
            title: "Advertisement 1",
            content: "Advertise your product here!",
            image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        },
        {
            id: 2,
            title: "Advertisement 2",
            content: "Advertise your product here!",
            image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        },
        {
            id: 3,
            title: "Advertisement 3",
            content: "Advertise your product here!",
            image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        },
    ];

    return (
        <div className="!rounded-none !p-0 !pb-20 !m-0 w-full h-full flex flex-col gap-10 scroll-smooth">
            <div className="relative overflow-hidden z-1">
                <Image
                    width="100%"
                    alt="Cover Image"
                    src={coverImg}
                    radius="none"
                    className="max-h-[600px] rounded"
                    style={{filter: "blur(8px)"}}
                />

                {/*<div*/}
                {/*    className="*/}
                {/*        absolute left-1/2 top-1/2 z-50*/}
                {/*        transform -translate-x-1/2 -translate-y-1/2*/}
                {/*        w-full lg:w-1/2"*/}
                {/*>*/}

                <div
                    className="absolute inset-0 rounded p-4 min-w-[500px] z-10 bg-trasparent flex flex-col gap-52 justify-center"
                >
                    <div className="flex flex-col gap-2 w-full items-center">
                        <p className="text-3xl font-bold tracking-wider" style={{fontSize: "50px"}}>Looking for a new
                            adventure ?</p>
                        <p className="font-bold" style={{fontSize: "35px"}}>Or a romantic journey ?</p>
                    </div>
                    <div className="w-1/2 self-center flex flex-col items-center gap-4">
                        <Input
                            label="Search"
                            isClearable
                            radius="lg"
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "bg-transparent",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                ],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "shadow-xl",
                                    "bg-foreground-200",
                                    "backdrop-blur-xl",
                                    "backdrop-saturate-200",
                                    "hover:bg-default-200/70",
                                    "dark:hover:bg-default/70",
                                    "group-data-[focus=true]:bg-default-200/50",
                                    "dark:group-data-[focus=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Type to search..."
                            startContent={
                                <SearchIcon
                                    className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"/>
                            }
                        />
                        <div className="flex flex-col gap-2 items-center justify-center hover:cursor-pointer" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('start_reading').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <MdKeyboardDoubleArrowDown size={100}/>
                            <p id="start_reading">Click to See More</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-large font-semibold tracking-wide text-foreground-900">Latest Updates</p>
                    <button className="text-foreground-900 hover:text-foreground-800">
                        <Link to="/novels">View All</Link>
                    </button>
                </div>
                <div className="flex gap-2 overflow-hidden flex-nowrap">
                    {recommendations.map((recommendation, index) => (
                        <Item key={index} content={recommendation} />
                    ))}
                </div>
            </div>

            <div className="px-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-large font-semibold tracking-wide text-foreground-900">Novels</p>
                    <button className="text-foreground-900 hover:text-foreground-800">
                        <Link to="/novels">View All</Link>
                    </button>
                </div>
                <div className="flex gap-2 overflow-hidden flex-nowrap">
                    {recommendations.map((recommendation, index) => (
                        <Item key={index} content={recommendation}/>

                    ))}
                </div>
            </div>

            <div className="px-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-large font-semibold tracking-wide text-foreground-900">Short Stories</p>
                    <button className="text-foreground-900 hover:text-foreground-800">
                        <Link to="/shortstories">View All</Link>
                    </button>
                </div>
                <div className="flex gap-2 overflow-hidden flex-nowrap">
                    {shortstories.map((shortstories, index) => (
                        <Item key={index} content={shortstories} />
                    ))}
                </div>
            </div>

            <div className="px-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-large font-semibold tracking-wide text-foreground-900">Poems & Nisades</p>
                    <button className="text-foreground-900 hover:text-foreground-800">
                        <Link to="/poems-nisades">View All</Link>
                    </button>
                </div>
                <div className="flex gap-2 overflow-hidden flex-nowrap">
                    {poems.map((poems, index) => (
                        <Item key={index} content={poems} />
                    ))}
                </div>
            </div>

        </div>
    );
}
