import React from 'react';

const CustomTable = ({ data, headers }) => {
  return (
    <table className="table-auto w-full rounded-4xl text-2xl border border-gray-300">
      <thead>
        <tr className="bg-blue-50">
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-2 text-center">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex} className="bg-white text-center divide-y divide-gray-200">
            {rowData.map((cellData, cellIndex) => (
              <td key={cellIndex} className="px-4 py-2">{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
