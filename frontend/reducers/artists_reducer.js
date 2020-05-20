import { RECEIVE_ARTIST, CLEAR_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_UPDATED_USER } from '../actions/user_actions';

const artistsReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let nextState = Object.assign({});

   switch (action.type) {
      case RECEIVE_ARTIST:
         nextState[action.artist.id] = action.artist;
         return nextState;
      case RECEIVE_UPDATED_USER:
         nextState[action.user.id] = action.user;
         return nextState;
      case CLEAR_ARTISTS:
         return {};
      default:
         return oldState;
   }
};

export default artistsReducer;