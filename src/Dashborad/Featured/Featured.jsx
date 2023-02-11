import React from 'react'
import './featured.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const Featured = () => {
  return (
<div className='featured'>
  <div className='top-fetured'>
  <h1 className='title'> Patients Summery</h1>
   <MoreVertIcon fontSize='small'/>
  </div>
  <div className='bottom-fetured'>
  <div className='featuredChart'>
    <CircularProgressbar value={70} text={'70%'} strokeWidth={5} 
        />
  </div>
  <p className='total-patient'>Total Patients Satisfaction Rate %</p>
        <p className='fee-collection'>Fee Collections 8000Rs</p>
        <p className='customer-stisfaction'></p>
     
  </div>
</div>
  )
}

export default Featured