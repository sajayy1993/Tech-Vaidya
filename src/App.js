import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Navbar from './Common/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home-Page/Home/Home';
import Footer from './Common/Footer/Footer';
import DoctorSearch from './Pages/Doctors/DoctorsSearch/DoctorSearch';
import Rgistration from './Pages/Doctors/Login/Rgistration';
import DocLogin from './Pages/Doctors/Login/DocLogin';
import Common from './Pages/Doctors/Common/Common';
import Usercommon from './Pages/Patients/Usercommon/patientcommon';
import PatientLogin from './Pages/Patients/Login/PatientLogin';
import Patientregis from './Pages/Patients/Login/pattientRegis';


function App() {

useEffect(()=>{
Aos.init()
},[])

  return (
   <>
     <Navbar />
   <Routes>
   <Route path={'/'} element={<Home/>} />
   <Route path={'/Doccommon_L&R'} element={<Common/>} /> 
   <Route path={'/registration_doc'} element={<Rgistration/>} /> 
   <Route path={'/login_doc'} element={<DocLogin/>} /> 
   <Route path={'/patientcommon_L&R'} element={<Usercommon/>} /> 
   <Route path={'/login_patient'} element={<PatientLogin/>} /> 
   <Route path={'/registration_patient'} element={<Patientregis/>} /> 
   <Route path={'/doctor'} element={<DoctorSearch/>} />

   </Routes>
   <Footer />
   </>
  );
}

export default App;
