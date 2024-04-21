import {GET_ALL_CITIES, GET_ERROR,CREATE_CITY , DELETE_CITY, EDIT_CITY} from '../Type';
const initialState = {
    city:[],
    deleteCities:[],
    loading: true,
} 
 const citiesReducer = (state = initialState,action)=>{
switch(action.type) {
    case GET_ALL_CITIES: 
    return { 
        ...state ,
        city:action.payload,loading:false
    }
    case CREATE_CITY: 
    return {
        city:action.payload,
        loading:false
    }
    case DELETE_CITY:
        return { 
            ...state,
            deleteCities:action.payload,loading:false
        } 
        case EDIT_CITY:
            return { 
                ...state,
                EDITCities:action.payload,loading:false
            } 
    case GET_ERROR:
        return { 
            city:action.payload,loading:true
        } 
    default: 
    return state
}
}
export default citiesReducer;