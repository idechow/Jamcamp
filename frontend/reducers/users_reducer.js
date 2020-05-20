import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COLLECT, DELETE_COLLECT } from '../actions/collect_actions';
import { RECEIVE_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_UPDATED_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
   Object.freeze(state);
   let newState = Object.assign({}, state);

   switch (action.type) {
      case RECEIVE_CURRENT_USER:
         return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });

      case RECEIVE_UPDATED_USER:
         newState[action.user.id].username = action.user.username;
         return newState;

      case RECEIVE_COLLECT:
         newState[action.collect.userId].collection[action.collect.albumId] = { ['createdAt']: action.collect.createdAt };
         return newState;

      case DELETE_COLLECT:
         delete newState[action.collect.userId].collection[action.collect.albumId];
         return newState;

      case RECEIVE_FOLLOW:
         newState[action.follow.userId].followees[action.follow.bandId] = { ['createdAt']: action.follow.createdAt };
         return newState;

      case DELETE_FOLLOW:
         delete newState[action.follow.userId].followees[action.follow.bandId];
         return newState;

      default:
         return state;
   }
};

export default usersReducer;