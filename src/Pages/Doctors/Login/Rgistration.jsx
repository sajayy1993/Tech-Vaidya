import React, { useState } from 'react'
import './registration.css'
import axios from 'axios'
import DoctorRegis from '../../../Assets/img/doctorRegisR.png'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../Common/Navbar/Navbar'
import Footer from '../../../Common/Footer/Footer'
import {toast} from 'react-toastify'

const Rgistration = () => {

  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [mobile, setMobile]=useState("")
  const [specialization, setSpecialization]=useState("")
  const [password, setPassword]=useState("")



const navigate =useNavigate();
  const gotologinfirst =async(e)=>{
    e.preventDefault()
    try{
     const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,specialization, mobile});
     if(res.data.success){
      toast.success(res.data.message)
      
    navigate('/login_doc');
     }else{
      toast.error(res.data.message)
     }
    }catch(error){
      console.log(error)
    }

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
    <input type='text' name='fullname' value={name} placeholder='Enter the Name...' onChange={(e)=>setName(e.target.value)} required />
   </div>
   <div className='regis-content'>
   <i class="ri-mail-fill"></i>
    <input type='text' name='email'value={email}placeholder='Enter the Email...'  onChange={(e)=>setEmail(e.target.value)} required/>
   </div>
   <div className='regis-content'>
   <i class="ri-phone-fill"></i>
    <input type='text'  name='mobile'value={mobile} placeholder='Enter the Mobile No...'  onChange={(e)=>setMobile(e.target.value)} required/>
   </div>
   <div className='regis-content'>
   <i class="ri-add-box-fill"></i>
    <input type='text' name='specialization' value={specialization} placeholder='Enter the Specialization...'  onChange={(e)=>setSpecialization(e.target.value)} required/>
   </div>
   <div className='regis-content'>
   <i class="ri-lock-fill"></i>
    <input type='password'  name='password 'value={password} placeholder='Enter the Password...'  onChange={(e)=>setPassword(e.target.value)} required />
   </div>
   <div className='regis-content'>
   <i class="ri-lock-password-fill"></i>
    <input type='password' name='password' value={password} placeholder='Enter the Confirm Password...' onChange={(e)=>setPassword(e.target.value)} required />
   </div>
   <button onClick={gotologinfirst}>Submit</button>
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