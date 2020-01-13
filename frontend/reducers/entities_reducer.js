import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import tracksReducer from './track_reducer';

const entitiesReducer = combineReducers({
   users: usersReducer,
   albums: albumsReducer,
   tracks: tracksReducer
});

export default entitiesReducer;
