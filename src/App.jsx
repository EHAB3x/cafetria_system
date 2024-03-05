import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Log/login/Login'
import Forget from './pages/Log/forgetPassword/Forget'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/forget' element={<Forget />}/>
      </Routes>
    </>
  )
}

export default App
