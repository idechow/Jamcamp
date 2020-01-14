import merge from 'lodash/merge';

import { RECEIVE_TRACKS, RECEIVE_TRACK, RECEIVE_ALBUM_TRACKS } from '../actions/track_actions';

const tracksReducer = (oldState = {}, action) => {
   switch (action.type) {
      case RECEIVE_TRACKS:
         return merge({}, oldState, action.tracks);

      case RECEIVE_TRACK:
         return merge({}, oldState, action.track);

      default:
         return oldState;
   }
};

export default tracksReducer;

// Get it so json array from your controller is just an array
// iterate over each track
// for each track set the id in nextstate of that track to the track
