import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  FaTrash } from 'react-icons/fa';
import CustomTable from '../../components/CustomTable/CustomTable';
import CustomButton from '../../components/button/CustomButton';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Employee = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://cafe.highdam-sk.com/api/admin/employees', {
        headers: {
          Accept: 'application/json',
          Lang: 'ar',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
        },
      });
      setEmployees(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://cafe.highdam-sk.com/api/admin/employees/${id}`, {
        headers: {
          Accept: 'application/json',
          Lang: 'ar',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
        },
      });
      console.log('Employee deleted successfully');
      // Refetch data after delete
      fetchData();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };


  const headers = ['الاسم الأول', 'اسم العائلة', 'الهاتف', 'رقم الواتس', 'City ID', 'الراتب', 'التحكم'];
  
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const data = filteredEmployees.map((employee) => [
    employee.first_name,
    employee.last_name,
    employee.mobile,
    employee.whatsapp_mobile,
    employee.city_id,
    employee.salary,
    <div >
     
      <button onClick={() => handleDelete(employee.id)}><FaTrash /></button>
    </div>,
  ]);

  return (
    <div className="container w-11/12 mx-auto">
     <div className="flex justify-between my-8 items-center ">
     <h1 className="text-5xl font-bold my-4 "> الموظفين</h1>
    <Link to={'/addEmpolyee'}>
    <CustomButton padding="15px 25px" text="إضافة مدينة جديدة" icon={<FiPlus />}/>
    </Link>
     </div>
      <div className="mb-4 w-full  ">
        <input
          className="border p-5 h-12 border-gray-400 w-full"
          type="text"
          placeholder="ابحث بالاسم الأول أو اللقب"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <CustomTable data={data} headers={headers} />
    
    </div>
  );
};

export default Employee;
