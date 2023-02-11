import React from 'react'
import './patients.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import PatientsuserTable from '../PatientsTable/PatientsuserTable'

const Patients = () => {
  return (
    <div className='patientsUser-list'>
      <Sidebar />
    
    <div className='patientsUser-listContainer'>
      <Navbar />
 <PatientsuserTable />
    </div>
    </div>
  )
}

export default Patients