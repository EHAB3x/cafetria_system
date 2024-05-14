import { combineReducers } from "redux";
import citiesReducer from './citiesReducer';
import rolesReducer from "./roleReducer";
import standardReducer from "./standardReducer";
import employeeReducer from "./employeeReducer";
 const rootReducer = combineReducers ({
    cities: citiesReducer,
    roles:rolesReducer,
    standardReducer:standardReducer,
    employeeReducer:employeeReducer,


})
export default rootReducer;