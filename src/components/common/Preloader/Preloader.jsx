import { preLoaderAnim } from "./animations";
import { useEffect } from "react";
import "./styles.css";

export default function Preloader() {
    
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>AETHA</span>
                <span>|</span>
                <span>READ</span>
                <span>NOVELS</span>
            </div>
        </div>
    );
}