import { makeStyles } from '@material-ui/core';
import React from 'react';
import splash from '../../assets/splash.png';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30vw',
    },
    height: 'auto',
  }
}));

const Splash = () => {
  const classes = useStyles();
  // added width and height for browser to know aspect ratio
  return <img src={splash} alt='Splash screen icon' width={3200} height={2000} className={classes.root} />
}

export default Splash;