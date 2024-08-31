import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const EbookItem = ({ image, title, description, rating, price }) => {
    return (
        <div className="flex flex-col items-start rounded-md">
            <Link to="/buybook">
                <img
                    src={`http://localhost:8080${image}`}
                    alt={title}
                    width="150px"
                    height="250px"
                    className="hover:scale-105"
                />
                <p className="font-semibold text-sm text-primaryText">{title}</p>
                <p className="text-xs text-secondaryText">{description}</p>
                <p className="flex text-sm text-secondaryText">
                    {rating} <FaStar className="text-yellow-500" />
                </p>
                <p className="text-sm text-primaryText">{price}</p>
            </Link>
        </div>
    );
};

export default EbookItem;