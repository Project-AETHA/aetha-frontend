import Sidebar from "../components/Sidebar/AdminSidebar.jsx"

export default function AdminDashboardLayout (props) {
    return (
        <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
            <Sidebar />
            <div className={`${props.class} w-full`}>
                {props.children}
            </div>
        </div>
    )
}