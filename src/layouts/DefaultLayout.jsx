import Footer from "../components/Footer.jsx";
import BreadCrumb from "../components/common/BreadCrumb.jsx";

export default function DefaultLayout (props) {
    return (
        <>
            <BreadCrumb />
            <div className="alt-container">
                {props.children}
            </div>
            <Footer/>
        </>
    )
}
