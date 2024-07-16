import Sidebar from "../components/Sidebar/AuthorSidebar.jsx"
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function AuthorDashboardLayout (props) {

    const fullUrl = window.location.href

    // Regex to match and remove the protocol and domain
    const regex = /^https?:\/\/[^/]+/;
    const remainingPath = fullUrl.replace(regex, '');

    // Split the remaining path by '/' and filter out empty strings
    const pathArray = remainingPath.split('/').filter(Boolean);

    console.log(pathArray)

    let accumulatedPath = '';

    return (
        <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
            <Sidebar />
            <div className={`${props.class} w-full`}>
                <Breadcrumbs className="bg-foreground-300 px-2 py-1">
                    {pathArray &&
                        pathArray.map((path, index) => {
                            accumulatedPath += `/${path}`;
                            console.log(accumulatedPath)
                            return (
                                <BreadcrumbItem key={index}>
                                    <Link to={`${accumulatedPath}`}>
                                        <p className="capitalize">
                                            {path}
                                        </p>
                                    </Link>
                                </BreadcrumbItem>
                            )
                        })
                    }
                </Breadcrumbs>
                {props.children}
            </div>
        </div>
    )
}