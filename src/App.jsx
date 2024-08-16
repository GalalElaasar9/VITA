import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Verify from './pages/Verify/Verify'
import Waiting_list from './components/Waiting_list/Waiting_list'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Charts from './components/Charts/Charts'
import NoPatient from './components/NoPatient/NoPatient'
import AccessPatient from './Popus/AccessPatient/AccessPatient'
import PatientAccess from './Popus/PatientAccess/PatientAccess'
import UserInfo from './components/UserInfo/UserInfo'
import Accordion from './pages/Accordion/Accordion'
import X_Rays from './pages/X_Rays/X_Rays'
import Prescriptions from './pages/Prescriptions/Prescriptions'
import Prescriptions_2 from './pages/Prescriptions_2/Prescriptions_2'
import AddPrescription from './pages/AddPrescription/AddPrescription'
import ViewPrescription from './pages/ViewPrescription/ViewPrescription'
import Profile from './pages/Profile/Profile'
import Dashboard from './pages/Dashboard/Dashboard'
import ProfileDashboard from './Popus/ProfileDashboard/ProfileDashboard'
import DoctorOptions from './Popus/DoctorOptions/DoctorOptions'
import X_RaysName from './pages/X_RaysName/X_RaysName'
import UploadTests from './pages/UploadTests/UploadTests'
import Admin from './pages/Admin/Admin'
import UploadXRays from './pages/UploadXRays/UploadXRays'
import UploadPost from './pages/UploadPost/UploadPost'
import ManageAccounts from './pages/ManageAccounts/ManageAccounts'

function App() {
  return (
    <>
    {/* <AccessPatient/> */}
      <BrowserRouter>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/charts" element={<Charts/>} />
          <Route path="/waiting_list" element={<Waiting_list/>} />
          <Route path="/NoPatient" element={<NoPatient/>} />
          <Route path="/patientAccess" element={<PatientAccess/>} />
          <Route path="/userInfo" element={<UserInfo/>} />
          <Route path="/Accordion" element={<Accordion/>} />
          <Route path="/X_Rays" element={<X_Rays/>} />
          <Route path="/Prescriptions" element={<Prescriptions/>} />
          <Route path="/Prescriptions_2" element={<Prescriptions_2/>} />
          <Route path="/AddPrescription" element={<AddPrescription/>} />
          <Route path="/ViewPrescription" element={<ViewPrescription/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/ProfileDashboard' element={<ProfileDashboard/>}/>
          <Route path='/X_RaysName' element={<X_RaysName/>}/>
          <Route path='/UploadTests' element={<UploadTests/>}/>
          <Route path='/UploadXRays' element={<UploadXRays/>}/>
          <Route path='/UploadPost' element={<UploadPost/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/ManageAccounts' element={<ManageAccounts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App