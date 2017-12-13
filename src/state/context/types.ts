import { Action } from './../types';

/* Reducer types */
export interface ContextState {
  isAuthenticated: boolean;
}

/* Actions types */
export interface ContextAction extends Action {}

export interface LoginRequestAction extends Action {
  user: Object;
}
