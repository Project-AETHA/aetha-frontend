import Sidebar from "../pages/Profile/components/Sidebar/Sidebar.jsx"
// import BreadCrumbs from "../components/common/BreadCrumb.jsx";


// Importing icons
import { MdAttachMoney, MdOutlineDashboard } from "react-icons/md";
import { LuPenTool } from "react-icons/lu";
import { RiAdvertisementLine } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { SlWallet } from "react-icons/sl";
import { BiParagraph } from "react-icons/bi";

export default function AuthorDashboardLayout (props) {

    const menus = [
        { name: "Overview", link: "/author", icon: MdOutlineDashboard },
        { name: "Publishes", icon: LiaBookSolid,
            subMenus: [
                { name: "Novels", link: "/author/novels", icon: LiaBookSolid },
                { name: "Short Stories", link: "/author/short-stories", icon: LiaBookSolid },
                { name: "Poems & Nisades", link: "/author/poems", icon: LiaBookSolid },
            ]
        },
        { name: "Notes", link: "/author/notes", icon: LuPenTool },
        { name: "Advertising", link: "/author/advertising", icon: RiAdvertisementLine },
        { name: "E-Books", link: "/author/ebooks", icon: HiOutlineBookmarkAlt },
        { name: "Revenue", link: "/author/revenue", icon: SlWallet },
        // { name: "Create Poem", link: "/author/publishes/poem/create", icon: MdAttachMoney, margin: true },
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