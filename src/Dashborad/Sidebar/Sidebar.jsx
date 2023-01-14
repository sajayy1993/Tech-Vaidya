import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
   <div className='sidebar'>
    <div className='top'>
    <span className='logo'>TECH-VAIDYA</span>
    </div>
    <hr/>
    <div className='center'>
  <ul>
    <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
    <li><PersonIcon className='icon'/><span>Profile</span></li>
    <li><AirlineSeatReclineNormalIcon className='icon'/><span>Patients</span></li>
    <li><RememberMeIcon className='icon'/><span>Appointments</span></li>
    <li><CurrencyRupeeIcon className='icon'/><span>Payments</span></li>
  </ul>
    </div>
    <div className='bottom'>
    <ul>
    <li><LogoutIcon className='icon'/><span>Logout</span></li>
    </ul>
    </div>
   </div>
  )
}

export default Sidebar