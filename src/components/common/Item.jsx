import {useNavigate} from "react-router-dom";
import Rating from "./Rating.jsx";
import ImageOnline from "@/components/common/ImageOnline.jsx";
import axios from "axios";

export default function Item ({ content }) {

    const navigate = useNavigate()

    return (
        <div className="max-w-[120px] max-h-[200px] mb-4 flex flex-col items-start" onClick={() => {
            if(localStorage.getItem("role") !== null) {
                axios.get(`/api/data/clicked/${content.id}`)
            }
            
            navigate(`/novels/${content.id}`
        )}}>
            <ImageOnline
                className="object-cover w-[120px] h-[150px] hover:scale-105 !rounded-sm transition-transform duration-300 ease-in-out hover:cursor-pointer"
                width={120}
                height={150}
                path={content.coverImage}
                alt={content.title}
                loading="lazy"
            />
            <p className="text-sm font-semibold text-foreground-700">{content.title}</p>
            <p className="text-xs text-foreground-500 line-clamp-1 text-wrap">{content.description}</p>
            <Rating rating={content.rating} size={15}/>
        </div>
    )
}