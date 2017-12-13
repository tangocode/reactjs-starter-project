import {
  ContextState,
  ContextAction,
  LoginRequestAction,
} from './types';
import * as actionTypes from './constants';

const defaultState: ContextState = {
    isAuthenticated: false,
};

const ContextReducer = (
  state: ContextState = defaultState, 
  action: ContextAction | LoginRequestAction
) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST: {
        return state;
    }
    case actionTypes.LOGIN_SUCCESS: {
        return {...state, isAuthenticated : true};
    }
    case actionTypes.LOGIN_FAILURE: {
        return {...state, isAuthenticated : false};
    }
    case actionTypes.LOGOUT_REQUEST: {
        return {...state, isAuthenticated: false};
    }
    default:
      {
        return state;
      }
  }
};

export default ContextReducer;
