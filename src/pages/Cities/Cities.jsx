import React, { useEffect, useState } from "react";
import { deleteCities, getCities, updateCities } from "../../Redux/Actions/citiesAction";
import { GoTrash } from "react-icons/go";
import { FiEdit2 } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { FiPlus } from 'react-icons/fi';
import CustomTable from "../../components/CustomTable/CustomTable";

const Cities = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCities());
    }, []);
    const [searchTerm, setSearchTerm] = useState("");
    const getCitiesData = useSelector(state => state.cities.city);
    const loading = useSelector(state => state.cities.loading);

    const [editingCity, setEditingCity] = useState(null);
    const [newCityName, setNewCityName] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);

    const handleDelete = async (id) => {
        await dispatch(deleteCities(id));
    }

    const handleEdit = async (id, cityName) => {
        setEditingCity(id);
        setNewCityName(cityName); // Set the previous name of the city in the input field
        setPopupVisible(true);
    };

    const handleCancelEdit = () => {
        setEditingCity(null);
        setNewCityName("");
        setPopupVisible(false);
    };

    const handleSaveEdit = async () => {
        if (newCityName.trim() !== "") {
            try {
                await dispatch(updateCities(editingCity, { name: newCityName }));
                setEditingCity(null);
                setNewCityName("");
                setPopupVisible(false);
            } catch (error) {
                console.error('Error updating city:', error);
                // Handle error
            }
        }
    };

    const filteredCities = getCitiesData.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const headers = ["الرقم", "الكود", "المدينة", "المحافظة", "التحكم"];

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
            <CustomTable
                headers={headers}
                data={filteredCities.map(city => [
                    city.id,
                    city.code,
                    editingCity === city.id ? (
                        <input
                            type="text"
                            value={newCityName}
                            onChange={(e) => setNewCityName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    ) : city.name,
                    city.province,
                    <td key={city.id} className="px-4 flex gap-5 justify-center items-center py-2">
                        <button>
                            <GrView style={{ color: '#4281c5' }} />
                        </button>
                        <button onClick={() => handleEdit(city.id, city.name)}>
                            <FiEdit2 style={{ color: '#3d9635' }} />
                        </button>
                        <button onClick={() => handleDelete(city.id)}>
                            <GoTrash style={{ color: '#d6534a' }} />
                        </button>
                    </td>
                ])}
            />
            {popupVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <input
                            type="text"
                            value={newCityName}
                            onChange={(e) => setNewCityName(e.target.value)}
                            className="w-full p-4 mb-2 border border-gray-300 rounded-md"
                        />
                        <div className="flex justify-between">
                            <button onClick={handleSaveEdit} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
                                حفظ
                            </button>
                            <button onClick={handleCancelEdit} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cities;
