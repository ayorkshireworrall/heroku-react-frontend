import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import { initMessagesSaga } from './messages';

export function* watchMessages() {
    yield takeEvery(actionTypes.START_GET_MESSAGES, initMessagesSaga);
}