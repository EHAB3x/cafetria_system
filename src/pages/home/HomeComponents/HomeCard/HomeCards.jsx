import React from 'react'
import { items } from './data'
import { FaFileInvoice } from "react-icons/fa6";

function HomeCards() {
  return (
    <div className='flex gap-6 px-6 '> 
       {items.map((item, index) => (
        <div key={index} className="card items-center	 grid w-3/12 grid-cols-2 gap-20 bg-white rounded p-3 text-2xl">
          <div className="info p-2  w-48 ">
            <p>{item.title}</p>
            <p className='font-bold'>{item.price}</p>
          </div>
          <div style={{
                width: 'fit-content',
                height: 'fit-content',
                backgroundColor: '#1664B8',
                borderRadius: '50%',
                padding: '8px', 
              }} className="icon  w-24 ">

            <span className='text-2xl  text-white'>
            {item.icon}
            </span>

             </div>
        </div>
      ))}
      
    </div>
  )
}

export default HomeCards