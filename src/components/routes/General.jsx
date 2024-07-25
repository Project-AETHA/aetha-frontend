import LoginPage from "../../pages/LoginPage.jsx";
import SignupPage from "../../pages/SignupPage.jsx";
import SupportPage from "../../pages/Support/SupportPage.jsx";
import LandingPage from "../../pages/LandingPage/LandingPage.jsx";
import Reading from "../../pages/Reading";
import Novels from "../../pages/Novels";
import Poems from "../../pages/Poems";
import Chapterreading from "../../pages/Chapterreading.jsx";
import Chapters from "../../pages/Chapter";
import Shop from "../../pages/Shop";
import Subscribe from "../../pages/Subscribe";

export default function RoutesGeneral () {
    return [
        { path: '/', element: <LandingPage />, layout: "default" },
        { path: '/login', element: <LoginPage />, layout: "simple" },
        { path: '/signup', element: <SignupPage />, layout: "simple" },
        { path: '/support', element: <SupportPage />, layout: "default" },
        { path: '/shop', element: <Shop />, layout: "default" },
        { path: '/chapters', element: <Chapters />, layout: "default" },
        { path: '/chapterreading', element: <Chapterreading />, layout: "default" },
        { path: '/reading', element: <Reading />, layout: "default" },
        { path: '/novels', element: <Novels />, layout: "default" },
        { path: '/poems', element: <Poems />, layout: "default" },
        { path: '/subscribe', element: <Subscribe />, layout: "default" },
    ]
}