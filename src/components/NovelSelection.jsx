import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import { FaStar, FaRegClock ,FaRegStar  } from "react-icons/fa";
import {useEffect, useState} from "react";
import axios from "axios";
import Rating from "@/components/common/Rating.jsx";
import SearchItems from "@/pages/Shop/components/SearchItems.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";

const FIELDS = {
    PRICE: "price",
    RATING: "rating",
    TITLE: "title",
}

const SORT_OPTIONS = {
    ASCENDING: "ASC",
    DESCENDING: "DESC",
}
const NovelSelection = () => {

    const [booksData, setBooksData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchEbooksSorted (field, order = SORT_OPTIONS.ASCENDING) {

        setIsLoading(true)

        console.log(`/api/ebooks/all/${field}/${order}`)
        const response = await axios.get(`/api/ebooks/all/${field}/${order}`);
        console.log("Sorted Data : ");
        console.log(response.data);

        if(response.status === 200) {
            setBooksData(response.data.content);
        }

        setIsLoading(false)
    }

    useEffect(() => {
        fetchEbooksSorted(FIELDS.RATING, SORT_OPTIONS.ASCENDING);
    }, []);

    return (
        <>
            <div className="alt-container ">
                <div className="md:flex bg-gray-300 justify-start items-start -translate-y-10">
                    <div className="md:inline-block bg-gray-200 w-full md:w-full justify-start mr-2 ">
                        <div className="p-5 text-primaryText">
                            <div className="flex items-center text-green-500">
                                <FaRegClock />
                                <h1 className="font-semibold text-lg ml-2">LATEST UPDATE </h1>
                            </div>
                            <hr className="border-1 border-gray-400 mt-5" />
                        </div>
                        <div className="grid grid-cols-2 place-items-center gap-3 py-5">
                            {isLoading ? (
                                <div className={"col-span-2"}>
                                    <LoadingComponent />
                                </div>
                            ) : (
                                booksData.map(book => (
                                    <SearchItems key={book.id} book={book} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NovelSelection;