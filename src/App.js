import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home-Page/Home/Home';
import DoctorSearch from './Pages/Doctors/DoctorsSearch/DoctorSearch';
import Rgistration from './Pages/Doctors/Login/Rgistration';
import DocLogin from './Pages/Doctors/Login/DocLogin';
import Common from './Pages/Doctors/Common/Common';
import Usercommon from './Pages/Patients/Usercommon/patientcommon';
import PatientLogin from './Pages/Patients/Login/PatientLogin';
import Patientregis from './Pages/Patients/Login/pattientRegis';
import Dcotorcard from './Pages/Doctors/DoctorSearchCard/Dcotorcard';
import Docprofile from './Pages/Doctors/DoctorProfile/Docprofile';
import Dashboard from './Dashborad/Dashboard';
import DashAppointment from './Dashborad/AppointmentsD/DashAppointment';
import Profile from './Dashborad/Profille/Profile';
import Payment from './Dashborad/Payment/Payment';
import Patients from './Dashborad/Patients/Patients';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Pages/Blog/Blog';
import PrivateRoute from './Routes/Private';


function App() {

useEffect(()=>{
Aos.init()
},[])

  return (
   <>
   
   <Routes>

   <Route path={'/'} element={<Home/>} />
   <Route path={'/Doccommon_L&R'} element={<Common/>} /> 
   <Route path={'/registration_doc'} element={<Rgistration/>} /> 
   <Route path={'/login_doc'} element={<DocLogin/>} /> 
   <Route path={'/patientcommon_L&R'} element={<Usercommon/>} /> 
   <Route path={'/login_patient'} element={<PatientLogin/>} /> 
   <Route path={'/registration_patient'} element={<Patientregis/>} /> 
   <Route path={'/doctor'} element={<DoctorSearch/>} />
   <Route path={'/doctorcard'} element={<Dcotorcard/>} />
   <Route path={'/doctorprofile'} element={<Docprofile/>} />
   
     <Route path={'/dashboard'}  element={<Dashboard/>} />
   <Route path={'/appointment'} element={<DashAppointment/>} />
   <Route path={'/profile'} element={<Profile/>} />
   <Route path={'/payments'} element={<Payment/>} />
   <Route path={'/patients'} element={<Patients/>} />
   <Route path={'/blog'} element={<Blog />} />


   </Routes>
<ToastContainer/>
   </>
  );
}

export default App;
