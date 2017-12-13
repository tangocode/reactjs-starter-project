import * as actionsTypes from './constants';
import {
  ContextAction,
  LoginRequestAction,
} from './types';

export const loginRequest = (user: Object): LoginRequestAction => {
  return {
    type: actionsTypes.LOGIN_REQUEST,
    user
  };
};

export const loginSuccess = (): ContextAction => {
  return {
    type: actionsTypes.LOGIN_SUCCESS,
  };  
};

export const loginFailure = (): ContextAction => {
  return {
    type: actionsTypes.LOGIN_FAILURE
  };
};

export const logoutRequest = (): ContextAction => {
  return {
    type: actionsTypes.LOGOUT_REQUEST
  };
};
