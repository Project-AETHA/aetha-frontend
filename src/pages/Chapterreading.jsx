import Reading from "../components/Reading";
import Books from "../components/Books";
import Advertisement from "../components/Advertistment";
import Comment from "../components/Comment";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ResponseCodes from "@/components/predefined/ResponseCodes.jsx";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Chapterreading = () => {
  const navigate = useNavigate();
  const { novelId, chapterNumber } = useParams();

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    chapter: null,
    novel: null,
  });

  async function getDetails(chapter_number) {
    setLoading(true);
    const response = await axios.get(
      `/api/chapters/single?novelId=${novelId}&chapterNumber=${chapter_number}`,
      { timeout: 3000 }
    );

    if (response.status === 200) {
      if (response.data.code === ResponseCodes.SUCCESS) {
        console.log(response.data.content);
        setData({
          novel: response.data.content.novel,
          chapter: response.data.content,
        });
      }
    } else {
      toast.error("Error loading the Chapter", {
        description: response.data.content,
      });
      navigate(`/novels/${novelId}`);
    }

    setLoading(false);
  }

  useEffect(() => {
    getDetails(chapterNumber);
  }, [chapterNumber]);

  return (
    <div>
      <Reading
        data={data}
        setData={setData}
        loading={loading}
        setLoading={setLoading}
      />
      <Advertisement />
      <Comment />
      <Books />
    </div>
  );
};

export default Chapterreading;