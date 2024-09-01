import React from 'react';
import { Pie } from 'react-chartjs-2';

function Chart() {
  const data = {
    labels: ['Total Stock', 'Stock Remaining'],
    datasets: [
      {
        label: 'Inventory Distribution',
        data: [300, 50],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie data={data} />
    </div>
  );
}

export default Chart;
