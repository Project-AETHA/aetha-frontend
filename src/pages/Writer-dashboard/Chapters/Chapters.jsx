import { Button, Card } from '@nextui-org/react';
import { FaPlus } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { useParams } from 'react-router-dom';

import ChapterTable from './components/ChapterTable';
import LineChart from './components/LineChart.jsx';
import SubscriptionTiers from './components/SubscriptionTiers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartTooltip, Legend);
const Chapters = () => {

  const { novelId } = useParams();

  return (
    <div className="p-8 min-h-screen bg-foreground-100 text-gray-900">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Chapter Management</h1>
          <Button auto shadow color="primary">
            <FaPlus className="w-5 h-5 mr-2" />
            Add New Chapter
          </Button>
        </div>

        <Card className="p-6 mb-8  shadow">
          <LineChart />
        </Card>

        <Card className="p-6 mb-8  shadow">
          <ChapterTable novelId={novelId} />
        </Card>

        <SubscriptionTiers novelId={novelId} />

      </div>
    </div>
  );
};

export default Chapters;