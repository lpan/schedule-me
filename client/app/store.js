import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router'

const logger = createLogger();

const isProd = process.env.NODE_ENV === 'production';

const middlewares = [thunk, routerMiddleware(browserHistory)];

if (!isProd) {
  middlewares.push(logger);
}

export function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware.apply(middlewares),
  ];

  return createStore(rootReducer, initialState, compose(...enhancers));
}

export default configureStore;
