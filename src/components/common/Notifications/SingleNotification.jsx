import { useNavigate } from 'react-router-dom';
import {
    FaBell,
    FaExclamationTriangle,
    FaEnvelope,
    FaCalendarAlt,
    FaInfoCircle,
    FaLock,
    FaTag,
    FaTasks,
    FaCommentAlt,
    FaBug
} from 'react-icons/fa';

const SingleNotification = ({ notification, closeNotificaions }) => {
    const navigate = useNavigate();

    // Function to select the icon, text color, and background color based on notification category
    const getCategoryStyles = (category) => {
        switch (category) {
            case 'GENERAL':
                return { icon: <FaInfoCircle size={24} />, color: 'text-blue-500', bgColor: 'bg-blue-100' };
            case 'SYSTEM_ALERT':
                return { icon: <FaExclamationTriangle size={24} />, color: 'text-red-500', bgColor: 'bg-red-100' };
            case 'MESSAGE':
                return { icon: <FaEnvelope size={24} />, color: 'text-green-500', bgColor: 'bg-green-100' };
            case 'REMINDER':
                return { icon: <FaCalendarAlt size={24} />, color: 'text-orange-500', bgColor: 'bg-orange-100' };
            case 'SECURITY_ALERT':
                return { icon: <FaLock size={24} />, color: 'text-darkred-500', bgColor: 'bg-red-100' };
            case 'PROMOTION':
                return { icon: <FaTag size={24} />, color: 'text-purple-500', bgColor: 'bg-purple-100' };
            case 'SOCIAL':
                return { icon: <FaCommentAlt size={24} />, color: 'text-pink-500', bgColor: 'bg-pink-100' };
            case 'UPDATE':
                return { icon: <FaInfoCircle size={24} />, color: 'text-cyan-500', bgColor: 'bg-cyan-100' };
            case 'ERROR':
                return { icon: <FaBug size={24} />, color: 'text-red-500', bgColor: 'bg-red-100' };
            case 'TASK':
                return { icon: <FaTasks size={24} />, color: 'text-teal-500', bgColor: 'bg-teal-100' };
            case 'EVENT':
                return { icon: <FaCalendarAlt size={24} />, color: 'text-yellow-500', bgColor: 'bg-yellow-100' };
            default:
                return { icon: <FaBell size={24} />, color: 'text-gray-500', bgColor: 'bg-gray-100' };
        }
    };

    const { icon, color, bgColor } = getCategoryStyles(notification.category);

    return (
        <div
            className={`
                flex items-center space-x-4 hover:cursor-pointer
                p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105
                ${bgColor} ${color} 
                select-none
            `}
            onClick={() => {
                navigate(`${notification.link}`)
                closeNotificaions();
            }}
        >
            {/* Icon */}
            <div className="text-2xl">
                {icon}
            </div>

            {/* Notification Content */}
            <div className="flex flex-col">
                <span className="font-semibold text-sm">{notification.subject}</span>
                <span className="text-xs text-gray-700">{notification.message}</span>
            </div>
        </div>
    );
};

export default SingleNotification;