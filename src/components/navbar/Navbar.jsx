import { useEffect, useState } from "react";
import { RxEnter } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css"
import profileImg from "../../assets/icon.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [name, setName] = useState("مستخدم")
    useEffect(()=>{
        const toggle = document.querySelector('.navbar .navbar__toggle');
        const sidebar = document.querySelector('.app .right');
        const name = JSON.parse(window.localStorage.getItem("userInfos")).name
        setName(name);
        toggle.onclick=()=>{
            sidebar.classList.toggle('status');
            toggle.classList.toggle("active")
        }
    },[])
  return (
    <nav className="navbar">
        <div className="navbar__right">
            <span className='navbar__toggle'><RxEnter /></span>

            <div className="navbar__search">
                <span><CiSearch /></span>
                <input 
                    type="text" 
                    name="search" 
                    id="search"
                    className="navbar__search"
                    placeholder="ابحث هنا..."
                />
            </div>
        </div>

        <Link to={"/profile"} className="navbar__left">
            <img src={profileImg} alt="profile_img" />
            <p>{name}</p>
        </Link>
    </nav>
  )
}

export default Navbar