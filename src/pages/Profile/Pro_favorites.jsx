import "@/components/Profile.css";
import novelpic from '/images/novel.jpg';
import book1 from '/images/books/book1.jpg';
import book2 from '/images/books/book2.jpg';
import book3 from '/images/books/book3.jpg';
import book4 from '/images/books/book4.jpg';

import useGet from "@/hooks/useGet.jsx";

function Pro_favorites() {

  const favorites = [
    {
      key: "1",
      picture: book4,
      title: "Scientific Sorcery : Beware of Kittens!",
      pages: "248 Pages",
      description: "Ioan Starfall, a Nordstaii teen on the cusp of adulthood...",
      author: "by Vitaly S Alexius"
    },
    {
      key: "2",
      picture: novelpic,
      title: "Soul",
      pages: "124 Pages",
      description: "“Soul” by Olivia Wilson delves into the essence of human existence...",
      author: "by Olivia Wilson"
    },
    {
      key: "3",
      picture: book1,
      title: "The Great Gatsby",
      pages: "124 Pages",
      description: "The Great Gatsby, published in 1925, is F. Scott Fitzgerald's most famous novel...",
      author: "by F.Scott Fitzgerald"
    },
    {
      key: "4",
      picture: book2,
      title: "The Catcher In The Rye",
      pages: "58 Pages",
      description: "Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield...",
      author: "by J.D.Salinger"
    },
    {
      key: "5",
      picture: book3,
      title: "Brave New world",
      pages: "58 Pages",
      description: "Aldous Huxley's profoundly important classic of world literature, Brave New World...",
      author: "by Aldous Huxley"
    }
  ];

  return (
    <>
      <div className="flex">
        <div className="mx-16 mt-6 w-full bg-foreground-50 rounded-2xl pt-6">
        <div className="text-xl mx-16 font-bold pb-2">Your Favorites</div>
         <div className="flex flex-wrap mx-16 justify-items-start text-foreground text-lg">
          
           {favorites.map((favorite, index) => (
              <div
                key={index}
                className="flex flex-col items-center m-4"
                style={{ width: '160px' }}
              >
                <img
                  src={favorite.picture}
                  alt={favorite.title}
                  className="h-[250px] w-full object-cover rounded-lg"
                />
                <div className="text-center mt-2">
                  <h3 className="text-base font-semibold text-black">{favorite.title}</h3>
                  <p className="text-sm text-gray-500">{favorite.author}</p>
                </div>
              </div>
            ))}  
          </div>
        </div>
      </div>
    </>
  );
}

export default Pro_favorites;
