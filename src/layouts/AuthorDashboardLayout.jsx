import Sidebar from "../components/Sidebar/Sidebar.jsx"
// import BreadCrumbs from "../components/common/BreadCrumb.jsx";


// Importing icons
import { MdAttachMoney, MdOutlineDashboard } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { RiAdvertisementLine } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";

export default function AuthorDashboardLayout (props) {

    const menus = [
        { name: "Overview", link: "/author", icon: MdOutlineDashboard },
        { name: "Publishes", link: "/author/publishes", icon: LiaBookSolid,
            subMenus: [
                { name: "Poems", link: "/author/publishes/poems", icon: LiaBookSolid },
                { name: "Short Stories", link: "/author/publishes/short-stories", icon: LiaBookSolid },
                { name: "Novels", link: "/author/publishes/novels", icon: LiaBookSolid },
                { name: "Nisades", link: "/author/publishes/nisades", icon: LiaBookSolid },
            ]
        },
        { name: "Notes", link: "/author/notes", icon: LuPenTool },
        { name: "Advertising", link: "/author/advertising", icon: RiAdvertisementLine },
        { name: "E-Book Selling", link: "/author/ebooks", icon: MdAttachMoney },
        { name: "Create Poem", link: "/author/publishes/poem/create", icon: MdAttachMoney, margin: true },
    ];

    return (
        <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
            <Sidebar menus={menus} />
            <div className={`${props.class} w-full overflow-y-scroll default-scrollbar`}>
                {/* <BreadCrumbs /> */}
                {props.children}
            </div>
        </div>
    )
}