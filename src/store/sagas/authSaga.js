import { takeLatest, put } from 'redux-saga/effects';
import { SIGN_UP_FETCH } from '../types/authTypes';
import { signUpSuccess } from '../actions/authActions';
import delay from '../../helpers/delay';

function* registerWorker(action) {
  yield delay(400);
  yield put(signUpSuccess());
}

export function* authSagaWatcher() {
  yield takeLatest(SIGN_UP_FETCH, registerWorker);
}
