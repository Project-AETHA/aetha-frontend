import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import { useAuthContext } from "./hooks/useAuthContext.jsx";

import Navigation from "./components/Navigation";

import Reading from "./pages/Reading";
import Novels from "./pages/Novels";
import Poems from "./pages/Poems";
import Chapterreading from "./pages/Chapterreading.jsx";
import Chapters from "./pages/Chapter";
import Shop from "./pages/Shop";
import FirstChapter from "./pages/FirstChapter.jsx";
import Submitions from "./pages/Submitions.jsx";
import ProSubscription from "./pages/ProSubscription.jsx";

// ! Profile imports
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
// ! End of profile imports

import AdminDashboardLayout from "./layouts/AdminDashboardLayout.jsx";
import AuthorDashboardLayout from "./layouts/AuthorDashboardLayout.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import SimpleLayout from "./layouts/SimpleLayout.jsx";

// Routing files
import RoutesWriter from "./components/routes/Writer.jsx";
import RoutesGeneral from "./components/routes/General.jsx";
import RoutesAdmin from "./components/routes/Admin.jsx";

const routes = [
    { path: '/reading', element: <Reading />, layout: "default" },
    { path: '/novels', element: <Novels />, layout: "default" },
    { path: '/poems', element: <Poems />, layout: "default" },
    { path: '/pro-subscriptions', element: <ProSubscription />, layout: "default" },
    { path: '/create', element: <FirstChapter />, layout: "default" },
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
    { path:  "/editprofile/myblockedusers" , element: <MyblockedusersPage />, layout: "default"},
    { path: '/chapterreading', element: <Chapterreading />, layout: "default" },
    { path: '/submitions', element: <Submitions />, layout: "author_dashboard" },
    ...RoutesGeneral(),
    ...RoutesWriter(),
    ...RoutesAdmin(),
];

const layoutComponents = {
    default: DefaultLayout,
    admin_dashboard: AdminDashboardLayout,
    author_dashboard: AuthorDashboardLayout,
    simple: SimpleLayout
};

const generateRoutes = () => {
    return routes.map((route, index) => {
        const Layout = layoutComponents[route.layout];
        return (
            <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />
        );
    });
};

function App() {

    //* Debugging codes
    const { user } = useAuthContext();
    // console.log(user);

    axios.interceptors.request.use(request => {
        if (localStorage.getItem('token') !== null) {
            request.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        }

        return request;
    });

    return (
        <Router>
            <Navigation />
            <div className="content">
                <Routes>
                    {generateRoutes()}
                </Routes>
            </div>
        </Router>
    );
}

export default App;