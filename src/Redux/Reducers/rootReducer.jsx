import { combineReducers } from "redux";
import citiesReducer from './citiesReducer';
import rolesReducer from "./roleReducer";

 const rootReducer = combineReducers ({
    cities: citiesReducer,
    roles:rolesReducer,
   
})
export default rootReducer;