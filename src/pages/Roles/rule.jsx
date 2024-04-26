import React from 'react'
import Roles from '../../components/RolesComponents/Roles'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import CustomButton from '../../components/button/CustomButton';

function Rule() {
  return (
    <div className="container mx-auto px-8">
                  <div className="header px-5 flex items-center justify-between my-7">
                <p className="heading text-5xl font-bold">
                  الأدوار الوظيفية
                </p>
              <div className="flex gap-5">
             
                <Link to='#'>
                    <CustomButton color="#4281C5"  backgroundColor="#fff" padding="18px 14px" text=" تنزيل PDF" icon={<FiPlus />} />
                </Link>
                <Link to='/addRole'>
                    <CustomButton padding="18px 10px" text="إضافة  دور وظيفى" icon={<FiPlus />} />
                </Link>
              </div>
            </div>
   <Roles/>
   </div>
  )
}

export default Rule