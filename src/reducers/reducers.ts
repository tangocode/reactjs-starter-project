import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from '../routes/login/reducer';
import * as fromLogin from '../routes/login/reducer';

const allReducers = combineReducers({
  routing: routerReducer,
  login: loginReducer,
});

export default allReducers;

// Selectors
export const isAuthenticated = state => fromLogin.isAuthenticated(state.login);