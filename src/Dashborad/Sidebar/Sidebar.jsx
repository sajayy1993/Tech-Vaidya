import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LogoutIcon from '@mui/icons-material/Logout';
import  {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
   <div className='sidebar'>
    <div className='top'>
    <Link to='/' style={{textDecoration:'none'}}>
    <span className='logo'>TECH-VAIDYA</span>
    </Link>
</div>
    <hr/>
    <div className='center'>
  <ul>
    <li><DashboardIcon className='icon'/>    <Link to='/dashboard' style={{textDecoration:'none'}}><span>Dashboard</span></Link></li>
    <li><PersonIcon className='icon'/>
    <Link to='/profile' style={{textDecoration:'none'}}>
    <span>Profile</span>  </Link> </li>
 
    <li><AirlineSeatReclineNormalIcon className='icon'/>    <Link to='/patients' style={{textDecoration:'none'}}><span>Patients</span></Link></li>
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