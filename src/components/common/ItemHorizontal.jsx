import {useNavigate} from "react-router-dom";
import Rating from "./Rating.jsx";
import ImageOnline from "@/components/common/ImageOnline.jsx";


export default function ItemHorizontal ({ content }) {

    const navigate = useNavigate()

    return (
        <div className="max-h-[200px] flex gap-2 hover:cursor-pointer" onClick={() => navigate(`/novels/${content.id}`)}>
            <ImageOnline
                path={content.coverImage}
                alt={content.title}
                className="max-w-[100px] max-h-[150px] object-cover"
            />
            <div>
                <p className="text-sm font-semibold text-foreground-700">{content.title}</p>
                <p className="text-xs text-foreground-500 line-clamp-2 text-wrap">{content.description}</p>
                <Rating rating={content.rating} size={15}/>
            </div>
        </div>
    )
}