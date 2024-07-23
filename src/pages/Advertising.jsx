import React from 'react';
import { Card, Dropdown, Link, DropdownTrigger, DropdownMenu, Button, DropdownItem} from '@nextui-org/react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CirclePlus } from 'lucide-react';

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

const Advertising = () => {
  return (
    <div className="p-6 min-h-screen">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-semibold mb-4">Marketing Dashboard</h1>
      <Link href="/author/advertising/newcampaign">
        <Button auto className="bg-infoText text-white">
      <CirclePlus />
            New Campaign
          </Button>
          </Link>
      </div>
      <div className="flex gap-4 mb-6">
        <Dropdown>
          <DropdownTrigger>
            <Button flat color='secondary'>Auto date range</Button>
            </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="this-month">This Month</DropdownItem>
            <DropdownItem key="last-month">Last Month</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button flat color='secondary'>Services</Button>
            </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="all">All</DropdownItem>
            <DropdownItem key="service1">Service 1</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button flat color='secondary'>Posts</Button>
            </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="all">All</DropdownItem>
            <DropdownItem key="post1">Post 1</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl">$65.37</span>
            <span className="text-green-500 text-sm">170%</span>
          </div>
          <div className="text-gray-500">Ad Spend</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl">$3.94</span>
            <span className="text-green-500 text-sm">0.45</span>
          </div>
          <div className="text-gray-500">Cost per Thousand (CPM)</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl">$0.15</span>
            <span className="text-green-500 text-sm">$0.02</span>
          </div>
          <div className="text-gray-500">Cost per Click (CPC)</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl">2.89%</span>
            <span className="text-green-500 text-sm">7%</span>
          </div>
          <div className="text-gray-500">Click-Through Rate (CTR)</div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Ad Reach</h2>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="reach" fill="#8884d8" />
          </BarChart>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Ad Clicks</h2>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
          </LineChart>
        </Card>
      </div>
      <Card className="p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Your Campaigns</h2>
        <div className="text-gray-500">- You have no campaigns -</div>
        <div className="flex justify-end mt-4">
        <Link href="/author/advertising/newcampaign">
        <Button auto className="bg-infoText text-white">
      <CirclePlus />
            New Campaign
          </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Advertising;
