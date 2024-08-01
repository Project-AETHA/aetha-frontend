import React from 'react'
import { Card } from '@nextui-org/react';
import { FcTodoList } from "react-icons/fc";
import { FcDataEncryption } from "react-icons/fc";
import { IoBookSharp } from "react-icons/io5";
import { SiLibreofficewriter } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
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
                text: 'Source of Income',
            },
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Income (LKR)',
            },
        },
    },
};


function Payments() {

    const navigate = useNavigate()

    function BoxWrapper({ children, link, className }) {
        return (
            <div
                className={`bg-white rounded-md p-6 flex-1
                border border-gray-200
                flex items-center justify-center
                hover:cursor-pointer hover:scale-105 ease-in-out duration-300 ${className}`}
                onClick={() => navigate(link)}
            >
                {children}
            </div>
        )
    }

    return (
        <div>
            <div className="flex gap-4 m-4">
                <BoxWrapper link="/admin/finance/advertisements">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">Advertisements</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <FcTodoList size={64} />
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">LKR 154,232 </strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper link="/admin/finance/subscriptions">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">Subscriptions</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <FcDataEncryption color="green" size={64} />
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">LKR 454,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper link="/admin/finance/ebooks">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">E-Book Selling</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <SiLibreofficewriter color='orange' size={64} />
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold"> LKR 34,232 </strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper link="/admin/finance/preselling">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-lg text-gray-500 font-light">Pre Selling Registration</span>
                        <div className="rounded-md h-24 w-24 flex items-center justify-center ">
                            <IoBookSharp size={64} color='green' />
                        </div>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold"> LKR 4,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
            <div className='px-4 grid grid-cols-2 gap-4'>
                <Card className="p-4" shadow="none" radius="sm">
                    <h2 className="text-lg font-semibold mb-4 flex justify-center">Income</h2>
                    <Bar data={data4} options={options4} />
                </Card>
                <div className='space-y-2'>
                <BoxWrapper className="hover:!scale-100">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-2xl text-gray-500 font-light">Total Income</span>
                        
                        <div className="flex items-center">
                            <strong className="text-2xl text-blue-800 font-semibold">LKR 4,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper className="hover:!scale-100">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-2xl text-gray-500 font-light">Total Expenses</span>
                        
                        <div className="flex items-center">
                            <strong className="text-2xl text-blue-800 font-semibold">LKR 4,232</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper className="hover:!scale-100">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-2xl text-gray-500 font-light">Profit</span>
                        
                        <div className="flex items-center">
                            <strong className="text-2xl text-blue-800 font-semibold">LKR 4,232 </strong>
                        </div>
                    </div>
                </BoxWrapper>
                </div>
            </div>
        </div>
    )
}

export default Payments