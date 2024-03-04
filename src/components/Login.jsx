import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{paddingTop:"80px"}}>
     
    
        
        <div className="page">
          <div className="text"><br></br><br></br> <br />
      <div className="textcolor"><h2><b>Welcome to Login Page</b></h2></div>
        

        <br></br><br></br>
<TextField id="outlined-basic" label="Username" variant="outlined" /><br></br><br></br>
<TextField id="outlined-basic" label="Password" variant="outlined" /><br></br><br></br>

<Button variant="contained" color="error">Login</Button><br></br>OR<br></br><br></br>

<Button variant='contained' color='error'><Link to={'/sign'} style={{textDecoration:'none'}}>Sign Up</Link></Button>


</div>  </div>
</div>    
  )
}

export default Login