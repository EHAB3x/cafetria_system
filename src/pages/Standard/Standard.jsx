import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStandardUnits,
  createStandardUnit,
  updateStandardUnit,
  deleteStandardUnit
} from '../../Redux/Actions/standardActions';
import { RiDeleteBin6Line, RiPencilLine } from 'react-icons/ri';
import CustomTable from '../../components/CustomTable/CustomTable';

const Standard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [updateId, setUpdateId] = useState(null);
  const [updateName, setUpdateName] = useState('');

  useEffect(() => {
    dispatch(fetchStandardUnits());
  }, [dispatch]);

  const standardUnits = useSelector(state => state.standardReducer.standardUnits);
  const loading = useSelector(state => state.standardReducer.loading);
  const error = useSelector(state => state.standardReducer.error);

  const handleCreate = () => {
    dispatch(createStandardUnit({ name }));
    setName('');
  };

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
  const data = standardUnits.map((unit, index) => ([
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
      <h2 className="text-5xl font-bold my-4">وحدات القياس</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
     
      <CustomTable data={data} headers={headers} />
    </div>
  );
};

export default Standard;
