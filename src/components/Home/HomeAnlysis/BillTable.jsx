import React, { useState } from 'react';
import CustomDropdown from '../../Dropdown/CustomDropdown'; 

function BillTable() {
  const initialBills = [
    { history: '2024-05-01', value: 100, type: 'فاتورة شراء', number: 'B001' },
    { history: '2024-04-03', value: 200, type: 'فاتورة بيع', number: 'B002' },
    { history: '2024-06-05', value: 150, type: 'فاتورة شراء', number: 'B003' },
    { history: '2024-04-08', value: 180, type: 'فاتورة بيع', number: 'B004' },
    // Add more bill data as needed
  ];
  const [bills, setBills] = useState(initialBills);
  const [filteredBills, setFilteredBills] = useState(initialBills); 

  const handleFilter = (filter) => {
    let filteredBills = [...bills];

    switch (filter) {
      case 'All':
        break;
      case 'Newest':
        filteredBills.sort((a, b) => new Date(b.history) - new Date(a.history));
        break;
      case 'Oldest':
        filteredBills.sort((a, b) => new Date(a.history) - new Date(b.history));
        break;
      default:
        break;
    }

    setFilteredBills(filteredBills);
  };
  
  return (
    <div className="w-8/12 rounded-2xl mx-auto bg-white">
      <div className="flex flex-row-reverse px-5 items-center justify-between mt-5">
        {/* Dropdown for filtering bills */}
        <button className='flex gap-5 p-5 items-center'>
          <span className='text-gray-500 text-2xl'>تصنيف حسب</span>
          <CustomDropdown options={['All', 'Newest', 'Oldest']} onClickOption={handleFilter} />
        </button>
        {/* Heading */}
        <h3 className="text-2xl font-bold">الفواتير الصادرة مؤخرا</h3>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">رقم الفاتورة</th>
            <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">نوع الفاتورة</th>
            <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">قيمة الفاتورة</th>
            <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider">تاريخ الفاتورة</th>
            <th scope="col" className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase tracking-wider"> </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredBills.map((bill, index) => (
            <tr key={index}>
              <td className="px-6 py-3 text-center whitespace-nowrap">{bill.number}</td>
              <td className="px-6 py-3 text-center whitespace-nowrap">{bill.type}</td>
              <td className="px-6 py-3 text-center whitespace-nowrap">{bill.value}</td>
              <td className="px-6 py-3 text-center whitespace-nowrap">{bill.history}</td>
              <td className="px-6 py-3 text-center whitespace-nowrap">
                {/* Dropdown for actions */}
                <CustomDropdown
                  options={['Edit', 'Delete']}
                  onSelect={(option) => {
                    // Handle dropdown actions here if needed
                    console.log("Dropdown option selected:", option);
                  }}
                /> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BillTable;
