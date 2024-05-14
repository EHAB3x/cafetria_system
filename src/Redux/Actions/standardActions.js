import axios from 'axios';
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

export const fetchStandardUnitsRequest = () => ({
  type: FETCH_STANDARD_UNITS_REQUEST,
});

export const fetchStandardUnitsSuccess = (units) => ({
  type: FETCH_STANDARD_UNITS_SUCCESS,
  payload: units,
});

export const fetchStandardUnitsFailure = (error) => ({
  type: FETCH_STANDARD_UNITS_FAILURE,
  payload: error,
});

export const fetchStandardUnits = () => async (dispatch) => {
  dispatch(fetchStandardUnitsRequest());
  try {
    const response = await axios.get('https://cafe.highdam-sk.com/api/admin/standard_units', {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
      },
    });
    dispatch(fetchStandardUnitsSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchStandardUnitsFailure(error.message));
  }
};

export const createStandardUnitRequest = () => ({
  type: CREATE_STANDARD_UNIT_REQUEST,
});

export const createStandardUnitSuccess = (unit) => ({
  type: CREATE_STANDARD_UNIT_SUCCESS,
  payload: unit,
});

export const createStandardUnitFailure = (error) => ({
  type: CREATE_STANDARD_UNIT_FAILURE,
  payload: error,
});

export const createStandardUnit = (newUnitData) => async (dispatch) => {
  dispatch(createStandardUnitRequest());
  try {
    const response = await axios.post('https://cafe.highdam-sk.com/api/admin/standard_units', newUnitData, {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
      },
    });
    dispatch(createStandardUnitSuccess(response.data));
  } catch (error) {
    dispatch(createStandardUnitFailure(error.message));
  }
};

export const updateStandardUnitRequest = () => ({
  type: UPDATE_STANDARD_UNIT_REQUEST,
});

export const updateStandardUnitSuccess = (unit) => ({
  type: UPDATE_STANDARD_UNIT_SUCCESS,
  payload: unit,
});

export const updateStandardUnitFailure = (error) => ({
  type: UPDATE_STANDARD_UNIT_FAILURE,
  payload: error,
});

export const updateStandardUnit = (id, updatedUnitData) => async (dispatch) => {
  dispatch(updateStandardUnitRequest());
  try {
    const response = await axios.put(`https://cafe.highdam-sk.com/api/admin/standard_units/${id}`, updatedUnitData, {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
      },
    });
    dispatch(updateStandardUnitSuccess(response.data));
  } catch (error) {
    dispatch(updateStandardUnitFailure(error.message));
  }
};

export const deleteStandardUnitRequest = () => ({
  type: DELETE_STANDARD_UNIT_REQUEST,
});

export const deleteStandardUnitSuccess = (id) => ({
  type: DELETE_STANDARD_UNIT_SUCCESS,
  payload: id,
});

export const deleteStandardUnitFailure = (error) => ({
  type: DELETE_STANDARD_UNIT_FAILURE,
  payload: error,
});

export const deleteStandardUnit = (id) => async (dispatch) => {
  dispatch(deleteStandardUnitRequest());
  try {
    await axios.delete(`https://cafe.highdam-sk.com/api/admin/standard_units/${id}`, {
      headers: {
        Accept: 'application/json',
        Lang: 'ar',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y',
      },
    });
    dispatch(deleteStandardUnitSuccess(id));
  } catch (error) {
    dispatch(deleteStandardUnitFailure(error.message));
  }
};
