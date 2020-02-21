import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import tracksReducer from './track_reducer';
import artistsReducer from './artist_reducer';

const entitiesReducer = combineReducers({
   users: usersReducer,
   artists: artistsReducer,
   albums: albumsReducer,
   tracks: tracksReducer
});

export default entitiesReducer;
