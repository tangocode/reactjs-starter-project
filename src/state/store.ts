import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { AppState } from './types';
import contextSagas from './context/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware: [Middleware] = [sagaMiddleware];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store: Store<AppState> = createStore(require('./reducers').default, applyMiddleware(...middleware));

sagaMiddleware.run(contextSagas);

export default store;