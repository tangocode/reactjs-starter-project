import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from './actionTypes';
import { loginSuccess, loginFailure } from './actions';
import { Action } from 'redux';

function* requestLogin(action: any) {
  try {
    yield put(loginSuccess(true));
  } catch (e) {
      yield put(loginFailure());
  }
}

export default function* roodLoginSagas() {
  yield takeLatest(LOGIN_REQUEST, requestLogin);
}
