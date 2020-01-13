import merge from 'lodash/merge';

import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';

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
