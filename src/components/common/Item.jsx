import {Image} from "@nextui-org/react";
import {Link} from "react-router-dom";
import Rating from "./Rating.jsx";


export default function Item ({ content }) {
    return (
        <Link to={`/reading/${content.type.toLowerCase()}/${content.id}`}>
            <div className="max-w-[150px] flex flex-col">
                <Image
                    width={150}
                    height={200}
                    className="hover:scale-105 !rounded-sm transition-transform duration-300 ease-in-out hover:cursor-pointer"
                    alt="NextUI hero Image"
                    src={content.image}
                />
                <p className="text-sm font-semibold text-foreground-700">{content.title}</p>
                <p className="text-xs text-foreground-500 line-clamp-2 text-wrap">{content.description}</p>
                <Rating rating={content.rating} size={15}/>
            </div>
        </Link>
    )
}