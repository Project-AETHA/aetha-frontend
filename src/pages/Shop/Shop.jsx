import SearchBar from "./components/SearchBar.jsx";
import { Link } from 'react-router-dom'
import ViewBooks from "../../components/ViewBooks.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";
import EbookItem from "@/components/common/EbookItem.jsx";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import {toast} from "sonner";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";

export default function ShopPage() {

    const [isLoading, setIsLoading] = useState(false)
    const [ebooks, setEbooks] = useState([])

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
                    {isLoading ? (
                        <LoadingComponent />
                    ) : (
                        ebooks.map((item, index) => (
                            <EbookItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                                price={item.price}
                                image={item.cover_image}
                                id={item.id}
                            />
                        ))
                    )}
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
                    {isLoading ? (
                        <LoadingComponent />
                    ) : (
                        ebooks.map((item, index) => (
                            <EbookItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                                price={item.price}
                                image={item.cover_image}
                                id={item.id}
                            />
                        ))
                    )}
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
                    {isLoading ? (
                        <LoadingComponent />
                    ) : (
                        ebooks.map((item, index) => (
                            <EbookItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                rating={item.rating}
                                price={item.price}
                                image={item.cover_image}
                                id={item.id}
                            />
                        ))
                    )}
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
