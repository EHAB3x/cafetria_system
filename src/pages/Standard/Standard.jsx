import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStandardUnits,
  updateStandardUnit,
  deleteStandardUnit
} from '../../Redux/Actions/standardActions';
import { RiDeleteBin6Line, RiPencilLine } from 'react-icons/ri';
import CustomTable from '../../components/CustomTable/CustomTable';
import CustomButton from '../../components/button/CustomButton';
import { Link } from 'react-router-dom';

const Standard = () => {
  const dispatch = useDispatch();
  const [updateId, setUpdateId] = useState(null);
  const [updateName, setUpdateName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchStandardUnits());
  }, [dispatch]);

  const standardUnits = useSelector(state => state.standardReducer.standardUnits);
  const loading = useSelector(state => state.standardReducer.loading);
  const error = useSelector(state => state.standardReducer.error);

  const filteredData = standardUnits.filter(unit =>
    unit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdate = () => {
    dispatch(updateStandardUnit(updateId, { name: updateName }));
    setUpdateId(null);
    setUpdateName('');
  };

  const handleDelete = (id) => {
    dispatch(deleteStandardUnit(id));
  };

  const openUpdateModal = (id, currentName) => {
    setUpdateId(id);
    setUpdateName(currentName);
  };

  const closeUpdateModal = () => {
    setUpdateId(null);
    setUpdateName('');
  };

  const headers = ["Number", "Code", "Unit", "Action"];
  const data = filteredData.map((unit, index) => ([
    index + 1,
    '#4587',
    updateId === unit.id ? (
      <input
        type="text"
        value={updateName}
        onChange={(e) => setUpdateName(e.target.value)}
        className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
      />
    ) : (
      unit.name
    ),
    <div className="flex justify-center">
      {updateId === unit.id ? (
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
        >
          Update
        </button>
      ) : (
        <RiPencilLine
          className="text-blue-500 cursor-pointer mr-2"
          onClick={() => openUpdateModal(unit.id, unit.name)}
        />
      )}
      <RiDeleteBin6Line
        className="text-red-500 cursor-pointer"
        onClick={() => handleDelete(unit.id)}
      />
    </div>
  ]));
  
  return (
    <div className=" mx-auto p-4">
     <div className="flex justify-between my-5 items-center">
       <h2 className="text-5xl font-bold my-4">وحدات القياس</h2>
       <Link to={'/addUnit'}>
         <CustomButton text={'إضافة وحدة جديدة'}/>
       </Link>
     </div>
     <div className="w-full my-5">
       <input
         className="border w-full border-gray-400 p-2"
         type="text"
         placeholder="ابحث بالوحدة"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
       />
     </div>
     {loading && <div>Loading...</div>}
     {error && <div className="text-red-500">Error: {error}</div>}
     
     <CustomTable data={data} headers={headers} />
    </div>
  );
};

export default Standard;
