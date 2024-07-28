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
  Tooltip
} from '@nextui-org/react';
import { FiDollarSign, FiUsers, FiGift, FiCreditCard, FiTrash2, FiEye } from 'react-icons/fi';
import { Eye, Trash2, } from 'lucide-react';
const revenueData = {
  tiers: [
    { tier: 'Tier 1', count: 120, earnings: '$1200', icon: <FiUsers /> },
    { tier: 'Tier 2', count: 80, earnings: '$1600', icon: <FiUsers /> },
    { tier: 'Tier 3', count: 50, earnings: '$2500', icon: <FiUsers /> },
  ],
  donations: '$500',
  balance: '$5800',
  transactions: [
    { date: '2024-07-01', amount: '$200', type: 'Donation', status: 'Completed' },
    { date: '2024-07-02', amount: '$300', type: 'Subscription', status: 'Completed' },
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
      case 'actions':
        return (
          <div className="flex items-center gap-2">
            <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Eye />
              </span>
            </Tooltip>
            <Tooltip content="Delete">
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

  return (
    <div className="min-h-screen p-2">
    <Card className="p-10">
      <div className="flex flex-wrap -mx-2">
        {revenueData.tiers.map((tier) => (
          <div key={tier.tier} className="w-full sm:w-1/4 px-2 mb-4">
            <Card className="p-6  bg-teal-100 shadow-none">
              <CardBody className="flex items-center">
                <div className="text-4xl text-blue-500 mr-4">{tier.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">{tier.tier} Subscribers</h3>
                  <p className="text-gray-500">{tier.count} subscribers</p>
                  <p className="text-gray-900 font-bold">{tier.earnings}</p>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
        <div className="w-full sm:w-1/4 px-2 mb-4">
          <Card className="p-6  bg-teal-100 shadow-none">
            <CardBody className="flex items-center">
              <div className="text-4xl text-green-500 mr-4"><FiGift /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Donations</h3>
                <p className="text-gray-900 font-bold">{revenueData.donations}</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-full sm:w-1/4 px-2 mb-4">
          <Card className="p-6  bg-cyan-100 shadow-none">
            <CardBody className="flex items-center">
              <div className="text-4xl text-purple-500 mr-4"><FiCreditCard /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Full Balance</h3>
                <p className="text-gray-900 font-bold">{revenueData.balance}</p>
                <Button className="mt-4" color="primary" icon={<FiDollarSign />}>Withdraw</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <Card className="mt-8 p-6 ">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Previous Transactions</h2>
        <Table aria-label="Previous Transactions">
          <TableHeader>
            <TableColumn>Date</TableColumn>
            <TableColumn>Amount</TableColumn>
            <TableColumn>Type</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {revenueData.transactions.map((transaction, index) => (
              <TableRow key={index}>
                {['date', 'amount', 'type', 'actions'].map((columnKey) => (
                  <TableCell key={columnKey}>{renderCell(transaction, columnKey)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    
      </Card></div>
  );
};

export default RevenuePage;
