import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Log/login/Login'
import Forget from './pages/Log/forgetPassword/Forget'
import Home from './pages/home/Home'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Palette from './components/palette/Palette'
import Admins from './pages/Admins/Admins'
import EditAdmin from './pages/Admins/editAdmin/EditAdmin'
import { useAuth } from './context/AuthContext'
import AddAdmin from './pages/Admins/addAdmin/AddAdmin'

function App() {
  const {isLoggedIn} = useAuth();
  return (
    <div className="app">
      <Palette />

      {isLoggedIn === false
      ?<Login />
      :
        <>
        <div className="right">
          <Sidebar/>
        </div>
        <div className="left">
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/forget' element={<Forget />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/admins' element={<Admins />}/>
          <Route path='/admins/addAdmin' element={<AddAdmin />}/>
          <Route path='/admins/:adminId' element={<EditAdmin />}/>
        </Routes>
        </div>
      </>
      }
    </div>
  )
}

export default App
