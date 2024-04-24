import React from 'react';
import { Chart } from 'react-google-charts';

const ComboChartComponent = () => {
  const chartData = [
    ['Month', 'المصروفات', 'الطلبات', 'الأرباح'],
    ['January', 1000, 800 , 150],
    ['February', 1200, 1000 ,250],
    ['March', 1500, 1200,350],
    ['April', 1800, 1500,450],
    ['May', 1600, 1300 ,550],
    ['June', 1400, 1100,750],
    ['July', 1300, 1000,1050],
    ['August', 1100, 900,1400],
    ['September', 1000, 800,1505],
    ['October', 1200, 1000,1720],
    ['November', 1300, 1100,1850],
    ['December', 1500, 1300,2000]
  ];

  const chartOptions = {
    seriesType: 'bars',
    series: { 0: { color: '#1664B8' }, 1: { color: '#e8efed' }, 2: { type: 'line', color: '#111' } },
    vAxis: { title: 'Dollars', minValue: 0, maxValue: 3000 },
    hAxis: { title: 'Month' },
  };

  return (
    <>
    <div className="w-full bg-white rounded-2xl">
      <h1 className='my-8 px-5 font-bold text-4xl'>معدل الأرباح فى الفترة الأخيرة</h1>
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="ComboChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={chartOptions}
    />
    </div>
    </>
  );
};

export default ComboChartComponent;
