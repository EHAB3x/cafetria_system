
import "./Cities.css";
import { useEffect } from "react";
import { deleteCities, getCities , editCities} from "../../Redux/Actions/citiesAction";

import { useDispatch, useSelector } from "react-redux";
import AddCity from "../../components/city/AddCity";

const Cities = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
 dispatch(getCities());
     
    },[]);
    const getCitiesData = useSelector(state => state.cities.city);
    const loading = useSelector(state => state.cities.loading);
    console.log(getCitiesData,loading)
const handleDelete=async(id)=>{
 await dispatch(deleteCities(id))
 window.location.reload()

}
const handleEdit=async(id)=>{
  await dispatch(editCities(id))

 
 }

  return (
    <div className="">
       {/* { getCitiesData[0]} */}
       {getCitiesData.map(city=>
        <div key={city.id}>
        {city.name}---
        <button onClick={()=>handleDelete(city.id)}>delete</button>
        <button onClick={()=>handleEdit(city.id)} >edit</button></div>
      
       
        )}
       <AddCity />
    </div>
  )
}

export default Cities;