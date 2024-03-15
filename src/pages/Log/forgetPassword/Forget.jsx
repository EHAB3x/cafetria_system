import './forget.css'
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
const Forget = () => {
    // const [phone, setPhone] = useState();
  return (
    <div className="login__container forget__container">
        <div className="form__container">
            <div className="form__header forget__header">
                <h1>نسيت كلمة المرور</h1>
                <p>لا تقلق سندبرها لك ! من فضلك ادخل رقم الهاتف الذي قمت بالتسجيل به داخل الموقع</p>
            </div>

            <form className="login__form" method="post">
                <div className="form__field">
                    <span><LuPhone /></span>
                    <input 
                        dir="rtl" 
                        type="tel" 
                        name="email" 
                        id="email" 
                        placeholder="رقم الهاتف"
                        // onChange={(e)=> setPhone(e.target.value)}
                    />
                </div>               
                <input 
                    className="form__submit" 
                    type="submit" 
                    name="submit" 
                    id="submit" 
                    value="ارسال"
                />

                <div className="form__account">
                    <p>تذكرت كلمة المرور<Link to={"/"}>العودة للتسجيل</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Forget