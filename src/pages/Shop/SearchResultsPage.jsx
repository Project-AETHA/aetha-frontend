import ViewBooks from "../../components/ViewBooks.jsx";
import SearchBar from "./components/SearchBar.jsx";
import NovelSelection from "../../components/NovelSelection.jsx";
import usePost from "@/hooks/usePost.jsx";

const SearchResultsPage = () => {

    //* Recreate using the tanstack query
    const {
      data,
      isPending,
      error,
      isError,
      refetch
  } = usePost({queryKey: "shop_items", url: "/api/ebooks/all", params: {}, body: JSON.parse(localStorage.getItem("searchFilter"))})

  return (
    <>
      <SearchBar />
      <NovelSelection data={data} />
      <ViewBooks />
    </>
  );
};

export default SearchResultsPage;
