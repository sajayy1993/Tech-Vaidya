import React from 'react'
import './common.css'
import ComDoc from '../../../Assets/img/ComDoc1.png'
import { useNavigate } from 'react-router-dom';

const Common = () => {

    const navigate = useNavigate();
    const goToDocLogin =()=>{
     navigate ("/login_doc");
    }
    const goToDocRegis =()=>{
      navigate ("/registration_doc");
     }
   
  return (
    <>
        <div className='com-Doc'>
        <h2>Doctor's Login/Register</h2>
            <div className='comDoc-main'>
                <div className='comdoc-container'>
                    <div className='img-container'>
                        <img src={ComDoc} alt='DocCom'/>
                    </div>
                    <div className='btn-container'>
                        <button onClick={()=>goToDocLogin()}>Login</button>
                        <button onClick={()=>goToDocRegis()}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Common