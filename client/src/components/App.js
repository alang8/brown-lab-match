import React, { lazy } from 'react';
import {
  Route, Switch
} from 'react-router-dom';
const SearchPage = lazy(() => import('./SearchPage'));
const HomePage = lazy(() => import('./HomePage'));
const LabPage = lazy(() => import('./LabPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const Navbar = lazy(() => import('./Navbar'));

function App() {
  return (
    <Switch>
      <Route exact path='/'><HomePage /></Route>
      <Route path='*'>
        <Navbar />
        <Switch>
          <Route path='/lab/:id'><LabPage /></Route>
          <Route path='/search/' exact><SearchPage showAll /></Route>
          <Route path='/search/:query'><SearchPage /></Route>
          <Route path='*'><NotFoundPage /></Route>
        </Switch>
      </Route>
    </Switch>
  );
}

export default App;
