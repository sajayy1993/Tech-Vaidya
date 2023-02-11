import React from 'react'
import { Outlet } from 'react-router-dom'
import Chart from './Chart/Chart'
import './dashboard.css'
import Featured from './Featured/Featured'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import PatientsTable from './Table/PatientsTable'
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
    </div><hr/>
    <div className='charts'>
      <Featured />
      <Chart />
    </div>
    <div className='table-container'>
    <div className='list-title'>Latest Patients Appointments</div>
      <PatientsTable />
    </div>
    </div>
    </div>
  )
}

export default Dashboard