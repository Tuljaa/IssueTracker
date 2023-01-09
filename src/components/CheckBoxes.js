import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function CheckBoxes(props) {
  const [value, setValue] = React.useState('issuedesc');
  props.propMethod(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" style={{alignItems:'center'}}>
      <FormLabel component="legend" style={{textAlign:'center'}} >Choose any data to get displayed in Cards</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="issuedesc" control={<Radio />} label="Issue Description" />
        <FormControlLabel value="severity" control={<Radio />} label="Severity" />
        <FormControlLabel value="status" control={<Radio />} label="Status" />
      </RadioGroup>
    </FormControl>
  );
}
