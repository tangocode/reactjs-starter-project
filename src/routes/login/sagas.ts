import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from './actionTypes';
import { loginSuccess, loginFailure } from './actions';
import { Action } from 'redux';

import { requestLoginDefinition } from './../../utils/networkLayer/networkApiDefinition';
import axiosNetworkClient from './../../utils/networkLayer/axiosNetworkClient';

function* requestLogin(action: any) {
  try {
    const creds = action.user;
    const response = yield call(axiosNetworkClient, requestLoginDefinition(creds.username, creds.password));        
    yield put(loginSuccess(true));
  } catch (e) {
      yield put(loginFailure());
  }
}

export default function* roodLoginSagas() {
  yield takeLatest(LOGIN_REQUEST, requestLogin);
}
