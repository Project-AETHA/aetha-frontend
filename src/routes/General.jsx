import LoginPage from "../pages/Auth/LoginPage.jsx";
import SignupPage from "../pages/Auth/SignupPage.tsx";
import SupportPage from "../pages/Support/SupportPage.jsx";
import NovelLandingPage from "../pages/LandingPage/NovelLandingPage.jsx";
import Reading from "../pages/Reading.jsx";
import SearchResultsPage from "../pages/Shop/SearchResultsPage.jsx";
import Poems from "../pages/Poems/Poems.jsx";
import Chapterreading from "../pages/Chapterreading.jsx";
import Chapters from "../pages/Chapter.jsx";
import Shop from "../pages/Shop/ShopPage.jsx";
import Subscribe from "../pages/Subscribe.jsx";
import ShortStoriesReading from "../pages/ShortStoriesReading.jsx";
import Shortstories from "../pages/Shortstories.jsx";
import GeneralLandingPage from "../pages/LandingPage/GeneralLandingPage.jsx";
import TestComponent from "../components/common/Temp.tsx";
import SettingPage from '../pages/Profile/Settings.jsx';
import ProfilePage from '../pages/Profile/Profile.jsx';
import EditProfilePage from '../pages/Profile/Editprofile.jsx';
import Forum from '../pages/Forum.jsx';
import Forumselection from '../pages/Forumselection.jsx';
import BuyTiers from '../pages/Buytiers.jsx';
import ComplaintDetails from '../pages/Support/ComplaintDetails.jsx';
import Buybook from '../pages/Shop/BuyBookPage.jsx';
import PaymentSuccessPage from "../components/utility/PaymentSuccess.jsx";
import PaymentFailurePage from "../components/utility/PaymentFail.jsx";
import UpgradeToWriter from "../pages/UpgradeToWriter.jsx";
import Editusername from "../pages/Profile/Editusername.jsx";
import MyLibrary from "../pages/Ebooks/MyLibrary.jsx";

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
        { path: '/profile/settings', element: <SettingPage />, layout: "profile2" },
        { path: '/profile/edit', element: <EditProfilePage />, layout: "profile2" },
        { path: '/profile/edit/username', element: <Editusername />, layout: "profile2" },
        { path: '/profile', element: <ProfilePage />, layout: "profile2" },
        { path: '/forum', element: <Forum />, layout: "default" },
        { path: '/forumselection', element: <Forumselection />, layout: "default" },
        { path: '/buytiers/:novelId', element: <BuyTiers />, layout: "default" },
        { path: '/support/:complaintId', element: <ComplaintDetails />, layout: "simple" },
        { path: '/buybook/:bookId', element: <Buybook />, layout: "default" },
        { path: '/success', element: <PaymentSuccessPage />, layout: "simple" },
        { path: '/cancel', element: <PaymentFailurePage />, layout: "simple" },
        { path: '/library', element: <MyLibrary />, layout: "default" },
    ]
}