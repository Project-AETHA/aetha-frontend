import {Image} from "@nextui-org/react";
import {Link} from "react-router-dom";
import Rating from "./Rating.jsx";


export default function ItemHorizontal ({ content }) {
    return (
        <Link to={`/${content.type.toLowerCase()}/${content.id}`}>
            <div className="max-h-[200px] flex gap-2">
                <Image
                    width={150}
                    height={200}
                    className="hover:scale-105 !rounded-sm transition-transform duration-300 ease-in-out hover:cursor-pointer"
                    alt="NextUI hero Image"
                    src={content.image}
                />
                <div>
                    <p className="text-sm font-semibold text-foreground-700">{content.title}</p>
                    <p className="text-xs text-foreground-500 line-clamp-2 text-wrap">{content.description}</p>
                    <Rating rating={content.rating} size={15}/>
                </div>
            </div>
        </Link>
    )
}