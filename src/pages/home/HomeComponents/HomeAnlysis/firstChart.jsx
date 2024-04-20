import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid, ResponsiveContainer } from 'recharts';
const data = [
  { month: 'Jan', orders: 120, fees: 200, gains: 900 },
  { month: 'March', orders: 100, fees: 520, gains: 1200 },
  { month: 'April', orders: 50, fees: 680, gains: 1580 },
  { month: 'May', orders: 80, fees: 230, gains: 1980 },
  { month: 'June', orders: 70, fees: 320, gains: 2000 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload; 
      const totalOrders = data.orders;
      const totalFees = data.fees;
      const totalGains = data.gains;
  
      return (
        <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '5px' }}>
        <p>{`Month: ${label}`}</p>
          <p>{`Total Orders: ${totalOrders}`}</p>
          <p>{`Total Fees: ${totalFees}`}</p>
          <p>{`Total Gains: ${totalGains}`}</p>
        </div>
      );
    }
  
    return null;
  };
  
  const heartPath = (x, y, size) => {
    const offsetX = size / 2;
    const offsetY = size / 4;
    const topCurveHeight = size / 4;
    const bottomCurveHeight = size / 4;
  
    return `M ${x},${y}
      q ${offsetX},${-topCurveHeight} ${offsetX},${offsetY}
      q 0,${offsetY} ${-offsetX},${offsetY}
      q -${offsetX},${-offsetY} -${offsetX},${-topCurveHeight}
      q 0,${-bottomCurveHeight} ${offsetX},${-bottomCurveHeight}
      q ${offsetX},${bottomCurveHeight} ${offsetX},${offsetY}
      Z`;
  };
  
  const Chart = () => {
    return (
      <div className="bg-white rounded shadow p-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold">Monthly Performance</h2>
        </div>
        <div>
          <ResponsiveContainer width="50%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="orders" fill="#EEE" />
              <Bar dataKey="fees" fill="#1664B8" />
              <Line type="monotone" dataKey="gains" stroke="black" strokeWidth={2} shape={heartPath} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default Chart;
  