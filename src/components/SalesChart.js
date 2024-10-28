import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function SalesChart() {
  const data = {
    labels: ['Electronics', 'Furniture', 'Groceries'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 200, 400],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  return <Bar data={data} />;
}
