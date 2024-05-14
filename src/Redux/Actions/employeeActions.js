import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  
} from '../Types/employeeTypes';

// Importing custom hooks
import useFetchData from '../hooks/useFetchData';
export const fetchEmployees = () => async (dispatch) => {
  dispatch({ type: FETCH_EMPLOYEES_REQUEST });
  try {
    const data = await useFetchData('https://cafe.highdam-sk.com/api/admin/employees');
    dispatch({ type: FETCH_EMPLOYEES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_EMPLOYEES_FAILURE, payload: error.message });
  }
};


