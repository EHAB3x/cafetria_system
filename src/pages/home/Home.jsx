import BillTable from "../../components/Home/HomeAnlysis/BillTable"
import InvoiceChart from "../../components/Home/HomeAnlysis/Reciepes"
import ComboChart from "../../components/Home/HomeAnlysis/comboChart"
import CustomTable from "../../components/Home/HomeAnlysis/table"
import HomeCards from "../../components/Home/HomeCard/HomeCards"

const Home = () => {
  return (
    <div className="container">
        <div className="goodmorning w-full block my-6 text ">
          <h1 className="text-5xl px-10  ">
          صباح الخير<span className="text-3xl"> 😍</span>
          </h1>
        </div>
        <HomeCards/>
       <div className="w-full flex gap-10 px-6 my-8">
        <ComboChart/>
        <CustomTable/>

       </div>
       <div className="w-full px-6 my-8 flex g-10">
       <BillTable className="w-7/12"/>
       <InvoiceChart className="w-5/12" />
       </div>
      
    </div>
  )
}

export default Home