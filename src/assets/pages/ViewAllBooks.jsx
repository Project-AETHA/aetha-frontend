import React from "react";
import ViewBooks from "../components/ViewBooks.jsx";
import Advertistment from "../components/Advertistment.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx"



const ViewAllBooks = () => {

  return (
    <div>
      <SearchBar />
       <ViewBooks />
      <Advertistment />
      <Footer />
      

    </div>

  );
};

export default ViewAllBooks;
