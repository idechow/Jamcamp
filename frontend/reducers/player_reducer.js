import merge from 'lodash/merge';

import { PLAY, PAUSE } from '../actions/player_actions';

const playerReducer = (state = { isPlaying: false }, action) => {
   switch (action.type) {
      case PAUSE:
         return merge({}, state, { isPlaying: false });

      case PLAY:
         return merge({}, state, { isPlaying: true });
      
      default:
         return state;
   }
};

export default playerReducer;