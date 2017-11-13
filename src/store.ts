import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import { AppState } from './appState';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootLoginSaga from './routes/login/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware: [Middleware] = [sagaMiddleware];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store: Store<AppState> = createStore(require('./reducers/reducers').default, applyMiddleware(...middleware));

sagaMiddleware.run(rootLoginSaga);

export default store;