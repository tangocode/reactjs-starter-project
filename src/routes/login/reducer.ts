import { Reducer, Action } from 'redux';
import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST
} from './actionTypes';
import PropTypes from 'prop-types';

export interface LoginState {
    isAuthenticated: boolean;
}

const defaultState = {
    isAuthenticated: false,
};

function loginReducer(state: LoginState = defaultState, action: Action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
        return state;
    }
    case LOGIN_SUCCESS: {    
        return {...state, isAuthenticated : true};
    }
    case LOGIN_FAILURE: {
        return {...state, isAuthenticated : false};
    }
    case LOGOUT_REQUEST: {
        return {...state, isAuthenticated: false};
    }
    default:
      {
        return state;
      }
  }
}

export default loginReducer;

// Selectors
export const isAuthenticated = state => state.isAuthenticated;