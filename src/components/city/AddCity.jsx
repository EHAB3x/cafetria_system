import { useState } from "react";
import baseURL from "../../Api/baseURL";
import { createCities } from "../../Redux/Actions/citiesAction";
import { useDispatch } from "react-redux";


const AddCity = () => {
   const [cityName,setCityName]= useState('');
   const dispatch = useDispatch();
  const  handleSubmit =(event)=>{
    event.preventDefault();
    // console.log(city)
    const data = {name_er:cityName};
    console.log(data)
    dispatch(createCities(data))
    // const res=baseURL.post("/api/admin/citys",{name_ar:"ddd"},config)

  }

  return (
    <form className="" onSubmit={handleSubmit}>
        
       <input name="city" onChange={(e)=>setCityName(e.target.value)}/>
       <button type="submit">add</button>
    </form>
  )
}

export default AddCity;