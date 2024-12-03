import Rating from "@/components/common/Rating.jsx";
import { Image } from '@nextui-org/react';
import { useNavigate } from "react-router-dom";

const Ebook = ({ image, title, description, rating }) => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-start rounded-md select-none hover:cursor-pointer" onClick={() => navigate("/library")}>
            <Image
                src={`http://localhost:8080${image}`}
                alt={title}
                width="150px"
                height="200px"
                className="hover:scale-95 hover:border-4 border-secondary  duration-150 ease-in-out h-[200px] w-[150px] object-cover rounded-sm"
            />
            <p className="font-semibold text-sm text-primaryText max-w-[150px] truncate">{title}</p>
            <p className="text-xs text-secondaryText max-w-[150px] truncate">{description}</p>
            <div className="flex text-sm text-secondaryText">
                <Rating rating={rating} size={16} />
            </div>
        </div>
    );
};

export default Ebook;