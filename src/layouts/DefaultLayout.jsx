import Footer from "../components/Footer.jsx";

export default function DefaultLayout (props) {
    return (
        <>
            <div className="alt-container">
                {props.children}
            </div>
            <Footer/>
        </>
    )
}