import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import NativeSelect from '@mui/material/NativeSelect';
import React from 'react'

const Home = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  

  return (
    <div  style={{paddingTop:"50px",marginLeft:"10px"}}>
        <h2 >Blood Request Form</h2>
        <TextField placeholder='Enter your Name' id="outlined-basic" label="Full Name" variant="outlined" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField placeholder='Enter your Age' id="outlined-basic" label="Age" variant="outlined" /><br></br><br></br><br></br>
        <TextField placeholder='Enter your Email Id' id="outlined-basic" label="Email" variant="outlined" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField placeholder='Enter your Mobile Number' id="outlined-basic" label="Mobile Number" variant="outlined" /> <br></br><br></br>&nbsp;&nbsp;&nbsp;
        <FormControl  sx={{ m: 1, minWidth: 210 }}>
  <InputLabel id="demo-simple-select-label">Blood group</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Blood group"
    onChange={handleChange}
  >
    <MenuItem value={10}>A+ve</MenuItem>
    <MenuItem value={20}>A-ve</MenuItem>
    <MenuItem value={30}>B+ve</MenuItem>
    <MenuItem value={40}>B-ve</MenuItem>
    <MenuItem value={50}>AB+ve</MenuItem>
    <MenuItem value={60}>AB-ve</MenuItem>
    <MenuItem value={70}>O+ve</MenuItem>
    <MenuItem value={80}>B+ve</MenuItem>
    <MenuItem value={90}>B+ve</MenuItem>
  </Select>
</FormControl>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{/* <FormControl  sx={{ m:1, minWidth: 200 }}>
  <InputLabel id="demo-simple-select-label">Request Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Request Category"
    onChange={handleChange}
  >
    <MenuItem value={100}>Donor</MenuItem>
    <MenuItem value={110}>Receiver</MenuItem>
   
   
  </Select>
</FormControl> */}
<FormControl sx={{ m:1, minWidth: 223 }} >
        <InputLabel id="demo-simple-select-label" htmlFor="uncontrolled-native">
          Request Category
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            
            name: 'age',
            labelId:"demo-simple-select-label",
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Donar</option>
          <option value={20}>Reciever</option>
          <option value={30}>Select</option>
        </NativeSelect>
      </FormControl>
      




<br></br><br></br>

    <Button variant="contained" color="success">submit</Button>




    
    </div>
  )
}

export default Home