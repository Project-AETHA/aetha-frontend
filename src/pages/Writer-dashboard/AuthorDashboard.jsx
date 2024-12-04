import { Book, BarChart2, Star, MessageCircleMore } from "lucide-react";
import { Card, CardBody, CardFooter, Image, Button, Tabs, Tab, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, } from "@nextui-org/react";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";
import { toast } from "sonner";
import useGet from "@/hooks/useGet.jsx";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";
import SingleNovel from "@/pages/Writer-dashboard/Novels/components/SingleNovel.jsx";

const StatsCard = ({ title, value, Icon }) => {
  return (
    <Card isHoverable variant="bordered" className="stats-card p-4 shadow-none">
      <div className="flex items-center">
        {Icon && <Icon size={34} />}
        <div className="pl-4">
          <h4 className="text-xl font-semibold">{title}</h4>
          <h2 className="text-3xl">{value}</h2>
        </div>
      </div>
    </Card>
  );
};

const AuthorDashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("user") !== null) {
      if(JSON.parse(localStorage.getItem('user')).role !== 'WRITER') {
        toast.warning("Please upgrade to continue");
        navigate('/upgrade-to-writer');
      }
    } else {
      toast.warning("Please login to continue");
      navigate('/login');
    }
  }, []);

  const { data, isLoading, isError, error } = useGet({
    queryKey: "my-novels",
    url: "/api/novels/my"
  });

  return (
    <div className="flex h-screen">
      <div className="flex-grow p-5 authbackground">
        <Card className="p-4 mb-4 shadow-none" >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold dark:text-white">Author Dashboard</h1>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button color="secondary" auto>
                  + New Content
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="novel" onClick={() => navigate("/author/novels/create")}>Novel</DropdownItem>
                <DropdownItem key="shortStory" onClick={() => navigate("/author/short-stories/create")} >Short Story</DropdownItem>
                <DropdownItem key="poemnisadas" onClick={() => navigate("/author/poems/create")} >Poem & Nisadas</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {isLoading && <LoadingComponent />}
          {!isLoading && !isError && (
            <>
              <StatsCard title="Published Novels" value={data.published.length} Icon={Book} />
              <StatsCard title="Pending Novels" value={data.pending.length} Icon={BarChart2} />
              <StatsCard title="Draft Novels" value={data.draft.length} Icon={Star} />
            </>
          )}
          {!isLoading && data.published.length === 0 && <NothingToDisplay />}
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow-none mb-5">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">Publishes</h2>
          <div className="flex flex-wrap gap-4">
            {isLoading && <LoadingComponent />}
            {!isLoading && data.published.map((novel,index) => <SingleNovel key={index} novel={novel} />)}
            {!isLoading && data.published.length === 0 && <NothingToDisplay />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDashboard;
