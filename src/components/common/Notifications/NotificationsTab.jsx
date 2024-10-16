import {FaBell} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";
import SingleNotification from "@/components/common/Notifications/SingleNotification.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const NotificationsTab = ({visible, setVisible}) => {

    function closeNotifications() {
        setVisible(!visible)
    }

    const [notifications, setNotifications] = useState(null);

    async function fetchNotifications() {
        await axios.get('/api/notifications/getAll')
            .then(response => {
                setNotifications(response.data.content)
                console.log(response.data.content)
            })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect( () => {
        fetchNotifications()
    }, [])

    return (
        <div className="md:relative">
            <div
                className={`
                text-primaryText
                p-2 rounded-lg hover:bg-foreground-200 hover:cursor-pointer transition-all duration-100 select-none
                ${visible ? 'bg-foreground-400' : 'bg-foreground-0'}
            `}
                onClick={closeNotifications}
            >
                <FaBell/>
            </div>
            <div
                className={`
                md:absolute bg-foreground-100 right-0 top-10
                overflow-hidden rounded-lg
                p-1
                transition-all ease-in-out duration-400
                md:transform ${visible ? 'scale-y-100' : 'scale-y-0'}
                origin-top-right
                md:min-w-[300px] md:min-h-[300px]
                fixed inset-0 md:inset-auto !top-[60px] md:!right-0 shadow-lg
                min-w-[90vw] min-h-[90vh] z-50
            `}
            >
                <ul className="flex flex-col space-y-2 bg-foreground-0 rounded p-1">
                    <li className="text-center">Notifications</li>
                    <li className="mr-2 ml-auto hover:cursor-pointer" onClick={closeNotifications}><IoMdClose
                        size={22}/></li>
                    {notifications && notifications.length > 0 &&
                        notifications.map(
                            (notification, index) =>
                                <SingleNotification key={index} notification={notification} closeNotificaions={closeNotifications} />
                        )
                    }

                    {notifications && notifications.length <= 0 && <li className="text-center">No notifications</li>}
                    {!notifications && <li className="text-center">Loading...</li>}
                </ul>
            </div>
        </div>
    )
}

export default NotificationsTab