import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Star} from "lucide-react";
import {useNavigate} from "react-router-dom";


function SingleNovel({novel}) {

    const navigate = useNavigate();

    return (
        <Card shadow="none" key={novel.id} isPressable onClick={() => navigate(`/author/novels/${novel.id}`)}>
            <CardBody className="p-0">
                <Image
                    shadow="sm"
                    radius="sm"
                    width="100%"
                    alt={novel.title}
                    className="w-[120px] object-cover h-[180px]"
                    src={novel.coverImage}
                    href='/author/chapter'
                />
            </CardBody>
            <CardFooter className="flex flex-col items-start p-1">
                <h3 className="text-sm font-semibold text-left">{novel.title}</h3>
                <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-xs font-medium">{novel.rating}</span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default SingleNovel;