import Sidebar from "../pages/Profile/components/Sidebar/Sidebar.jsx"
import BreadCrumbs from "../components/common/BreadCrumb.jsx";

// Importing icons
import { BsPen } from "react-icons/bs";
import { MdOutlineReportProblem, MdOutlineDashboard } from "react-icons/md";
import { ImCoinDollar } from "react-icons/im";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";

export default function AdminDashboardLayout (props) {

    const menus = [
        { name: "Overview", link: "/admin", icon: MdOutlineDashboard },
        { name: "User Management", link: "/admin/users", icon: AiOutlineUser },
        { name: "Content Management", link: "/admin/contents", icon: BsPen },
        { name: "Complaints", link: "/admin/complaints", icon: TbReportAnalytics },
        { name: "Reported Content", link: "/admin/reported-content", icon: MdOutlineReportProblem },
        { name: "Transactions", link: "/admin/transactions", icon: GrTransaction }
       
        
    ];

    return (
        <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
            <Sidebar menus={menus} />
            <div className={`${props.class} w-full overflow-y-scroll default-scrollbar`}>
                <BreadCrumbs />
                {props.children}
            </div>
        </div>
    )
}