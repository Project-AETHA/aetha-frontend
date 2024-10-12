import SearchBar from "./components/SearchBar.jsx";
import { Link } from 'react-router-dom'
import ViewBooks from "../../components/ViewBooks.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";
import EbookItem from "@/components/common/EbookItem.jsx";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import {toast} from "sonner";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import {useQuery} from "@tanstack/react-query";
import { MdOutlineRefresh } from "react-icons/md";

export default function ShopPage() {

    //* Recreate using the tanstack query
    const {
        data,
        isPending,
        error,
        isError,
        refetch
    } = useQuery({queryKey: ["shop_items"], queryFn: getAllEbooks, retry: 3, refetchOnWindowFocus: false})

    async function getAllEbooks() {
        try {
            const response = await axios.get("/api/ebooks/all");
            if (response.status === 200) {
                switch (response.data.code) {
                    case ResponseCodes.SUCCESS:
                        return response.data.content;  // Ensure you return the content
                    case ResponseCodes.NO_DATA_FOUND:
                        throw new Error("No data found");
                    case ResponseCodes.ERROR:
                        throw new Error("Server error");
                    default:
                        throw new Error(response.data.message);
                }
            } else {
                throw new Error("Error occurred - Code " + response.data.message);
            }
        } catch (error) {
            throw new Error("Error occurred - " + error.message);
        }
    }



    //? UseEffect hook is called to show the error toast only once, if an error was detected
    //? instead of showing multiple error toasts for each error occurred
    useEffect(() => {
        if (isError && !isPending) {
            toast.error("Error occurred", {
                action: {

                    // * Below is the content of the retry button
                    label: <div className="flex gap-1 items-center">
                                <p>Retry</p>
                                <MdOutlineRefresh size={18} />
                            </div> ,
                    onClick: () => refetch()
                },

                // * Below is the custom styling applied to the retry button
                // ! Had to override the default tailwindcss classes using the ! prefix
                classNames: {
                    actionButton: "!bg-red-500"
                },
            });
            console.log(error)
        }
    }, [isError,isPending]);

    return (
        <div className="rounded-lg mb-10 w-full h-full flex flex-col gap-10 shadow-xl bg-foreground-50 px-10">


            {/* mention cover image in css */}
            <div
                className="
            m-0
            lg:px-60
            px-5
            py-20
            bg-[url('/images/landing_cover.jpg')]
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
                    {isPending ? (
                        <LoadingComponent />
                    ) : isError ? (
                        <p>{"Error occurred"}</p>
                    ) : (
                        data.map((item, index) => (
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
                    {isPending ? (
                        <LoadingComponent />
                    ) : isError ? (
                        <p>{"Error occurred"}</p>
                    ) : (
                        data.map((item, index) => (
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
                    {isPending ? (
                        <LoadingComponent />
                    ) : isError ? (
                        <p>{"Error occurred"}</p>
                    ) : (
                        data.map((item, index) => (
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
