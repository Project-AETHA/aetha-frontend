import BreadCrumb from "@/components/common/BreadCrumb.jsx";

export default function SimpleLayout (props) {
    return (
        <>
            <BreadCrumb />
            <div className="alt-container">
                {props.children}
            </div>
        </>
    )
}