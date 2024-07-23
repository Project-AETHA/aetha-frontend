import LoginPage from "../../pages/LoginPage.jsx";
import SignupPage from "../../pages/SignupPage.jsx";
import SupportPage from "../../pages/Support/SupportPage.jsx";
import LandingPage from "../../pages/LandingPage/LandingPage.jsx";


export default function RoutesGeneral () {
    return [
        { path: '/', element: <LandingPage />, layout: "default" },
        { path: '/login', element: <LoginPage />, layout: "simple" },
        { path: '/signup', element: <SignupPage />, layout: "simple" },
        { path: '/support', element: <SupportPage />, layout: "default" },
    ]
}