import UserManagement from "../../pages/Admin/UserManagement/UserManagement.jsx";
import SingleUser from "../../pages/Admin/UserManagement/SingleUser.jsx";
import ContentManagemenet from "../../pages/Admin/ContentManagement/ContentManagemenet.jsx";
import Complaints from "../../pages/Admin/Complaints/Complaints.jsx";
import ContentList from "../../pages/Admin/ContentManagement/ContentList.jsx";
import ApproveNovel from "../../pages/Admin/ContentManagement/ApproveNovel.jsx"
import Dashboard from "../../pages/Admin/Dashboard/Dashboard.jsx";
import Transactions from "../../pages/Admin/Transactions/Transactions.jsx";
import Reports from "../../pages/Admin/ReportGeneration/Reports.jsx"
import ReportedContent from "../../pages/Admin/ReportedContent/ReportedContent.jsx"
import Finance from "../../pages/Admin/Finance/Finance.jsx"
import Advertisements from "../../pages/Admin/Finance/Advertisements.jsx";
import EBookSelling from "../../pages/Admin/Finance/EBookSelling.jsx";
import Subscriptions from "../../pages/Admin/Finance/Subscriptions.jsx"
import PreSeliing from "../../pages/Admin/Finance/PreSeliing.jsx";


export default function RoutesAdmin () {
    return [
        { path: '/admin', element: <Dashboard/>, layout:"admin_dashboard"},
        { path: '/admin/users', element: <UserManagement />, layout: "admin_dashboard" },
        { path: '/admin/users/:userId', element: <SingleUser />, layout: "admin_dashboard" },
        { path: '/admin/contents', element: <ContentManagemenet/>, layout: "admin_dashboard" },
        { path: '/admin/contents/novels', element: <ContentList/>, layout: "admin_dashboard" },
        { path: '/admin/complaints', element: <Complaints/>, layout:"admin_dashboard"},
        { path: '/admin/contents/approve', element: <ApproveNovel/>, layout:"admin_dashboard"},
        { path: '/admin/payments', element: <Transactions/>, layout:"admin_dashboard"},
        { path: '/admin/transactions', element: <Transactions/>, layout:"admin_dashboard"},
        { path: '/admin/reported-content', element: <ReportedContent/>, layout:"admin_dashboard"},
        { path: '/admin/report-generation', element: <Reports/>, layout:"admin_dashboard"},
        { path: '/admin/finance', element: <Finance/>, layout:"admin_dashboard"},
        { path: '/admin/finance/advertisements', element: <Advertisements />, layout: "admin_dashboard" },
        { path: '/admin/finance/subscriptions', element: <Subscriptions />, layout: "admin_dashboard" },
        { path: '/admin/finance/ebooks', element: <EBookSelling />, layout: "admin_dashboard" },
        { path: '/admin/finance/preselling', element: <PreSeliing />, layout: "admin_dashboard" },
    ]
}