export default function SimpleLayout (props) {
    return (
        <>
            <div className="alt-container">
                {props.children}
            </div>
        </>
    )
}