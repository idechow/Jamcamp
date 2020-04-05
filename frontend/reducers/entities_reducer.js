import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import tracksReducer from './tracks_reducer';
import artistsReducer from './artists_reducer';
import collectsReducer from './collects_reducer';
import profilesReducer from './profiles_reducer';

const entitiesReducer = combineReducers({
   users: usersReducer,
   artists: artistsReducer,
   albums: albumsReducer,
   tracks: tracksReducer,
   collectors: collectsReducer,
   profiles: profilesReducer,
});

export default entitiesReducer;
