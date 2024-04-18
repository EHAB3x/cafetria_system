import "./admins.css"
import BlueButton from "../../components/blueButton/BlueButton"
import SearchInput from "../../components/searchInput/SearchInput"
import AdminTable from "../../components/adminTable/AdminTable"
const Admins = () => {
  return (
    <div className="admins">
        <div className="head flex justify-between p-8">
            <h1 className="page__title">مديرين لوحة التحكم</h1>
            <BlueButton text={"اضافة مسئول جديد"} link={"/cities/newCity"}/>
        </div>
        <div className="citysearch">
            <SearchInput placeHolder={"ابحث بالأسم او المنصب"}/>
        </div>
        <AdminTable headers={["الرقم", "الاسم", "البريد الالكترونى", "رقم الهاتف", "رقم الواتس اب","تاريخ الانشاء", "التحكم"]}/>
    </div>
  )
}

export default Admins