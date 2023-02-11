import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Spinners = () => {

    const [count, setCount]=useState(5)
    const navigate = useNavigate()
    const location =useLocation()

    useEffect (()=>{
   const interval =setInterval(()=>{
     setCount((preValue)=> --preValue );
   },1000)

   count === 0 && navigate('/',{
    state:location.pathname,
   })
   return ()=> clearInterval(interval)
    },[count,navigate,location])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-primary" style={{height:'100vh'}}>
    <h1 className='text-align-center'>reditecting with in {count} Seconds</h1>
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>
  )
}

export default Spinners