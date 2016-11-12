import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange500, grey800 } from 'material-ui/styles/colors';

import Routes from './routes';
import createStore from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    primary2Color: orange500,
    primary3Color: orange500,
    textColor: grey800,
  },
});

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store)

const App = (props, _railsContext) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  </MuiThemeProvider>
);

ReactOnRails.register({ App });
