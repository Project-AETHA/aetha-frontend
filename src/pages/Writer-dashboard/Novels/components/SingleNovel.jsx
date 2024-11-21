import {Card, CardBody, CardFooter} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import Rating from "@/components/common/Rating.jsx";


function SingleNovel({novel}) {

    const navigate = useNavigate();

    return (
        <Card shadow="none" key={novel.id} isPressable onClick={() => navigate(`/author/novels/details/${novel.id}`)}>
            <CardBody className="p-0 max-w-[150px] min-w-[150px] overflow-hidden">
                <ImageOnline
                    path={novel.coverImage}
                    alt={novel.title}
                    className="w-full h-[180px] object-cover"
                />
            </CardBody>
            <CardFooter className="flex flex-col items-start p-1">
                <h3 className="text-sm font-semibold text-left">{novel.title}</h3>
                <div className="flex items-center mt-2">
                    <Rating rating={novel.rating} size={15} />
                </div>
            </CardFooter>
        </Card>
    )
}

export default SingleNovel;