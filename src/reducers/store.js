import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './index';

import logger from './middleware/logger';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

export default store;
