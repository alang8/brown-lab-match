import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    marginLeft: 10,
    marginRight: 10,
  }
})

const Filter = (props) => {
  const { name, value, setValue, data } = props;
  const classes = useStyles();

  return <FormControl className={classes.root}>
    <InputLabel>{name}</InputLabel>
    <Select label={name} value={value} onChange={e => setValue(e.target.value)}>
      <MenuItem value=''>
        Any
      </MenuItem>
      {
        data.map((datum, index) =>
          <MenuItem key={index} value={datum.value}>
            {datum.name}
          </MenuItem>
        )
      }
    </Select>
  </FormControl>
}

export default Filter;