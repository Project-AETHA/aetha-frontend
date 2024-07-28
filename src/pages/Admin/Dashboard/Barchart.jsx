import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: 'rgba(115,39,245,0.8)',
      borderColor: 'none',
      borderWidth: 0,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

function Barchart() {
  return (
    <div className="w-full max-w-md m-6 flex justify-start items-start">
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}

export default Barchart