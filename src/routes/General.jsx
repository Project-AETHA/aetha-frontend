import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import SupportPage from "../pages/Support/SupportPage.jsx";
import NovelLandingPage from "../pages/LandingPage/NovelLandingPage.jsx";
import Reading from "../pages/Reading.jsx";
import SearchResultsPage from "../pages/Shop/SearchResultsPage.jsx";
import Poems from "../pages/Poems.jsx";
import Chapterreading from "../pages/Chapterreading.jsx";
import Chapters from "../pages/Chapter.jsx";
import Shop from "../pages/Shop/ShopPage.jsx";
import Subscribe from "../pages/Subscribe.jsx";
import ShortStoriesReading from "../pages/ShortStoriesReading.jsx";
import Shortstories from "../pages/Shortstories.jsx";
import GeneralLandingPage from "../pages/LandingPage/GeneralLandingPage.jsx";
import TestComponent from "../components/common/Temp.tsx";
import SettingPage from '../pages/Settings.jsx';
import Forum from '../pages/Forum.jsx';
import Forumselection from '../pages/Forumselection.jsx';
import Buytiers from '../pages/Buytiers.jsx';
import ComplaintDetails from '../pages/Support/ComplaintDetails.jsx';
import Buybook from '../pages/Shop/BuyBookPage.jsx';
import UpgradeToWriter from "../pages/UpgradeToWriter.jsx";

export default function RoutesGeneral () {
    return [
        { path: '/', element: <GeneralLandingPage />, layout: "default" },
        { path: '/login', element: <LoginPage />, layout: "profile" },
        { path: '/signup', element: <SignupPage />, layout: "profile" },
        { path: '/support', element: <SupportPage />, layout: "simple" },
        { path: '/shop', element: <Shop />, layout: "default" },
        { path: '/shop/search', element: <SearchResultsPage />, layout: "default" },
        { path: '/upgrade-to-writer', element: <UpgradeToWriter />, layout: "default" },
        { path: '/novels/:novelId/:chapterNumber', element: <Chapterreading />, layout: "default" },
        { path: '/reading', element: <Reading />, layout: "default" },
        { path: '/novels', element: <NovelLandingPage />, layout: "default" },
        { path: '/novels/:novelId', element: <Chapters />, layout: "default" },
        { path: '/poems-nisades', element: <Poems />, layout: "default" },
        { path: '/subscribe', element: <Subscribe />, layout: "default" },
        { path: '/shortstoriesreading', element: <ShortStoriesReading />, layout: "default" },
        { path: '/shortstories', element: <Shortstories />, layout: "default" },
        { path: '/test', element: <TestComponent message="Hellow World" />, layout: "default" },
        { path: '/settings', element: <SettingPage />, layout: "profile_dashboard" },
        { path: '/forum', element: <Forum />, layout: "default" },
        { path: '/forumselection', element: <Forumselection />, layout: "default" },
        { path: '/buytiers/:novelId', element: <Buytiers />, layout: "default" },
        { path: '/support/:complaintId', element: <ComplaintDetails />, layout: "simple" },
        { path: '/buybook/:bookId', element: <Buybook />, layout: "default" },
    ]
}