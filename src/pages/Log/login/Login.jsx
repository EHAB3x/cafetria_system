import { FaStore } from "react-icons/fa6";
import { CiLock, CiMail } from "react-icons/ci";
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2/src/sweetalert2.js'
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const submitData = (e)=>{
        e.preventDefault();
        if (email === "" || password === ""){
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "من فضلك قم بادخال جميع البيانات"
            });
        }else{
            axios.post("https://cafe.highdam-sk.com/api/admin/login",{
                "account_type": "super_admin",
                email,
                password
            }).then(res => {
                console.log(JSON.stringify(res.data.data.token))
                window.localStorage.setItem("userInfos",JSON.stringify(res.data.data));
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                        navigate("/home")
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: res.data.message
                });
            }).catch(err=>{
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: err.response.data.message
                });
            })
        }
    }
  return (
    <div className="login__container">
        <div className="form__container">
            <div className="form__header">
                <div className="form__logo">
                    <FaStore />
                </div>
                <h1>تسجيل الدخول</h1>
            </div>

            <form className="login__form" method="post">
                <div className="form__field">
                    <span><CiMail /></span>
                    <input 
                        dir="rtl" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="البريد الالكترونى"
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                </div>

                <div className="form__field">
                    <span><CiLock /></span>
                    <input 
                        dir="rtl" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="كلمة المرور"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>

                <div className="form__options">
                    <div className="form__remember">
                        <input 
                            type="checkbox" 
                            name="remember" 
                            id="remember"
                        />
                        <label htmlFor="remember">تذكرنى</label>
                    </div>
                    <div className="form__forget">
                        <Link to={"/forget"}>نسيت كلمة المرور؟</Link>
                    </div>
                </div>

                <input 
                    className="form__submit" 
                    type="submit" 
                    name="submit" 
                    id="submit" 
                    value="تسجيل الدخول"
                    onClick={(e)=> submitData(e)}
                />

                <div className="form__account">
                    <p>ليس لديك حساب بعد؟ <Link to={"/register"}>انساء حساب جديد</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login