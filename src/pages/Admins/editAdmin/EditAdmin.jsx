import { useParams } from 'react-router-dom'
import './editAdmin.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import profile from "../../../assets/img_icon.svg"
const EditAdmin = () => {
    const {adminId} = useParams();
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [wMobile, setWMobile] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPassword] = useState("");
    const [img, setImg] = useState("");
    useEffect(()=>{
        const fetchAdmin = async ()=>{
            const token = JSON.parse(window.localStorage.getItem("userInfos")).token;
            const response = await axios.get(`https://cafe.highdam-sk.com/api/admin/users/${adminId}?account_type=super_admin`, {
                headers: {
                    'Authorization': "Bearer " + token,
                }
            });
            let adminUser = response.data.data;
            setAdmin(response.data.data);
            setName(adminUser.name);
            setMobile(adminUser.mobile);
            setWMobile(adminUser.whatsapp_mobile);
            setMail(adminUser.email);
            setPassword(adminUser.password);
        }
        fetchAdmin();
    },[adminId])
  return (
    <div className="edit__admin p-8">
        <h1 className="page__title">اضافة مدير لوحة التحكم</h1>
        <p className="page__desc">ادخل البيانات التالية لاستكمال اضافة مدير لوحة <br/> تحكم جديد</p>
        <form className="pt-8">
            <div className="img">
                <label htmlFor="img" className="overlay__label"><img src={profile} alt="profile img"/></label>
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
                        value={name && name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="phone">رقم الهاتف</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        placeholder="ادخل رقم الهاتف"
                        value={mobile && mobile}
                        onChange={(e)=> setMobile(e.target.value)}
                    />
                </div>
                <div className="field">
                <label htmlFor="w_phone">رقم واتساب</label>
                    <input 
                        type="tel" 
                        id="w_phone" 
                        placeholder="ادخل رقم واتساب"
                        value={wMobile && wMobile}
                        onChange={(e)=> setWMobile(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="mail">البريد الالكترونى</label>
                    <input 
                        type="email" 
                        id="mail" 
                        placeholder="ex:someone@gmail.com"
                        value={mail && mail}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="pass">كلمة المرور</label>
                    <input 
                        type="password" 
                        id="pass" 
                        placeholder="ادخل كلمة مرور"
                        value={pass && pass}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>

                <div className="btns">
                    <input type="sub" value="حفظ"/>
                    <button>الغاء</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditAdmin