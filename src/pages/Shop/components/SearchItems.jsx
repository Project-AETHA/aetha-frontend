import {Link} from "react-router-dom";
import Rating from "@/components/common/Rating.jsx";

export default function SearchItems ({book}) {
    return (
        <div key={book.id} className="w-full">
            <div className="flex w-1/2">
                <div className="inline-block mx-5">
                    <div
                        className="div space-y-3 transform hover:scale-105 transition-transform duration-300 ease-in-out mb-4">
                        <Link to="/chapters" color="foreground">
                            <img
                                src={`http://localhost:8080${book.cover_image}`}
                                alt={book.title}
                                className="h-[150px] w-[100px] object-cover rounded-sm"
                            />
                        </Link>
                    </div>
                </div>
                <div className="inline-block">
                    <h3 className="font-semibold text-primaryText text-xl">{book.title}</h3>
                    <p className="text-sm text-secondaryText">{book.author.displayName}</p>
                    <p className="text-xs text-secondaryText truncate line-clamp-2">{book.description}</p>
                    <div className="flex items-center gap-1">
                        <Rating rating={book.rating}/>
                    </div>
                    <div className="mt-2 grid">
                        <div className="flex flex-wrap gap-2">
                            {book.genres.map((genre, index) => (
                                <span className="bg-gray-300 rounded-md px-2 py-1 text-sm text-primaryText"
                                      key={index}>{genre}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-1 border-gray-400 mx-5"/>
        </div>
    )
}