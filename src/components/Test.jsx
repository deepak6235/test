import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box>
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
      
    </Box>
  );
}