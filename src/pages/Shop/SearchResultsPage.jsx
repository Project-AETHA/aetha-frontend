import ViewBooks from "../../components/ViewBooks.jsx";
import SearchBar from "./components/SearchBar.jsx";
import NovelSelection from "../../components/NovelSelection.jsx";
import axios from "axios";
import {toast} from "sonner";
import {useEffect, useState} from "react";

const SearchResultsPage = () => {

    const [results, setResults] = useState([]);

    async function performSearch(searchFilters) {
        const response = await axios.post("/api/ebooks/search", searchFilters)

        if(response.status === 200) {
            console.log(response.data)
            if(response.data.code === "00") {
                setResults(response.data.content);
            }
        } else {
            console.log("Error: " + response.data);
            toast.error("Server Error - Not Responding", {description: response.data.message});
        }
    }

    useEffect(() => {
        // TODO - PublishedWithin property won't be sent, it needs to be worked on

        // ? Passing the search filters saved in the localstorage to the performSearch function
        performSearch(JSON.parse(localStorage.getItem("searchFilter")));

    }, []);

  return (
    <>
      <SearchBar />
      <NovelSelection data={results} />
      <ViewBooks />
    </>
  );
};

export default SearchResultsPage;
