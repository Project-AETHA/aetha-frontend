import React from 'react';
import { Card } from '@nextui-org/react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement } from 'chart.js';
import { TiTickOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import { GrTransaction } from 'react-icons/gr';
import { Doughnut } from 'react-chartjs-2';
import TransactionTable from './Transactiontable';



ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Advertisements',
            data: [65, 59, 80, 81, 56, 55, 40, 75, 82, 91, 73, 66],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            borderWidth: 1,
            pointRadius: 0 // remove the highlighted points
        },
        {
            label: 'Subscriptions',
            data: [85, 72, 90, 100, 85, 70, 60, 95, 105, 110, 90, 85],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1,
            borderWidth: 1,
            pointRadius: 0 // remove the highlighted points
        },
        {
            label: 'Ebook Selling',
            data: [45, 50, 60, 75, 70, 65, 50, 55, 60, 65, 70, 75],
            fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgb(255, 206, 86)',
            tension: 0.1,
            borderWidth: 1,
            pointRadius: 0 // remove the highlighted points
        },
        {
            label: 'Pre-Selling Registrations',
            data: [30, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1,
            borderWidth: 1,
            pointRadius: 0 // remove the highlighted points
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Month'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Revenue'
            },
            ticks: {
                callback: function (value) {
                    return '$' + value;
                }
            }
        }
    }
};


const weeklyData = [
    { week: 'Week 1', success: 120, failure: 30 },
    { week: 'Week 2', success: 150, failure: 20 },
    { week: 'Week 3', success: 130, failure: 25 },
    { week: 'Week 4', success: 140, failure: 35 },
];

const totalTransactions = weeklyData.reduce((acc, { success, failure }) => acc + success + failure, 0);
const totalSuccess = weeklyData.reduce((acc, { success }) => acc + success, 0);
const totalFailure = weeklyData.reduce((acc, { failure }) => acc + failure, 0);

const avgSuccessRate = (totalSuccess / totalTransactions) * 100;
const avgFailureRate = (totalFailure / totalTransactions) * 100;

const data1 = {
    labels: ['Success', 'Failure'],
    datasets: [{
        label: 'Transaction Rates',
        data: [avgSuccessRate, avgFailureRate],
        backgroundColor: [
            'rgb(75, 192, 192)', // Success color
            'rgb(255, 99, 132)'  // Failure color
        ],
        hoverOffset: 4
    }]
};

const options1 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    let label = context.label || '';
                    let value = context.raw || 0;
                    return `${label}: ${value.toFixed(2)}%`;
                }
            }
        }
    },
    cutout: '50%', // Creates the donut effect
};



function BoxWrapper({ children, bgColor }) {
    return <div className={`bg-${bgColor} rounded-md p-4 border border-gray-200 flex items-center`}>{children}</div>;
}

function Transactions() {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <Card className="p-4 col-span-2" shadow="none" radius="sm">
                    <h2 className="text-lg font-semibold mb-4 flex justify-center">Transaction Revenue Amount</h2>
                    <Line data={data} options={options} />
                </Card>

                <Card className="p-4 col-span-1 flex justify-center items-center" shadow="none" radius="sm">
                    <h2 className="text-lg font-semibold mb-4 flex text-center">Average Transaction Rate for a Week  </h2>
                    <Doughnut data={data1} options={options1} />
                </Card>

                <div className="col-span-1 flex flex-col space-y-3">
                    <BoxWrapper bgColor="white">
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                            <GrTransaction className="text-2xl text-white" />
                        </div>
                        <div className="pl-4">
                            <span className="text-sm text-gray-500 font-light">Transaction Count</span>
                            <div className="flex items-center">
                                <strong className="text-xl text-gray-700 font-semibold">54,232</strong>
                            </div>
                        </div>
                    </BoxWrapper>
                    <BoxWrapper bgColor="white">
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                            <TiTickOutline className="text-4xl text-white" />
                        </div>
                        <div className="pl-4">
                            <span className="text-sm text-gray-500 font-light">Success Count</span>
                            <div className="flex items-center">
                                <strong className="text-xl text-gray-700 font-semibold">52,423</strong>
                            </div>
                        </div>
                    </BoxWrapper>
                    <BoxWrapper bgColor="white">
                        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-600">
                            <ImCross className="text-xl text-white" />
                        </div>
                        <div className="pl-4">
                            <span className="text-sm text-gray-500 font-light">Failure Count</span>
                            <div className="flex items-center">
                                <strong className="text-xl text-gray-700 font-semibold">423</strong>
                            </div>
                        </div>
                    </BoxWrapper>
                    <BoxWrapper bgColor="blue-200">
                        <div className="pl-4">
                            <span className="text-sm text-gray-500 font-light">Total Transaction Revenue</span>
                            <div className="flex items-center">
                                <strong className="text-2xl text-blue-800 font-semibold">$423,567</strong>
                            </div>
                        </div>
                    </BoxWrapper>
                </div>
            </div>
            <div className=' my-4 '>
              <TransactionTable />
            </div>
        </div>
    );
}

export default Transactions;
