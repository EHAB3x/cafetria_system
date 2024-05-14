import {
    FETCH_EMPLOYEES_REQUEST,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE,
    CREATE_EMPLOYEE_REQUEST,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_FAILURE,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAILURE,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE
  } from '../Types/employeeTypes';
  
  const initialState = {
    employees: [],
    loading: false,
    error: null
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EMPLOYEES_REQUEST:
    
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_EMPLOYEES_SUCCESS:
        return {
          ...state,
          loading: false,
          employees: action.payload,
          error: null
        };
    
      case FETCH_EMPLOYEES_FAILURE:
   
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default employeeReducer;
  