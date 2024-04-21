import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCities } from "../../Redux/Actions/citiesAction";
import CustomButton from "../button/CustomButton";
import baseURL from "../../Api/baseURL";
import { Link } from "react-router-dom";

const AddCity = () => {
    const [cityName, setCityName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = { name_ar: cityName }; // Use "name_ar" instead of "name_er"
            const res = await baseURL.post("/api/admin/citys", data);
            console.log('create city', res.data);
            dispatch(createCities(res.data));
            setCityName(''); 
            alert("City added successfully!");
        } catch (error) {
            console.error("Error adding city:", error);
            alert("Failed to add city. Please try again.");
        }
    }

    return (
        <div className="addCity">
            <p className="w-full font-bold text-4xl m-5">
                إضافة مدينة جديدة
            </p>
            <form className=" w-full  items-center" onSubmit={handleSubmit}>
                <div className="flex mb-4">
                    <div className="Code w-1/3 mr-4">
                        <p className="text-2xl my-4 font-bold">الكود</p>
                        <input className="  w-10/12 p-5   rounded-xl " name="code" />
                    </div>
                    <div className="cityName w-1/3 mr-4">
                        <p className="text-2xl my-4 font-bold">اسم المدينة</p>
                        <input className="  w-10/12 p-5   rounded-xl " name="city" value={cityName} onChange={(e) => setCityName(e.target.value)} />
                    </div>
                    <div className="governName w-1/3 mr-4">
                        <p className="text-2xl my-4 font-bold">المحافظة</p>
                        <input className="  w-10/12 p-5   rounded-xl " name="Government" />
                    </div>
                </div>
              
                <div className="flex w-full my-8 mx-5 gap-4">
                    <CustomButton  text={'  حفظ  ' } onClick={handleSubmit} />
                    <Link to='/cities'>
                    <CustomButton text={'إلغاء'} />
                    </Link>
                  
                </div>
            </form>
        </div>
    )
}

export default AddCity;
