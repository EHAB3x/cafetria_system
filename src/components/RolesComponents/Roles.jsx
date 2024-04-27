import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRoles, updateRole, deleteRole, createRole } from '../../Redux/Actions/rolesAction';
import { GoTrash } from 'react-icons/go';
import { FiEdit2 } from "react-icons/fi";
import CustomTable from "../../components/CustomTable/CustomTable";
import { GrView } from "react-icons/gr";

const RoleList = ({ roles, loading, error, fetchRoles, updateRole, deleteRole }) => {
  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const [newRoleName, setNewRoleName] = useState('');
  const [editingRole, setEditingRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [popupVisible, setPopupVisible] = useState(false); // State to control popup visibility

  const openEditPopup = (role) => {
    setEditingRole(role);
    setNewRoleName(role.name); // Set the role name in the input field
    setPopupVisible(true);
  };

  const closeEditPopup = () => {
    setEditingRole(null);
    setNewRoleName('');
    setPopupVisible(false);
  };

  const handleUpdateRole = async () => {
    if (newRoleName.trim() !== '') {
      try {
        await updateRole(editingRole.id, { name: newRoleName });
        closeEditPopup(); // Close the popup after updating
      } catch (error) {
        console.error('Error updating role:', error);
        // Handle error
      }
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


   const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const headers = ["الدور الوظيفي", "عدد الموظفين"];

  return (
    <div className="container mx-auto px-8">
      <div className="search my-5 w-full">
        <input
          type="text"
          placeholder=" ابحث بالاسم"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 mb-4"
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
              onClick={() => openEditPopup(role)} // Open the popup for editing
            >
              <FiEdit2 style={{ color: '#3d9635' }} />
            </button>
            <button
              key={`delete-${role.id}`}
              onClick={() => handleDeleteRole(role.id)}
            >
              <GoTrash style={{ color: '#d6534a' }} />
            </button>
          </td>
        ])}
      />
      {/* Popup for editing role */}
      {popupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <input
              type="text"
              value={newRoleName}
              onChange={(e) => setNewRoleName(e.target.value)}
              className="w-full p-4 mb-2 border border-gray-300 rounded-md"
            />
            <div className="flex justify-between">
              <button onClick={handleUpdateRole} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
               حفظ
              </button>
              <button onClick={closeEditPopup} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
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
