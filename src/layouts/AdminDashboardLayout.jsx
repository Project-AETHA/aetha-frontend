import Sidebar from "../components/Sidebar/AdminSidebar.jsx"
import BreadCrumbs from "../components/common/BreadCrumb.jsx";

export default function AdminDashboardLayout (props) {
    return (
        <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
            <Sidebar />
            <div className={`${props.class} w-full overflow-y-scroll default-scrollbar`}>
                <BreadCrumbs />
                {props.children}
            </div>
        </div>
    )
}