import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import contextReducer from './context/reducer';

const allReducers = combineReducers({
  routing: routerReducer,
  context: contextReducer,
});

export default allReducers;
