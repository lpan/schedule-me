import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router'
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

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const App = (props, _railsContext) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Routes history={browserHistory} />
    </MuiThemeProvider>
  );
};

/*
const store = createStore(props);
return (
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>
);
*/

ReactOnRails.register({ App });
