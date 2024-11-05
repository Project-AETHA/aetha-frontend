import React from "react";
import Book1 from "../../public/images/books/book1.jpg";
import Book2 from "../../public/images/books/book2.jpg";
import Book3 from "../../public/images/books/book3.jpg";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";
import EbookItem from "@/components/common/EbookItem.jsx";

//* React Query Implementation Code
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 6,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book3,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book2,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
  {
    id: 7,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];

const ViewBooks = () => {
  const getAllEbooks = async () => {
    const response = await axios.get("/api/ebooks/all");
    console.log(response)
    return response.data.content;
  };

  function onSuccess() {
    console.log("Query Success");
  }

  function onError() {
    console.log("Query Error");
  }

  const { 
    isLoading, // * True when the query is in progress
    data,      // * The data returned from the query
    isError,   // * True if the query resulted in an
    error,     // * The error object if the query resulted in an error
    isFetching, // * True if the query is currently fetching (polling, background refetch)
    refetch     // * Function to manually refetch the query
  } = useQuery({
    queryKey: ["ebooks2"],
    queryFn: getAllEbooks,
    // enabled: false,
    // cacheTime: 5000,
    staleTime: 30000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
    refetchInterval: 60000,
    retry: 3,
    onSuccess: onSuccess,
    onError: onError,
  });

  return (
    <>
      {isLoading && <LoadingComponent />}

      {isError && <div className="text-black text-center">{error.message || "An error occurred"}</div>}

      {!isLoading && !isError && data && data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3 py-5">
          {data.map((item, index) => (
            <EbookItem
              key={index}
              title={item.title}
              description={item.description}
              rating={item.rating}
              price={item.price}
              image={item.cover_image}
              id={item.id}
            />
          ))}
        </div>
      ) : (
        !isLoading && !isError && <NothingToDisplay />
      )}
    </>
  );
};

export default ViewBooks;
