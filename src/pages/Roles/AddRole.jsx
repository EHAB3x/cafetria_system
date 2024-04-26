
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createRole } from '../../Redux/Actions/rolesAction';
import CustomButton from '../../components/button/CustomButton';

const CreateRoleForm = ({ createRole }) => {
  const [newRoleName, setNewRoleName] = useState('');

  const handleCreateRole = async () => {
    if (newRoleName.trim() !== '') {
      try {
        await createRole({ name: newRoleName });
        setNewRoleName(''); // Clear the input field after creating the role
      } catch (error) {
        console.error('Error creating role:', error);
        // Handle error
      }
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default action (form submission)
      handleCreateRole(); // Call the function to create a new role
    }
  };

  return (
    <div className="container block w-full my-8 mx-auto px-8">
        <p className='text-4xl font-bold my-5'>إضافة دور وظيفي جديد </p>
        <p className='text-2xl text-gray-400 my-8 '>الدور الوظيفى هنا يعنى المنصب الذي سيتم إدارجه للموظف عند إضافته <br/> حتى يتم فلتترة الموظفين حسب وظائفهم</p>
        <p className='text-2xl my-2 font-bold'>اسم الدور الوظيفي</p>
      <input
        type="text"
        className="border w-8/12 h-16 block mb-8 border-gray-300 rounded-xl px-3 py-2 "
        value={newRoleName}
        onChange={(e) => setNewRoleName(e.target.value)}
        onKeyDown={handleEnterKeyPress}
        placeholder="ادخل اسم الدور الوظيفي هنا"
      />
    
      <CustomButton  padding="18px 104px" text="  حفظ"  onClick={handleCreateRole}/>
    </div>
  );
};

const mapDispatchToProps = {
  createRole,
};

export default connect(null, mapDispatchToProps)(CreateRoleForm);
