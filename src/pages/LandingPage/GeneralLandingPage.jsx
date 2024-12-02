import coverImg from "/images/openbook.jpg";
//import coverImg from "/images/heartbook.jpg";

import {Link} from 'react-router-dom'

//? Importing the components
import LoadingComponent from "@/components/utility/LoadingComponent";
import NothingToDisplay from "@/components/utility/NothingToDisplay";
import Item from "../../components/common/Item";

import { Image, Input } from "@nextui-org/react";
import {SearchIcon} from "@/components/common/icons/SearchIcon.jsx";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import useGet from "@/hooks/useGet";

export default function GeneralLandingPage() {

    const { 
        isLoading,
        data,
        isError,
        error,
        isFetching,
        refetch
    } = useGet({ url: "/api/novels/all", queryKey: "ebook2" });

    let recommendations = data;
    let poems = data;
    let shortstories = data;
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
                    style={{filter: "blur(2px)"}}
                />

                <div
                    className="absolute inset-0 rounded p-4 min-w-[500px] z-10 bg-trasparent flex flex-col gap-52 justify-center"
                >
                    <div className="flex flex-col gap-2 w-full items-center">
                        <p className="text-3xl  font-bold tracking-wider" style={{fontSize: "50px"}}>Looking for a new
                            adventure ?</p>
                        <p className="font-bold" style={{fontSize: "35px"}}>Or a romantic journey ?</p>
                    </div>
                    <div className="w-1/2 self-center flex flex-col items-center gap-2">
                        {/* <Input
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
                        /> */}
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
                <div className="flex gap-2 overflow-hidden flex-nowrap justify-center">
                    {isLoading && <LoadingComponent />}

                    {isError && <div className="text-black text-center">{error.message || "An error occurred"}</div>}

                    {!isLoading && !isError && recommendations && recommendations.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none lg:flex lg:flex-wrap place-items-center gap-3 py-5">
                        {recommendations.map((item, index) => (
                            <Item key={index} content={item} />
                        ))}
                    </div>
                    ) : (
                        !isLoading && !isError && <NothingToDisplay />
                    )}
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
                    {isLoading && <LoadingComponent />}

                    {isError && <div className="text-black text-center">{error.message || "An error occurred"}</div>}

                    {!isLoading && !isError && recommendations && recommendations.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none lg:flex lg:flex-wrap place-items-center gap-3 py-5">
                        {recommendations.map((item, index) => (
                            <Item key={index} content={item} />
                        ))}
                    </div>
                    ) : (
                        !isLoading && !isError && <NothingToDisplay />
                    )}
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
                    {isLoading && <LoadingComponent />}

                    {isError && <div className="text-black text-center">{error.message || "An error occurred"}</div>}

                    {!isLoading && !isError && shortstories && shortstories.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none lg:flex lg:flex-wrap place-items-center gap-3 py-5">
                        {shortstories.map((item, index) => (
                            <Item key={index} content={item} />
                        ))}
                    </div>
                    ) : (
                        !isLoading && !isError && <NothingToDisplay />
                    )}
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
                    {isLoading && <LoadingComponent />}

                    {isError && <div className="text-black text-center">{error.message || "An error occurred"}</div>}

                    {!isLoading && !isError && poems && poems.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-none lg:flex lg:flex-wrap place-items-center gap-3 py-5">
                        {poems.map((item, index) => (
                            <Item key={index} content={item} />
                        ))}
                    </div>
                    ) : (
                        !isLoading && !isError && <NothingToDisplay />
                    )}
                </div>
            </div>

        </div>
    );
}
