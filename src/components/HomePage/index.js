import { Box, Button, Container, IconButton, Link, makeStyles, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './Logo';
import Splash from './Splash';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  bodyText: {
    textAlign: 'center',
  },
  link: {
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
  left: {
    marginLeft: 20,
  },
  right: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 20,
  },
  search: {
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },
  buttons: {
    marginTop: 15,
  },
  button: {
    width: 150,
    margin: '0 5px',
  },
  IconButton: {
    marginRight: 5,
  }
}));

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const handleSearch = (value) => {
    if (value) {
      history.push('/search/' + value);
    }
  }

  return <Box className={classes.root}>
    <Box className={classes.navbar}>
      <IconButton href='/' className={classes.left}>
        <Logo size={40} />
      </IconButton>

      <Typography className={classes.right}>
        <Link className={classes.link} rel='noopener noreferrer' target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLScx6i614_CpAoFKJcKzKHFFAhgtgd75j89gW34iThVIpCdFRg/viewform'>
          Submit Review
        </Link>
        <Link className={classes.link} href='/about'>
          About
        </Link>
      </Typography>
    </Box>

    <Container className={classes.body}>
      <Splash />
      <Box className={classes.bodyText}>
        <Typography variant='h3' component='h1'><b>Brown Lab Match</b></Typography>
        <Typography variant='h5'>Helping Brown Students Navigate the Labs Since 2021</Typography>
      </Box>

      <SearchBar
        className={classes.search}
        value={searchValue}
        onChange={setSearchValue}
        onRequestSearch={() => handleSearch(searchValue)}
        onCancelSearch={() => setSearchValue('')}
        cancelOnEscape
        placeholder='Search by name, department, professor, or research area'
      />

      <Box className={classes.buttons}>
        <Button className={classes.button} variant='outlined' size='large' color='primary' onClick={() => handleSearch(searchValue)}>Search</Button>
        <Button className={classes.button} variant='outlined' size='large' color='primary' href='/search'>Browse Labs</Button>
      </Box>
    </Container>
  </Box >
}

export default HomePage;