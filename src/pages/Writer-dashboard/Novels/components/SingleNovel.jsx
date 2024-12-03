import {Card, CardBody, CardFooter} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import Rating from "@/components/common/Rating.jsx";
import axios from "axios";


function SingleNovel({novel}) {

    const navigate = useNavigate();

    return (
        <Card
            className="hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out" 
            shadow="none" key={novel.id} isPressable onClick={() => {
            if(localStorage.getItem("role") !== null) {
                axios.get(`/api/data/clicked/${novel.id}`)
            }

            navigate(`/author/novels/details/${novel.id}`)
        }}>
            <CardBody className="p-0 max-w-[150px] min-w-[150px] overflow-hidden rounded-[15px]">
                <ImageOnline
                    path={novel.coverImage}
                    alt={novel.title}
                    className="max-w-[150px] h-[180px] object-cover"
                />
            </CardBody>
            <CardFooter className="flex flex-col items-start p-1">
                <h3 className="text-sm font-semibold truncate max-w-[150px] text-left">{novel.title}</h3>
                <div className="flex items-center mt-2">
                    <Rating rating={novel.rating} size={15} />
                </div>
            </CardFooter>
        </Card>
    )
}

export default SingleNovel;