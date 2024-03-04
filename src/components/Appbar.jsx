import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import blood_icon from './img/blood.png.png'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <img src={blood_icon} alt="" height="50px" Width="50px"/>
       
          <Typography variant="h4" color="error" component="div" sx={{ flexGrow: 10 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <b>   Blood Zone</b>
         
        
        
        
          </Typography>
          <Button variant='contained' color='error'><Link to={'/'} style={{textDecoration:'none'}}>Home</Link></Button>&nbsp;
          <Button variant='contained' color='error'><Link to={'/login'} style={{textDecoration:'none'}}>Login/Signup</Link></Button>&nbsp;
          <Button variant='contained' color='error'><Link to={'/dash'} style={{textDecoration:'none'}}>Donor Dashboard</Link></Button>&nbsp;
        </Toolbar>
      </AppBar>
    </Box>
  );
}