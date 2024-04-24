import React from 'react';
import { Chart } from 'react-google-charts';

function InvoiceChart() {
  const data = [
    ['Month', 'Sales Invoices', 'Purchase Invoices'],
    ['January', 100, 150],
    ['February', 120, 180],
    ['March', 130, 160],
    ['April', 190, 260],
    ['May', 230, 360],
    // Add more months and data as needed
  ];

  const options = {
    title: 'إحصائيات الفواتير الصادرة',
    chartArea: { width: '80%' },
    hAxis: { title: 'Month' },
    vAxis: { title: 'Invoices' },
    colors: ['#d6534a', '#eba9a5'], // Colors for the bars
  };

  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default InvoiceChart;
