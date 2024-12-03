import React, { useState } from "react";
import "../../../../components/Profile.css";

function NovelDetailsComp() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const items = [
    {
      title: "The Great Gatsby",
      picture: "/images/books/book1.jpg", // Direct reference to public folder
      description:
        "The Great Gatsby, published in 1925, is F. Scott Fitzgerald's most famous novel. Set during the Roaring 20s, the book tells the story of a group of wealthy, often hedonistic residents of the fictional New York towns of West Egg and East Egg. The novel critiques the idea of the American Dream, suggesting that the concept has been corrupted by the careless pursuit of decadence.",
      author: "F. Scott Fitzgerald",
    },
  ];

  return (
    <div>
      <div className="bg-background text-foreground">
        <div className="m-4 space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex p-4 border border-gray-100 rounded-lg bg-foreground-50 shadow-sm"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.picture}
                  alt={item.title}
                  className="h-[180px] w-[120px] object-cover rounded-md"
                />
              </div>
              <div className="ml-6 flex-1">
                <h2 className="font-semibold text-xl text-violet-500">{item.title}</h2>
                <div className="mt-2 text-foreground text-small font-normal">
                  {expandedIndexes.includes(index)
                    ? item.description
                    : `${item.description.substring(0, 150)}...`}
                </div>
                <span
                  className="text-small text-blue-600 cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedIndexes.includes(index) ? "Show Less" : "Show More"}
                </span>
                <div className="ml-auto text-fuchsia-500 text-medium flex items-center">
                by {item.author}
              </div>
              <div className="flex flex-wrap gap-2">
  {['jjnfnj', 'jjj', 'jncfjj', 'moreTags1', 'moreTags2', 'moreTags3', 'moreTags4'].map((tag, index) => (
    <div
      key={index}
      className="px-2 py-1 bg-gray-200 text-xs rounded shadow-sm"
    >
      {tag}
    </div>
  ))}
</div>


              </div>              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NovelDetailsComp;
