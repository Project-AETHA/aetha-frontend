import { Image, Button } from "@nextui-org/react";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import useFetch from "@/hooks/useFetch.jsx";
import Rating from "@/components/common/Rating.jsx";
import axios from 'axios';
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function BuyBookPage(props) {

    const navigate = useNavigate();

    // ? Used the useFetch custom hook to get the required ebook data
    const { data: ebook, loading: isLoading } = useFetch(`/api/ebooks/${props.id}`);

    async function handleBuying() {
        const response = await axios.post(`/api/ebooks/buy/${props.id}`);

        if (response.status === 200 && response.data.code === "00") {
            toast.success(response.data.message);
            navigate("/library");
        } else {
            toast.error(response.data.message);
        }
    }

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
                                            <Rating rating={ebook.rating} />
                                        </div>
                                        <p className="mt-4 text-4xl font-semibold text-secondaryText">
                                            LKR {ebook.price}.00
                                        </p>
                                        <div className="flex items-center gap-4 mt-4 md:justify-start justify-center">
                                            <Button className="bg-accentText text-whiteText px-8 hover:scale-105" onClick={handleBuying}>
                                                Buy Now
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

export default BuyBookPage;