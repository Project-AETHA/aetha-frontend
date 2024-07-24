import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Reading from "./pages/Reading";
import Novels from "./pages/Novels";
import Poems from "./pages/Poems";
import Chapters from "./pages/Chapter";
import Shop from "./pages/Shop";
import UserManagement from "./pages/Admin/UserManagement/UserManagement.jsx";
import SupportPage from "./pages/Support/SupportPage.jsx";
import AuthorDashboard from "./pages/AuthorDashboard";
import FirstChapter from "./pages/FirstChapter.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx"
import PoemCreationPage from "./pages/PoemCreationPage.jsx";
import ProSubscription from "./pages/ProSubscription.jsx";
import axios from "axios";
import {useAuthContext} from "./hooks/useAuthContext.jsx";

import ProfilePage from "./pages/Profile";
import EditProfilePage from "./pages/Editprofile";
// import FictionPage from "./pages/Fictions";
import ComposePage from './pages/Compose';
import InboxPage from './pages/Inbox';
import SentitemsPage from './pages/Sentitems';
import DraftsPage from './pages/Drafts';
import TrashcanPage from './pages/Trashcan';
import ProfileinfoPage from './pages/Editprofile';
import SettingPage from './pages/Settings';
import PremiumPage from './pages/Premium';
import AchievementsPage from './pages/Achievements';
import ReferafriendPage from './pages/Referafriend';
import ChangeemailPage from './pages/Changeemail';
import ChangepwdPage from './pages/Changepwd';
import TwofactorauthPage from './pages/Twofactorauth';
import ExternalloginPage from './pages/Externallogin';
import DownloadaccPage from './pages/Downloadacc';
import DeleteaccPage from './pages/Deleteacc';
import NotificationhistoryPage from './pages/Notificationhistory';
import NotificationsettingPage from './pages/Notificationsetting';
import NotificationthreadsPage from './pages/Notificationthreads';
import UsercpPage from './pages/Usercp';
import EditsignPage from './pages/Editsign';
import Borderwardrobe from "./pages/Borderwardrobe";

import MyfictionsPage from './pages/Myfictions';
import MyfollowlistPage from './pages/Myfollowlist';
import MyfavoritesPage from './pages/Myfavorites';
import MyreadlaterPage from './pages/Myreadlater';
import MyreadinghistoryPage from './pages/Myreadinghistory';
import MyreviewsPage from './pages/Myreviews';
import MycommentsPage from './pages/Mycomments';
import MyblockedusersPage from './pages/Myblockedusers';

//? Importing Layouts
import AdminDashboardLayout from "./layouts/AdminDashboardLayout.jsx";
import AuthorDashboardLayout from "./layouts/AuthorDashboardLayout.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import SingleUser from './pages/Admin/UserManagement/SingleUser.jsx';


const routes = [
    { path: '/', element: <LandingPage />, layout: "default" },
    { path: '/home', element: <Home />, layout: "default" },
    { path: '/reading', element: <Reading />, layout: "default" },
    { path: '/novels', element: <Novels />, layout: "default" },
    { path: '/poems', element: <Poems />, layout: "default" },
    { path: '/login', element: <LoginPage />, layout: "default" },
    { path: '/signup', element: <SignupPage />, layout: "default" },
    { path: '/support', element: <SupportPage />, layout: "default" },
    { path: '/author', element: <AuthorDashboard />, layout: "author_dashboard" },
    { path: '/pro-subscriptions', element: <ProSubscription />, layout: "default" },
    { path: '/create', element: <FirstChapter />, layout: "default" },
    { path: '/admin', element: <div className="bg-blue-200">Custom Content</div>, layout: "admin_dashboard"},
    { path: '/admin/users', element: <UserManagement/>, layout:"admin_dashboard"},
    { path: '/admin/users/single', element: <SingleUser/>, layout:"admin_dashboard"},
    { path: '/author/publishes/create/poem', element: <PoemCreationPage />, layout: "author_dashboard" },
    { path: '/shop', element: <Shop />, layout: "default" },
    { path: '/chapters', element: <Chapters />, layout: "default" },

    { path: '/editprofile/compose', element: <ComposePage />, layout: "default"},
    { path: "/editprofile/inbox" , element: <InboxPage />, layout: "default"},
    { path: "/editprofile/sentitems" , element: <SentitemsPage />, layout: "default"},
    { path: "/editprofile/drafts" , element: <DraftsPage /> , layout: "default"},
    { path: "/editprofile/trashcan" , element: <TrashcanPage />, layout: "default"},
    { path: "/editprofile/profileinfo" , element: <ProfileinfoPage />, layout: "default"},
    { path: "/editprofile/settings" , element: <SettingPage /> , layout: "default"},
    { path: "/editprofile/premium" , element: <PremiumPage />, layout: "default"},
    { path: "/editprofile/achievements" , element: <AchievementsPage />, layout: "default"},
    { path: "/editprofile/borderwardrobe" , element: <Borderwardrobe />, layout: "default"},
    { path: "/editprofile/referafriend" , element: <ReferafriendPage /> , layout: "default"},
    { path: "/editprofile/changeemail" , element: <ChangeemailPage />, layout: "default"},
    { path: "/editprofile/changepwd" , element: <ChangepwdPage />, layout: "default"},
    { path: "/editprofile/twofactorauth" , element: <TwofactorauthPage />, layout: "default"},
    { path: "/editprofile/externallogin" , element: <ExternalloginPage />, layout: "default"},
    { path:  "/editprofile/downloadacc" , element: <DownloadaccPage />, layout: "default"},
    { path: "/editprofile/deleteacc" , element: <DeleteaccPage />, layout: "default"},
    { path:  "/editprofile/notifications" , element: <NotificationsettingPage />, layout: "default"},
    { path:  "/editprofile/notificationhistory" , element: <NotificationhistoryPage />, layout: "default"},
    { path:  "/editprofile/notificationthreads" , element: <NotificationthreadsPage />, layout: "default"},
    { path:  "/editprofile/usercp" , element: <UsercpPage />, layout: "default"},
    { path:  "/editprofile/editsign" , element: <EditsignPage />, layout: "default"},
    { path:  "/editprofile/myfictions" , element: <MyfictionsPage />, layout: "default"},
    { path:  "/editprofile/myfollowlist" , element: <MyfollowlistPage />, layout: "default"},
    { path:  "/editprofile/myfavorites" , element: <MyfavoritesPage />, layout: "default"},
    { path:  "/editprofile/myreadlater" , element: <MyreadlaterPage />, layout: "default"},
    { path:  "/editprofile/myreadinghistory" , element: <MyreadinghistoryPage />, layout: "default"},
    { path:  "/editprofile/myreviews" , element: <MyreviewsPage />, layout: "default"},
    { path:  "/editprofile/mycomments" , element: <MycommentsPage />, layout: "default"},
    { path:  "/editprofile/myblockedusers" , element: <MyblockedusersPage />, layout: "default"}
];

function App() {
    const {user} = useAuthContext();
    console.log(user)
    axios.interceptors.request.use(request => {
        console.log(request)

        if (localStorage.getItem('token') !== null) {
            request.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        }

        return request
    })

    return (

        <Router>
            <Navigation/>
            <div className="content">
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.layout === "admin_dashboard" ? (
                            <AdminDashboardLayout className={route.class}>{route.element}</AdminDashboardLayout>
                        ) : route.layout === "author_dashboard" ? (
                            <AuthorDashboardLayout className={route.class}>{route.element}</AuthorDashboardLayout>
                        ) : (
                            <DefaultLayout>{route.element}</DefaultLayout>
                        )} />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
