import "../../styles/home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api")

//         if (res.status === 200) {
//           setBlogs(res.data.content);
//         }
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getData();
//   }, []);

  async function getBlogs () {
    const result = await axios.get("http://localhost:8080/api")

    if(result.status === 200) {
        setBlogs(result.data.content)
    } else {
        console.log("error")
    }
  }

  return (
    <>
      <h1>Home Page</h1>

        <Button variant="outlined" onClick={getBlogs}>Get data</Button>

      <div className="bg-gray-400 w-full h-full flex gap-2 justify-center items-center">

      {isLoading ? (
        <CircularProgress />
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} style={{marginBottom: 20}}>
              {blog.title} by {blog.author}
            </li>
          ))}
        </ul>
      )}

      </div>
    </>
  );
}

export default Home;
