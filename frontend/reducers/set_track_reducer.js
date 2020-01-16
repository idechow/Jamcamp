import merge from 'lodash/merge';

import { SET_TRACK } from '../actions/player_actions';

const setTrackReducer = (state = {}, action) => {
   switch (action.type) {
      case SET_TRACK:
         return merge({}, action.track);
      default:
         return state;
   }
};

export default setTrackReducer;