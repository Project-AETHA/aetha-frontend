import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import StatsCard from "./StatsCard";

const booksData = [
  {
    id: 1,
    img: "https://via.placeholder.com/150",
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150",
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150",
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  // Add more book objects as needed...
];

const AuthorDashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <div className="stats-grid">
          <StatsCard title="Total Stories" value="10" />
          <StatsCard title="Total Views" value="5000" />
          <StatsCard title="Total Likes" value="300" />
        </div>
        <div className="book-grid">
          {booksData.map(({ id, img, title, rating, author }) => (
            <div key={id} className="book-card">
              <img
                src={img}
                alt={title}
                className="book-img"
              />
              <h3>{title}</h3>
              <p>{author}</p>
              <p>{rating}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .dashboard {
          display: flex;
        }
        .main-content {
          flex-grow: 1;
          padding: 20px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .book-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .book-card {
          background: #fff;
          padding: 20px;
          text-align: center;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .book-img {
          width: 150px;
          height: 220px;
          object-fit: cover;
          margin-bottom: 10px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default AuthorDashboard;
