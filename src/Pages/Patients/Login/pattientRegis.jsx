import React ,{useState}from 'react'
import './patientregis.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import PatRegis from '../../../Assets/img/patient556.png'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../Common/Navbar/Navbar'
import Footer from '../../../Common/Footer/Footer'


const PattientRegis = () => {
 
        const navigate =useNavigate();

        
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [mobile, setMobile]=useState("")
  const [consultTopic, setConsultTopic]=useState("")
  const [password, setPassword]=useState("")

const gotouserloginfirst =async(e)=>{
    e.preventDefault()
    try{
     const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password, mobile});
     if(res.data.success){
      toast.success(res.data.message)
      
    navigate('/login_patient');
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
    <p>Patient's Registration</p>
    </div>
      <div className='regis-main'>
      <div className='left-side'>
       <div className='regis-content'>
       <i class="ri-user-fill"></i>
        <input type='text' placeholder='Enter the Name...' value={name} onChange={(e)=>setName(e.target.value)} />
       </div>
       <div className='regis-content'>
       <i class="ri-mail-fill"></i>
        <input type='text' placeholder='Enter the Email...' value={email} onChange={(e)=>setEmail(e.target.value)} />
       </div>
       <div className='regis-content'>
       <i class="ri-phone-fill"></i>
        <input type='text' placeholder='Enter the Mobile No...' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
       </div>
       <div className='regis-content'>
       <i class="ri-add-box-fill"></i>
        <input type='text' placeholder='Enter the Specialization...'value={consultTopic}  onChange={(e)=>setConsultTopic(e.target.value)}/>
       </div>
       <div className='regis-content'>
       <i class="ri-lock-fill"></i> 
        <input type='text' placeholder='Enter the Password...' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       </div>
       <div className='regis-content'>
       <i class="ri-lock-password-fill"></i>
        <input type='text' placeholder='Enter the Confirm Password...' value={password} onChange={(e)=>setPassword(e.target.value)} />
       </div>
       <button onClick={gotouserloginfirst}>Submit</button>
      </div>
      <div className='patright-side'>
      <img src={PatRegis} alt='name-logo' />
      </div>
     
      </div>
      <Link to='/login_patient'>If you are already Registered user please Login (Click Here)</Link>
       </div>
       <Footer/>
        </>
  )
}

export default PattientRegis