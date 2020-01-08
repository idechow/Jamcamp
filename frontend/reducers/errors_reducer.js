import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';

const errorReducer = combineReducers({
   sessionErrors: sessionErrorsReducer
});

export default errorReducer;