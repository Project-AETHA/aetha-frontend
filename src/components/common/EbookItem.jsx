import { Link } from 'react-router-dom';
import Rating from "@/components/common/Rating.jsx";

//* Framer-motion Imports
import { motion } from "framer-motion";

{/* TODO - Add an animation when hovering, make it more natural. Might need to add spacing between elements as well */}
const EbookItem = ({ image, title, description, rating, price, id }) => {
    return (
        <motion.div
            initial={{ rotate: '0deg', scale: 1 }}
            whileHover={{ rotate: '1deg', scale: 0.95 }}
            transition={{ type: 'backInOut', stiffness: 200 }}
            exit={{ rotate: '0deg', scale: 1 }}
            className="flex flex-col items-start rounded-md"
        >
            <Link to={`/buybook/${id}`}>
                <img
                    src={`http://localhost:8080${image}`}
                    alt={title}
                    width="150px"
                    height="250px"
                    className="hover:scale-95 hover:border-4 border-secondary  duration-150 ease-in-out h-[200px] w-[150px] object-cover rounded-sm"
                />
                <p className="font-semibold text-sm text-primaryText max-w-[150px] truncate">{title}</p>
                <p className="text-xs text-secondaryText max-w-[150px] truncate">{description}</p>
                <div className="flex text-sm text-secondaryText">
                    <Rating rating={rating} size={16} />
                </div>
                <p className="text-sm text-primaryText">LKR {price}</p>
            </Link>
        </motion.div>
    );
};

export default EbookItem;