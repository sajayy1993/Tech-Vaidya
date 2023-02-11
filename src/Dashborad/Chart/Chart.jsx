import React from 'react'
import './chart.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {

  const data = [
    {
      name: 'Jan',
      appointment: 100,
      satisfaction: 80,
      fee: 58000,
    },
    {
      name: 'Feb',
      appointment: 120,
      satisfaction: 90,
      fee: 60000,
    },
    {
      name: 'Mar',
      appointment: 200,
      satisfaction: 90,
      fee: 40000,
    },
    {
      name: 'Apr',
      appointment: 168,
      satisfaction: 100,
      fee: 58000,
    },
    {
      name: 'May',
      appointment: 188,
      satisfaction: 120,
      fee: 58000,
    },
    {
      name: 'Jun',
      appointment: 150,
      satisfaction: 65,
      fee: 58000,
    },
    {
      name: 'Jul',
      appointment: 170,
      satisfaction: 80,
      fee: 58000,
    },
  ];

  return (
    
   <div className='chart'>
   <div className='chart-title'>Total Patients Summery</div>
     <ResponsiveContainer width="100%" aspect={2/1}>
     <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="appointment" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="satisfaction" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
 <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="appointment" stroke="#8884d8" fillOpacity={1} fill="url(#appointment)" />
  <Area type="monotone" dataKey="satisfaction" stroke="#82ca9d" fillOpacity={1} fill="url(#satisfaction)" />
</AreaChart>
      </ResponsiveContainer>
    
   </div>
  )
}

export default Chart