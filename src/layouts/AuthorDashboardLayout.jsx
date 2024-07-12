import Sidebar from "../components/Sidebar/AuthorSidebar.jsx"

export default function AuthorDashboardLayout (props) {
    return (
        <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
            <Sidebar />
            <div className={`${props.class} w-full`}>
                {props.children}
            </div>
        </div>
    )
}