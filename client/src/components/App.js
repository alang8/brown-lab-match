import { Box, Container, makeStyles } from '@material-ui/core';
import React, { lazy } from 'react';
import {
  Route, Switch
} from 'react-router-dom';
import Footer from './Footer';
const SearchPage = lazy(() => import('./SearchPage'));
const HomePage = lazy(() => import('./HomePage'));
const LabPage = lazy(() => import('./LabPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const Navbar = lazy(() => import('./Navbar'));

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  body: {
    marginTop: 20,
  }
})

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Switch>
        <Route exact path='/'><HomePage /></Route>
        <Route path='*'>
          <Navbar />
          <Container className={classes.body}>
            <Switch>
              <Route path='/lab/:id'><LabPage /></Route>
              <Route path='/search/' exact><SearchPage showAll /></Route>
              <Route path='/search/:query'><SearchPage /></Route>
              <Route path='*'><NotFoundPage /></Route>
            </Switch>
          </Container>
        </Route>
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;
