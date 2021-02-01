import { takeLatest, put } from 'redux-saga/effects';
import { SIGN_UP_FETCH } from '../types/authTypes';
import { signUpSuccess } from '../actions/authActions';
import delay from '../../helpers/delay';

function* registerWorker(action) {
  if (action.signUpType === 'apple') {
    yield delay(400);
    yield put(signUpSuccess(action.signUpType, {}));
  } else {
    yield put(signUpSuccess(action.signUpType, action.data));
  }
}

export function* authSagaWatcher() {
  yield takeLatest(SIGN_UP_FETCH, registerWorker);
}
