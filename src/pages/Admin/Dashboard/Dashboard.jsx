import React from 'react';
import { Card } from '@nextui-org/react';
import { IoPeople, IoMenu, IoPauseSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'
import { Bar, Line, Doughnut, Pie, Bubble } from 'react-chartjs-2';
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
      backgroundColor: ['#8ed4be', '#f44336', '#ffeb3b'],
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

const complaintData = {
  labels: ['Assistance', 'Bug', 'Complaints'],
  datasets: [
    {
      label: 'Number of Complaints',
      data: [10, 15, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(54, 162, 235, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    }
  ]
};

const optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Categories'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Number of Complaints'
      },
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.dataset.label || '';
          const value = context.raw;
          return `${label}: ${value}`;
        }
      }
    }
  }
};



function Dashboard() {

  const navigate = useNavigate();

  function BoxWrapper({ children, link }) {
    return <div className="bg-white rounded-md p-4 hover:cursor-pointer hover:scale-105 duration-300 ease-in-out flex-1 border border-gray-200 flex items-center" onClick={() => navigate(link)}>{children}</div>
  }

  return (
    <div>
      <div className="flex gap-4 m-4">
        <BoxWrapper link="/admin/users">
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
        <BoxWrapper link="/admin/complaints">
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
        <BoxWrapper link="/admin/contents">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400">
            <IoPauseSharp className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Pending Approvals</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">13</strong>
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        <Card className="p-4 col-span-2" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center">User Registration Trend</h2>
          <Line data={data2} options={options2} />
        </Card>
        <Card className="p-4 col-span-1" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center">Publishing Novels</h2>
          <Pie data={data5} options={options5} />
        </Card>
        <Card className="p-4 col-span-1 h-96" shadow="none" radius="sm">
          <h2 className="text-lg font-semibold mb-4 flex justify-center text-center">Number of Complaints by Category</h2>
          <div className="relative h-full">
            <Bar data={complaintData} options={optionsBar} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
