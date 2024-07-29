import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Rating({ rating, size=20 }) {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => {
                const fullStar = Math.floor(rating);
                const halfStar = rating % 1 !== 0;

                if (index < fullStar) {
                    return <FaStar size={size} key={index} className="text-yellow-500" />;
                } else if (index === fullStar && halfStar) {
                    return <FaStarHalfAlt size={size} key={index} className="text-yellow-500" />;
                } else {
                    return <FaRegStar size={size} key={index} className="text-yellow-500" />;
                }
            })}
        </div>
    );
}

