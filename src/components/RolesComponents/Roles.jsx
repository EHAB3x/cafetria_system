import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRoles, updateRole, deleteRole, createRole } from '../../Redux/Actions/rolesAction';
import {  GoTrash } from 'react-icons/go';
import { FiEdit2 } from "react-icons/fi";
import CustomTable from "../../components/CustomTable/CustomTable";
import { GrView } from "react-icons/gr";

const RoleList = ({ roles, loading, error, fetchRoles, updateRole, deleteRole, createRole }) => {
  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const [newRoleName, setNewRoleName] = useState('');

  const [editingRole, setEditingRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleUpdateRole = async (roleId, updatedRoleData) => {
    try {
      await updateRole(roleId, updatedRoleData);
      setEditingRole(null); // Exit edit mode after updating
    } catch (error) {
      console.error('Error updating role:', error);
      // Handle error
    }
  };

  const handleDeleteRole = async (roleId) => {
    try {
      await deleteRole(roleId);
    } catch (error) {
      console.error('Error deleting role:', error);
      // Handle error
    }
  };

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
  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default action (form submission)
      handleCreateRole(); // Call the function to create a new role
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const headers = [ "الدور الوظيفي","عدد الموظفين"];

  return (
    <div className="container mx-auto px-8">
    
   
      <div>
   
      <div className="search my-5  w-full">
                <input
                    type="text"
                    placeholder=" ابحث بالاسم"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500  mb-4"
                />
            </div>
     
      <CustomTable
        headers={headers}
        data={filteredRoles.map(role => [
         role.name,
          212,
          <td className='flex gap-5'>
             <button>
              <GrView style={{ color: '#4281c5' }} />
            </button>
          <button
            key={`edit-${role.id}`}
            onClick={() => handleUpdateRole(role.id)}
        
          >
            <FiEdit2 style={{ color: '#3d9635' }} />
          </button>
          <button
            key={`delete-${role.id}`}
            onClick={() => handleDeleteRole(role.id)}
          
          >
            <GoTrash style={{ color: '#d6534a' }}/>
          </button>
          </td>
        ])}
      />
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  roles: state.roles.roles,
  loading: state.roles.loading,
  error: state.roles.error,
});

const mapDispatchToProps = {
  fetchRoles,
  updateRole,
  deleteRole,
  createRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleList);
