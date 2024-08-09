import CreateNote from "../Writer-dashboard/CreateNote.jsx";
import NotesPage from "../Writer-dashboard/NotesPage.jsx";
import AuthorDashboard from "../../pages/AuthorDashboard.jsx";
import PoemsPage from "../Writer-dashboard/PoemsPage.jsx";
import CreatePoem from "../Writer-dashboard/CreatePoem.jsx";
import ViewNote from "../Writer-dashboard/ViewNote.jsx";
import FirstChapter from "../../pages/FirstChapter.jsx";
import Chapters from "../../pages/Chapters.jsx";
import Ebook from "../../pages/Ebook.jsx";
import Submitions from "../../pages/Submitions.jsx";
import Advertising from "../../pages/Advertising.jsx";
import NewCampaign from "../../pages/NewCampaign.jsx";
import SstSubmitions from "../../pages/SstSubmitions.jsx";
import RevenuePage from "../../pages/Revenue.jsx";
import AddEbook from "../../pages/AddEbook.jsx";
import UpgradeToWriter from "../../pages/UpgradeToWriter.jsx";
import AddShortStory from "../../pages/AddShortStory.jsx";


export default function RoutesWriter() {
    return [
        { path: '/author', element: <AuthorDashboard />, layout: "author_dashboard" },
        { path: '/author/poems', element: <PoemsPage />, layout: "author_dashboard" },
        { path: '/author/poems/create', element: <CreatePoem />, layout: "author_dashboard" },
        { path: '/author/notes', element: <NotesPage />, layout: "author_dashboard" },
        { path: '/author/notes/create', element: <CreateNote />, layout: "author_dashboard" },
        { path: '/author/notes/:noteId', element: <ViewNote />, layout: "author_dashboard" },
        { path: '/author/chapter/create', element: <FirstChapter />, layout: "author_dashboard" },
        { path: '/author/chapter', element: <Chapters />, layout: "author_dashboard" },
        { path: '/author/novels', element: <Submitions />, layout: "author_dashboard" },
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