import { combineReducers } from 'redux'
import modalReducer from './modal_reducer'
import playerReducer from './player_reducer';
import setTrackReducer from './set_track_reducer';

const uiReducer = combineReducers({
   modal: modalReducer,
   playPause: playerReducer,
   currentTrack: setTrackReducer
})

export default uiReducer;