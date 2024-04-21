import { useNavigate, useParams } from 'react-router-dom'
import './editAdmin.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import profile from "../../../assets/img_icon.svg"
import { useAuth } from '../../../context/AuthContext';
import SuccessToast from '../../../components/toasts/SuccessToast';
const EditAdmin = () => {
    const {user} = useAuth();
    const {adminId} = useParams();
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [wMobile, setWMobile] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPassword] = useState("");
    const [rePass, setRePassword] = useState("");
    const [img, setImg] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchAdmin = async ()=>{
            const response = await axios.get(`https://cafe.highdam-sk.com/api/admin/users/${adminId}?account_type=super_admin`, {
                headers: {
                    'Authorization': "Bearer " + user.token,
                }
            });
            const adminData = response.data.data;
                setName(adminData.name || "");
                setMobile(adminData.mobile || "");
                setWMobile(adminData.whatsapp_mobile || "");
                setMail(adminData.email || "");
                setPassword("");
        }
        fetchAdmin();
    },[adminId, user.token])

    const editAdmin = async(e)=>{
        e.preventDefault();
        const response = await axios.put(`https://cafe.highdam-sk.com/api/admin/users/${adminId}?account_type=super_admin`,{
            name,
            email: mail,
            roles_name: "Super Admin",
            password: pass,
            password_confirmation: rePass,
            photo_profile: img,
            mobile,
            whatsapp_mobile:wMobile,
        },
        {
            headers: {
                'Authorization': "Bearer " + user.token,
            }
        }).then(()=> SuccessToast("تم تعديل البيانات بنجاح", navigate, "/admins"))
    }
    return (
    <div className="edit__admin p-8">
        <h1 className="page__title">تعديل مدير لوحة التحكم {`#${adminId}`}</h1>
        <p className="page__desc">ادخل البيانات التالية لاستكمال تعديل مدير لوحة <br/> تحكم جديد</p>
        <form className="pt-8" onSubmit={(e)=> editAdmin(e)}>
            <div className="img">
                <label htmlFor="img" className="overlay__label">
                    <img 
                        src={img !== null ? URL.createObjectURL(img) : profile}  
                        className={img !== null ? "added" : ""}  
                        alt="profile img"
                    />
                </label>
                <input 
                    type="file" 
                    name="img" 
                    id="img" 
                    onChange={(e)=> setImg(e.target.files[0])}
                />
                <label htmlFor="img" className="btn__label">صورة جديدة</label>
            </div>
            <div className="data">
                <div className="field">
                    <label htmlFor="name">اسم الموظف</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="ادخل اسم الموظف هنا..."
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        autoComplete="new-password"
                    />
                </div>
                <div className="field">
                    <label htmlFor="phone">رقم الهاتف</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        placeholder="ادخل رقم الهاتف"
                        value={mobile}
                        onChange={(e)=> setMobile(e.target.value)}
                        autoComplete="new-password"
                    />
                </div>
                <div className="field">
                <label htmlFor="w_phone">رقم واتساب</label>
                    <input 
                        type="tel" 
                        id="w_phone" 
                        placeholder="ادخل رقم واتساب"
                        value={wMobile}
                        onChange={(e)=> setWMobile(e.target.value)}
                        autoComplete="new-password"
                    />
                </div>
                <div className="field">
                    <label htmlFor="mail">البريد الالكترونى</label>
                    <input 
                        type="email" 
                        id="mail" 
                        placeholder="ex:someone@gmail.com"
                        value={mail}
                        onChange={(e)=> setMail(e.target.value)}
                        autoComplete="new-password"
                    />
                </div>
                <div className="field">
                    <label htmlFor="pass">كلمة المرور</label>
                    <input 
                        type="password" 
                        id="pass" 
                        placeholder="ادخل كلمة مرور"
                        value={pass}
                        onChange={(e)=> setPassword(e.target.value)}
                        autoComplete="new-password"
                    />
                </div>

                <div className="field">
                    <label htmlFor="pass2">تأكيد كلمة المرور</label>
                    <input 
                        type="password" 
                        id="pass2" 
                        placeholder="ادخل كلمة المرور مرة اخرى"
                        value={rePass}
                        onChange={(e)=> setRePassword(e.target.value)}
                        autoComplete="new-password"
                    />
                </div>

                <div className="btns">
                    <input type="submit" value="حفظ"/>
                    <button>الغاء</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditAdmin