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
import Advertising from "./pages/Advertising.jsx";
import NewCampaign from "./pages/NewCampaign.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import PoemCreationPage from "./pages/PoemCreationPage.jsx";
import ProSubscription from "./pages/ProSubscription.jsx";

// Importing Layouts
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
    { path: '/create', element: <FirstChapter />, layout: "author_dashboard" },
    { path: '/admin', element: <div className="bg-blue-200">Custom Content</div>, layout: "admin_dashboard" },
    { path: '/admin/users', element: <UserManagement />, layout: "admin_dashboard" },
    { path: '/admin/users/single', element: <SingleUser />, layout: "admin_dashboard" },
    { path: '/author/publishes/poem/create', element: <PoemCreationPage />, layout: "author_dashboard" },
    { path: '/create', element: <FirstChapter />, layout: "default" },
    { path: '/shop', element: <Shop />, layout: "default" },
    { path: '/chapters', element: <Chapters />, layout: "default" },
    { path: '/author/advertising', element: <Advertising />, layout: "author_dashboard" },
    { path: '/author/advertising/newcampaign', element: <NewCampaign />, layout: "author_dashboard" },
    { path: '/chapterreading', element: <Chapterreading />, layout: "default"},
    { path: '/submitions', element: <Submitions />, layout: "author_dashboard" },
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