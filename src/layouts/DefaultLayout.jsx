import Footer from "../components/Footer.jsx";

export default function DefaultLayout (props) {
    return (
        <>
            <div className="alt-container px-2 !min-w-full !w-full">
                {props.children}
            </div>
            <Footer/>
        </>
    )
}