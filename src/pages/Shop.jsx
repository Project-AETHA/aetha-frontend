import SearchBar from "../components/SearchBar";
import Item from "../components/common/Item";
import { Link } from 'react-router-dom'
import ViewBooks from "../components/ViewBooks";
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import {useEffect, useState} from "react";
import EbookItem from "@/components/common/EbookItem.jsx";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import {toast} from "sonner";
import Content_status from "@/components/predefined/ContentStatus.jsx";

const FIELDS = {
    PRICE: "price",
    RATING: "rating",
    TITLE: "title",
}

const SORT_OPTIONS = {
    ASCENDING: "ASC",
    DESCENDING: "DESC",
}

export default function ShopPage() {

    const [isLoading, setIsLoading] = useState(false)
    const [ebooks, setEbooks] = useState([])
    // const [recommendations, setRecommendations] = useState([])

    async function getAllEbooks () {

        setIsLoading(true)

        const response = await axios.get("/api/ebooks/all");

        if (response.status === 200) {

            switch (response.data.code) {
                case ResponseCodes.SUCCESS:
                    toast.success("Fetched data successfully", {
                        description: response.data.message
                    });

                    // ? Settings the data to the state
                    setEbooks(response.data.content);

                    console.log(response.data)
                    break;
                case ResponseCodes.TOKEN_INVALID:
                    toast.error(response.data.message);
                    break;
                case ResponseCodes.ERROR:
                    toast.error(response.data.message);
                    break;
                case ResponseCodes.DUPLICATED:
                    toast.warning(response.data.message);
                    break;
                default:
                    toast.error("Unknown Error", {
                        description: response.data.message
                    });
                    break;
            }
        } else {
            console.log("Error: " + response.data);
            toast.error("Server Error - Not Responding");
        }

        setIsLoading(false)
    }

    useEffect(() => {
        getAllEbooks();
    }, []);

    let recommendations = [
        {
            id: 1,
            title: "Walk in Shadow",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/books/2.png",
        },
        {
            id: 1,
            title: "The catcher in RYE",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/books/3.png",
        },
        {
            id: 1,
            title: "Alone",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/books/1.png",
        },

        {
            id: 1,
            title: "Brave New World",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/books/5.png",

        },
        {
            id: 1,
            title: "Soul",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/books/6.png",
        },
        {
            id: 1,
            title: "New World",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/books/7.png",
        },
        {
            id: 1,
            title: "Magic Hour",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/books/8.png",
        },
        {
            id: 1,
            title: "Norse Mythology",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/books/9.png",
        },

    ];



    let shortstories = [
        {
            id: 1,
            title: "Who's There",
            type: "novel",
            rating: 4.6,
            description: "lorem ipsum dolor sit amet",
            price: "LKR 2000",
            image: "../../../public/images/shortstories/11.png",
        },
        {
            id: 1,
            title: "The Last Boys",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/shortstories/12.png",
        },
        {
            id: 1,
            title: "Her Life",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/shortstories/13.png",
        },
        {
            id: 1,
            title: "Alone",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/shortstories/14.png",
        },
        {
            id: 1,
            title: "Who's There",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/shortstories/11.png",
        },
        {
            id: 1,
            title: "The Last Boys",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/shortstories/12.png",
        },
        {
            id: 1,
            title: "Alone",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/shortstories/14.png",
        },
        {
            id: 1,
            title: "The catcher in RYE",
            type: "novel",
            rating: 4.6,
            description: "Recommendation description",
            price: "LKR 2000",
            image: "../../../public/images/shortstories/13.png",
        }

    ];


    let ads = [
        {
            id: 1,
            title: "Advertisement 1",
            content: "Advertise your product here!",
            price: "LKR 2000",
            image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        },
        {
            id: 2,
            title: "Advertisement 2",
            content: "Advertise your product here!",
            price: "LKR 2000",
            image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        },
        {
            id: 3,
            title: "Advertisement 3",
            content: "Advertise your product here!",
            price: "LKR 2000",
            image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        },
    ];

    async function fetchEbooks () {
        const response = await axios.get("/api/ebooks/all");

        console.log(response.data);
    }

    async function fetchEbooksSorted (field, order = SORT_OPTIONS.ASCENDING) {
        console.log(`/api/ebooks/all/${field}/${order}`)
        const response = await axios.get(`/api/ebooks/all/${field}/${order}`);
        console.log("Sorted Data : ");
        console.log(response.data);
    }

    useEffect(() => {
        fetchEbooks();

        // ? Example code to fetch sorted data (for searching)
        // fetchEbooksSorted(FIELDS.PRICE, SORT_OPTIONS.ASCENDING);
    }, []);

    return (
        <div className="rounded-lg mb-10 w-full h-full flex flex-col gap-10 shadow-xl bg-foreground-50 px-10">


            {/* mention cover image in css */}
            <div
                className="
            m-0
            lg:px-60
            px-5
            py-20
            bg-[url('/public/images/landing_cover.jpg')]
            bg-cover
            w-full 
            rounded-lg
        "
            >
                <SearchBar />
            </div>


            <div className="flex flex-col gap-2 ">
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold tracking-wide text-foreground-900"> Best Sellers </p>
                    <button className="text-foreground-900 hover:text-foreground-800">
                        <Link to="">View All</Link>
                    </button>
                </div>
                <hr className="w-full border-primaryText" />
                <div className="flex gap-1 flex-nowrap overflow-x-auto">
                    {ebooks.map((item, index) => (
                        <EbookItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            image={item.cover_image}
                        />
                    ))}
                </div>
            </div>


            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold tracking-wide text-foreground-900"> New Release </p>
                    <button className="text-foreground-900 hover:text-foreground-800">
                        <Link to="">View All</Link>
                    </button>
                </div>
                <hr className="w-full border-primaryText" />
                <div className="flex gap-1 flex-nowrap overflow-x-auto">
                    {ebooks.map((item, index) => (
                        <EbookItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            image={item.cover_image}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold tracking-wide text-foreground-900">Recently Read </p>
                    <button className="text-foreground-900 hover:text-foreground-800">
                        <Link to="">View All</Link>
                    </button>
                </div>
                <hr className="w-full border-primaryText" />
                <div className="flex gap-2 overflow-hidden flex-nowrap">
                    {ebooks.map((item, index) => (
                        <EbookItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            image={item.cover_image}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold tracking-wide text-foreground-900"> Others </p>
                </div>
                <hr className="w-full border-primaryText" />
            </div>
            <ViewBooks />
        </div>


    );
}
