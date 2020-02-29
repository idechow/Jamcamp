import { RECEIVE_ARTIST, CLEAR_ARTISTS } from '../actions/artist_actions';

const artistsReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let nextState = Object.assign({});

   switch (action.type) {
      case RECEIVE_ARTIST:
         nextState[action.artist.id] = action.artist;
         return nextState;
      case CLEAR_ARTISTS:
         return {};
      default:
         return oldState;
   }
};

export default artistsReducer;