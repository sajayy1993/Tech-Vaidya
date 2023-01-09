import React from 'react'
import './doclogin.css'
import Doctorlog from '../../../Assets/img/LogDoc4.png'
import { Link } from 'react-router-dom'

const DocLogin = () => {
  return (
    <>
        <div className='log-continer'>
<div className='Doclog-head'>
<p>Doctor's Login</p>
</div>
  <div className='log-main'>
  <div className='logleft-side'>
   <div className='log-content'>
   <i class="ri-mail-fill"></i>
    <input type='text' placeholder='Enter the Email...' />
   </div>
   <div className='log-content'>
   <i class="ri-lock-fill"></i>
    <input type='text' placeholder='Enter the Password...' />
   </div>
   <button >Login</button>
  </div>
  <div className='log-side'>
  <img src={Doctorlog} alt='name-logo' />
  </div>

  </div>
  <Link to='/registration_doc'>If you are not Registered user please signUp first(Click Here)</Link>
   </div>
    </>
  )
}

export default DocLogin