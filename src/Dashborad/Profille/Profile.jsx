import React from 'react'
import './profile.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Profile = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='profile-container'>
    <Sidebar />
    <div className='profile-maincontainer'>
      <Navbar />
      <div className='form-main'>
      <div className='form-layout'>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label=" Personel Details " {...a11yProps(0)} />
          <Tab label=" Certifications" {...a11yProps(1)} />
          <Tab label="Awards" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='form-container'>
          <div className='userdetails-form'>
            <label>First Name</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Last Name</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Email</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Mobile</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Date of Birth</label>
            <input type='date' />
          </div>
          <div className='userdetails-form'>
          <div className='udergender'>
          <label>Gender</label>
            <input type="radio" name="gender" value="male" />Male
            <input type="radio" name="gender" value="female" />Female
          </div>
           
          </div>
          <div className='userdetails-form'>
            <label>Address</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Street</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>City</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>State</label>
            <input type='text' />
          </div>

          <div className='userdetails-form'>
            <label>Country</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Zip Code</label>
            <input type='text' />
          </div>
          
          <button className='userform-btn'>Submit</button>

          
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='form-container'>
      <div className='certification'>
      <div className='certification-part1'>
      <div className='userdetails-form'>
            <label>Certification</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Specialization</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>College/Institute</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Passout Date</label>
            <input type='date' />
          </div>
      </div>
      <div className='certi-btn'>
      <button className='minuss-btn'>-</button>
      </div>
    
      <div className='certification-part2'>
      <div className='userdetails-form'>
            <label>Certification</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Specialization</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>College/Institute</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Passout Date</label>
            <input type='date' />
          </div>
      </div>
      <div className='certi-btn'>
      <button className='plus-btn'>+</button>
      <button className='minus-btn'>-</button>
      </div>
     
      </div>
         
   
          <button className='userform-btn'>Submit</button>

          
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='form-container'>
      <div className='certification'>
      <div className='certification-part4'>
      <div className='userdetails-form'>
            <label>Award Name</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Position</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Received From</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Received date</label>
            <input type='date' />
          </div>
      </div>
      <div className='certi-btn'>
      <button className='minuss-btn'>-</button>
      </div>
    
      <div className='certification-part4'>
      <div className='userdetails-form'>
            <label>Award Name</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Position</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Received From</label>
            <input type='text' />
          </div>
          <div className='userdetails-form'>
            <label>Received date</label>
            <input type='date' />
          </div>
      </div>
      <div className='certi-btn'>
      <button className='plus-btn'>+</button>
      <button className='minus-btn'>-</button>
      </div>
     
      </div>
         
   
          <button className='userform-btn'>Submit</button>

          
        </div>
      </TabPanel>
    </Box>
      </div>
      </div>
    
    </div>
     </div>
  )
}

export default Profile