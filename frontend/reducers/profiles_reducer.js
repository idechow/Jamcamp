import merge from 'lodash/merge';

import { RECEIVE_PROFILE } from '../actions/user_actions';

const profilesReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   // let nextState = Object.assign({}, oldState);

   switch (action.type) {
      case RECEIVE_PROFILE:
         // return merge({}, { [action.profile.id]: action.profile});
         return merge({}, action.profile);
      
      default:
         return oldState;
   }
};

export default profilesReducer;