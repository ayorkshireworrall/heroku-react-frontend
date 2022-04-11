import { combineReducers } from 'redux'
import messageReducer from './messages';

const rootReducer = combineReducers({
    messages: messageReducer
})

export default rootReducer;