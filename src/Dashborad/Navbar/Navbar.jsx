import React from 'react'
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useAuth } from '../../Context/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Navbar = () => {

  const [auth,setAuth]=useAuth()

  const navigate = useNavigate();


  const goToDocLogout=()=>{
   toast.success('Logout Successfully')
    navigate("/")
  }

  return (
    <div className='dash-navbar'>
      <div className='wrapper'>
       <div className='search'>
        <input type='text' placeholder='Search.....' />
       <SearchOutlinedIcon />
       </div>
       <div className='items'>
        <div className='item'>
        <LanguageOutlinedIcon className='icon' />
        English
        </div>
        <div className='item'>
        <ChatBubbleOutlineOutlinedIcon className='icon' />
        <div className='counter'>8</div>
     Chat
        </div>

        <div className='item'>
        <NotificationsNoneOutlinedIcon className='icon' />
        <div className='counter'>1</div>
        </div>
    
        <div className='item'>
       <img src='https://previews.123rf.com/images/karelnoppe/karelnoppe1408/karelnoppe140800011/30606941-close-up-portrait-of-young-male-doctor-isolated-on-white-background-.jpg' alt='dash-profile-logo' className='avtar' />
        </div>
        </div>
        </div>
        <button className='logout-btn' onClick={()=>goToDocLogout()}>Logout</button> 
    </div>
  )
}

export default Navbar