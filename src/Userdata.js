export const Usercolumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'age',
      width: 80,
    }, 
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 200,
    },
    {
        field: 'mobile',
        headerName: 'Mobile No.',
        type: 'mobile',
        width: 120,
      },
    {
        field: 'treatment',
        headerName: 'Treatment',
        type: 'string',
        width: 150,
      },
    {
      field: 'bookingdate',
      headerName: 'Booking Date',
      type: 'date',
      width: 150,
    },
    {
      field: 'bookingtime',
      headerName: 'Booking Time',
      type: 'time',
      width: 150,
    },
    {
      field: 'recordsummary',
      headerName: 'Reacord Summary',
      type: 'string',
      width: 300,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell:(params)=>{
           return(
            <div className={`cellWithStatus ${params.row.status}` }>{params.row.status}</div>
           )
      },
    },
   
   
  ];

  export const Userrows=  [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , email:'snow.jon@gmail.com', mobile:'8979635875' ,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Pending'   },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email:'snow.jon@gmail.com', mobile:'8979635875' ,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Pending'   },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email:'snow.jon@gmail.com', mobile:'8979635875' ,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Complete'   },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email:'snow.jon@gmail.com', mobile:'8979635875' ,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Complete'   },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',  email:'snow.jon@gmail.com', mobile:'8979635875' ,age: 45,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Rejected'   },
    { id: 6, lastName: 'Melisandre', firstName: 'Daenerys', email:'snow.jon@gmail.com', mobile:'8979635875' , age: 48,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Complete'   },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email:'snow.jon@gmail.com', mobile:'8979635875' , age: 44,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Pending'   },
    { id: 8, lastName: 'Frances', firstName: 'Rossini',  email:'snow.jon@gmail.com', mobile:'8979635875' ,age: 36,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Pending'   },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', email:'snow.jon@gmail.com', mobile:'8979635875' , age: 65,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Pending'   },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', email:'snow.jon@gmail.com', mobile:'8979635875' , age: 65,treatment:'orthopadics', bookingdate:'25/01/2023',bookingtime:'07:30pm',recordsummary:'Previous Treatment history record',status:'Pending'   },
    { id: 11, lastName: 'Stark', firstName: 'Arya',  email:'snow.jon@gmail.com', mobile:'8979635875' ,age: 16,treatment:'orthopadics', bookingdate:'02/01/2023',bookingtime:'04:30pm',recordsummary:'Previous Treatment history record',status:'Rejected'   },
    { id: 12, lastName: 'Targaryen', firstName: 'Daenerys', email:'snow.jon@gmail.com', mobile:'8979635875' , age: 68,treatment:'orthopadics', bookingdate:'02/01/2023',bookingtime:'05:00pm',recordsummary:'Previous Treatment history record',status:'Complete'   },
    { id: 13, lastName: 'Melisandre', firstName: 'Dhanker', email:'snow.jon@gmail.com', mobile:'8979635875' , age: 66,treatment:'orthopadics', bookingdate:'02/01/2023',bookingtime:'3:45pm',recordsummary:'Previous Treatment history record',status:'Pending'   },
    { id: 14, lastName: 'Clifford', firstName: 'Ferrara', email:'snow.jon@gmail.com', mobile:'8979635875' , age: 44,treatment:'orthopadics', bookingdate:'02/01/2023',bookingtime:'12:30pm',recordsummary:'Previous Treatment history record',status:'Complete' },
    { id: 15, lastName: 'Frances', firstName: 'Rossini', email:'snow.jon@gmail.com', mobile:'8979635875' , age: 36,treatment:'orthopadics', bookingdate:'01/01/2023',bookingtime:'11:15am',recordsummary:'Previous Treatment history record',status:'Complete'   },
  ];
  