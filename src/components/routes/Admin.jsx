import UserManagement from "../../pages/Admin/UserManagement/UserManagement.jsx";
import SingleUser from "../../pages/Admin/UserManagement/SingleUser.jsx";
import ContentManagemenet from "../../pages/Admin/ContentManagement/ContentManagemenet.jsx";
import Complaints from "../../pages/Admin/Complaints.jsx";
import ContentList from "../../pages/Admin/ContentManagement/ContentList.jsx";
import ApproveNovel from "../../pages/Admin/ContentManagement/ApproveNovel.jsx"


export default function RoutesAdmin () {
    return [
        { path: '/admin', element: <div className="bg-blue-200">Custom Content</div>, layout: "admin_dashboard" },
        { path: '/admin/users', element: <UserManagement />, layout: "admin_dashboard" },
        { path: '/admin/users/:userId', element: <SingleUser />, layout: "admin_dashboard" },
        { path: '/admin/contents', element: <ContentManagemenet/>, layout: "admin_dashboard" },
        { path: '/admin/contents/novels', element: <ContentList/>, layout: "admin_dashboard" },
        { path: '/admin/complaints', element: <Complaints/>, layout:"admin_dashboard"},
        { path: '/admin/contents/approve', element: <ApproveNovel/>, layout:"admin_dashboard"},
        
    ]
}