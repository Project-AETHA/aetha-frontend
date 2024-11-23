import React from 'react';
import "../components/Profile.css";
import { FaUsersSlash } from "react-icons/fa";
import novelpic from '../../public/images/novel.jpg';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

function ReviewPage() {
  const reviews = [
    {
      profilePic: novelpic,
      username: 'JohnDoe123',
      review: 'This is a fantastic book! The storyline is compelling and the characters are well-developed.',
      date: '1 month ago'
    },
    {
      profilePic: novelpic,
      username: 'JaneSmith456',
      review: 'I enjoyed reading this book, but some parts were a bit slow. Overall, a good read.',
      date: '2 months ago'
    },
    {
      profilePic: novelpic,
      username: 'MikeBrown789',
      review: 'The plot twists were amazing. Couldn’t put the book down!',
      date: '3 months ago'
    },
    {
      profilePic: novelpic,
      username: 'EmilyWhite012',
      review: 'Not my cup of tea. The story didn’t capture my interest.',
      date: '4 months ago'
    }
  ];

  return (
    <div>
      <div className="">
       <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
            <div className="max-w-2xl px-4 m-auto relative z-10 flex">
              <div className="h-16 w-16">
              <FaUsersSlash size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Reviews
              </h1>
              <h1 className='text-base text-left'>What our readers say</h1>
            </span>
          </div>
        </div>

        <div className="bg-white border-2 border-black m-4 h-20 p-4 text-black">
          Advertisement
        </div>

        <div className='m-4'>
          <Table aria-label="Reviews Table">
            <TableHeader>
              <TableColumn>Profile</TableColumn>
              <TableColumn>Username</TableColumn>
              <TableColumn>Review</TableColumn>
              <TableColumn>Date</TableColumn>
            </TableHeader>
            <TableBody>
              {reviews.map((review, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? 'bg-foreground-50' : 'bg-gray-200'}
                >
                  <TableCell>
                    <img
                      src={review.profilePic}
                      alt="profile"
                      className="h-12 w-12 object-cover rounded-full"
                    />
                  </TableCell>
                  <TableCell className='text-primary-400'>{review.username}</TableCell>
                  <TableCell>{review.review}</TableCell>
                  <TableCell>{review.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ReviewPage;
