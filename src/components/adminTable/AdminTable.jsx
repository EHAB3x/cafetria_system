/* eslint-disable react/prop-types */
import "./adminTable.css"
import adminImg from "../../assets/admin.jpg"
import { IoEyeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdChevronRight,MdChevronLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WarningToast from "../toasts/warning/WarningToast";
const AdminTable = ({ headers }) => {
  const [boundaries, setBoundaries] = useState({bottom: 0, top: 7});
  const [counts, setCounts] = useState(0);
  const [active, setActive] = useState(0);
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [refetch, setRefetch] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let adminsArrayLength = data.length;
    const pageCount = Math.ceil(adminsArrayLength / 7);
    setCounts(pageCount);
  }, [data]);
  useEffect(() => {
            const token = JSON.parse(window.localStorage.getItem("userInfos")).token;
            axios.get("https://cafe.highdam-sk.com/api/admin/users?account_type=super_admin", {
                headers: {
                    'Authorization': "Bearer " + token,
                }
            }).then(res => {
              setData(res.data.data);
              setLoading(false);
            })
}, [refetch]);
  const handlePageChange = (pageIndex) => {
    const bottom = pageIndex * 7;
    const top = bottom + 7;
    setBoundaries({ bottom, top });
  };

  const deleteAdmin= async (adminId)=>{
    const token = JSON.parse(window.localStorage.getItem("userInfos")).token;
    const response = await axios.delete(`https://cafe.highdam-sk.com/api/admin/users/${adminId}?account_type=super_admin`, {
      headers: {
        'Authorization': "Bearer " + token,
      }
    });
    setRefetch(response.data.data);
    setShowDelete(false)
  }

  return(
    <>
      {showDelete && <WarningToast message={"هل انت متأكد انك تريد حذف مدير لوحة التحكم هذا ؟"} func={()=>deleteAdmin(id)}/>}

      <div className="p-8 table">
        {loading
        ? <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        :
          <>
          <table>
            <thead className="px-2">
              <tr>
                {headers.map((header,index)=>(
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(boundaries.bottom, boundaries.top).map((admin)=>(
                  <tr key={admin.id}>
                    <td>{admin.id !== null ? admin.id : "غير موجود"}</td>
                    <td className="name">
                      <img src={adminImg} alt="admin-img" />
                      <span>{admin.name !== null ? admin.name : "غير موجود"}</span>
                    </td>
                    <td>{admin.email !== null ? admin.email : "غير موجود"}</td>
                    <td>{admin.mobile !== null ? admin.mobile : "غير موجود"}</td>
                    <td>{admin.whatsapp_mobile !== null ? admin.whatsapp_mobile : "غير موجود"}</td>
                    <td>{admin.created_at !== null ? admin.created_at.slice(0, admin.created_at.indexOf("T")) : "غير موجود"}</td>
                    <td className="icons">
                      <span className="view"><IoEyeOutline size="20"/></span>
                      <span 
                        className="edit"
                        onClick={()=> navigate(`/admins/${admin.id}`)}
                      >
                        <LuPencil size="20"/>
                      </span>
                      <span 
                        className="delete"
                        onClick={()=> {
                          setId(admin.id)
                          setShowDelete(true)
                        }}
                      >
                        <RiDeleteBinLine size="20"/>
                      </span>
                    </td>
                  </tr>   
              ))}
            </tbody>
          </table>

          <div className="pagination mt-4">
            <div className="right">
              <p>{`عرض`}</p>
              <p>{`${boundaries.bottom + 1} - `}</p>
              <p>{`${boundaries.top > data.length ? data.length : boundaries.top}`}</p>
              <p>{`من اجمالى`}</p>
              <p>{`${data.length}`}</p>
            </div>
            <div className="left">
              <div className="previous">
                <span onClick={()=>{
                  if (active > 0) {
                    handlePageChange(active - 1);
                    setActive(active - 1);
                  }
                }}><MdChevronRight /> السابق</span>
              </div>
              <div className="choose">
                {[...Array(counts)].map((_, index) => (
                  <span 
                    key={index} 
                    onClick={() => {
                      handlePageChange(index)
                      setActive(index)
                    }}
                    className={`number ${active === index ?"active":""}`}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
              <div className="next">
                <span onClick={()=>{
                  if (active + 1 < counts) {
                    handlePageChange(active + 1);
                    setActive(active + 1);
                  }
                }}>التالى<MdChevronLeft /></span>
              </div>
            </div>
          </div>
        </>
        }
      </div>
    </>
  )
}

    
    
export default AdminTable