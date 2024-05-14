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
import Rule from './pages/Roles/rule'
import AddRole from './pages/Roles/AddRole'
import Admins from './pages/Admins/Admins'
import EditAdmin from './pages/Admins/editAdmin/EditAdmin'
import AddAdmin from './pages/Admins/addAdmin/AddAdmin'
import Standard from './pages/Standard/Standard'
import Empolyee from './pages/Empolyee/Empolyee'
import AddEmpolyee from './pages/Empolyee/AddEmpolyee'
import AddUnit from './pages/Standard/AddUnit'

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
          <Route path='/Standard' element={<Standard />}/>
          <Route path='/addUnit' element={<AddUnit />}/>
          <Route path='/Empolyee' element={<Empolyee />}/>
          <Route path='/addEmpolyee' element={<AddEmpolyee />}/>
          <Route path='/roles' element={<Rule />}/>
          <Route path='/addCity' element={<AddCity />}/>
          <Route path='/addRole' element={<AddRole />}/>
          <Route path='/admins' element={<Admins />}/>
          <Route path='/admins/addAdmin' element={<AddAdmin />}/>
          <Route path='/admins/:adminId' element={<EditAdmin />}/>
          <Route path='/forget' element={<Forget />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App