import * as actionTypes from './actionTypes';

export const getMessages = () => {
    return {
        type: actionTypes.START_GET_MESSAGES
    }
}

export const setMessages = messages => {
    return {
        type: actionTypes.GET_MESSAGES_SUCCESS,
        messages
    }
}

export const failMessages = error => {
    return {
        type: actionTypes.GET_MESSAGES_FAIL,
        error
    }
}

export const startAddWidget = payload => {
    return {
        type: actionTypes.START_ADD_MESSAGE,
        payload
    }
}