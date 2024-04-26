// roleFunctions.js
import axios from 'axios';

export const updateRoleApi = async (roleId, updatedRoleData) => {
  try {
    const response = await axios.put(`https://cafe.highdam-sk.com/api/admin/roles/${roleId}`, updatedRoleData, {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer YOUR_TOKEN',
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRoleApi = async (roleId) => {
  try {
    await axios.delete(`https://cafe.highdam-sk.com/api/admin/roles/${roleId}`, {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer YOUR_TOKEN',
      },
    });
    return roleId;
  } catch (error) {
    throw error;
  }
};

export const createRoleApi = async (newRoleData) => {
  try {
    const response = await axios.post('https://cafe.highdam-sk.com/api/admin/roles', newRoleData, {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer YOUR_TOKEN',
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
