import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
 
  createStandardUnit,
 
} from '../../Redux/Actions/standardActions';
import CustomButton from '../../components/button/CustomButton';

function AddUnit() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const standardUnits = useSelector(state => state.standardReducer.standardUnits);
    const loading = useSelector(state => state.standardReducer.loading);
    const error = useSelector(state => state.standardReducer.error);
  
    const handleCreate = () => {
        dispatch(createStandardUnit({ name }));
        setName('');
      };
    
  return (
    <div className='my-5 flex gap-20 '>
          {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
      <div className=" w-8/12 my-4 mx-auto">
        <h1 className="text-5xl font-bold mb-8">
            إضافة اسم الوحدة
        </h1>
        <p className='text-xl font-bold'>اسم الوحدة</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 my-5 focus:outline-none focus:border-blue-500 rounded-md"
          placeholder="ادخل اسم الوحدة"
        />
      
        <CustomButton  onClick={handleCreate} padding='15px 100px' text={'حفظ'}/>
      </div>
    </div>
  )
}

export default AddUnit