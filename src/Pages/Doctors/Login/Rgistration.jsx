import React from 'react'
import './registration.css'
import DoctorRegis from '../../../Assets/img/doctorRegisR.png'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../Common/Navbar/Navbar'
import Footer from '../../../Common/Footer/Footer'

const Rgistration = () => {
const navigate =useNavigate();
  const gotologinfirst =()=>{
 
    navigate('/login_doc');
  }

  return (
    <>
    <Navbar />
<div className='regis-continer'>
<div className='Docregis-head'>
<p>Doctor's Registration</p>
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
  <div className='right-side'>
  <img src={DoctorRegis} alt='name-logo' />
  </div>
 
  </div>
  <Link to='/login_doc'>If you are already Registered user please Login (Click Here)</Link>
   </div>
   <Footer/>
    </>
   
  )
}

export default Rgistration