import { Link } from 'react-router-dom';
import Rating from "@/components/common/Rating.jsx";


{/* TODO - Add an animation when hovering, make it more natural. Might need to add spacing between elements as well */}
const EbookItem = ({ image, title, description, rating, price, id }) => {
    return (
        <div className="flex flex-col items-start rounded-md">
            <Link to={`/buybook/${id}`}>
                <img
                    src={`http://localhost:8080${image}`}
                    alt={title}
                    width="150px"
                    height="250px"
                    className="hover:scale-95 hover:border-4 border-secondary  duration-150 ease-in-out min-h-[200px] min-w-[150px] object-cover rounded-sm"
                />
                <p className="font-semibold text-sm text-primaryText">{title}</p>
                <p className="text-xs text-secondaryText">{description}</p>
                <p className="flex text-sm text-secondaryText">
                    <Rating rating={rating} size={16} />
                </p>
                <p className="text-sm text-primaryText">LKR {price}</p>
            </Link>
        </div>
    );
};

export default EbookItem;