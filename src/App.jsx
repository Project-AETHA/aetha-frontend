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
import ContactUser from './pages/Admin/UserManagement/ContactUser.jsx';

//? Importing Layouts
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";


const routes = [
    { path: '/', element: <LandingPage />, layout: "default" },
    { path: '/home', element: <Home />, layout: "default" },
    { path: '/reading', element: <Reading />, layout: "default" },
    { path: '/novels', element: <Novels />, layout: "default" },
    { path: '/poems', element: <Poems />, layout: "default" },
    { path: '/login', element: <LoginPage />, layout: "default" },
    { path: '/signup', element: <SignupPage />, layout: "default" },
    { path: '/support', element: <SupportPage />, layout: "default" },
    { path: '/author', element: <AuthorDashboard />, layout: "dashboard" },
    { path: '/pro-subscriptions', element: <ProSubscription />, layout: "default" },
    { path: '/create', element: <FirstChapter />, layout: "default" },
    { path: '/create/poem', element: <PoemCreationPage />, layout: "default" },
    { path: '/dash', element: <div className="bg-blue-200">Custom Content</div>, layout: "dashboard" },
    { path: '/shop', element: <Shop />, layout: "default" },
    { path: '/chapters', element: <Chapters />, layout: "default" },

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
                        <Route key={index} path={route.path} element={route.layout === "dashboard" ? (
                            <DashboardLayout className={route.class}>{route.element}</DashboardLayout>
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
