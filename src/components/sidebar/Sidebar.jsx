import { NavLink } from 'react-router-dom';
import './sidbar.css';
import { FaStore , FaWallet, FaConciergeBell } from "react-icons/fa";
import { BsTicketFill } from "react-icons/bs";
import { PiCubeFocus } from "react-icons/pi";
import { GrTask } from "react-icons/gr";
import { IoPerson,IoNotifications } from "react-icons/io5";
import { TbDeviceAnalytics, TbRulerMeasure } from "react-icons/tb";
import { FaLocationDot,FaUserGroup,FaGear  } from "react-icons/fa6";
 const navLinkTabs = [
    {
        ar:"الحسابات المالية",
        en:"finance",
        svg:<FaWallet />,
        subLinks:[
            { ar: "المصروفات", en: "Expenses" },
            { ar: "الايرادات", en: "Revenues" },
            { ar: "سندات القبض", en: "receipt_vouchers" },
            { ar: "سندات الصرف", en: "payment_vouchers" },
            { ar: "سندات الصرف", en: "exchange_vouchers" },
            { ar: "الخزائن", en: "cash_registers" }
        ]
    },
    {
        ar:"الفواتير",
        en:"invoice",
        svg:<BsTicketFill />,
        subLinks:[
            { ar: "كل الفواتير", en: "all_invoices" },
            { ar: "فواتير الشراء", en: "purchase-invoices" },
            { ar: "فواتير البيع", en: "sales_invoices" },
            { ar: "فواتير مرتجعات الشراء", en: "purchase_return_invoices" },
            { ar: "فواتير مرتجعات البيع", en: "sales_return_invoices" },
            { ar: "فواتير الهالك", en: "wastage_invoices" }
        ]
    },
    {
        ar:"المخزون",
        en:"storage",
        svg:<PiCubeFocus />,
        subLinks:[
            { ar: "الاصناف", en: "items" },
            { ar: "اضافة صنف", en: "add_item" }
        ]
    },
    {
        ar:"الطلبات",
        en:"orders",
        svg:<GrTask />
    },
    {
        ar:"العملاء",
        en:"customers",
        svg:<IoPerson />,
        subLinks : [
            { ar: "كل العملاء", en: "all_customers" },
            { ar: "اضافة عميل جديد", en: "add_new_customer" },
        ]
    },
    {
        ar:"الموردين",
        en:"suppliers",
        svg:<IoPerson />,
        subLinks :[
            { ar: "كل الموردين", en: "all_suppliers" },
            { ar: "اضافة مورد جديد", en: "add_new_supplier" }
        ]
    },
    {
        ar:"التقارير",
        en:"reports",
        svg:<TbDeviceAnalytics />,
        subLinks:[
            [
                { ar: "تقارير المبيعات", en: "sales_reports" },
                { ar: "تقارير المشتريات", en: "purchase_reports" },
                { ar: "تقارير المخزونات", en: "inventory_reports" },
                { ar: "تقارير العملاء", en: "customer_reports" },
                { ar: "تقارير الموردين", en: "supplier_reports" },
                { ar: "التقارير العامة للحسابات", en: "general_accounting_reports" }
            ]
        ]
    },
    {
        ar:"الفروع",
        en:"branches",
        svg:<FaLocationDot />,
        subLinks : [
            { ar: "كل الفروع", en: "all_branches" },
            { ar: "اضافة فرع جديد", en: "add_new_branch" },
            { ar: "ادارة الفروع", en: "branch_management" },
        ]
        
    },
    {
        ar:"الموظفين",
        en:"employee",
        svg:<FaUserGroup />,
        subLinks : [
            { ar: "كل الموظفين", en: "all_employees" },
            { ar: "ادارة ادوار الموظفين", en: "manage_employee_roles" },
        ]
    },
    {
        ar:"الطاولات",
        en:"tables",
        svg:<FaConciergeBell  />,
        subLinks : [
            { ar: "كل الطاولات", en: "all_tables" },
            { ar: "اضافة طاولة جديدة", en: "add_new_table" },
        ]
    },
    {
        ar:"وحدات القياس",
        en:"measure_units",
        svg:<TbRulerMeasure />,
        subLinks : [
            { ar: "كل الوحدات", en: "all_units" },
            { ar: "اضافة وحدة قياس جديدة", en: "add_new_unit_of_measurement" }
        ]
    },
    {
        ar:"الاعدادات العامة",
        en:"general_settings",
        svg:<FaGear />
    },
    {
        ar:"اعدادات الاشعارات",
        en:"notification_settings",
        svg:<IoNotifications />
    },
]

const Sidebar = () => {
    const navLinkStyle=({isActive})=>{
        return isActive ? "active" : "";
    }
  return (
    <div className='sidebar'>
        <nav>
            <NavLink aria-current="page" to={'/home'} className="logo"><FaStore /><span>Cafeteria System</span></NavLink>
            <ul>
                {navLinkTabs.map((linkTab, index)=>(
                    <li key={index + 1} >
                        <NavLink 
                            className={navLinkStyle} 
                            to={`/${linkTab.en}`}
                            state={linkTab.subLinks}
                        >
                            {linkTab.svg}
                            <span>{linkTab.ar}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar