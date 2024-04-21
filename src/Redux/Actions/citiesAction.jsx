import { GET_ALL_CITIES ,GET_ERROR,CREATE_CITY,DELETE_CITY, EDIT_CITY} from "../Type"

import useGetData from "../../hooks/useGetData.jsx";
import useCreateData from "../../hooks/useCreateData.jsx";
import useDeleteData from "../../hooks/useDeleteData.jsx";
import useEditeData from "../../hooks/useEditeData.jsx";
const config= {
    headers:{"Content-Type":"mulipart/form-data",
Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FjY291bnRpbmdfc3lzdGVtL3B1YmxpYy9hcGkvYWRtaW4vbG9naW4iLCJpYXQiOjE3MDkyMjQwNDcsImV4cCI6MTcyMjE4NDA0NywibmJmIjoxNzA5MjI0MDQ3LCJqdGkiOiJRVUtLRUp0a0FGcEc0ZXpWIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.X5WFf1EmK4_TT-t8FjCGsKRwYDmiVR2_ohd-nu7zW5Y`}}
export const getCities =()=> async(dispatch)=>{
try {

    const res= await useGetData("/api/admin/citys",config);
    console.log('get all cities', res.data)
    dispatch( {
        type: GET_ALL_CITIES,
        payload:res.data
    })
}
catch (e){
    dispatch( {
        type: GET_ERROR,
        payload:"Error "+ e,
    })
}
}
export const createCities =(data)=> async(dispatch)=>{
    try {
        
        const res= await useCreateData("/api/admin/citys",data,config);
        console.log('create  city', res.data)
        dispatch( {
            type: CREATE_CITY,
            payload:res.data
        })
    }
    catch (e){
        dispatch( {
            type: GET_ERROR,
            payload:"Error "+ e,
        })
    }
    }
    export const deleteCities =(id)=> async(dispatch)=>{
        try {
            
            const res= await useDeleteData(`/api/admin/citys/${id}`,config);
            console.log('delete  city', res.data.data)
            dispatch( {
                type: DELETE_CITY,
                payload:res.data.data,
                loading:true
            })
        }
        catch (e){
            dispatch( {
                type: GET_ERROR,
                payload:"Error "+ e,
            })
        }
        }
        export const editCities =(id)=> async(dispatch)=>{
            try {
                
                const res= await useEditeData(`/api/admin/citys/${id}`,config);
                console.log('edit  city', res.data.data)
                dispatch( {
                    type: EDIT_CITY,
                    payload:res.data,
                    loading:true
                })
            }
            catch (e){
                dispatch( {
                    type: GET_ERROR,
                    payload:"Error "+ e,
                })
            }
            }