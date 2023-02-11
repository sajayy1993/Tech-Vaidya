import React from 'react'
import './patientstable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PatientsTable = () => {

    const patientsdata=[
        {
            id:1143155,
            name:'Amitabh Bacchan',
            age:'75',
            treatment:'orthopadics',
            bookingdate:'25/01/2023',
            bookingtime:'07:30',
            status:'Pending'
        },
        {
          id:1143156,
          name:'Sharukh Khan',
          age:'54',
          treatment:'Joint Pain',
          bookingdate:'23/01/2023',
          bookingtime:'11:30',
          status:'Approved'
      },
      {
        id:1143158,
        name:'Amir Khan',
        age:'55',
        treatment:'Covid',
        bookingdate:'22/01/2023',
        bookingtime:'04:30',
        status:'Rejected'
    },
    {
      id:1143181,
      name:'Hritik Roshan',
      age:'45',
      treatment:'orthopadics',
      bookingdate:'28/01/2023',
      bookingtime:'09:30',
      status:'Approved'
  },
  {
    id:11442858,
    name:'Salman Khan',
    age:'58',
    treatment:'Back Pain',
    bookingdate:'30/01/2023',
    bookingtime:'05:00',
    status:'Pending'
},
{
  id:1143155,
  name:'Abhishek Bacchan',
  age:'46',
  treatment:'Boady Checkup',
  bookingdate:'20/01/2023',
  bookingtime:'11:00',
  status:'Approved'
},
{
  id:1143155,
  name:'Akshay Kumar',
  age:'51',
  treatment:'orthopadics',
  bookingdate:'18/01/2023',
  bookingtime:'02:45',
  status:'Approved'
}
    ]

  return (

    <TableContainer component={Paper} className='patient-table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>ID</TableCell>
          <TableCell className='tableCell'>Name</TableCell>
          <TableCell className='tableCell'>Age</TableCell>
          <TableCell className='tableCell'>Treatment</TableCell>
          <TableCell className='tableCell'>Booking date</TableCell>
          <TableCell className='tableCell'>Booking Time</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {patientsdata.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell className='tableCell'>{row.name}</TableCell>
            <TableCell className='tableCell'>{row.age}</TableCell>
            <TableCell className='tableCell'>{row.treatment}</TableCell>
            <TableCell className='tableCell'>{row.bookingdate}</TableCell>
            <TableCell className='tableCell'>{row.bookingtime}</TableCell>
            <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default PatientsTable