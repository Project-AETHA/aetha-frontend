import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import "@/components/Profile.css";
import Rating from "@/components/common/Rating.jsx";

// TODO - Temp Data
import novelpic from "/images/novel.jpg";
import book1 from "/images/books/book1.jpg";
import book2 from "/images/books/book2.jpg";
import book3 from "/images/books/book3.jpg";

function Pro_reviews() {

  const reviews = [
    {
      key: "1",
      picture: book1,
      title: "The Enchanted Forest",
      chapter: "Chapter 3: The Hidden Village",
      content: "Wow, It's a nice story",
      rating: 4.5,
      date: "18 February 2023, 17:30",
    },
    {
      key: "2",
      picture: book2,
      title: "Galactic Adventures",
      chapter: "Chapter 2: The Alien Encounter",
      content: "It's a magical story",
      rating: 4.1,
      date: "08 April 2023, 19:30",
    },
    {
      key: "3",
      picture: book3,
      title: "Secrets of the Ancient Temple",
      chapter: "Chapter 152: The Forbidden Scrolls",
      content: "Nice",
      rating: 3.5,
      date: "24 January 2024, 20:53",
    },
    {
      key: "4",
      picture: novelpic,
      title: "Chronicles of the Lost Kingdom",
      chapter: "Chapter 54: The Battle for the Throne",
      content: "I like this chapter...",
      rating: 3.8,
      date: "14 February 2023, 07:10",
    },
  ];

  return (
    <>
      <div className="flex">
        <div className="mx-16 mt-6 w-full bg-foreground-50 rounded-2xl pt-6">
         <div className="text-xl mx-16 font-bold pb-2">Your Reviews</div>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Picture</TableColumn>
              <TableColumn>Title</TableColumn>
              <TableColumn>Chapter</TableColumn>
              <TableColumn>Content</TableColumn>
              <TableColumn>Rating</TableColumn>
              <TableColumn>Date</TableColumn>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.key}>
                  <TableCell>
                    <img
                      src={review.picture}
                      alt={review.title}
                      className="w-20 h-28 rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell className="text-foreground">
                    <div className="font-semibold">{review.title}</div>
                  </TableCell>
                  <TableCell>{review.chapter}</TableCell>
                  <TableCell>{review.content}</TableCell>
                  <TableCell>
                    <Rating rating={review.rating} size={15} />
                  </TableCell>
                  <TableCell>{review.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Pro_reviews;
