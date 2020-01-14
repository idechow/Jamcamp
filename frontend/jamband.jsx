import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import {fetchAlbums} from './actions/album_actions';
import {fetchTracks, fetchAlbumTracks} from './actions/track_actions';

document.addEventListener("DOMContentLoaded", () => {
   let store;
   if (window.currentUser) {
      const preloadedState = {
         session: { id: window.currentUser.id },
         entities: {
            users: { [window.currentUser.id]: window.currentUser }
         }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
   } else {
      store = configureStore();
   }
   const root = document.getElementById('root');

   window.getState = store.getState;
   window.dispatch = store.dispatch;
   window.fetchAlbums = fetchAlbums;
   window.fetchTracks = fetchTracks;
   window.fetchAlbumTracks = fetchAlbumTracks; 

   ReactDOM.render(<Root store={store} />, root);
});
