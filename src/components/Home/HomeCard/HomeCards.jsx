import React from 'react'
import { items } from './data'
import { FaFileInvoice } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function HomeCards() {
  return (
   <>
    <div className='flex gap-6 px-6 '> 
       {items.map((item, index) => (
        <div key={index} className="card items-center	 grid w-3/12 grid-cols-2 gap-20 bg-white rounded p-3 text-2xl">
          <div className="info p-2  w-48 ">
            <p>{item.title}</p>
            <p className='font-bold text-4xl'>{item.price}</p>
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
    <div className="flex gap-10 px-6 my-5">
      <div className="items-center justify-center	 w-3/12 flex gap-5 bg-white rounded p-5 text-2xl">
        <Link   style={{
                
                color: '#1664B8',
                fontSize:'50px'
              
              }} className='' to="/">
              +
        </Link>
        <span className='font-bold'>إضافة سند قبض</span>
      </div>
      <div className="items-center justify-center	 w-3/12 flex gap-5 bg-white rounded p-5 text-2xl">
      <Link   style={{
                
                color: '#1664B8',
                fontSize:'50px'
              
              }} className='' to="/">
              +
        </Link>
        <span className='font-bold'>إضافة سند صرف</span>
      </div>
      <div className="items-center justify-center	 w-3/12 flex gap-5 bg-white rounded p-5 text-2xl">
      <Link   style={{
                
                color: '#1664B8',
                fontSize:'50px'
              
              }} className='' to="/">
              +
        </Link>
        <span className='font-bold'>إضافة فاتورة جديد </span>
      </div>
      <div className="items-center justify-center	 w-3/12 flex gap-5 bg-white rounded p-5 text-2xl">
      <Link   style={{
                
                color: '#1664B8',
                fontSize:'50px'
              
              }} className='' to="/">
              +
        </Link>
        <span className='font-bold'>إضافة طلب جديد </span>
      </div>
    </div>
   
   </>
  )
}

export default HomeCards