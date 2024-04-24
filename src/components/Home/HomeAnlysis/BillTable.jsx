import React, { useState } from 'react';
import CustomDropdown from '../../Dropdown/CustomDropdown'; // Make sure to import CustomDropdown correctly

function BillTable() {
  const [bills, setBills] = useState([
    { history: '2024-04-01', value: 100, type: 'فاتورة شراء', number: 'B001' },
    { history: '2024-04-03', value: 200, type: 'فاتورة بيع', number: 'B002' },
    { history: '2024-04-05', value: 150, type: 'فاتورة شراء', number: 'B003' },
    { history: '2024-04-08', value: 150, type: 'فاتورة بيع', number: 'B003' },
    // Add more bill data as needed
  ]);
  const [filteredBills, setFilteredBills] = useState(bills); // Initialize filteredBills with the initial bills array

  const handleFilter = (filter) => {
    let filteredBills = [];
    
    // Apply filter logic based on the selected option
    switch (filter) {
      case 'All':
        filteredBills = bills; // Display all bills
        break;
      case 'Newest':
        filteredBills = [...bills].sort((a, b) => new Date(b.history) - new Date(a.history)); // Sort bills by newest
        break;
      case 'Oldest':
        filteredBills = [...bills].sort((a, b) => new Date(a.history) - new Date(b.history)); // Sort bills by oldest
        break;
      default:
        filteredBills = bills; // Default to displaying all bills
    }
  
    // Update state to display filtered bills
    setFilteredBills(filteredBills);
  };
  
  return (
    <div className="w-8/12 rounded-2xl mx-auto bg-white">
      <div className="flex flex-row-reverse px-5 items-center justify-between mt-5">
        {/* Dropdown for filtering bills */}
        <button className='flex gap-5 p-5 items-center'>
          <span className='text-gray-500 text-2xl'>تصنيف حسب</span>
          <CustomDropdown options={['All', 'Newest', 'Oldest']} onSelect={handleFilter} />
        </button>
        {/* Heading */}
        <h3 className="text-2xl font-bold">الفواتير الصادرة مؤخرا</h3>
        {/* Dropdown for actions */}
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
                <CustomDropdown options={['Edit', 'Delete']} /> {/* Using the CustomDropdown component for actions */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BillTable;
