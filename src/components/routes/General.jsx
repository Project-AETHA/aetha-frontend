import LoginPage from "../../pages/LoginPage.jsx";
import SignupPage from "../../pages/SignupPage.jsx";
import SupportPage from "../../pages/Support/SupportPage.jsx";
import NovelLandingPage from "../../pages/LandingPage/NovelLandingPage.jsx";
import Reading from "../../pages/Reading";
import Novels from "../../pages/Novels";
import Poems from "../../pages/Poems";
import Chapterreading from "../../pages/Chapterreading.jsx";
import Chapters from "../../pages/Chapter";
import Shop from "../../pages/Shop";
import Subscribe from "../../pages/Subscribe";
import ShortStoriesReading from "../../pages/ShortStoriesReading";
import Shortstories from "../../pages/Shortstories";
import GeneralLandingPage from "../../pages/LandingPage/GeneralLandingPage.jsx";
import TestComponent from "../../components/common/Tables/Temp.tsx";
import SettingPage from '../../pages/Settings';
import Forum from '../../pages/Forum';
import Forumselection from '../../pages/Forumselection';
import Buytiers from '../../pages/Buytiers';
import ComplaintDetails from '../../pages/Support/ComplaintDetails.jsx';

export default function RoutesGeneral () {
    return [
        { path: '/', element: <GeneralLandingPage />, layout: "default" },
        { path: '/login', element: <LoginPage />, layout: "simple" },
        { path: '/signup', element: <SignupPage />, layout: "simple" },
        { path: '/support', element: <SupportPage />, layout: "simple" },
        { path: '/shop', element: <Shop />, layout: "default" },
        { path: '/novel/:novelId', element: <Chapters />, layout: "default" },
        { path: '/chapterreading', element: <Chapterreading />, layout: "default" },
        { path: '/reading', element: <Reading />, layout: "default" },
        { path: '/novels', element: <NovelLandingPage />, layout: "default" },
        { path: '/poems-nisades', element: <Poems />, layout: "default" },
        { path: '/subscribe', element: <Subscribe />, layout: "default" },
        { path: '/shortstoriesreading', element: <ShortStoriesReading />, layout: "default" },
        { path: '/shortstories', element: <Shortstories />, layout: "default" },
        { path: '/test', element: <TestComponent message="Hellow World" />, layout: "default" },
        { path: '/settings', element: <SettingPage />, layout: "profile_dashboard" },
        { path: '/forum', element: <Forum />, layout: "default" },
        { path: '/forumselection', element: <Forumselection />, layout: "default" },
        { path: '/buytiers', element: <Buytiers />, layout: "default" },
        { path: '/support/:complaintId', element: <ComplaintDetails />, layout: "simple" },
    ]
}