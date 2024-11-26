import {Card, CardBody, CardFooter} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import Rating from "@/components/common/Rating.jsx";


function SingleNovel({ShortStory}) {

    const navigate = useNavigate();

    return (
        <Card shadow="none" key={ShortStory.id} isPressable onClick={() => navigate(`/author/ShortStorys/details/${ShortStory.id}`)}>
            <CardBody className="p-0 max-w-[150px] min-w-[150px] overflow-hidden">
                <ImageOnline
                    path={ShortStory.coverImage}
                    alt={ShortStory.title}
                    className="w-full h-[180px] object-cover"
                />
            </CardBody>
            <CardFooter className="flex flex-col items-start p-1">
                <h3 className="text-sm font-semibold text-left">{ShortStory.title}</h3>
                <div className="flex items-center mt-2">
                    <Rating rating={ShortStory.rating} size={15} />
                </div>
            </CardFooter>
        </Card>
    )
}

export default SingleNovel;