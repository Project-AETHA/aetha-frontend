// components/Analytics.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register the necessary components
Chart.register(...registerables);

const Analytics = () => {
  const earningsRef = useRef(null);
  const salesRef = useRef(null);
  let earningsChart = useRef(null);
  let salesChart = useRef(null);

  useEffect(() => {
    // Clean up the charts if they already exist
    if (earningsChart.current) {
      earningsChart.current.destroy();
    }
    if (salesChart.current) {
      salesChart.current.destroy();
    }

    const earningsData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Earnings',
          data: [1200, 1900, 3000, 5000, 2000, 3000],
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };

    const salesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Sales',
          data: [30, 50, 100, 75, 150, 200],
          fill: false,
          backgroundColor: 'rgba(153,102,255,0.2)',
          borderColor: 'rgba(153,102,255,1)',
        },
      ],
    };

    // Create the charts
    earningsChart.current = new Chart(earningsRef.current, {
      type: 'line',
      data: earningsData,
    });

    salesChart.current = new Chart(salesRef.current, {
      type: 'line',
      data: salesData,
    });

    // Clean up charts on unmount
    return () => {
      if (earningsChart.current) {
        earningsChart.current.destroy();
      }
      if (salesChart.current) {
        salesChart.current.destroy();
      }
    };
  }, []);

  return (
    <div className="analytics">
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <div className="charts">
        <div className="chart-container mb-8">
          <h3 className="text-xl font-semibold mb-2">Earnings</h3>
          <canvas ref={earningsRef} />
        </div>
        <div className="chart-container">
          <h3 className="text-xl font-semibold mb-2">Sales</h3>
          <canvas ref={salesRef} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
