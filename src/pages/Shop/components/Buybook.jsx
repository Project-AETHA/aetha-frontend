import { useEffect, useState } from "react";
import { Image, Button } from "@nextui-org/react";
import { FaStar, FaHeart } from "react-icons/fa";
import axios from "axios";
import { toast } from "sonner";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";

function BuybookPage({ id }) {
    const [ebook, setEbook] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getBookData() {
        setIsLoading(true);

        try {
            const response = await axios.get("/api/ebooks/" + id);

            if (response.status === 200) {
                switch (response.data.code) {
                    case ResponseCodes.SUCCESS:
                        setEbook(response.data.content);
                        toast.success(response.data.message);
                        break;
                    default:
                        console.error(response.data);
                        toast.error(response.data.message);
                        break;
                }
            } else {
                console.error(response);
                toast.error("An error occurred while fetching the ebook", {
                    description: response.data.message
                });
            }
        } catch (error) {
            console.error("Error fetching ebook data:", error);
            toast.error("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getBookData();
    }, []);

    return (
        <div className="alt-container">
            <div className="flex flex-col md:flex-row gap-4 !p-0">
                <div className="shadow-lg bg-foreground-50 w-full rounded-md pb-5 px-5">
                    <div className="flex flex-col md:flex-row items-center md:items-start m-auto text-primaryText text-center md:text-left my-10 p-5">
                        {isLoading ? (
                            <LoadingComponent />
                        ) : (
                            ebook && (
                                <>
                                    <div className="lg:w-[300px] w-40 lg:h-[400px] mx-auto md:mx-0">
                                        <Image
                                            src={`http://localhost:8080${ebook.cover_image}`}
                                            alt={ebook.title}
                                            className="rounded-md w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-5 md:mt-0 md:ml-10 flex-1 mx-10">
                                        <h1 className="md:text-4xl text-xl font-semibold">
                                            {ebook.title}
                                        </h1>
                                        <h2 className="md:text-xl md:text-gray-600">
                                            {ebook.author.displayName}
                                        </h2>
                                        <p className="mt-4 md:text-md text-justify text-gray-700">
                                            {ebook.description}
                                        </p>
                                        {/* star rating */}
                                        <div className="flex my-1">
                                            <FaStar className="text-2xl text-yellow-400" />
                                            <FaStar className="text-2xl text-yellow-400" />
                                            <FaStar className="text-2xl text-yellow-400" />
                                            <FaStar className="text-2xl text-yellow-400" />
                                            <p className="text-2xl text-gray-500">4.5 (200)</p>
                                        </div>
                                        <p className="mt-4 text-4xl font-semibold text-secondaryText">
                                            LKR {ebook.price}.00
                                        </p>
                                        <div className="flex items-center gap-4 mt-4 md:justify-start justify-center">
                                            <Button className="bg-accentText text-whiteText px-8 hover:scale-105">
                                                Buy Now
                                            </Button>
                                            <Button auto variant="bordered" color="secondary">
                                                <FaHeart /> Add to Wishlist
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuybookPage;