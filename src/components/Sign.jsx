import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import './Sign.css'
import './Login.css'

const Sign = () => {
  return (
    <div style={{paddingTop:"80px"}}>
      <div className="style"><br />
<div className="text">
  <div className="textcolor">
<Typography variant="h5"><br /><br />
        <b>Welcome to SignUp Page</b>
        </Typography><br></br><br></br></div>

        <TextField id="outlined-basic" label="First Name" variant="outlined"/><br ></br><br></br>
        <TextField id="outlined-basic" label="Last name" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-basic" label="Confirm password" variant="outlined" /><br></br><br></br>
        <FormControl>
        <h3>Gender</h3>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl><br></br><br></br>
        <Button variant="contained" color="error">
  Create Account
</Button>
</div>
    </div>
    </div>
  )
}

export default Sign