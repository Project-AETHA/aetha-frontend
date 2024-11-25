import 'aos/dist/aos.css';
import { FaRegClock } from "react-icons/fa";
import {useEffect, useState} from "react";
import axios from "axios";
import SearchItems from "@/pages/Shop/components/SearchItems.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import {toast} from "sonner";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";

const FIELDS = {
    PRICE: "price",
    RATING: "rating",
    TITLE: "title",
}

const SORT_OPTIONS = {
    ASCENDING: "ASC",
    DESCENDING: "DESC",
}

const NovelSelection = ({data}) => {
    const [booksData, setBooksData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchEbooksSorted () {
        setIsLoading(true);

        try {
            const response = await axios.get(`/api/ebooks/all`);

            if(response.status === 200) {
                setBooksData(response.data.content);
            }
        } catch (error) {
            toast.error("Failed to fetch ebooks.");
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if(data && data.length > 0) {
            setBooksData(data);
        } else {
            fetchEbooksSorted();
        }
    }, [data]);

    return (
        <>
            <div className="alt-container ">
                <div className="md:flex bg-gray-300 justify-start items-start -translate-y-10">
                    <div className="md:inline-block bg-gray-200 w-full md:w-full justify-start mr-2 ">
                        <div className="p-5 text-primaryText">
                            <div className="flex items-center text-green-500">
                                <FaRegClock />
                                <h1 className="font-semibold text-lg ml-2">Search Results</h1>
                            </div>
                            <hr className="border-1 border-gray-400 mt-5" />
                        </div>
                        <div className="grid grid-cols-2 place-items-center gap-3 py-5">
                            {isLoading ? (
                                <div className={"col-span-2"}>
                                    <LoadingComponent />
                                </div>
                            ) : (
                                booksData.length > 0 ? booksData.map(book => (
                                    <SearchItems key={book.id} book={book} />
                                ))
                                    : <div className="col-span-2">
                                        <NothingToDisplay retry={fetchEbooksSorted} />
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NovelSelection;