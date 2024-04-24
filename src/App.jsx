import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Log/login/Login'
import Forget from './pages/Log/forgetPassword/Forget'
import Home from './pages/home/Home'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Palette from './components/palette/Palette'
import Cities from './pages/Cities/Cities'
import AddCity from './components/city/AddCity'

function App() {
  const location = useLocation();

  // Check if the current path is not '/' or '/forget'
  const showSidebar = location.pathname !== '/' && location.pathname !== '/forget';
  return (
    <div className="app">
       
      <Palette />
      <div className={showSidebar &&`right`}>
        {showSidebar && <Sidebar /> }
      </div>
      <div className="left">
        {showSidebar && <Navbar /> }
     
        <Routes>
          <Route path='/'  exact element={<Login />}/>
          <Route path='/cities' element={<Cities />}/>
          <Route path='/addCity' element={<AddCity />}/>
          <Route path='/forget' element={<Forget />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App