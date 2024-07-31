import React from 'react';
import { Card, Table, TableHeader, TableBody, Button, User, TableColumn, TableRow, TableCell, Image, Chip, Link } from '@nextui-org/react';
import { IoPeople, IoMenu, IoLogoUsd } from 'react-icons/io5';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = {
  approved: 45,
  declined: 15,
  pending: 10
};

const total = stats.approved + stats.declined + stats.pending;

const data5 = {
  labels: ['Approved', 'Declined', 'Pending'],
  datasets: [
    {
      data: [
        ((stats.approved / total) * 100).toFixed(2),
        ((stats.declined / total) * 100).toFixed(2),
        ((stats.pending / total) * 100).toFixed(2)
      ],
      backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
      hoverBackgroundColor: ['#66bb6a', '#ef5350', '#fff176']
    }
  ]
};

const options5 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.label || '';
          const value = context.raw;
          return `${label}: ${value}%`;
        }
      }
    }
  }
}

const data4 = {
  labels: ['Advertising', 'E-Book Selling', 'Subscriptions', 'Pre-Book Selling'],
  datasets: [
    {
      label: 'Revenue',
      data: [5000, 7000, 3000, 2000], // Example revenue data
      backgroundColor: [
        '#42a5f5', // Blue for advertising
        '#66bb6a', // Green for e-book selling
        '#ffa726', // Orange for subscriptions
        '#ab47bc', // Purple for pre-book selling
      ],
      borderColor: [
        '#1e88e5', // Darker blue for advertising
        '#43a047', // Darker green for e-book selling
        '#fb8c00', // Darker orange for subscriptions
        '#8e24aa', // Darker purple for pre-book selling
      ],
      borderWidth: 1,
    },
  ]
}

const options4 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Source of Revenue',
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Revenue (USD)',
      },
    },
  },
};

const data3 = {
  labels: ['Handled Complaints', 'Pending Complaints'],
  datasets: [
    {
      label: 'Complaints',
      data: [120, 30], // Example data
      backgroundColor: [
        '#4caf50', // Green for handled complaints
        '#f44336', // Red for pending complaints
      ],
      hoverBackgroundColor: [
        '#66bb6a', // Light green for hover
        '#e57373', // Light red for hover
      ],
      borderWidth: 1,
    },
  ],
};

const options3 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Example for 7 months

const data2 = {
  labels: labels2,
  datasets: [
    {
      label: 'Readers',
      data: [50, 80, 120, 160, 200, 250, 300], // Example data
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.1
    },
    {
      label: 'Writers',
      data: [20, 30, 50, 70, 90, 110, 130], // Example data
      fill: true,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.1
    }
  ]
};

const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Number of Users'
      }
    }
  }
};

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Novels',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: '#918be1',
    },
    {
      label: 'Short Stories',
      data: [2, 3, 20, 5, 1, 4, 8],
      backgroundColor: '#FA2583',
    },
    {
      label: 'Poems',
      data: [3, 10, 13, 15, 22, 30, 25],
      backgroundColor: '#3e9cf2',
    },
  ]
};

const options = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Days of the Week',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Number of Publications',
      },
    },
  },
};

const contentColumns = [
  { key: 'title', label: 'Title' },
  { key: 'author', label: 'Author' },
  { key: 'createdDate', label: 'Date Created' },
  { key: 'status', label: 'Status' },
  { key: 'view', label: 'Actions' }, // New column for the "View" button
];

const recentContent = [
  {
    key: '1',
    title: 'The Great Adventure',
    author: 'Jane Doe',
    createdDate: '2024-07-20T10:30:00Z',
    status: 'Pending',
  },
  {
    key: '2',
    title: 'Mystery of the Forest',
    author: 'John Smith',
    createdDate: '2024-07-21T14:45:00Z',
    status: 'Pending',
  },
  {
    key: '3',
    title: 'Whispers of the Wind',
    author: 'Emily Johnson',
    createdDate: '2024-07-22T09:15:00Z',
    status: 'Pending',
  },
  {
    key: '4',
    title: 'Legends of the Past',
    author: 'Michael Brown',
    createdDate: '2024-07-23T12:00:00Z',
    status: 'Pending',
  },
];



function BoxWrapper({ children }) {
  return <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

function Dashboard() {
  return (
    <div>
      <div className="flex gap-4 m-4">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Users</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">54232</strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <IoMenu className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Complaints</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">423</strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400">
            <IoLogoUsd className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Revenue</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">$56,313</strong>
            </div>
          </div>
        </BoxWrapper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-4">
        <Card className="p-4 col-span-4" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center">Weekly Publishes</h2>
          <Bar data={data} options={options} />
        </Card>

        <Card className="p-4 col-span-2" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center">Complaints</h2>
          <Doughnut data={data3} options={options3} />
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <Card className="p-4" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center">User Registration Trend</h2>
          <Line data={data2} options={options2} />
        </Card>
        <Card className="p-4" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center">Revenue</h2>
          <Bar data={data4} options={options4} />
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        <Card className="p-4 col-span-1" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center">Publishing Novels</h2>
          <Pie data={data5} options={options5} />
        </Card>
        <Card className="p-4 col-span-3" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center">Approval Pending List</h2>
          <Table aria-label="Recent Content Details" className='text-foreground-900' radius='none' removeWrapper>
            <TableHeader columns={contentColumns}>
              {column => (
                <TableColumn key={column.key} >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={recentContent}>
              {item => (
                <TableRow key={item.key}>
                  {columnKey => {
                    switch (columnKey) {
                      case 'coverImage':
                        return (
                          <TableCell>
                            <Image
                              width={80}
                              height={80}
                              alt="Cover Image"
                              src={item.coverImage}
                              radius='sm'
                            />
                          </TableCell>
                        );
                      case 'status':
                        return (
                          <TableCell>
                            <Chip color="danger" variant='flat' radius='sm'>
                              {item.status}
                            </Chip>
                          </TableCell>
                        );
                      case 'createdDate':
                        return (
                          <TableCell>
                            {new Date(item.createdDate).toLocaleDateString()}
                          </TableCell>
                        );
                      case 'title':
                        return <TableCell>{item.title}</TableCell>;
                      case 'author':
                        return (
                          <TableCell>
                            <User
                              description={(
                                <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                  @jrgarciadev
                                </Link>
                              )}
                              avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                              }}
                            />
                          </TableCell>
                        );
                      case 'view':
                        return (
                          <TableCell>
                            <Button
                              size='sm'
                              style={{ backgroundColor: '#3e9cf2', color: '#fff' }}
                              className=" text-white"
                              onClick={() => { navigate(`/admin/contents/approve`); }}
                            >
                              View
                            </Button>
                          </TableCell>
                        );
                      default:
                        return (
                          <TableCell>
                            {item[columnKey]}
                          </TableCell>
                        );
                    }
                  }}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
