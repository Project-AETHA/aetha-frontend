import { Button, Card } from '@nextui-org/react';
import { FaPlus } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { useParams, useNavigate } from 'react-router-dom';

import ChapterTable from './components/ChapterTable';
import LineChart from './components/LineChart.jsx';
import SubscriptionTiers from './components/SubscriptionTiers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartTooltip, Legend);
const Chapters = () => {

  const { novelId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-8 min-h-screen bg-foreground-100 text-gray-900">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Chapter Management</h1>
          <Button auto shadow color="primary" onClick={() => navigate(`/author/novels/details/${novelId}/addChapter`)}>
            <FaPlus className="w-5 h-5 mr-2"/>
            Add New Chapter
          </Button>
        </div>

        <ChapterTable novelId={novelId}/>

        <h2 className="text-2xl font-bold mb-4">Subscription Tiers</h2>
        <SubscriptionTiers novelId={novelId}/>

      </div>
    </div>
  );
};

export default Chapters;