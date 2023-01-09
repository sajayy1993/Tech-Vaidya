import React from 'react'
import './patientlogin.css'
import patlog from '../../../Assets/img/patient555.png'
import { Link } from 'react-router-dom'

const DocLogin = () => {
  return (
    <>
        <div className='patlog-continer'>
<div className='patlog-head'>
<p>Patient's Login</p>
</div>
  <div className='patlog-main'>
  <div className='patlogleft-side'>
   <div className='patlog-content'>
   <i class="ri-mail-fill"></i>
    <input type='text' placeholder='Enter the Email...' />
   </div>
   <div className='patlog-content'>
   <i class="ri-lock-fill"></i>
    <input type='text' placeholder='Enter the Password...' />
   </div>
   <button >Login</button>
  </div>
  <div className='patlog-side'>
  <img src={patlog} alt='name-logo' />
  </div>

  </div>
  <Link to='/registration_patient'>If you are not Registered user please signUp first(Click Here)</Link>
   </div>
    </>
  )
}

export default DocLogin