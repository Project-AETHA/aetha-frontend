import ProfilePage from "../pages/Profile/Profile.jsx";
import EditProfilePage from "../pages/Profile/Editprofile.jsx";
import SettingPage from '../pages/Profile/Settings.jsx';
import MyfollowlistPage from '../pages/Profile/Myfollowlist.jsx';
import MyfavoritesPage from '../pages/Profile/Myfavorites.jsx';
import MyreadlaterPage from '../pages/Profile/Myreadlater.jsx';
import MyreadinghistoryPage from '../pages/Myreadinghistory.jsx';
import MycommentsPage from '../pages/Profile/Mycomments.jsx';

import Pro_fictionsPage from '../pages/Pro_fictions.jsx';
import Pro_reviewsPage from '@/pages/Profile/Pro_reviews.jsx';
import EditusernamePage from '../pages/Profile/Editusername.jsx';


export default function RoutesProfile () {
    return [
        { path: '/profile', element: <ProfilePage />, layout: "profile2"},
        { path: '/profile/edit', element: <EditProfilePage />, layout: "profile2"},
        { path: "/profile/settings" , element: <SettingPage /> , layout: "profile2"},
        { path:  "/profile/edit/username" , element: <EditusernamePage />, layout: "profile2"},
        { path:  "/author" , element: <Pro_fictionsPage />, layout: "profile2"},
        { path:  "/profile/reviews" , element: <Pro_reviewsPage />, layout: "profile2"},
        { path:  "/profile/favorites" , element: <MyfavoritesPage />, layout: "profile2"},
        { path:  "/profile/follows" , element: <MyfollowlistPage />, layout: "profile2"},
        { path:  "/profile/comments" , element: <MycommentsPage />, layout: "profile2"},
        { path:  "/profile/readlater" , element: <MyreadlaterPage />, layout: "profile2"},
        { path:  "/profile/readinghistory" , element: <MyreadinghistoryPage />, layout: "profile2"},
    ]
}