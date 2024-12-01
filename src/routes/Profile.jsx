import ProfilePage from "../pages/Profile/Profile.jsx";
import EditProfilePage from "../pages/Editprofile.jsx";
import ComposePage from '../pages/Compose.jsx';
import InboxPage from '../pages/Inbox.jsx';
import SentitemsPage from '../pages/Sentitems.jsx';
import DraftsPage from '../pages/Drafts.jsx';
import TrashcanPage from '../pages/Trashcan.jsx';
import SettingPage from '../pages/Settings.jsx';
import PremiumPage from '../pages/Premium.jsx';
import AchievementsPage from '../pages/Achievements.jsx';
import ReferafriendPage from '../pages/Referafriend.jsx';
import ChangeemailPage from '../pages/Changeemail.jsx';
import ChangepwdPage from '../pages/Changepwd.jsx';
import TwofactorauthPage from '../pages/Twofactorauth.jsx';
import ExternalloginPage from '../pages/Externallogin.jsx';
import DownloadaccPage from '../pages/Downloadacc.jsx';
import DeleteaccPage from '../pages/Deleteacc.jsx';
import NotificationhistoryPage from '../pages/Notificationhistory.jsx';
import NotificationsettingPage from '../pages/Notificationsetting.jsx';
import NotificationthreadsPage from '../pages/Notificationthreads.jsx';
import UsercpPage from '../pages/Usercp.jsx';
import EditsignPage from '../pages/Editsign.jsx';
import Borderwardrobe from "../pages/Borderwardrobe.jsx";
import MyfictionsPage from '../pages/Myfictions.jsx';
import MyfollowlistPage from '../pages/Myfollowlist.jsx';
import MyfavoritesPage from '../pages/Myfavorites.jsx';
import MyreadlaterPage from '../pages/Myreadlater.jsx';
import MyreadinghistoryPage from '../pages/Myreadinghistory.jsx';
import MyreviewsPage from '../pages/Myreviews.jsx';
import MycommentsPage from '../pages/Mycomments.jsx';
import MyblockedusersPage from '../pages/Myblockedusers.jsx';

import Pro_fictionsPage from '../pages/Pro_fictions.jsx';
import Pro_reviewsPage from '../pages/Pro_reviews.jsx';
import Pro_favoritesPage from '../pages/Pro_favorites.jsx';
import Pro_threadsPage from '../pages/Pro_threads.jsx';
import Pro_postsPage from '../pages/Pro_posts.jsx';
import Pro_achievementsPage from '../pages/Pro_achievements.jsx';
import Pro_reputationPage from '../pages/Pro_reputation.jsx';
import EditusernamePage from '../pages/Editusername.jsx';

export default function RoutesProfile () {
    return [
        { path: '/profile', element: <ProfilePage />, layout: "profile"},
        { path: '/profile/edit', element: <EditProfilePage />, layout: "profile_dashboard"},
        { path: '/profile/edit/compose', element: <ComposePage />, layout: "profile_dashboard"},
        { path: "/profile/edit/inbox" , element: <InboxPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/sentitems" , element: <SentitemsPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/drafts" , element: <DraftsPage /> , layout: "profile_dashboard"},
        { path: "/profile/edit/trashcan" , element: <TrashcanPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/settings" , element: <SettingPage /> , layout: "profile_dashboard"},
        { path: "/profile/edit/premium" , element: <PremiumPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/achievements" , element: <AchievementsPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/borderwardrobe" , element: <Borderwardrobe />, layout: "profile_dashboard"},
        { path: "/profile/edit/referafriend" , element: <ReferafriendPage /> , layout: "profile_dashboard"},
        { path: "/profile/edit/changeemail" , element: <ChangeemailPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/changepwd" , element: <ChangepwdPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/twofactorauth" , element: <TwofactorauthPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/externallogin" , element: <ExternalloginPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/downloadacc" , element: <DownloadaccPage />, layout: "profile_dashboard"},
        { path: "/profile/edit/deleteacc" , element: <DeleteaccPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/notifications" , element: <NotificationsettingPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/notificationhistory" , element: <NotificationhistoryPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/notificationthreads" , element: <NotificationthreadsPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/usercp" , element: <UsercpPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/editsign" , element: <EditsignPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/myfictions" , element: <MyfictionsPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/myfollowlist" , element: <MyfollowlistPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/myfavorites" , element: <MyfavoritesPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/myreadlater" , element: <MyreadlaterPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/myreadinghistory" , element: <MyreadinghistoryPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/myreviews" , element: <MyreviewsPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/mycomments" , element: <MycommentsPage />, layout: "profile_dashboard"},
        { path:  "/profile/edit/myblockedusers" , element: <MyblockedusersPage />, layout: "profile_dashboard"},
        
        { path:  "/author" , element: <Pro_fictionsPage />, layout: "profile"},
        { path:  "/profile/reviews" , element: <Pro_reviewsPage />, layout: "profile"},
        { path:  "/profile/favorites" , element: <Pro_favoritesPage />, layout: "profile"},
        { path:  "/profile/threads" , element: <Pro_threadsPage />, layout: "profile"},
        { path:  "/profile/posts" , element: <Pro_postsPage />, layout: "profile"},
        { path:  "/profile/achievements" , element: <Pro_achievementsPage />, layout: "profile"},
        { path:  "/profile/reputation" , element: <Pro_reputationPage />, layout: "profile"},
        { path:  "/profile/editusername" , element: <EditusernamePage />, layout: "profile_dashboard"},

        
    ]
}