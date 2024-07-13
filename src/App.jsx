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
    { path: '/chapters', element: <Chapters />, layout: "default" }
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
