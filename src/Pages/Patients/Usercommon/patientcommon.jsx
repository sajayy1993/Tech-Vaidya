import React from 'react'
import './patientcommon.css'
import Compat from '../../../Assets/img/patient22.png'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../Common/Navbar/Navbar';
import Footer from '../../../Common/Footer/Footer';

const Common = () => {

    const navigate = useNavigate();
    const goToDocLogin =()=>{
     navigate ("/login_patient");
    }
    const goToDocRegis =()=>{
      navigate ("/registration_patient");
     }
   
  return (
    <>
    <Navbar />
        <div className='com-Doc'>
        <h2>Patient's Login/Register</h2>
            <div className='comDoc-main'>
                <div className='comdoc-container'>
                    <div className='img-container'>
                        <img src={Compat} alt='DocCom'/>
                    </div>
                    <div className='btn-container'>
                        <button onClick={()=>goToDocLogin()}>Login</button>
                        <button onClick={()=>goToDocRegis()}>Register</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Common