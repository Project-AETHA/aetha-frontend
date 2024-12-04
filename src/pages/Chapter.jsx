import ChaptersOverview from '../components/NovelChaptersOverview.jsx';
import Books from '../components/Books';
import Advertisements from '../components/Advertistment';
import Rating from '@/components/Rating.jsx';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

const Chapter = () => {

    const {novelId} = useParams()

  async function addHistory() {
    const response = await axios.get(`/api/history/viewed/${novelId}`);
    // console.log(response)
  }

    //? Adding to the history
    useEffect(async () => {
      addHistory();
      return () => {}
    }, [])

  return (
    <div>

      <ChaptersOverview id={novelId} />
      <Advertisements />
      <Rating />
      <Books />

    </div>

  );
};

export default Chapter;
