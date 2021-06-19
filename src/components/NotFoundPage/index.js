import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
  header: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtext: {
    marginBottom: 10,
  },
})

const NotFoundPage = () => {
  const classes = useStyles();
  return <Box className={classes.root}>
    <Typography variant='h1' className={classes.header}>Oops!</Typography>
    <Typography variant='h4' className={classes.subtext}>We can't seem to find the page you're looking for.</Typography>
    <Button href='/' variant='contained' size='large'>Take me Home!</Button>
  </Box>;
}

export default NotFoundPage;