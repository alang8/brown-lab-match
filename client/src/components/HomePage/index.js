import { Box, Button, Link, IconButton, TextField, Typography } from '@material-ui/core';
import React from 'react';
import Logo from './Logo';

const HomePage = () => {
  return <Box id="main">
    <Box id="bar" display="flex" alignItems="center" width="100%">
      <Box id="logo">
        <IconButton href='/' align="left">
          <Logo size={75} />
        </IconButton>
      </Box>      
      
      <Box id="link1" padding="15px" paddingLeft={150} align="right">
        <Typography variant='h6' align="right">
          <Link href='https://www.fullstackatbrown.com/' target='_blank' rel='noopener'>About</Link>
        </Typography>
      </Box>

      <Box id="link2" padding="15px" align="right">
        <Typography variant='h6' align="right">
          <Link href='https://www.brown.edu/' target='_blank' rel='noopener'>Help</Link>
        </Typography>
      </Box>
      
      <Box id="link3" padding="15px" align="right">
        <Typography variant='h6' align="right">
          <Link href='https://www.facebook.com/BrownResearchClub/' target='_blank' rel='noopener'>Staff</Link>
        </Typography>
      </Box>
    </Box>

    <Box id="text" position="relative" top={75} align="center">
      <Typography variant="h3"><b>Brown Lab Review</b></Typography>
      <Typography variant="h5">Helping Brown Students Navigate the Labs Since 2021</Typography>
    </Box>

    <Box id="search" position="relative" top={80} padding="5px" align="center">
      <TextField id="filled-basic" label="Search by name, department, professor, or research area" variant="filled" style ={{width: '50%'}}/>
    </Box>

    <Box id="buttons" position="relative" top={85} padding="5px" align="center">
      <Button variant="outlined" size="large" style={{width: '150px'}} color="primary">Search</Button>
      <Button variant="outlined" size="large" style={{width: '150px', marginLeft: '10px'}} color="primary">Browse Labs</Button>
    </Box>
  </Box>
}

export default HomePage;