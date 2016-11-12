import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import Root from './components/Root';
import Home from './views/Home';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default Routes;
