import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from './constants';
import { LoginRequestAction } from './types';
import { loginSuccess, loginFailure } from './actions';

function* requestLogin(action: LoginRequestAction) {
  try {
    yield put(loginSuccess());
  } catch (e) {
    yield put(loginFailure());
  }
}

export default function* contextSagas() {
  yield takeLatest(LOGIN_REQUEST, requestLogin);
}
