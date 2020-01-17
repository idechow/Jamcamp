import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import merge from 'lodash/merge';

const albumsReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let nextState = Object.assign({}, oldState);

   switch (action.type) {
      case RECEIVE_ALBUMS:
         return merge({}, oldState, action.albums);
      case RECEIVE_ALBUM:
         nextState[action.album.id] = action.album;
         return nextState;
      default:
         return oldState;
   }
};

export default albumsReducer;