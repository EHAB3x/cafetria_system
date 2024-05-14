// rolesReducer.js
import { FETCH_ROLES_REQUEST, FETCH_ROLES_SUCCESS, FETCH_ROLES_FAILURE, UPDATE_ROLE, DELETE_ROLE } from '../Types/ActionTypes';

const initialState = {
  roles: [],
  loading: false,
  error: null,
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        roles: action.payload,
      };
    case FETCH_ROLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ROLE:
      // Find the index of the role being updated
      const updatedRoleIndex = state.roles.findIndex(role => role.id === action.payload.id);
      // Update the role in the roles array
      const updatedRoles = [...state.roles];
      updatedRoles[updatedRoleIndex] = action.payload;
      return {
        ...state,
        roles: updatedRoles,
      };
    case DELETE_ROLE:
      // Filter out the role being deleted
      const filteredRoles = state.roles.filter(role => role.id !== action.payload);
      return {
        ...state,
        roles: filteredRoles,
      };
    default:
      return state;
  }
};

export default rolesReducer;
