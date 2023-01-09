import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

   const navigate = useNavigate();
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
    <div className='sign-btn'>
            <button onClick={()=>goToLogin()}>As Patient</button>
        </div>
        <div className='regis-btn'>
            <button  onClick={()=>goToRegis()}>As Doctor</button>
        </div>
     <div className='profile'>
     <img src='https://cdn3d.iconscout.com/3d/premium/preview/doctor-5565584-4715129.png?w=0&h=700&f=jpeg' alt='logo-profile' />
    </div>
    </div>
    </div>
   </div>

   </nav>
  )
}

export default Navbar