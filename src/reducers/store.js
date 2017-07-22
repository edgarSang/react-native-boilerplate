import { applyMiddleware, createStore } from 'redux';
import reducer from './index';

// Logger with defualt options
import logger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export default store;
