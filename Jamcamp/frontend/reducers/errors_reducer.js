import { combineReducers } from 'redux';

import sessionError from './session_errors_reducer';

const errorReducer = combineReducers({
   session: sessionError
});

export default errorReducer;