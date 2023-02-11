import React,{useState}from 'react'
import './patientlogin.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import patlog from '../../../Assets/img/patient555.png'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../../Common/Navbar/Navbar'
import Footer from '../../../Common/Footer/Footer'
import {useAuth} from '../../../Context/auth.js'

const DocLogin = () => {
  
  const navigate = useNavigate();

  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [auth,setAuth]=useAuth()
  const goPatientLogin =async(e)=>{
    e.preventDefault()
    try{
     const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
     if(res.data.success){
      toast.success(res.data && res.data.message)
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token,
      })
      localStorage.setItem('auth', JSON.stringify(res.data));
      navigate('/doctorcard');
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
        <div className='patlog-continer'>
<div className='patlog-head'>
<p>Patient's Login</p>
</div>
  <div className='patlog-main'>
  <div className='patlogleft-side'>
   <div className='patlog-content'>
   <i class="ri-mail-fill"></i>
    <input type='text' placeholder='Enter the Email...' value={email} onChange={(e)=>setEmail(e.target.value)} />
   </div>
   <div className='patlog-content'>
   <i class="ri-lock-fill"></i>
    <input type='text' placeholder='Enter the Password...'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
   </div>
   <button onClick={goPatientLogin} >Login</button>
  </div>
  <div className='patlog-side'>
  <img src={patlog} alt='name-logo' />
  </div>

  </div>
  <Link to='/registration_patient'>If you are not Registered user please signUp first(Click Here)</Link>
   </div>
   <Footer />
    </>
  )
}

export default DocLogin