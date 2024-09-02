import ViewBooks from "../../components/ViewBooks.jsx";
import SearchBar from "./components/SearchBar.jsx";
import NovelSelection from "../../components/NovelSelection.jsx";

const SearchResults = () => {


  return (
    <>
      <SearchBar />
      <NovelSelection />
      <ViewBooks />
    </>
  );
};

export default SearchResults;
