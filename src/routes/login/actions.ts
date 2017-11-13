import { Action } from 'redux';
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_REQUEST
} from './actionTypes';

export interface LoginAction extends Action {
  user?: Object;
  response?: Object;
}

export const loginRequest = (user) => {
  return {
    type: LOGIN_REQUEST,
    user
  };
};

export const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    response
  };  
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  };
};