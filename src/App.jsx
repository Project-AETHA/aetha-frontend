import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import Navigation from "./components/Navigation";
import ProSubscription from "./pages/ProSubscription.jsx";

// Importing layouts
import AdminDashboardLayout from "./layouts/AdminDashboardLayout.jsx";
import AuthorDashboardLayout from "./layouts/AuthorDashboardLayout.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import SimpleLayout from "./layouts/SimpleLayout.jsx";
import ProfileLayout from './layouts/ProfileLayout.jsx';
import ProfileDashboardLayout from './layouts/ProfileDashboardLayout.jsx';


// Importing common files like toast(alert)
import { Toaster } from "@/components/ui/toaster"

// Routing files
import RoutesWriter from "./routes/Writer.jsx";
import RoutesGeneral from "./routes/General.jsx";
import RoutesAdmin from "./routes/Admin.jsx";
import RoutesProfile from './routes/Profile.jsx';

const routes = [
    { path: '/pro-subscriptions', element: <ProSubscription />, layout: "default" },
    ...RoutesGeneral(),
    ...RoutesWriter(),
    ...RoutesAdmin(),
    ...RoutesProfile(),
];

const layoutComponents = {
    default: DefaultLayout,
    admin_dashboard: AdminDashboardLayout,
    author_dashboard: AuthorDashboardLayout,
    simple: SimpleLayout,
    profile_dashboard: ProfileDashboardLayout,
    profile: ProfileLayout

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
            <Toaster duration={3000} />
        </Router>
    );
}

export default App;