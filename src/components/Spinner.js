import { Box, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  }
})

const Spinner = () => {
  const classes = useStyles();
  return <Box className={classes.root}><CircularProgress /></Box>;
}

export default Spinner;