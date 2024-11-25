import ChaptersOverview from '../components/NovelChaptersOverview.jsx';
import Books from '../components/Books';
import Advertisements from '../components/Advertistment';
import Rating from './Shop/components/Rating.jsx';
import {useParams} from "react-router-dom";

const Chapter = () => {

    const {novelId} = useParams()

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
