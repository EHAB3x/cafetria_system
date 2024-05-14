import {
    FETCH_STANDARD_UNITS_REQUEST,
    FETCH_STANDARD_UNITS_SUCCESS,
    FETCH_STANDARD_UNITS_FAILURE,
    CREATE_STANDARD_UNIT_REQUEST,
    CREATE_STANDARD_UNIT_SUCCESS,
    CREATE_STANDARD_UNIT_FAILURE,
    UPDATE_STANDARD_UNIT_REQUEST,
    UPDATE_STANDARD_UNIT_SUCCESS,
    UPDATE_STANDARD_UNIT_FAILURE,
    DELETE_STANDARD_UNIT_REQUEST,
    DELETE_STANDARD_UNIT_SUCCESS,
    DELETE_STANDARD_UNIT_FAILURE
  } from '../Types/standardTypes';
  
  const initialState = {
    standardUnits: [],
    loading: false,
    error: null
  };
  
  const standardReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STANDARD_UNITS_REQUEST:
      case CREATE_STANDARD_UNIT_REQUEST:
      case UPDATE_STANDARD_UNIT_REQUEST:
      case DELETE_STANDARD_UNIT_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_STANDARD_UNITS_SUCCESS:
        return { ...state, loading: false, standardUnits: action.payload, error: null };
      case CREATE_STANDARD_UNIT_SUCCESS:
        return { ...state, loading: false, standardUnits: [...state.standardUnits, action.payload], error: null };
      case UPDATE_STANDARD_UNIT_SUCCESS:
        const updatedUnits = state.standardUnits.map(unit => (unit.id === action.payload.id ? action.payload : unit));
        return { ...state, loading: false, standardUnits: updatedUnits, error: null };
      case DELETE_STANDARD_UNIT_SUCCESS:
        const filteredUnits = state.standardUnits.filter(unit => unit.id !== action.payload);
        return { ...state, loading: false, standardUnits: filteredUnits, error: null };
      case FETCH_STANDARD_UNITS_FAILURE:
      case CREATE_STANDARD_UNIT_FAILURE:
      case UPDATE_STANDARD_UNIT_FAILURE:
      case DELETE_STANDARD_UNIT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default standardReducer;
  