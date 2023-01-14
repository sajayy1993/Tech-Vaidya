import React from 'react'
import './dashboard.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Widget from './Widget/Widget'

const Dashboard = () => {
  return (
    <div className='dashboard-home'>
    <Sidebar/>
    <div className='dashboard-home-container'>
        <Navbar />
    <div className='widgets'>
      <Widget type='appointments'/>
      <Widget type='patients'/>
      <Widget type='payments' />
      <Widget type='delay Schedule'/>
    </div>
    </div>
    </div>
  )
}

export default Dashboard