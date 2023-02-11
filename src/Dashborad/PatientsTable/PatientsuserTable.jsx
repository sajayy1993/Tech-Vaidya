import React from 'react'
import './patientsusertable.css'
import { DataGrid } from '@mui/x-data-grid';
import {Usercolumns, Userrows} from '../../Userdata.js'
const PatientsuserTable = () => {

  const actionColumn =[
    {
      field:'action',
      headerName:'Action',
      width:200,
      renderCell:()=>{
        return(
          <div className='cellAction'>
            <div className='Viewbtn'>View</div>
            <div className='deletebtn'>Delete</div>
          </div>
        )
      }
}
]

  return (
    <div className='userdatatable'>
      <DataGrid
        rows={Userrows}
        columns={Usercolumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
 
    </div>
  )
}

export default PatientsuserTable