import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Log/login/Login'
import Forget from './pages/Log/forgetPassword/Forget'
import Home from './pages/home/Home'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Palette from './components/palette/Palette'

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
          <Route path='/' element={<Login />}/>
          <Route path='/forget' element={<Forget />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
