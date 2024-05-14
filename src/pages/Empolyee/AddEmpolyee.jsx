import React, { useState } from 'react';
import axios from 'axios';

function AddEmployee() {
    const [newEmployeeData, setNewEmployeeData] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleCreate = async () => {
        try {
            const formData = new FormData();
            formData.append('first_name', newEmployeeData.first_name);
            formData.append('last_name', newEmployeeData.last_name);
            formData.append('city_id', newEmployeeData.city_id);
            formData.append('salary', newEmployeeData.salary);
            formData.append('mobile', newEmployeeData.mobile);
            formData.append('whatsapp_mobile', newEmployeeData.whatsapp_mobile);

            const response = await axios.post(
                'https://cafe.highdam-sk.com/api/admin/employees',
                formData,
                {
                    headers: {
                        Accept: 'application/json',
                        Lang: 'ar',
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Employee created successfully:', response.data);
            setSuccessMessage('Employee added successfully');
            // Clear form data
            setNewEmployeeData({});
            // Remove success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    };

    const handleInputChange = (e, key) => {
        const { value } = e.target;
        setNewEmployeeData((prevData) => ({ ...prevData, [key]: value }));
    };

    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold">إضافة موظف</h2>
            <div className="flex flex-col">
                <div className="flex c justify-left gap-5 items-center my-4">
                    <label htmlFor="first_name" className="mr-2">الاسم الأول:</label>
                    <input id="first_name" className="border border-gray-400 p-2" type="text" placeholder="الاسم الأول" onChange={(e) => handleInputChange(e, 'first_name')} />
                </div>
                <div className="flex items-center mb-4">
                    <label htmlFor="last_name" className="mr-2">Last Name:</label>
                    <input id="last_name" className="border border-gray-400 p-2" type="text" placeholder="Last Name" onChange={(e) => handleInputChange(e, 'last_name')} />
                </div>
                <div className="flex items-center mb-4">
                    <label htmlFor="mobile" className="mr-2">Mobile:</label>
                    <input id="mobile" className="border border-gray-400 p-2" type="text" placeholder="Mobile" onChange={(e) => handleInputChange(e, 'mobile')} />
                </div>
                <div className="flex items-center mb-4">
                    <label htmlFor="whatsapp_mobile" className="mr-2">WhatsApp Mobile:</label>
                    <input id="whatsapp_mobile" className="border border-gray-400 p-2" type="text" placeholder="WhatsApp Mobile" onChange={(e) => handleInputChange(e, 'whatsapp_mobile')} />
                </div>
                <div className="flex items-center mb-4">
                    <label htmlFor="city_id" className="mr-2">City ID:</label>
                    <input id="city_id" className="border border-gray-400 p-2" type="text" placeholder="City ID" onChange={(e) => handleInputChange(e, 'city_id')} />
                </div>
                <div className="flex items-center mb-4">
                    <label htmlFor="salary" className="mr-2">Salary:</label>
                    <input id="salary" className="border border-gray-400 p-2" type="text" placeholder="Salary" onChange={(e) => handleInputChange(e, 'salary')} />
                </div>
                <div className="bsubnit">
                <button className="bg-blue-500 text-white p-2 rounded" onClick={handleCreate}>Create</button>

                </div>
            </div>
            {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
        </div>
    );
}

export default AddEmployee;
