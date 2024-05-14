import axios from 'axios';
import { FETCH_ROLES_REQUEST, FETCH_ROLES_SUCCESS, FETCH_ROLES_FAILURE, UPDATE_ROLE, DELETE_ROLE } from '../Types/ActionTypes';

export const fetchRolesRequest = () => ({
  type: FETCH_ROLES_REQUEST,
});

export const fetchRolesSuccess = (roles) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: roles,
});

export const fetchRolesFailure = (error) => ({
  type: FETCH_ROLES_FAILURE,
  payload: error,
});

export const fetchRoles = () => async (dispatch) => {
  dispatch(fetchRolesRequest());
  try {
    const response = await axios.get('https://cafe.highdam-sk.com/api/admin/roles', {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: ' Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
      },
    });
    dispatch(fetchRolesSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchRolesFailure(error.message));
  }
};
export const createRole = (newRoleData) => async (dispatch) => {
  try {
    const response = await axios.post('https://cafe.highdam-sk.com/api/admin/roles', newRoleData, {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
      },
    });
    dispatch({
      type: CREATE_ROLE,
      payload: response.data, // Update payload as per your API response
    });
  } catch (error) {
    console.error('Error creating role:', error);
    // Handle error
  }
};

export const updateRole = (roleId, updatedRoleData) => async (dispatch) => {
  try {
   
   const response = await axios.put(`https://cafe.highdam-sk.com/api/admin/roles/${roleId}`, updatedRoleData, {
      headers: {
         Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
       },
     });
    
    // Dispatch action to update role in store
    dispatch({
      type: UPDATE_ROLE,
      payload: response.data, // Update payload as per your API response
    });
  } catch (error) {
    console.error('Error updating role:', error);
    // Handle error
  }
};

export const deleteRole = (roleId) => async (dispatch) => {
  try {
  
    await axios.delete(`https://cafe.highdam-sk.com/api/admin/roles/${roleId}`, {
      headers: {
      Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
      },
     });

    // Dispatch action to delete role from store
    dispatch({
      type: DELETE_ROLE,
      payload: roleId,
    });
  } catch (error) {
    console.error('Error deleting role:', error);
    // Handle error
  }
};

