import { AppBar, Box, Button, makeStyles, Toolbar } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './Logo';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'sticky',
    flexWrap: 'wrap',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
  },
  browseButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    height: 64,
    marginRight: 10,
    minWidth: 150,
  },
  button: {
    height: 64,
  },
  label: {
    fontSize: '1rem',
    fontWeight: 400,
    textTransform: 'capitalize',
  },
  right: {
    marginLeft: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  link: {
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
  search: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 10
    },
    flexGrow: 1
  }
}));

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();
  const history = useHistory();

  const handleSearch = (value) => {
    if (value) {
      history.push('/search/' + value);
    }
  }
  return <AppBar position='static' color='secondary'>
    <Toolbar className={classes.root} color='secondary'>
      <Box className={classes.left}>
        <Button href='/' className={classes.button}>
          <Logo size={40} />
        </Button>
        <Button classes={{
          root: classes.browseButton,
          label: classes.label,
        }} href='/search' size='small'>
          Browse Labs
        </Button>
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

      <Box className={classes.right}>
        <Button classes={{
          root: classes.button,
          label: classes.label,
        }} href='/about' size='small'>
          About
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
}

export default Navbar;