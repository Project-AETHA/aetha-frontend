import React from "react";
import useGet from "@/hooks/useGet";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";
import Ebook from "./components/Ebook";

export default function MyLibrary() {

    const { data, isLoading, isError, error, refetch } = useGet({
        queryKey: "my_library",
        url: "/api/ebooks/my-ebooks",
    });

    if (isLoading) {
        return <div className="flex w-100 h-100 justify-center items-center">
            <LoadingComponent />
        </div>;
    }

    if (error) {
        return <div className="flex w-100 h-100 justify-center items-center text-black">Error: {error.message}</div>;
    }

    return (
        <div className="alt-container bg-foreground-50 rounded-md">
            <span className="text-black text-xl font-semibold">My Library</span>
            <div className="flex flex-col justify-center items-start">
                {data?.items?.length === 0 && <div className="text-black">No items in your library</div>}
                {!isLoading && !isError && data.length === 0 && (
                    <div className="text-black w-100 flex justify-center items-center">
                        <NothingToDisplay message="No items in your library" />
                    </div>
                )}
                {!isLoading && console.log(data)}
                {data.map((item, index) => (
                    <Ebook
                        key={index}
                        title={item.ebook.title}
                        description={item.ebook.description}
                        rating={item.ebook.rating}
                        price={item.ebook.price}
                        image={item.ebook.cover_image}
                        id={item.ebook.id}
                    />
                ))}
            </div>
        </div>
    );
}