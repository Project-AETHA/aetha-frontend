import {Line} from "react-chartjs-2";

export default function LineChart() {

    const readerEngagementData = {
        labels: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'],
        datasets: [
            {
                label: 'Reader Engagement Score',
                data: [85, 90, 88, 92, 95],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Reader Engagement</h2>
            <div className="h-96">
                <Line data={readerEngagementData} options={{responsive: true, maintainAspectRatio: false}}/>
            </div>
        </>
    );
}