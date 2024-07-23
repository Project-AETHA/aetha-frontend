import UserManagement from "../../pages/Admin/UserManagement/UserManagement.jsx";
import SingleUser from "../../pages/Admin/UserManagement/SingleUser.jsx";


export default function RoutesAdmin () {
    return [
        { path: '/admin', element: <div className="bg-blue-200">Custom Content</div>, layout: "admin_dashboard" },
        { path: '/admin/users', element: <UserManagement />, layout: "admin_dashboard" },
        { path: '/admin/users/single', element: <SingleUser />, layout: "admin_dashboard" },
    ]
}