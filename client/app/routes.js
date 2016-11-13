import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Root from './components/Root';
import Home from './views/Home';
import DayStartEnd from './views/DayStartEnd';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="/init" component={DayStartEnd} />
    </Route>
  </Router>
);

export default Routes;
