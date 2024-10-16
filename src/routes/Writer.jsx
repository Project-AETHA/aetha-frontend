import CreateNote from "../pages/Writer-dashboard/CreateNote.jsx";
import NotesPage from "../pages/Writer-dashboard/NotesPage.jsx";
import AuthorDashboard from "../pages/Writer-dashboard/AuthorDashboard.jsx";
import PoemsPage from "../pages/Writer-dashboard/PoemsPage.jsx";
import CreatePoem from "../pages/Writer-dashboard/CreatePoem.jsx";
import ViewNote from "../pages/Writer-dashboard/ViewNote.jsx";
import CreateNovel from "../pages/Writer-dashboard/Novels/CreateNovel.jsx";
import Chapters from "../pages/Writer-dashboard/Chapters.jsx";
import Ebook from "../pages/Writer-dashboard/Ebook/Ebook.jsx";
import NovelOverview from "../pages/Writer-dashboard/Novels/NovelOverview.jsx";
import Advertising from "../pages/Writer-dashboard/Advertising.jsx";
import NewCampaign from "../pages/Writer-dashboard/NewCampaign.jsx";
import SstSubmitions from "../pages/Writer-dashboard/SstSubmitions.jsx";
import RevenuePage from "../pages/Writer-dashboard/Revenue.jsx";
import AddEbook from "../pages/Writer-dashboard/Ebook/AddEbook.jsx";
import UpgradeToWriter from "../pages/Writer-dashboard/UpgradeToWriter.jsx";
import AddShortStory from "../pages/Writer-dashboard/AddShortStory.jsx";
import NovelDetails from "@/pages/Writer-dashboard/Novels/NovelDetails.jsx";


export default function RoutesWriter() {
    return [
        { path: '/author', element: <AuthorDashboard />, layout: "author_dashboard" },
        { path: '/author/poems', element: <PoemsPage />, layout: "author_dashboard" },
        { path: '/author/poems/create', element: <CreatePoem />, layout: "author_dashboard" },
        { path: '/author/notes', element: <NotesPage />, layout: "author_dashboard" },
        { path: '/author/notes/create', element: <CreateNote />, layout: "author_dashboard" },
        { path: '/author/notes/:noteId', element: <ViewNote />, layout: "author_dashboard" },
        { path: '/author/chapter', element: <Chapters />, layout: "author_dashboard" },
        { path: '/author/novels', element: <NovelOverview />, layout: "author_dashboard" },
        { path: '/author/novels/create', element: <CreateNovel />, layout: "author_dashboard" },
        { path: '/author/novels/details/:novelId', element: <NovelDetails />, layout: "author_dashboard" },
        { path: '/author/advertising', element: <Advertising />, layout: "author_dashboard" },
        { path: '/author/advertising/newcampaign', element: <NewCampaign />, layout: "author_dashboard" },
        { path: '/author/short-stories', element: <SstSubmitions />, layout: "author_dashboard" },
        { path: '/author/ebooks', element: <Ebook />, layout: "author_dashboard" },
        { path: '/author/ebooks/add', element: <AddEbook />, layout: "author_dashboard" },
        { path: '/author/revenue', element: <RevenuePage />, layout: "author_dashboard" },
        { path: '/author/upgrade', element: <UpgradeToWriter />, layout: "author_dashboard" },
        { path: '/author/short-stories/create', element: <AddShortStory />, layout: "author_dashboard" },


    ]
}