import React, { useEffect, useState } from "react";
import { deleteCities, getCities, editCities } from "../../Redux/Actions/citiesAction";
import { GoTrash } from "react-icons/go";
import { FiEdit2 } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { FiPlus } from 'react-icons/fi';

const Cities = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCities());
    }, []);
    const [searchTerm, setSearchTerm] = useState("");
    const getCitiesData = useSelector(state => state.cities.city);
    const loading = useSelector(state => state.cities.loading);

    const handleDelete = async (id) => {
        await dispatch(deleteCities(id));
    }

    const handleEdit = async (id) => {
        await dispatch(editCities(id));
    }

    const filteredCities = getCitiesData.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="px-10 my-8 w-full">
            <div className="header flex items-center justify-between my-7">
                <p className="heading text-5xl font-bold">
                    المدن
                </p>
                <Link to='/addCity'>
                    <CustomButton text="إضافة مدينة جديدة" icon={<FiPlus />} />
                </Link>
            </div>
            <div className="search my-5 w-full">
                <input
                    type="text"
                    placeholder=" ابحث بالاسم"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500  mb-4"
                />
            </div>
            <table className="table-auto w-full rounded-4xl text-2xl border border-gray-300 ">
                <thead>
                    <tr className="bg-blue-50">
                        <th className="px-4 py-2 text-center">الرقم</th>
                        <th className="px-4 py-2 text-center">الكود</th>
                        <th className="px-4 py-2 text-center">المدينة</th>
                        <th className="px-4 py-2 text-center">المحافظة</th>
                        <th className="px-4 py-2 text-center">التحكم</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCities.map(city => (
                        <tr key={city.id} className="bg-white text-center divide-y divide-gray-200">
                            <td className="px-4 py-2 ">{city.id}</td>
                            <td className="px-4 py-2">code436</td>
                            <td className="px-4 py-2">{city.name}</td>
                            <td className="px-4 py-2">المحافظة</td>
                            <td className="px-4 flex gap-5 justify-center items-center py-2">
                                <button>
                                    <GrView style={{ color: '#4281c5' }} />
                                </button>
                                <button onClick={() => handleEdit(city.id)} >
                                    <FiEdit2 style={{ color: '#3d9635' }} />
                                </button>
                                <button onClick={() => handleDelete(city.id)}>
                                    <GoTrash style={{ color: '#d6534a' }} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Cities;