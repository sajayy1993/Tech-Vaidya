import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../Context/auth'
import {toast} from 'react-toastify'


const Navbar = () => {

  const [auth,setAuth] =useAuth();

   const navigate = useNavigate();

   const goToLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })
    localStorage.removeItem('auth')
    navigate("/")
    toast.success('Logout Successfully');
   }
  const goToLogin =()=>{
   navigate ("/patientcommon_L&R");
  }
  const goToRegis =()=>{
    navigate ("/Doccommon_L&R");
   }
 

  return (
   <nav className='nav-container'>
   <div className='main-container'>
    <div className='left-nav'>
       <h2> <span className='tech'>TECH-</span>VAIDYA</h2>
    </div>
    <div className='center-nav'>
        <ul>
          <li> <NavLink to='/' className='active-home'> Home</NavLink> </li> 
            <li><NavLink to='/doctor' className='active-home'>Consult Doctor</NavLink></li>
            <li><NavLink to='/health_check' className='active-home'>Health Checkup</NavLink></li>
            <li><NavLink to='/lab_reports' className='active-home'>Lab/Reports</NavLink></li>
            <li><NavLink to='/blog' className='active-home'>Blog</NavLink></li>
            <li><NavLink to='/aboutUs' className='active-home'>About Us</NavLink></li>
        </ul>
    </div>
    <div className='right-nav'>
    <div className='profile-nav'>
    {
      !auth.user?(<>
        <div className='sign-btn'>
            <button onClick={()=>goToLogin()}>As Patient</button>
        </div>
        <div className='regis-btn'>
            <button  onClick={()=>goToRegis()}>As Doctor</button>
        </div>
     <div className='profile'>
      <Link style={{color:'#6f55f2'}}>Help!</Link>
    </div>
      </>):(<>
        <div className='regis-btn'>
            <button  onClick={()=>goToLogout()}>Logout</button>
        </div>
      </>)
    }
    
    </div>
    </div>
   </div>

   </nav>
  )
}

export default Navbar