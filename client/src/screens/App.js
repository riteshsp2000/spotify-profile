import React from 'react';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// Utils
import createBrowserHistory from '../utils/history';

// Components
import Home from './Home.js';

function App() {
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path='/'>
          <Home />
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
