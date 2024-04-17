import "./admins.css"
import BlueButton from "../../components/blueButton/BlueButton"
import SearchInput from "../../components/searchInput/SearchInput"
import { useEffect, useState } from "react"
import axios from "axios"
import AdminTable from "../../components/adminTable/AdminTable"
const Admins = () => {
    const [admins, setAdmins] = useState([]);
    const [searchResult, setSearchResult] = useState('');

    const handleSearchInputChange = (value) => {
        setSearchResult(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = JSON.parse(window.localStorage.getItem("userInfos")).token;
                const response = await axios.get("https://cafe.highdam-sk.com/api/admin/users?account_type=super_admin", {
                    headers: {
                        'Authorization': "Bearer " + token,
                    }
                });
                setAdmins(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    
    
  return (
    <div className="admins">
        <div className="head flex justify-between p-8">
            <h1 className="page__title">مديرين لوحة التحكم</h1>
            <BlueButton text={"اضافة مسئول جديد"} link={"/cities/newCity"}/>
        </div>
        <div className="citysearch">
            <SearchInput placeHolder={"ابحث بالأسم او المنصب"} onInputChange={handleSearchInputChange}/>
        </div>
        <AdminTable headers={["الرقم", "الاسم", "البريد الالكترونى", "رقم الهاتف", "رقم الواتس اب","تاريخ الانشاء", "التحكم"]} data={admins}/>
    </div>
  )
}

export default Admins