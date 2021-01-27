import React, { useState, useEffect } from 'react';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

// Utils
import createBrowserHistory from '../utils/history';
import { token as Token } from '../utils/api';

// Components
import Login from './Login';
import Home from './Home.js';
import Sidebar from '../components/marginals/Sidebar';

function App() {
  const classes = useStyles();
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(Token);
  }, []);

  return (
    <Router history={createBrowserHistory} classes={classes.root}>
      <Sidebar />
      <Switch>
        {token ? (
          <>
            <Route path='/'>
              <Home />
            </Route>
          </>
        ) : (
          <Route path='/'>
            <Login />
          </Route>
        )}

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
