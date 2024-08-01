import React from 'react';
import { Card, Dropdown, Link, DropdownTrigger, DropdownMenu, Button, DropdownItem } from '@nextui-org/react';
import { CirclePlus, TrendingUp, DollarSign, Users, MousePointer } from 'lucide-react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const data = [
  { month: 'Jan', reach: 400, clicks: 50 },
  { month: 'Feb', reach: 800, clicks: 100 },
  { month: 'Mar', reach: 1200, clicks: 150 },
  { month: 'Apr', reach: 1500, clicks: 180 },
  { month: 'May', reach: 1700, clicks: 200 },
  { month: 'Jun', reach: 2000, clicks: 180 },
  { month: 'Jul', reach: 1500, clicks: 150 },
  { month: 'Aug', reach: 1300, clicks: 130 },
  { month: 'Sep', reach: 900, clicks: 110 },
];

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
  scales: {
    x: {
      title: { display: true },
    },
    y: {
      title: { display: true },
    },
  },
};

const adReachData = {
  labels: data.map(item => item.month),
  datasets: [
    {
      label: 'Ad Reach',
      data: data.map(item => item.reach),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const adClicksData = {
  labels: data.map(item => item.month),
  datasets: [
    {
      label: 'Ad Clicks',
      data: data.map(item => item.clicks),
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.1,
    },
  ],
};

const Advertising = () => {
  return (
    <div className="p-8 min-h-screen bg-foreground-100 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Marketing Dashboard</h1>
          <Link href="/author/advertising/newcampaign">
            <Button auto shadow color="primary" icon={<CirclePlus />}>
              New Campaign
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Dropdown>
            <DropdownTrigger>
              <Button flat color="secondary">Auto date range</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Date Range">
              <DropdownItem key="this-month">This Month</DropdownItem>
              <DropdownItem key="last-month">Last Month</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button flat color="secondary">Services</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Services">
              <DropdownItem key="all">All</DropdownItem>
              <DropdownItem key="service1">Service 1</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button flat color="secondary">Posts</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Posts">
              <DropdownItem key="all">All</DropdownItem>
              <DropdownItem key="post1">Post 1</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Ad Spend" value="$65.37" change="170%" icon={<DollarSign />} />
          <StatCard title="Cost per Thousand (CPM)" value="$3.94" change="0.45" icon={<Users />} />
          <StatCard title="Cost per Click (CPC)" value="$0.15" change="$0.02" icon={<MousePointer />} />
          <StatCard title="Click-Through Rate (CTR)" value="2.89%" change="7%" icon={<TrendingUp />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChartCard title="Ad Reach">
            <Bar data={adReachData} options={chartOptions} />
          </ChartCard>
          <ChartCard title="Ad Clicks">
            <Line data={adClicksData} options={chartOptions} />
          </ChartCard>
        </div>

        <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Your Campaigns</h2>
          <div className="text-gray-600 dark:text-gray-400 mb-4">- You have no campaigns -</div>
          <div className="flex justify-end">
            <Link href="/author/advertising/newcampaign">
              <Button auto shadow color="primary" icon={<CirclePlus />}>
                New Campaign
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon }) => (
  <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">{icon}</div>
      <span className="text-green-600 dark:text-green-400 text-sm font-semibold">{change}</span>
    </div>
    <h3 className="text-xl font-bold mb-1">{value}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
  </Card>
);

const ChartCard = ({ title, children }) => (
  <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
    <h2 className="text-2xl font-semibold mb-6">{title}</h2>
    {children}
  </Card>
);

export default Advertising;