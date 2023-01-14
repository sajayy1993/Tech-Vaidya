import React from 'react'
import './widget.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';import { border } from '@mui/system';
;

const Widget = ({type}) => {

    let data;

    switch(type){
        case'appointments':
        data={
            title:'Appointments',
            isMoney:false,
            count: '50',
            link:'See All',
            color:'rgba(255,0,0,0.2)',
            icon:(
                <KeyboardArrowUpIcon className='icon' />
            )

        };
        break;
        case'patients':
        data={
            title:'Total Patients',
            isMoney:false,
            count:'1200',
            color:'rgba(218,165,32,0.2)',
            link:'See All',
            icon:(
                <KeyboardArrowUpIcon className='icon' />
            )

        };
        break;
        case'payments':
        data={
            title:'Over All Payments',
            isMoney:true,
            count:'12K',
            color:'rgba(255,0,0,0.2)',
            link:'See All',
            icon:(
                <KeyboardArrowUpIcon className='icon' />
            )

        };
        break;
        case'delay Schedule':
        data={
            title:'Delay Schedule',
            isMoney:false,
            count:'3',
            color:'rgba(255,0,0,0.2)',
            link:'See All',
            icon:(
                <KeyboardArrowUpIcon className='icon' />
            )

        };
        break;
        default :
        break;
    }

  return (
    <div className='widget'>
        <div className='widget-top'>
<span className='title'>{data.title}</span>

        </div>
        <div className='widget-bottom'>
        <span className='Count' style={{width:'30px', height:'30px',color:'crimson',borderRadius:'5px', alignItems:'center', display:'flex'}}>{data.count}<span>{data.icon}</span></span>
        <span className='link'>{data.link}</span>
        </div>
    </div>
  )
}

export default Widget