import SearchBar from "./components/SearchBar.jsx";
import { Link } from 'react-router-dom'
import ViewBooks from "../../components/ViewBooks.jsx";
import {useEffect} from "react";
import EbookItem from "@/components/common/EbookItem.jsx";
import {toast} from "sonner";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import { MdOutlineRefresh } from "react-icons/md";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";
import useGet from "@/hooks/useGet.jsx";

export default function ShopPage() {

    //* Recreate using the tanstack query
    const { data, isPending, error, isError, refetch } = useGet({
        queryKey: "shop_items",
        url: "/api/ebooks/all",
        params: {}
    })


    //? UseEffect hook is called to show the error toast only once, if an error was detected
    //? instead of showing multiple error toasts for each error occurred
    useEffect(() => {
        if (isError && !isPending) {
            toast.error("Error occurred");
            console.log(error)
        }
    }, [isError,isPending]);

    return (
        <div className="rounded-lg mb-10 w-full h-full flex flex-col gap-10 shadow-xl bg-foreground-50 px-10">


            {/* mention cover image in css */}
            <div className="m-0 lg:px-60 px-5 py-20 bg-[url('/images/landing_cover.jpg')] bg-cover w-full rounded-lg">
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
                        <NothingToDisplay retry={refetch} />
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
