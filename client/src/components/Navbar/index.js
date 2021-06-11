import { AppBar, Box, Button, IconButton, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './Logo';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
  },
  browseButton: {
    marginLeft: 10,
    marginRight: 10,
    minWidth: 150
  },
  right: {
    marginLeft: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
  search: {
    flexGrow: 1,
  }
});

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
        <IconButton href='/'>
          <Logo size={40} />
        </IconButton>
        <Button className={classes.browseButton} href='/search' size='small'>
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

      <Typography className={classes.right}>
        <Link className={classes.link} href='/about'>
          About
        </Link>
        <Link className={classes.link} href='/staff'>
          Staff
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
}

export default Navbar;