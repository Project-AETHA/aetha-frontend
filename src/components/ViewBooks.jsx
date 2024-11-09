import React from "react";
import "aos/dist/aos.css";

import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";
import EbookItem from "@/components/common/EbookItem.jsx";

import useGet from "@/hooks/useGet";

const ViewBooks = () => {

  const { 
    isLoading,  // * True when the query is in progress
    data,       // * The data returned from the query
    isError,    // * True if the query resulted in an
    error,      // * The error object if the query resulted in an error
    isFetching, // * True if the query is currently fetching (polling, background refetch)
    refetch     // * Function to manually refetch the query
  } = useGet({ url: "/api/ebooks/all", queryKey: "ebook2" });

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
