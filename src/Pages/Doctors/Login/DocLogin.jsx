import React ,{ useState }from 'react'
import './doclogin.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import Doctorlog from '../../../Assets/img/LogDoc4.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../Common/Navbar/Navbar'
import Footer from '../../../Common/Footer/Footer'
import { useAuth } from '../../../Context/auth'

const DocLogin = () => {

const navigate = useNavigate();
const location = useLocation();
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [auth,setAuth]=useAuth();

const goToDashboard =async(e)=>{
  e.preventDefault()
  try{
   const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
   if(res.data.success){
    toast.success(res.data && res.data.message)
     setAuth({
      ...auth,
      user:res.data.user,
      token:res.data.token
     })
     localStorage.setItem('auth', JSON.stringify(res.data));
    navigate(location.state ||'/dashboard');
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
        <div className='log-continer'>
<div className='Doclog-head'>
<p>Doctor's Login</p>
</div>
  <div className='log-main'>
  <div className='logleft-side'>
   <div className='log-content'>
   <i class="ri-mail-fill"></i>
    <input type='text' placeholder='Enter the Email...' value={email} onChange={(e)=>setEmail(e.target.value)}/>
   </div>
   <div className='log-content'>
   <i class="ri-lock-fill"></i>
    <input type='text' placeholder='Enter the Password...' value={password} onChange={(e)=>setPassword(e.target.value)}/>
   </div>
   <button onClick={goToDashboard}>Login</button>
  </div>
  <div className='log-side'>
  <img src={Doctorlog} alt='name-logo' />
  </div>

  </div>
  <Link to='/registration_doc'>If you are not Registered user please signUp first(Click Here)</Link>
   </div>
   <Footer/>
    </>
  )
}

export default DocLogin