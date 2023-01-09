import React from 'react'
import './patientregis.css'
import PatRegis from '../../../Assets/img/patient556.png'
import { Link, useNavigate } from 'react-router-dom'

const PattientRegis = () => {
 
        const navigate =useNavigate();

          const gotologinfirst =()=>{
         
            navigate('/login_patient');
          }

  return (
    <>
    <div className='regis-continer'>
    <div className='Docregis-head'>
    <p>Patient's Registration</p>
    </div>
      <div className='regis-main'>
      <div className='left-side'>
       <div className='regis-content'>
       <i class="ri-user-fill"></i>
        <input type='text' placeholder='Enter the Name...' />
       </div>
       <div className='regis-content'>
       <i class="ri-mail-fill"></i>
        <input type='text' placeholder='Enter the Email...' />
       </div>
       <div className='regis-content'>
       <i class="ri-phone-fill"></i>
        <input type='text' placeholder='Enter the Mobile No...' />
       </div>
       <div className='regis-content'>
       <i class="ri-add-box-fill"></i>
        <input type='text' placeholder='Enter the Specialization...' />
       </div>
       <div className='regis-content'>
       <i class="ri-lock-fill"></i>
        <input type='text' placeholder='Enter the Password...' />
       </div>
       <div className='regis-content'>
       <i class="ri-lock-password-fill"></i>
        <input type='text' placeholder='Enter the Confirm Password...' />
       </div>
       <button onClick={()=>gotologinfirst()}>Submit</button>
      </div>
      <div className='patright-side'>
      <img src={PatRegis} alt='name-logo' />
      </div>
     
      </div>
      <Link to='/login_patient'>If you are already Registered user please Login (Click Here)</Link>
       </div>
        </>
  )
}

export default PattientRegis