import HomeCards from "./HomeComponents/HomeCard/HomeCards"


const Home = () => {
  return (
    <div className="container">
        <div className="goodmorning w-full block my-6 text ">
          <h1 className="text-5xl px-10  ">
          صباح الخير<span className="text-3xl"> 😍</span>
          </h1>
        </div>
        <HomeCards/>
       
      
    </div>
  )
}

export default Home