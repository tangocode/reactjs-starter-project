import { ContextState } from './context/types';

export interface AppState {
    context: ContextState;
}

export interface Action {
  type: string;
}