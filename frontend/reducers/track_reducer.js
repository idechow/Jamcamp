import merge from 'lodash/merge';

import { RECEIVE_TRACKS, CLEAR_TRACKS } from '../actions/track_actions';

const tracksReducer = (oldState = {}, action) => {
   Object.freeze(oldState);

   switch (action.type) {
      case RECEIVE_TRACKS:
         return merge({}, action.tracks);
      case CLEAR_TRACKS:
         return {};
      default:
         return oldState;
   }
};

export default tracksReducer;