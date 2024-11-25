import Buybook from './components/Buybook.jsx';
import Rating from './components/Rating.jsx';
import Books from '../../components/Books.jsx';
import {useParams} from 'react-router-dom';

const BuybookPage = () => {

  const {bookId} = useParams();

  return (
    <div>

    <Buybook id={bookId} />
    <Rating />
    <Books />

    </div>

  );
};

export default BuybookPage;
