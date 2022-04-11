import { put } from 'redux-saga/effects';
import * as actions from '../actions'
import axios from 'axios';
import { Config } from '../../config';

export function* initMessagesSaga(action) {
    try {
        const response = yield axios.get(`${Config.baseUrl}/v1/messages`);
        yield put (actions.setMessages(response.data.messages))
    } catch (error) {
        yield put (actions.failMessages(error))
    }
}