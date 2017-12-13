import { ContextState } from './context/types';

export interface AppState {
    context: ContextState;
}

export interface Action {
  type: string;
}

export interface ApiDefinition {
  method: string;
  headers: Object;
  path: string;
  basePath: string;
  body?: Object;
}