import React, { useState } from "react";
import CustomDropdown from "../../Dropdown/CustomDropdown";
import { Link } from "react-router-dom";

function CustomTable() {
  const options = ["تفاصيل السند", " تعديل", " حذف"];
  const [data, setData] = useState([
    { name: "سند قبض", cost: 30 },
    { name: "سند صرف ", cost: 25 },
    { name: "سند قبض", cost: 50 },
    { name: "سند صرف ", cost: 40 },
  ]);

  return (
    <div className="container mx-auto w-5/12 bg-white p-4">
      <table className="table-auto w-full">
        <thead>
          <tr className=" ">
            <th className=" text-2xl text-right ">
              السندات المضافة مؤخرا
            </th>
            <Link className="" to={"/"}>
              <th className="text-xl text-blue-500">عرض الكل</th>
            </Link>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3 text-xl py-2">بيان السند</td>
            <td className="px-3 text-xl py-2">القيمة</td>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-3 text-xl py-2">{item.name}</td>
              <td className="px-3 text-xl py-2">{item.cost}</td>
              <td className=" px-3  text-xl py-2">
                <CustomDropdown options={options} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
