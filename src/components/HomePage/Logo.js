import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/logo.svg';

const useStyles = makeStyles({
  root: props => ({
    width: `${props.size}px`,
    height: `${props.size}px`,
  })
});

const Logo = (props) => {
  const classes = useStyles(props);
  return <img src={logo} className={classes.root} alt='logo' />
}

export default Logo;