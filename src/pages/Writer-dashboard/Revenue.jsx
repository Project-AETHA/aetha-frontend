import React from 'react';
import {
  Card,
  CardBody,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Progress
} from '@nextui-org/react';
import { FiDollarSign, FiUsers, FiGift, FiCreditCard } from 'react-icons/fi';
import { Eye, Trash2, TrendingUp } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

const revenueData = {
  tiers: [
    { tier: 'Tier 1', count: 120, earnings: 1200, icon: <FiUsers />, color: 'bg-blue-100 text-blue-600' },
    { tier: 'Tier 2', count: 80, earnings: 1600, icon: <FiUsers />, color: 'bg-purple-100 text-purple-600' },
    { tier: 'Tier 3', count: 50, earnings: 2500, icon: <FiUsers />, color: 'bg-pink-100 text-pink-600' },
  ],
  donations: 500,
  balance: 5800,
  transactions: [
    { date: '2024-07-01', amount: 200, type: 'Donation', status: 'Completed' },
    { date: '2024-07-02', amount: 300, type: 'Subscription', status: 'Completed' },
    { date: '2024-07-03', amount: 150, type: 'Donation', status: 'Completed' },
    { date: '2024-07-04', amount: 400, type: 'Subscription', status: 'Completed' },
    { date: '2024-07-05', amount: 1000, type: 'Withdrawal', status: 'Pending' },
  ],
};

const statusColorMap = {
  Donation: 'success',
  Subscription: 'warning',
  Withdrawal: 'danger',
};

const RevenuePage = () => {
  const renderCell = (transaction, columnKey) => {
    const cellValue = transaction[columnKey];
    switch (columnKey) {
      case 'type':
        return (
          <Chip color={statusColorMap[cellValue]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case 'amount':
        return `$${cellValue}`;
      case 'actions':
        return (
          <div className="flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Eye />
              </span>
            </Tooltip>
            <Tooltip content="Delete" color="danger">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <Trash2 />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [3000, 3500, 4000, 4200, 4800, 5200, 5800],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue Growth',
      },
    },
  };

  const totalEarnings = revenueData.tiers.reduce((sum, tier) => sum + tier.earnings, 0) + revenueData.donations;

  return (
    <div className="min-h-screen p-2 bg-foreground-100">
      <Card className="p-6 bg-white dark:bg-gray-800 shadow-none rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Revenue Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {revenueData.tiers.map((tier) => (
            <Card key={tier.tier} className={`p-4 shadow-md ${tier.color}`}>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div className="text-2xl">{tier.icon}</div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{tier.tier} Subscribers</p>
                    <p className="text-xl font-bold">${tier.earnings}</p>
                    <p className="text-xs">{tier.count} subscribers</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
          <Card className="p-4 shadow-md bg-green-100 text-green-600">
            <CardBody>
              <div className="flex items-center justify-between">
                <div className="text-2xl"><FiGift /></div>
                <div className="text-right">
                  <p className="text-sm font-medium">Donations</p>
                  <p className="text-xl font-bold">${revenueData.donations}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <Card className="p-6 mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Total Balance</h2>
              <p className="text-4xl font-bold">${revenueData.balance}</p>
              <p className="text-sm opacity-75">Total earnings: ${totalEarnings}</p>
            </div>
            {/* <Button 
              className="mt-4 md:mt-0 bg-white text-blue-500 hover:bg-blue-100"
              endContent={<FiDollarSign />}
            >
              Withdraw Funds
            </Button> */}
          </div>
          <div className="mt-4">
            <Progress
              value={(totalEarnings / revenueData.balance) * 100}
              color="warning"
              className="h-2"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">Revenue Trend</h2>
            <Line data={chartData} options={chartOptions} />
          </Card>
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">Recent Transactions</h2>
            <Table aria-label="Recent Transactions" className="mt-4">
              <TableHeader>
                <TableColumn>Date</TableColumn>
                <TableColumn>Amount</TableColumn>
                <TableColumn>Type</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {revenueData.transactions.slice(0, 4).map((transaction, index) => (
                  <TableRow key={index}>
                    {['date', 'amount', 'type', 'actions'].map((columnKey) => (
                      <TableCell key={columnKey}>{renderCell(transaction, columnKey)}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default RevenuePage;