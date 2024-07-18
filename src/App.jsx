import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Submitions from "./pages/Submitions.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import PoemCreationPage from "./pages/PoemCreationPage.jsx";
import ProSubscription from "./pages/ProSubscription.jsx";
import axios from "axios";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import PoemsPage from "./components/Writer-dashboard/PoemsPage.jsx";
import SingleUser from './pages/Admin/UserManagement/SingleUser.jsx';
import NotesPage from './components/Writer-dashboard/NotesPage.jsx';

// Importing Layouts
import AdminDashboardLayout from "./layouts/AdminDashboardLayout.jsx";
import AuthorDashboardLayout from "./layouts/AuthorDashboardLayout.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import SimpleLayout from "./layouts/SimpleLayout.jsx";

const routes = [
    { path: '/', element: <LandingPage />, layout: "default" },
    { path: '/home', element: <Home />, layout: "default" },
    { path: '/reading', element: <Reading />, layout: "default" },
    { path: '/novels', element: <Novels />, layout: "default" },
    { path: '/poems', element: <Poems />, layout: "default" },
    { path: '/login', element: <LoginPage />, layout: "simple" },
    { path: '/signup', element: <SignupPage />, layout: "simple" },
    { path: '/support', element: <SupportPage />, layout: "default" },
    { path: '/author', element: <AuthorDashboard />, layout: "author_dashboard" },
    { path: '/author/poems', element: <PoemsPage />, layout: "author_dashboard" },
    { path: '/author/poems/create', element: <PoemCreationPage />, layout: "author_dashboard" },
    { path: '/author/notes', element: <NotesPage />, layout: "author_dashboard" },
    { path: '/pro-subscriptions', element: <ProSubscription />, layout: "default" },
    { path: '/create', element: <FirstChapter />, layout: "default" },
    { path: '/admin', element: <div className="bg-blue-200">Custom Content</div>, layout: "admin_dashboard" },
    { path: '/admin/users', element: <UserManagement />, layout: "admin_dashboard" },
    { path: '/admin/users/single', element: <SingleUser />, layout: "admin_dashboard" },
    { path: '/shop', element: <Shop />, layout: "default" },
    { path: '/chapters', element: <Chapters />, layout: "default" },
    { path: '/submitions', element: <Submitions />, layout: "author_dashboard" }
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
    console.log(user);

    axios.interceptors.request.use(request => {
        console.log(request);

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