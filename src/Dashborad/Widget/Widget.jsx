import React from 'react'
import './widget.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
            color:'#463E97',
            bgcolor:'#C5CDF7',
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
            bgcolor:'#CDF7C5',
            color:'#62BF99',
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
            bgcolor:'#F5DCFA',
            color:'#DE6399',
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
            bgcolor:'#CEEBDF',
            color:'#72A5AD',
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
    <div className='widget' style={{background:data.bgcolor}}>
        <div className='widget-top'>
<span className='title' style={{color:data.color}}>{data.title}</span>

        </div>
        <div className='widget-bottom'>
        <span className='Count'style={{color:'rgb(68, 68, 68)'}} >{data.count}</span>
        <span className='link'>{data.link}</span>
        </div>
    </div>
  )
}

export default Widget