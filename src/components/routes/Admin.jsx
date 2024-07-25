import UserManagement from "../../pages/Admin/UserManagement/UserManagement.jsx";
import SingleUser from "../../pages/Admin/UserManagement/SingleUser.jsx";
import ContentManagemenet from "../../pages/Admin/UserManagement/ContentManagemenet.jsx";


export default function RoutesAdmin () {
    return [
        { path: '/admin', element: <div className="bg-blue-200">Custom Content</div>, layout: "admin_dashboard" },
        { path: '/admin/users', element: <UserManagement />, layout: "admin_dashboard" },
        { path: '/admin/users/:userId', element: <SingleUser />, layout: "admin_dashboard" },
        { path: '/admin/content', element: <ContentManagemenet/>, layout: "admin_dashboard" },
    ]
}