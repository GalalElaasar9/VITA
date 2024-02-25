import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Verify from './pages/Verify/Verify'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/verify" element={<Verify/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App