import { all } from 'redux-saga/effects';
import { authSagaWatcher } from './authSaga';
import { productSagaWatcher } from './productSaga';

export default function* rootSagas() {
  yield all([authSagaWatcher(), productSagaWatcher()]);
}
