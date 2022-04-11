import * as actionTypes from '../actions/actionTypes';

const initialState = {
    messages: [],
    loading: false,
    error: null
}

const getMessages = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const setMessages = (state, action) => {
    return {
        ...state,
        messages: action.messages,
        loading: false,
        error: null
    }
}

const failMessages = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.START_GET_MESSAGES: return getMessages(state, action);
        case actionTypes.GET_MESSAGES_SUCCESS: return setMessages(state, action);
        case actionTypes.GET_MESSAGES_FAIL: return failMessages(state, action);
        default: return state;
    }
}

export default reducer;