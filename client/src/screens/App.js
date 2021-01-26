import React from 'react';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

// Utils
import createBrowserHistory from '../utils/history';

// Components
import Home from './Home.js';
import Sidebar from '../components/marginals/Sidebar';

function App() {
  const classes = useStyles();

  return (
    <Router history={createBrowserHistory} classes={classes.root}>
      <Sidebar />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#181818',
  },
}));
