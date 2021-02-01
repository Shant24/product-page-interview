import { all } from 'redux-saga/effects';
import { authSagaWatcher } from './authSaga';

export default function* rootSagas() {
  yield all([authSagaWatcher()]);
}
